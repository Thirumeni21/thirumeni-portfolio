import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectsSection from './components/ProjectsSection';
import VideoModal from './components/VideoModal';
import SkillsSection from './components/SkillsSection';
import WorkflowSection from './components/WorkflowSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [activeConcept, setActiveConcept] = useState('commercial');
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [activeSection, setActiveSection] = useState('home');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3500);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'workflow', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* Background Ambient Glows */}
      <div className="ambient-glow glow-1"></div>
      <div className="ambient-glow glow-2"></div>
      <div className="ambient-glow glow-3"></div>

      {/* Navigation */}
      <Navbar 
        activeConcept={activeConcept}
        onSelectConcept={setActiveConcept}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main>
        <Hero activeConcept={activeConcept} />
        <ProjectsSection onOpenModal={setActiveModalProject} />
        <SkillsSection />
        <WorkflowSection />
        <ContactSection onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Video Player Modal */}
      {activeModalProject && (
        <VideoModal 
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-box">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
