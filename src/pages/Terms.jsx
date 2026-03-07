import React, { useEffect } from 'react';

const Terms = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="section page-content">
            <div className="container" style={{ maxWidth: '800px' }}>
                <div className="animate-fade-up">
                    <h1 className="hero-title mb-8 text-gradient">Terms of Service</h1>
                    <p className="hero-subtitle mb-8" style={{ marginLeft: '0' }}>
                        Last updated: March 2026
                    </p>

                    <div className="glass-panel" style={{ padding: '3rem', marginTop: '3rem' }}>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                            Welcome to Socialy AI. By accessing or using our website and services, you agree to be bound by these terms. Our core services involve providing digital marketing, AI automation, and consulting solutions.
                        </p>
                        <h3 className="mb-4 text-gradient" style={{ marginTop: '2rem' }}>1. Use of Services</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                            You agree to use our services only for lawful purposes and in accordance with these Terms. We reserve the right to refuse service to anyone for any reason at any time.
                        </p>
                        <h3 className="mb-4 text-gradient" style={{ marginTop: '2rem' }}>2. Intellectual Property</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                            All original content, features, and functionality provided by Socialy AI remain the exclusive property of Socialy AI and its licensors.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terms;
