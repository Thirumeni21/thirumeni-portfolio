import React from 'react';
import { personalInfo, concepts, stats } from '../data/portfolioData';

export default function Hero({ activeConcept }) {
  const currentConceptData = concepts.find(c => c.id === activeConcept) || concepts[0];

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="status-badge">
          <span className="status-dot"></span>
          <span>{personalInfo.status}</span>
        </div>

        <h1 className="hero-title" dangerouslySetInnerHTML={{ __html: currentConceptData.heroHeading }}>
        </h1>

        <p className="hero-subtitle">
          Hi, I'm <strong style={{ color: '#fff' }}>{personalInfo.name}</strong> — {currentConceptData.heroDesc}
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            <span>Watch Featured Projects</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </a>
          <a href="#contact" className="btn-outline">
            <span>Contact Email</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </a>
        </div>

        {/* Quick Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
          gap: '1.2rem',
          marginTop: '2rem',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          {stats.map((item, idx) => (
            <div key={idx}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: '800', color: 'var(--primary-cyan)' }}>
                {item.number}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-sub)' }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Avatar Image & Floating Cards */}
      <div className="hero-avatar-wrapper">
        <div className="avatar-card">
          <div className="avatar-img-box">
            <img 
              src={personalInfo.photoUrl} 
              alt={personalInfo.name} 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = personalInfo.photoFallback;
              }}
            />
          </div>
        </div>

        {/* Floating Badge 1 */}
        <div className="floating-badge badge-top-left">
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '8px',
            background: '#105a96',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justify-content: 'center',
            fontWeight: '800',
            fontSize: '0.9rem'
          }}>
            Dv
          </div>
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#fff' }}>DaVinci Resolve</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--primary-cyan)' }}>Color & Post Specialist</div>
          </div>
        </div>

        {/* Floating Badge 2 */}
        <div className="floating-badge badge-bottom-right">
          <div className="equalizer-box">
            <div className="eq-bar"></div>
            <div className="eq-bar"></div>
            <div className="eq-bar"></div>
            <div className="eq-bar"></div>
          </div>
          <div>
            <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#fff' }}>Audio & Beat Sync</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--accent-gold)' }}>Visual Storytelling</div>
          </div>
        </div>
      </div>
    </section>
  );
}
