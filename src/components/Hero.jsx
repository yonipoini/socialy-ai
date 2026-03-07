import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-container">
                <div className="hero-content animate-fade-up">
                    <div className="badge mb-4">Award-Winning Agency</div>
                    <h1 className="hero-title mb-4">
                        Empower Your Business With <br />
                        <span className="text-gradient">Engaging Content & AI</span>
                    </h1>
                    <p className="hero-subtitle mb-8">
                        Revolutionizing business with cutting-edge solutions. Automate customer support, boost team productivity, and deliver instant answers 24/7.
                    </p>

                    <div className="hero-cta">
                        <a href="/#contact" className="btn btn-primary">Book Appointment</a>
                        <a href="/#services" className="btn btn-secondary">Explore Services</a>
                    </div>
                </div>

                {/* Abstract hero visual */}
                <div className="hero-visual animate-fade-up" style={{ animationDelay: '0.2s' }}>
                    <div className="glass-panel visual-card">
                        <div className="visual-circle circle-1"></div>
                        <div className="visual-circle circle-2"></div>
                        <div className="visual-circle circle-3"></div>

                        <div className="visual-content-wrapper">
                            <div className="visual-text mb-8">AI Powered Growth</div>
                            <div className="ai-animation">
                                <div className="ai-ring ring-3"></div>
                                <div className="ai-ring ring-1">
                                    <div className="ai-satellite-1"></div>
                                </div>
                                <div className="ai-ring ring-2">
                                    <div className="ai-satellite-2"></div>
                                </div>
                                <div className="ai-core">
                                    <div className="ai-core-inner"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative gradient line */}
            <div className="hero-bottom-glow"></div>
        </section>
    );
};

export default Hero;
