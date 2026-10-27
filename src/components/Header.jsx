import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [menuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">
                <Link to="/" className="logo">
                    <img src="/logo-white.png" alt="Socialy AI" style={{ height: '40px', width: 'auto' }} />
                </Link>

                <nav className={`desktop-nav ${menuOpen ? 'mobile-open' : ''}`}>
                    <Link to="/ai-agents" className="nav-link" onClick={() => setMenuOpen(false)}>AI Agents</Link>
                    <Link to="/content-marketing" className="nav-link" onClick={() => setMenuOpen(false)}>Content Marketing</Link>
                    <Link to="/social-media" className="nav-link" onClick={() => setMenuOpen(false)}>Social Media</Link>
                    <Link to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</Link>
                    <Link to="/consult" className="nav-link" onClick={() => setMenuOpen(false)}>Consultation</Link>
                    <a href="/#contact" className="btn btn-primary btn-sm" onClick={() => setMenuOpen(false)}>Let's Talk</a>
                </nav>

                <button
                    className={`mobile-menu-toggle ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle Menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </header>
    );
};

export default Header;
