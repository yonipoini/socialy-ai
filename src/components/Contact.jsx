import React, { useState, useEffect, useRef } from 'react';
import Vapi from '@vapi-ai/web';
import { VAPI_INBOUND_ASSISTANT_ID } from '../config/vapiInboundAssistant';
import './Contact.css';

const Contact = () => {
    const [callStatus, setCallStatus] = useState('idle'); // idle | connecting | active
    const [isMuted, setIsMuted] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [volumeLevel, setVolumeLevel] = useState(0);
    const [callDuration, setCallDuration] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');

    const vapiRef = useRef(null);
    const timerRef = useRef(null);

    // Call timer
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

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (vapiRef.current) {
                try {
                    vapiRef.current.stop();
                } catch (e) {
                    console.warn(e);
                }
            }
        };
    }, []);

    const formatDuration = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    const initVapi = (key) => {
        if (vapiRef.current) {
            try {
                vapiRef.current.stop();
            } catch (err) {
                console.warn(err);
            }
        }

        const vapi = new Vapi(key);

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

        vapi.on('error', (err) => {
            console.error('Vapi inbound call error:', err);
            const msg = err?.message || (typeof err === 'string' ? err : 'Connection error');
            setErrorMessage(msg);
            setCallStatus('idle');
        });

        vapiRef.current = vapi;
        return vapi;
    };

    const handleCallUsClick = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        const key = import.meta.env.VITE_VAPI_PUBLIC_KEY || localStorage.getItem('vapi_public_key');
        if (!key) {
            setErrorMessage('Vapi Public Key is not configured yet. Please configure VITE_VAPI_PUBLIC_KEY in project environment variables or dial directly.');
            return;
        }

        try {
            setCallStatus('connecting');
            const vapi = vapiRef.current || initVapi(key);
            await vapi.start(VAPI_INBOUND_ASSISTANT_ID);
        } catch (err) {
            console.error('Failed to start inbound call:', err);
            setErrorMessage(err?.message || 'Could not connect to voice agent. Check mic permissions.');
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
        <section id="contact" className="section contact-section">
            <div className="container">
                <div className="contact-card glass-panel animate-fade-up">
                    <div className="contact-content">
                        <h2 className="section-title">
                            Ready to <span className="text-gradient">Transform</span> Your Business?
                        </h2>
                        <p className="contact-subtitle">
                            Let's discuss how our AI solutions and marketing strategies can drive your growth. Get in touch today for a personalized consultation.
                        </p>

                        {/* Error Message */}
                        {errorMessage && (
                            <div className="error-banner mb-4" style={{ marginBottom: '1.5rem' }}>
                                <span>⚠️ {errorMessage}</span>
                                <button
                                    onClick={() => setErrorMessage('')}
                                    style={{ color: '#fff', fontSize: '1rem', marginLeft: '1rem' }}
                                >
                                    ✕
                                </button>
                            </div>
                        )}

                        <div className="contact-actions">
                            {callStatus === 'idle' ? (
                                <button
                                    id="contact-call-us-btn"
                                    onClick={handleCallUsClick}
                                    className="btn btn-primary contact-btn"
                                >
                                    <span className="btn-icon">📞</span>
                                    Call Us
                                </button>
                            ) : callStatus === 'connecting' ? (
                                <button className="btn btn-primary contact-btn" disabled>
                                    <span className="btn-icon">⏳</span>
                                    Connecting to Ashley...
                                </button>
                            ) : (
                                <button
                                    onClick={handleEndCall}
                                    className="btn contact-btn"
                                    style={{
                                        background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                                        color: '#ffffff'
                                    }}
                                >
                                    <span className="btn-icon">⏹️</span>
                                    End Call ({formatDuration(callDuration)})
                                </button>
                            )}

                            <a
                                href="https://calendar.app.google/DVNzzupH8FUsj5Qw5"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary contact-btn"
                            >
                                <span className="btn-icon">📅</span>
                                Book Appointment
                            </a>
                        </div>

                        {/* Active Call In-Section Panel */}
                        {callStatus !== 'idle' && (
                            <div className="inbound-call-panel animate-fade-up">
                                <div className="inbound-call-header">
                                    <div className="inbound-agent-info">
                                        <div className={`inbound-avatar ${isSpeaking ? 'speaking' : ''}`}>
                                            🎙️
                                        </div>
                                        <div>
                                            <div className="inbound-agent-name">Ashley • Inbound AI Assistant</div>
                                            <div className="inbound-agent-status">
                                                <span className={`inbound-status-dot ${callStatus}`}></span>
                                                <span>
                                                    {callStatus === 'connecting' && 'Connecting...'}
                                                    {callStatus === 'active' && (
                                                        isMuted
                                                            ? 'Microphone muted'
                                                            : (isSpeaking ? 'Ashley is speaking...' : 'Listening to you...')
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {callStatus === 'active' && (
                                        <div className="inbound-controls">
                                            <button
                                                className={`btn-inbound-mute ${isMuted ? 'muted' : ''}`}
                                                onClick={handleToggleMute}
                                                title={isMuted ? 'Unmute' : 'Mute'}
                                                aria-label={isMuted ? 'Unmute' : 'Mute'}
                                            >
                                                {isMuted ? '🔇' : '🎙️'}
                                            </button>
                                            <button
                                                className="btn-inbound-end"
                                                onClick={handleEndCall}
                                            >
                                                <span>⏹️</span>
                                                <span>End</span>
                                            </button>
                                        </div>
                                    )}
                                </div>

                                {/* Dynamic Soundwave Amplitude */}
                                <div className="inbound-waves">
                                    {[...Array(9)].map((_, i) => (
                                        <div
                                            key={i}
                                            className={`inbound-wave-bar ${isSpeaking ? 'speaking' : ''}`}
                                            style={{
                                                height: isSpeaking
                                                    ? undefined
                                                    : `${Math.max(4, Math.min(22, volumeLevel * 60 * ((i % 3) + 1)))}px`
                                            }}
                                        ></div>
                                    ))}
                                </div>

                                <div className="inbound-phone-fallback">
                                    Prefer standard phone dialer? <a href="tel:14079068012">Call (407) 906-8012</a>
                                </div>
                            </div>
                        )}

                        <div className="contact-info mt-8">
                            <p className="info-item">
                                <span className="info-label">Direct Phone:</span>{' '}
                                <a href="tel:14079068012" style={{ color: 'var(--text-secondary)' }}>+1 (407) 906-8012</a>
                            </p>
                            <p className="info-item">
                                <span className="info-label">Email:</span> info@socialymail.com
                            </p>
                            <p className="info-item">
                                <span className="info-label">Support:</span> support@socialymail.com
                            </p>
                        </div>
                    </div>

                    <div className="contact-visual">
                        <div className="visual-ring ring-1"></div>
                        <div className="visual-ring ring-2"></div>
                        <div className="visual-ring ring-3"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
