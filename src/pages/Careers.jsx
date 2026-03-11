import React, { useEffect } from 'react';

const Careers = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="section page-content">
            <div className="container">
                <div className="animate-fade-up">
                    <div className="badge mb-4">Join Our Team</div>
                    <h1 className="hero-title mb-8">
                        Build the Future of <span className="text-gradient">Marketing</span>
                    </h1>
                    <p className="hero-subtitle mb-8" style={{ maxWidth: '800px', marginLeft: '0' }}>
                        We're always looking for talented individuals who are passionate about AI, automation, and digital marketing. Check back soon for open positions.
                    </p>

                    <div className="glass-panel" style={{ padding: '4rem', marginTop: '3rem', textAlign: 'center' }}>
                        <h2 className="mb-4">No Open Roles Currently</h2>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            If you believe you'd be a great fit, feel free to drop us a line at <a href="mailto:careers@socialymail.com" style={{ color: 'var(--accent-primary)' }}>careers@socialymail.com</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Careers;
