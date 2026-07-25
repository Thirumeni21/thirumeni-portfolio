import React from 'react';
import { workflowSteps } from '../data/portfolioData';

export default function WorkflowSection() {
  return (
    <section id="workflow" className="section-container">
      <div className="section-header">
        <span className="section-tag">Post-Production Pipeline</span>
        <h2 className="section-title">The Editing <span className="gradient-text">Workflow</span></h2>
        <p className="section-desc">
          A structured 5-stage post-production process built to deliver cinematic visual storytelling with precision and speed.
        </p>
      </div>

      <div className="workflow-steps">
        {workflowSteps.map((item, idx) => (
          <div key={idx} className="step-card">
            <span className="step-num">{item.step}</span>
            <h4 style={{ fontSize: '1.1rem', color: '#fff' }}>{item.title}</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-sub)' }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
