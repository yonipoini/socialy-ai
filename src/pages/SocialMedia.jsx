import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SocialMedia = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="section page-content">
            <div className="container">
                <div className="animate-fade-up">
                    <div className="badge mb-4">Social Media & Ads</div>
                    <h1 className="hero-title mb-8">
                        Digital Marketing That <span className="text-gradient">Drives Revenue</span>
                    </h1>
                    <p className="hero-subtitle mb-8" style={{ maxWidth: '800px', marginLeft: '0' }}>
                        Concentrating on business impact, we offer a unique combination of expertise and skills dedicated to maximizing return on investment. We've driven millions in sales through our systematic approach.
                    </p>

                    <div className="services-grid" style={{ marginTop: '3rem' }}>
                        <div className="service-card glass-panel">
                            <h3 className="service-title">Strategy Development</h3>
                            <p className="service-desc" style={{ color: 'var(--text-secondary)' }}>
                                Keyword research, competitor analysis, custom ad strategies, and exact demographic targeting to ensure your message hits the right audience.
                            </p>
                        </div>
                        <div className="service-card glass-panel">
                            <h3 className="service-title">Launch & Execution</h3>
                            <p className="service-desc" style={{ color: 'var(--text-secondary)' }}>
                                Top-tier social media design and management. We balance staying current with proven strategies in the ever-changing landscape of marketing.
                            </p>
                        </div>
                        <div className="service-card glass-panel">
                            <h3 className="service-title">100% Transparency</h3>
                            <p className="service-desc" style={{ color: 'var(--text-secondary)' }}>
                                You don't have to wonder what is going on with your campaigns. We cultivate an environment of transparent communication and relentless optimization.
                            </p>
                        </div>
                    </div>

                    <div className="hero-cta" style={{ marginTop: '4rem' }}>
                        <a href="/#contact" className="btn btn-primary">Scale Your Brand</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialMedia;
