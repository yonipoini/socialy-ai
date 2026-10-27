import React, { useState, useEffect, useRef } from 'react';
import Vapi from '@vapi-ai/web';
import { VAPI_ASSISTANT_ID, getAssistantForLanguage, vapiAssistantConfig } from '../config/vapiAssistant';
import './VapiVoiceAgent.css';

const VapiVoiceAgent = ({ t, currentLang }) => {
  const [callStatus, setCallStatus] = useState('idle'); // idle | connecting | active
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [volumeLevel, setVolumeLevel] = useState(0);
  const [callDuration, setCallDuration] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [transcripts, setTranscripts] = useState([]);

  const vapiRef = useRef(null);
  const timerRef = useRef(null);

  // Initialize or cleanup timer
  useEffect(() => {
    if (callStatus === 'active') {
      timerRef.current = setInterval(() => {
        setCallDuration((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
      setCallDuration(0);
    }
    return () => clearInterval(timerRef.current);
  }, [callStatus]);

  // Clean up Vapi on component unmount
  useEffect(() => {
    return () => {
      if (vapiRef.current) {
        try {
          vapiRef.current.stop();
        } catch (e) {
          console.warn('Vapi cleanup error:', e);
        }
      }
    };
  }, []);

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const initVapiInstance = (apiKey) => {
    if (vapiRef.current) {
      try {
        vapiRef.current.stop();
      } catch (err) {
        console.warn(err);
      }
    }

    const vapi = new Vapi(apiKey);

    vapi.on('call-start', () => {
      setCallStatus('active');
      setErrorMessage('');
    });

    vapi.on('call-end', () => {
      setCallStatus('idle');
      setIsSpeaking(false);
      setVolumeLevel(0);
    });

    vapi.on('speech-start', () => {
      setIsSpeaking(true);
    });

    vapi.on('speech-end', () => {
      setIsSpeaking(false);
    });

    vapi.on('volume-level', (volume) => {
      setVolumeLevel(volume);
    });

    vapi.on('message', (message) => {
      if (message.type === 'transcript') {
        const text = message.transcript || message.text;
        const role = message.role || (message.transcriptType === 'final' ? 'user' : 'assistant');
        if (text) {
          setTranscripts((prev) => [
            ...prev.slice(-4),
            { id: Date.now() + Math.random(), role, text }
          ]);
        }
      }
    });

    vapi.on('error', (err) => {
      console.error('Vapi error:', err);
      const msg = err?.message || (typeof err === 'string' ? err : 'Voice connection error');
      setErrorMessage(msg);
      setCallStatus('idle');
    });

    vapiRef.current = vapi;
    return vapi;
  };

  const handleStartCall = async () => {
    setErrorMessage('');
    const keyToUse = import.meta.env.VITE_VAPI_PUBLIC_KEY || localStorage.getItem('vapi_public_key');

    if (!keyToUse) {
      setErrorMessage('Vapi Public Key is not configured yet. Please configure VITE_VAPI_PUBLIC_KEY in project environment variables or dial directly.');
      return;
    }

    try {
      setCallStatus('connecting');
      const vapi = vapiRef.current || initVapiInstance(keyToUse);

      const isSpanish = currentLang === 'es' || currentLang.startsWith('es');

      // Start call with assistant overrides for language greeting
      await vapi.start(VAPI_ASSISTANT_ID, {
        firstMessage: isSpanish
          ? "¡Hola! Gracias por llamar a Socialy Marketing, tu aliado en soluciones integrales de marketing digital. ¿En qué puedo ayudarte hoy?"
          : vapiAssistantConfig.firstMessage
      });
    } catch (err) {
      console.error('Failed to start Vapi call:', err);
      setErrorMessage(err?.message || 'Could not start voice call. Please check microphone permissions.');
      setCallStatus('idle');
    }
  };

  const handleEndCall = () => {
    if (vapiRef.current) {
      vapiRef.current.stop();
    }
    setCallStatus('idle');
    setIsSpeaking(false);
  };

  const handleToggleMute = () => {
    if (!vapiRef.current) return;
    const nextMuted = !isMuted;
    vapiRef.current.setMuted(nextMuted);
    setIsMuted(nextMuted);
  };

  return (
    <div className="vapi-agent-card">
      <div className="vapi-content-wrap">
        {/* Pulsing Avatar / Orb */}
        <div className="agent-orb-container">
          <div className="agent-pulse-ring ring-1"></div>
          <div className="agent-pulse-ring ring-2"></div>
          <div className="agent-pulse-ring ring-3"></div>
          <div
            className={`agent-orb ${callStatus === 'active' ? 'is-active' : ''} ${isSpeaking ? 'is-speaking' : ''}`}
            style={{
              transform: callStatus === 'active' ? `scale(${1 + Math.min(volumeLevel * 0.4, 0.25)})` : undefined
            }}
          >
            <span className="agent-orb-icon">🎙️</span>
          </div>
        </div>

        {/* Status Badge */}
        <div className={`agent-status-badge ${callStatus}`}>
          <span className="agent-status-dot"></span>
          <span>
            {callStatus === 'idle' && t.agentStatusOnline}
            {callStatus === 'connecting' && t.agentStatusCalling}
            {callStatus === 'active' && (
              isMuted
                ? t.agentStatusMuted
                : (isSpeaking ? t.agentStatusSpeaking : t.agentStatusListening)
            )}
          </span>
        </div>

        <h3 className="agent-headline">{t.callCardTitle}</h3>
        <p className="agent-subtext">
          {callStatus === 'active' ? t.inCallText : t.tapToTalk}
        </p>

        {/* Error message banner */}
        {errorMessage && (
          <div className="error-banner">
            <span>⚠️ {errorMessage}</span>
            <button
              onClick={() => setErrorMessage('')}
              style={{ color: '#fff', fontSize: '1rem', marginLeft: '1rem' }}
            >
              ✕
            </button>
          </div>
        )}

        {/* Sound Wave Bars when call is active or connecting */}
        {(callStatus === 'active' || callStatus === 'connecting') && (
          <div className="soundwave-container">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className={`soundwave-bar ${isSpeaking ? 'speaking' : ''}`}
                style={{
                  height: isSpeaking
                    ? undefined
                    : `${Math.max(6, Math.min(32, volumeLevel * 80 * ((i % 3) + 1)))}px`
                }}
              ></div>
            ))}
          </div>
        )}

        {/* Call Controls Row */}
        <div className="call-controls-row">
          {callStatus === 'idle' && (
            <button
              id="talk-to-someone-btn"
              className="btn-talk-main"
              onClick={handleStartCall}
            >
              <span>📞</span>
              <span>{t.talkButtonText}</span>
            </button>
          )}

          {callStatus === 'connecting' && (
            <button className="btn-talk-main" disabled>
              <span className="spinner-sm">⏳</span>
              <span>{t.connectingText}</span>
            </button>
          )}

          {callStatus === 'active' && (
            <>
              <button
                className={`btn-round-control ${isMuted ? 'muted' : ''}`}
                onClick={handleToggleMute}
                title={isMuted ? t.unmuteButton : t.muteButton}
                aria-label={isMuted ? t.unmuteButton : t.muteButton}
              >
                {isMuted ? '🔇' : '🎙️'}
              </button>

              <button
                id="end-call-btn"
                className="btn-talk-main btn-end"
                onClick={handleEndCall}
              >
                <span>⏹️</span>
                <span>{t.endCallText}</span>
              </button>
            </>
          )}
        </div>

        {/* Call Timer */}
        {callStatus === 'active' && (
          <div className="call-timer">
            <span>⏱️</span>
            <span>{formatDuration(callDuration)}</span>
          </div>
        )}

        {/* Live Transcripts box */}
        {transcripts.length > 0 && (
          <div className="transcript-box">
            {transcripts.map((item) => (
              <div key={item.id} className={`transcript-message ${item.role}`}>
                <div className="transcript-sender">
                  {item.role === 'user' ? 'You' : 'Ashley AI'}
                </div>
                <div>{item.text}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VapiVoiceAgent;
