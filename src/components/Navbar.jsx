import React, { useState } from 'react';
import { personalInfo, concepts } from '../data/portfolioData';

export default function Navbar({ activeConcept, onSelectConcept, activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <a href="#home" className="nav-brand">
        <div className="brand-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="23 7 16 12 23 17 23 7"></polygon>
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
          </svg>
        </div>
        <span>THIRUMENI<span className="gradient-text">.OV</span></span>
      </a>

      {/* Desktop Concept Switcher */}
      <div className="concept-switcher-bar">
        {concepts.map((concept) => (
          <button
            key={concept.id}
            className={`concept-btn ${activeConcept === concept.id ? 'active' : ''}`}
            onClick={() => onSelectConcept(concept.id)}
            title={concept.subtitle}
          >
            {concept.name}
          </button>
        ))}
      </div>

      <ul className="nav-links">
        <li><a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</a></li>
        <li><a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a></li>
        <li><a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}>Skills & Tools</a></li>
        <li><a href="#workflow" className={`nav-link ${activeSection === 'workflow' ? 'active' : ''}`}>Workflow</a></li>
        <li><a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a></li>
      </ul>

      <div className="nav-actions">
        <a href={`mailto:${personalInfo.email}`} className="btn-primary" style={{ padding: '0.6rem 1.3rem', fontSize: '0.88rem' }}>
          <span>Hire Me</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>

        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div style={{ marginBottom: '1rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-sub)', display: 'block', marginBottom: '0.5rem' }}>Select Portfolio Perspective:</span>
            <div className="concept-switcher-bar" style={{ width: '100%', flexDirection: 'column', borderRadius: '12px' }}>
              {concepts.map((concept) => (
                <button
                  key={concept.id}
                  className={`concept-btn ${activeConcept === concept.id ? 'active' : ''}`}
                  onClick={() => {
                    onSelectConcept(concept.id);
                    setMobileMenuOpen(false);
                  }}
                  style={{ justifyContent: 'center' }}
                >
                  {concept.name}
                </button>
              ))}
            </div>
          </div>

          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="nav-link">Home</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="nav-link">Projects</a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="nav-link">Skills & Tools</a>
          <a href="#workflow" onClick={() => setMobileMenuOpen(false)} className="nav-link">Workflow</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="nav-link">Contact</a>
        </div>
      )}
    </nav>
  );
}
