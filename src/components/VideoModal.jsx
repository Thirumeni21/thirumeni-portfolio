import React, { useEffect } from 'react';

export default function VideoModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <span className="section-tag" style={{ margin: 0 }}>{project.categoryName}</span>
            <h3 style={{ fontSize: '1.4rem', color: '#fff', marginTop: '0.2rem' }}>{project.title}</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Embedded Google Drive Video Frame */}
        <div className="video-frame-box">
          <iframe 
            src={project.previewUrl} 
            title={project.title}
            allow="autoplay; encrypted-media" 
            allowFullScreen
          ></iframe>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth: '600px' }}>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-sub)' }}>
              {project.description}
            </p>
            <div className="project-tags">
              {project.software.map((sw, idx) => (
                <span key={idx} className="tech-tag">{sw}</span>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
            <a 
              href={project.driveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
              style={{ padding: '0.7rem 1.4rem', fontSize: '0.88rem' }}
            >
              <span>Google Drive File ↗</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
