import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="footer">
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div className="brand-icon" style={{ width: '32px', height: '32px' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polygon points="23 7 16 12 23 17 23 7"></polygon>
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
            </svg>
          </div>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: '800', fontSize: '1.2rem', color: '#fff' }}>
            {personalInfo.name}
          </span>
        </div>

        <p style={{ color: 'var(--text-sub)', maxWidth: '500px' }}>
          Visual Storyteller & Post-Production Editor. Specializing in DaVinci Resolve, Figma, Adobe Lightroom, Adobe Photoshop, and CapCut.
        </p>

        <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem' }}>
          <a href="#home" className="nav-link">Home</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#skills" className="nav-link">Skills & Tools</a>
          <a href="#workflow" className="nav-link">Workflow</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '1.5rem', width: '100%' }}>
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved. Designed & Built for Video Editing Portfolio.
        </div>

      </div>
    </footer>
  );
}
