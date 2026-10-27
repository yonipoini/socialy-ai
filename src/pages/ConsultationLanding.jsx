import React, { useState, useEffect } from 'react';
import VapiVoiceAgent from '../components/VapiVoiceAgent';
import { translations } from '../translations/consultationTranslations';
import './ConsultationLanding.css';

const ConsultationLanding = () => {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('socialy_lang');
    if (saved === 'es' || saved === 'en') return saved;

    const navLang = (navigator.language || (navigator.languages && navigator.languages[0]) || '').toLowerCase();
    if (navLang.startsWith('es')) {
      return 'es';
    }
    return 'en';
  });

  const [wasAutoDetected, setWasAutoDetected] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    const saved = localStorage.getItem('socialy_lang');
    if (!saved) {
      const navLang = (navigator.language || (navigator.languages && navigator.languages[0]) || '').toLowerCase();
      if (navLang.startsWith('es')) {
        setWasAutoDetected(true);
      }
    }
  }, []);

  const t = translations[lang] || translations.en;

  const toggleLanguage = () => {
    const nextLang = lang === 'en' ? 'es' : 'en';
    setLang(nextLang);
    localStorage.setItem('socialy_lang', nextLang);
    setWasAutoDetected(false);
  };

  useEffect(() => {
    document.title = lang === 'es' 
      ? 'Socialy AI - Consulta Confirmada y Asistente IA' 
      : 'Socialy AI - Booked Consultation & AI Voice Assistant';
  }, [lang]);

  return (
    <div className="section page-content consult-page">
      <div className="container">
        {/* Language Bar & Auto-detection Pill */}
        <div className="lang-banner-bar animate-fade-up">
          <div className="lang-detected-tag">
            <span>🌐</span>
            <span>
              {wasAutoDetected && lang === 'es' 
                ? 'Dispositivo en Español detectado automáticamente' 
                : t.detectedLanguageMsg}
            </span>
          </div>
          <button
            id="lang-toggle-btn"
            className="lang-toggle-btn"
            onClick={toggleLanguage}
            aria-label="Toggle language between English and Spanish"
          >
            <span>{lang === 'en' ? '🇪🇸' : '🇺🇸'}</span>
            <span>{t.switchLanguage}</span>
          </button>
        </div>

        {/* Hero Header */}
        <div className="consult-hero-header animate-fade-up">
          <div className="badge mb-4">{t.badge}</div>
          <h1 className="consult-hero-title">
            {t.heroTitlePrefix}
            <span className="text-gradient">{t.heroTitleHighlight}</span>
          </h1>
          <p className="consult-hero-subtitle">
            {t.heroSubtitle}
          </p>
        </div>

        {/* Live Vapi Voice Agent Card */}
        <div className="animate-fade-up" style={{ animationDelay: '0.15s' }}>
          <VapiVoiceAgent t={t} currentLang={lang} />
        </div>

        {/* What You Can Discuss Section */}
        <h2 className="features-section-title">
          {lang === 'es' ? 'Soluciones Disponibles Para Tu Negocio' : 'Growth Solutions For Your Business'}
        </h2>
        <div className="consult-features-grid">
          <div className="consult-feature-card">
            <div className="consult-feature-icon">🤖</div>
            <h3 className="consult-feature-title">{t.feature1Title}</h3>
            <p className="consult-feature-desc">{t.feature1Desc}</p>
          </div>
          <div className="consult-feature-card">
            <div className="consult-feature-icon">📈</div>
            <h3 className="consult-feature-title">{t.feature2Title}</h3>
            <p className="consult-feature-desc">{t.feature2Desc}</p>
          </div>
          <div className="consult-feature-card">
            <div className="consult-feature-icon">🎯</div>
            <h3 className="consult-feature-title">{t.feature3Title}</h3>
            <p className="consult-feature-desc">{t.feature3Desc}</p>
          </div>
          <div className="consult-feature-card">
            <div className="consult-feature-icon">⚡</div>
            <h3 className="consult-feature-title">{t.feature4Title}</h3>
            <p className="consult-feature-desc">{t.feature4Desc}</p>
          </div>
        </div>

        {/* Preparation Timeline */}
        <div className="timeline-card">
          <h2 className="timeline-header">{t.timelineTitle}</h2>
          <div className="timeline-steps">
            <div className="timeline-step">
              <div className="timeline-number">{t.step1Num}</div>
              <h3 className="timeline-step-title">{t.step1Title}</h3>
              <p className="timeline-step-desc">{t.step1Desc}</p>
            </div>
            <div className="timeline-step">
              <div className="timeline-number">{t.step2Num}</div>
              <h3 className="timeline-step-title">{t.step2Title}</h3>
              <p className="timeline-step-desc">{t.step2Desc}</p>
            </div>
            <div className="timeline-step">
              <div className="timeline-number">{t.step3Num}</div>
              <h3 className="timeline-step-title">{t.step3Title}</h3>
              <p className="timeline-step-desc">{t.step3Desc}</p>
            </div>
          </div>
        </div>

        {/* Calendar Management & Direct Contact */}
        <div className="booking-actions-card">
          <div className="booking-action-box">
            <h4>{t.calendarRescheduleTitle}</h4>
            <a
              href="https://calendar.app.google/DVNzzupH8FUsj5Qw5"
              target="_blank"
              rel="noopener noreferrer"
              className="booking-action-btn btn-calendar"
            >
              <span>📅</span>
              <span>{t.calendarRescheduleBtn}</span>
            </a>
          </div>

          <div className="booking-action-box">
            <h4>{t.callDirectTitle}</h4>
            <div>
              <a href="tel:14079068012" className="booking-action-btn btn-direct-phone" style={{ width: '100%', boxSizing: 'border-box' }}>
                <span>📞</span>
                <span>{t.callDirectBtn}</span>
              </a>
              <a href="mailto:info@socialymail.com" className="booking-action-btn btn-direct-email" style={{ width: '100%', boxSizing: 'border-box' }}>
                <span>✉️</span>
                <span>{t.emailSupportBtn}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="faq-container">
          <h2 className="faq-title">{t.faqTitle}</h2>
          <div className="faq-grid">
            <div className="faq-card">
              <h3 className="faq-question">{t.faq1Q}</h3>
              <p className="faq-answer">{t.faq1A}</p>
            </div>
            <div className="faq-card">
              <h3 className="faq-question">{t.faq2Q}</h3>
              <p className="faq-answer">{t.faq2A}</p>
            </div>
            <div className="faq-card">
              <h3 className="faq-question">{t.faq3Q}</h3>
              <p className="faq-answer">{t.faq3A}</p>
            </div>
            <div className="faq-card">
              <h3 className="faq-question">{t.faq4Q}</h3>
              <p className="faq-answer">{t.faq4A}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationLanding;
