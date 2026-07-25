import React from 'react';
import { coreSkills, softwareTools } from '../data/portfolioData';

export default function SkillsSection() {
  return (
    <section id="skills" className="section-container" style={{ background: 'rgba(12, 10, 28, 0.4)' }}>
      
      {/* Core Skills Header */}
      <div className="section-header">
        <span className="section-tag">Core Competencies</span>
        <h2 className="section-title">Mastered <span className="gradient-text">Core Skills</span></h2>
        <p className="section-desc">
          Combining visual artistry with technical precision across video editing, creative direction, and social content strategy.
        </p>
      </div>

      {/* Core Skills Cards */}
      <div className="skills-grid">
        {coreSkills.map((skill) => (
          <div key={skill.id} className="glass-panel skill-card">
            <div className="skill-icon-wrap" style={{ borderColor: skill.color, color: skill.color, background: `${skill.color}15` }}>
              {skill.id === 'storytelling' && (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="23 7 16 12 23 17 23 7"></polygon>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
              )}
              {skill.id === 'content' && (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              )}
              {skill.id === 'editing' && (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <line x1="20" y1="4" x2="8.12" y2="15.88"></line>
                  <line x1="14.47" y1="14.47" x2="20" y2="20"></line>
                  <line x1="8.12" y1="8.12" x2="12" y2="12"></line>
                </svg>
              )}
            </div>

            <h3 style={{ fontSize: '1.4rem', color: '#fff' }}>{skill.title}</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-sub)' }}>{skill.description}</p>
          </div>
        ))}
      </div>

      {/* Software Proficiency Header */}
      <div className="section-header" style={{ marginTop: '5rem', marginBottom: '2rem' }}>
        <span className="section-tag">Software Toolkit</span>
        <h2 className="section-title">Industry <span className="gradient-text">Standard Tools</span></h2>
        <p className="section-desc">
          Proficient across professional post-production software suites and design platforms.
        </p>
      </div>

      {/* Software Grid */}
      <div className="software-container">
        {softwareTools.map((tool, idx) => (
          <div key={idx} className="software-card">
            <div className="software-head">
              <div 
                className="software-badge" 
                style={{ 
                  background: tool.badgeColor, 
                  border: tool.badgeBorder ? `2px solid ${tool.badgeBorder}` : 'none' 
                }}
              >
                {tool.badgeLetter}
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', color: '#fff' }}>{tool.name}</h4>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-sub)' }}>{tool.category}</span>
              </div>
            </div>

            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              {tool.desc}
            </p>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '0.4rem' }}>
                <span style={{ color: 'var(--text-sub)' }}>Proficiency</span>
                <span style={{ color: 'var(--primary-cyan)', fontWeight: '700' }}>{tool.level}%</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: `${tool.level}%` }}></div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
