import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AiAgents = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="section page-content">
            <div className="container">
                <div className="animate-fade-up">
                    <div className="badge mb-4">AI Automation</div>
                    <h1 className="hero-title mb-8">
                        Engage With Customers <span className="text-gradient">Instantly</span>
                    </h1>
                    <p className="hero-subtitle mb-8" style={{ maxWidth: '800px', marginLeft: '0' }}>
                        Traditional sales & support teams are a thing of the past. Provide high-quality interactions, drastically reduce operational costs and gain a 24/7 time-saving & cost-effective ally working hand-in-hand with your human team.
                    </p>

                    <div className="glass-panel" style={{ padding: '3rem', marginTop: '3rem' }}>
                        <h2 className="mb-4">Why choose our AI Agents?</h2>
                        <ul style={{ listStylePosition: 'inside', fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '2' }}>
                            <li>Automate 90%+ of customer and support inquiries.</li>
                            <li>Boost team productivity by 80% with proactive AI assistance.</li>
                            <li>Always performing at its best, delivering instant, accurate answers 24/7.</li>
                            <li>Unified CRM to maximize productivity and maintain pipeline visibility.</li>
                        </ul>
                    </div>

                    <div className="hero-cta" style={{ marginTop: '4rem' }}>
                        <a href="/#contact" className="btn btn-primary">Try For Free</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AiAgents;
