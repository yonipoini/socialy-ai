import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ContentMarketing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="section page-content">
            <div className="container">
                <div className="animate-fade-up">
                    <div className="badge mb-4">Content Marketing</div>
                    <h1 className="hero-title mb-8">
                        Tell Your Brand's <span className="text-gradient">Story</span>
                    </h1>
                    <p className="hero-subtitle mb-8" style={{ maxWidth: '800px', marginLeft: '0' }}>
                        Choose the right solution to increase your online visibility. We craft engaging, SEO-optimized content designed to drive more traffic, establish authority, and multiply your sales pipeline.
                    </p>

                    <div className="glass-panel content-marketing-grid" style={{ padding: '3rem', marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        <div>
                            <h2 className="mb-4">Short-Form Video & Audio</h2>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                                We understand that video content is the atomic particle of modern discovery. We produce high-value, trend-driven content to increase your online visibility.
                            </p>
                            <ul style={{ listStylePosition: 'inside', fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '2' }}>
                                <li>Engaging Instagram and Facebook Reels</li>
                                <li>TikTok-optimized edits</li>
                                <li>Scroll-stopping captions & trending audio</li>
                                <li>Proven hooks and formats to attract more views</li>
                            </ul>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '20px', border: '1px solid var(--glass-border)' }}>
                            <h3 className="mb-4 text-gradient">Scale Your Reach</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                                Whether you are a small business needing consistent, high-quality content without agency-level costs, or a brand ready to scale, we have you covered.
                                <br /><br />
                                Enjoy an optimized structure for platform growth and a dedicated Account Manager for your strategies.
                            </p>
                        </div>
                    </div>

                    <div className="hero-cta" style={{ marginTop: '4rem' }}>
                        <a href="/#contact" className="btn btn-primary">Start Publishing</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentMarketing;
