import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="section page-content">
            <div className="container">
                <div className="animate-fade-up">
                    <div className="badge mb-4">Who We Are</div>
                    <h1 className="hero-title mb-8">
                        A Partner That <span className="text-gradient">Understands You</span>
                    </h1>
                    <p className="hero-subtitle mb-8" style={{ maxWidth: '800px', marginLeft: '0' }}>
                        Socialy AI is a tech-enabled digital marketing and AI automation solutions provider. We are an award-winning agency passionate about helping businesses succeed online.
                    </p>

                    <div className="glass-panel" style={{ padding: '4rem', marginTop: '3rem', textAlign: 'center' }}>
                        <h2 className="mb-4">Our Track Record</h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                            <div>
                                <div style={{ fontSize: '3rem', fontWeight: '800', fontFamily: 'var(--font-display)', color: 'var(--accent-primary)' }}>30M+</div>
                                <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Sales Driven</p>
                            </div>
                            <div>
                                <div style={{ fontSize: '3rem', fontWeight: '800', fontFamily: 'var(--font-display)', color: 'var(--accent-secondary)' }}>2.3M+</div>
                                <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Leads Generated</p>
                            </div>
                            <div>
                                <div style={{ fontSize: '3rem', fontWeight: '800', fontFamily: 'var(--font-display)', color: 'var(--accent-tertiary)' }}>15+</div>
                                <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Global Partners</p>
                            </div>
                            <div>
                                <div style={{ fontSize: '3rem', fontWeight: '800', fontFamily: 'var(--font-display)', color: 'white' }}>100%</div>
                                <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Satisfaction</p>
                            </div>
                        </div>
                    </div>

                    <div className="hero-cta" style={{ marginTop: '4rem', justifyContent: 'center', display: 'flex' }}>
                        <a href="/#contact" className="btn btn-primary">Work With Us</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
