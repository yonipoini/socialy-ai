import React, { useEffect } from 'react';

const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="section page-content">
            <div className="container" style={{ maxWidth: '800px' }}>
                <div className="animate-fade-up">
                    <h1 className="hero-title mb-8 text-gradient">Privacy Policy</h1>
                    <p className="hero-subtitle mb-8" style={{ marginLeft: '0' }}>
                        Last updated: March 2026
                    </p>

                    <div className="glass-panel" style={{ padding: '3rem', marginTop: '3rem' }}>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                            Your privacy is extremely important to us at Socialy AI. This Privacy Policy outlines the types of personal information that is received and collected by our services and how it is used.
                        </p>
                        <h3 className="mb-4 text-gradient" style={{ marginTop: '2rem' }}>Information Collection</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                            We collect information to provide better services to all our users. We may collect personal information such as your name, email address, and contact number when you reach out or subscribe to our agency.
                        </p>
                        <h3 className="mb-4 text-gradient" style={{ marginTop: '2rem' }}>How We Use Information</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                            The information we collect from you may be used to personalize your experience, to improve our website, or to send periodic emails regarding your order or other products and services.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
