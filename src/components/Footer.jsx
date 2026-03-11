import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-brand">
                    <Link to="/" className="logo mb-4" style={{ display: 'inline-block' }}>
                        <img src="https://socialyai.com/wp-content/uploads/2024/03/socialymainone.png" alt="Socialy AI" style={{ height: '50px', width: 'auto' }} />
                    </Link>
                    <p className="footer-desc">
                        Empower your business with engaging content, AI, and Automation.
                    </p>
                </div>

                <div className="footer-links">
                    <div className="link-group">
                        <h3>Company</h3>
                        <Link to="/about">About</Link>
                        <Link to="/careers">Careers</Link>
                        <a href="mailto:info@socialymail.com">Contact</a>
                    </div>
                    <div className="link-group">
                        <h3>Services</h3>
                        <Link to="/ai-agents">AI Agents</Link>
                        <Link to="/content-marketing">Content Marketing</Link>
                        <Link to="/social-media">Social Media Strategy</Link>
                    </div>
                    <div className="link-group">
                        <h3>Legal</h3>
                        <Link to="/terms">Terms</Link>
                        <Link to="/privacy">Privacy</Link>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Socialy AI. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
