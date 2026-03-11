import React from 'react';
import './Contact.css';

const Contact = () => {
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

                        <div className="contact-actions">
                            <a href="tel:14079068012" className="btn btn-primary contact-btn">
                                <span className="btn-icon">📞</span>
                                Call Us
                            </a>
                            <a href="https://calendar.app.google/DVNzzupH8FUsj5Qw5" target="_blank" rel="noopener noreferrer" className="btn btn-secondary contact-btn">
                                <span className="btn-icon">📅</span>
                                Book Appointment
                            </a>
                        </div>

                        <div className="contact-info mt-8">
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
