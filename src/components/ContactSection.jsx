import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';

export default function ContactSection({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Commercial Video Edit',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    onShowToast(`Copied email to clipboard: ${personalInfo.email}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Video Editing Project Inquiry: ${formData.projectType}`);
    const body = encodeURIComponent(
      `Hi Thirumeni,\n\nMy name is ${formData.name} (${formData.email}).\n\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    onShowToast("Opening your default mail app...");
  };

  return (
    <section id="contact" className="section-container">
      <div className="section-header">
        <span className="section-tag">Let's Collaborate</span>
        <h2 className="section-title">Get in <span className="gradient-text">Touch</span></h2>
        <p className="section-desc">
          Have a video project, brand reel, or short-form series in mind? Drop me a line or send an inquiry.
        </p>
      </div>

      <div className="contact-wrapper">
        
        {/* Contact Info Card */}
        <div className="glass-panel contact-info-card">
          <div>
            <h3 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '0.5rem' }}>Let's Create Together</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-sub)' }}>
              I am open to freelance video editing projects, ongoing retainer work, and full post-production collaborations.
            </p>
          </div>

          <div className="contact-method">
            <div className="contact-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-sub)', display: 'block' }}>Direct Email Address</span>
              <strong style={{ fontSize: '1.05rem', color: '#fff' }}>{personalInfo.email}</strong>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={handleCopyEmail} style={{ padding: '0.7rem 1.4rem', fontSize: '0.9rem' }}>
              <span>Copy Email</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </button>

            <a 
              href={`mailto:${personalInfo.email}`} 
              className="btn-outline"
              style={{ padding: '0.7rem 1.4rem', fontSize: '0.9rem' }}
            >
              Compose Mail ↗
            </a>
          </div>

          <div style={{ padding: '1.2rem', background: 'rgba(0, 242, 254, 0.05)', border: '1px solid rgba(0, 242, 254, 0.15)', borderRadius: 'var(--radius-md)' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--primary-cyan)', fontWeight: '700', marginBottom: '0.2rem' }}>
              🚀 Quick Turnaround
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-sub)' }}>
              Standard response time: Within 24 hours. Remote editing equipped with high-speed fiber upload.
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div className="glass-panel contact-form-card">
          <h3 style={{ fontSize: '1.4rem', color: '#fff', marginBottom: '1.5rem' }}>Send a Quick Inquiry</h3>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input 
                type="text" 
                className="form-input" 
                required 
                placeholder="e.g. Alex Johnson"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Your Email</label>
              <input 
                type="email" 
                className="form-input" 
                required 
                placeholder="e.g. alex@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Project Type</label>
              <select 
                className="form-input"
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
              >
                <option value="Commercial Video Edit">Commercial & Brand Video Edit</option>
                <option value="Short-Form & Reels Series">Short-Form & Reels Series</option>
                <option value="Cinematic Color Grading">Cinematic Color Grading & Post</option>
                <option value="Full Video Production & Edit">Full Video Production & Edit</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Project Details & Footage Link</label>
              <textarea 
                className="form-textarea" 
                required 
                placeholder="Tell me about your video length, style preferences, or reference links..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              ></textarea>
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              <span>Send Project Inquiry</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
