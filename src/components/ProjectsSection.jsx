import React, { useState } from 'react';
import { projects } from '../data/portfolioData';

export default function ProjectsSection({ onOpenModal }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter((proj) => {
    const matchesCategory = selectedCategory === 'all' || proj.category === selectedCategory;
    const matchesSearch = proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          proj.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          proj.software.some(sw => sw.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="section-container">
      <div className="section-header">
        <span className="section-tag">Portfolio Showcase</span>
        <h2 className="section-title">Featured <span className="gradient-text">Video Edits</span></h2>
        <p className="section-desc">
          Select any project to launch the interactive Google Drive video player modal or access the direct file link.
        </p>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.2rem', marginBottom: '3rem' }}>
        <div className="project-filters">
          <button 
            className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All Works (4)
          </button>
          <button 
            className={`filter-btn ${selectedCategory === 'commercial' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('commercial')}
          >
            Commercial & Brand
          </button>
          <button 
            className={`filter-btn ${selectedCategory === 'shortform' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('shortform')}
          >
            Short-Form & Social
          </button>
          <button 
            className={`filter-btn ${selectedCategory === 'cinematic' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('cinematic')}
          >
            Cinematic & Post
          </button>
        </div>

        {/* Search Bar */}
        <div style={{ position: 'relative', width: '100%', maxWidth: '420px' }}>
          <input 
            type="text"
            className="form-input"
            placeholder="Search by title, software (DaVinci, CapCut...)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ paddingLeft: '2.8rem', borderRadius: 'var(--radius-full)' }}
          />
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-sub)" strokeWidth="2" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }}>
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            
            {/* Thumbnail Box with Play Overlay */}
            <div className="project-thumbnail">
              <iframe 
                src={project.previewUrl} 
                title={project.title}
                tabIndex="-1"
                aria-hidden="true"
                style={{ pointerEvents: 'none' }}
              ></iframe>
              
              <div className="play-overlay" onClick={() => onOpenModal(project)}>
                <div className="play-btn-circle" title="Click to Play Video Modal">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>

              <div className="timecode-tag">
                {project.timecode}
              </div>
            </div>

            {/* Project Details */}
            <div className="project-body">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="section-tag" style={{ fontSize: '0.75rem', margin: 0 }}>{project.categoryName}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>⏱ {project.duration}</span>
              </div>

              <h3 style={{ fontSize: '1.25rem', color: '#fff', margin: '0.2rem 0' }}>
                {project.title}
              </h3>

              <p style={{ fontSize: '0.9rem', color: 'var(--text-sub)', flex: 1 }}>
                {project.description}
              </p>

              <div className="project-tags">
                {project.software.map((sw, idx) => (
                  <span key={idx} className="tech-tag">{sw}</span>
                ))}
              </div>

              <div className="project-actions">
                <button 
                  className="btn-primary" 
                  onClick={() => onOpenModal(project)}
                  style={{ flex: 1, padding: '0.65rem', justifyContent: 'center', fontSize: '0.85rem' }}
                >
                  <span>Preview Player</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </button>
                <a 
                  href={project.driveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-outline"
                  style={{ padding: '0.65rem 1rem', fontSize: '0.85rem' }}
                  title="Open Google Drive File in new tab"
                >
                  Drive Link ↗
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
