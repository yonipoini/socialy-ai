import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const services = [
    {
        id: 'ai-agents',
        title: 'AI Agents & Automation',
        description: 'Automate 90%+ of customer support inquiries, boost team productivity by 80%, and deliver instant, accurate answers 24/7.',
        icon: '🤖',
        color: 'var(--accent-primary)',
        link: '/ai-agents'
    },
    {
        id: 'content-marketing',
        title: 'Content Marketing',
        description: 'Engaging, SEO-optimized content designed to increase your online visibility and drive more traffic and sales.',
        icon: '✍️',
        color: 'var(--accent-secondary)',
        link: '/content-marketing'
    },
    {
        id: 'social-media',
        title: 'Social Media Strategy',
        description: 'Custom ad campaigns, advanced demographic targeting, and full-scale social media management to make your brand shine.',
        icon: '🚀',
        color: 'var(--accent-tertiary)',
        link: '/social-media'
    }
];

const Services = () => {
    return (
        <section id="services" className="section services-section">
            <div className="container">
                <div className="services-header animate-fade-up">
                    <h2 className="section-title">
                        Our <span className="text-gradient">Services</span>
                    </h2>
                    <p className="section-subtitle">
                        Tailored to your business needs and carefully evaluated to ensure the best fit for your goals. We focus on results, not just deliverables.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <Link
                            to={service.link}
                            key={service.id}
                            className="service-card glass-panel"
                            style={{ animationDelay: `${index * 0.1}s`, textDecoration: 'none' }}
                        >
                            <div
                                className="service-icon-wrapper"
                                style={{ background: `linear-gradient(135deg, ${service.color}22, transparent)` }}
                            >
                                <span className="service-icon" style={{ textShadow: `0 0 20px ${service.color}` }}>
                                    {service.icon}
                                </span>
                            </div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>

                            <div className="service-glow" style={{ background: service.color }}></div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
