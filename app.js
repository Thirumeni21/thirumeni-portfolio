// --- THIRUMENI O V PORTFOLIO ENGINE (SOFTWARES KNOWN SECTION TITLE UPDATE) ---

const personalInfo = {
  name: "Thirumeni O V",
  title: "Visual Storyteller, Video Editor & UI/UX Designer",
  email: "thirumeniov@gmail.com",
  location: "India / Worldwide Remote",
  photoUrl: "https://lh3.googleusercontent.com/d/15jHZFGvpTLYUAIEC7Ls6zt0DnPiT91vL",
  photoFallback: "https://drive.google.com/thumbnail?id=15jHZFGvpTLYUAIEC7Ls6zt0DnPiT91vL&sz=w1000",
  bio: "Creative Video Editor and UI/UX Designer proficient in DaVinci Resolve, Claude, Gemini AI, Figma, Adobe XD, Lightroom, Photoshop, and CapCut. Specializing in visual storytelling, 2D map animations, photo editing, and UI/UX design.",
  status: "Available for Remote & Freelance"
};

const projects = [
  {
    id: 3,
    title: "YouTube Motion Graphic",
    externalUrl: "https://youtu.be/6AZL3K9bNYc?si=YSMVcXjs8s5gc7su",
    category: "video",
    categoryName: "Motion Graphic Video",
    software: ["Animated Visuals", "AI-Assisted Creative", "AI-Assisted Video Editing"],
    description: "A motion graphic video combining animated visuals, AI-assisted creative direction, and AI-assisted video editing.",
    isExternal: true,
    externalLabel: "Watch on YouTube ↗"
  },
  {
    id: 7,
    title: "Informative Reel — Motion Graphics",
    driveUrl: "https://drive.google.com/file/d/1KiBb3CKlXckF2c_8TiQRy63Eja54uNhU/view?usp=sharing",
    previewUrl: "https://drive.google.com/file/d/1KiBb3CKlXckF2c_8TiQRy63Eja54uNhU/preview",
    category: "video",
    categoryName: "Informative Reel · Motion Graphics",
    software: ["Motion Graphics", "Animated Visuals"],
    description: "An informative motion graphic video built with animated visuals and clear visual storytelling.",
    isFigma: false
  },
  {
    id: 1,
    title: "Informative Reel — Visual Storytelling",
    externalUrl: "https://www.instagram.com/reel/DfB-UjDhLsm/?rpxt=cHh3emt0aXk3OXp1",
    category: "video",
    categoryName: "Informative Reel · Visual Storytelling",
    software: ["Visual Storytelling", "Meme-Based Engagement"],
    description: "An informative reel with strong visual storytelling, audience connection, and meme-based engagement.",
    isExternal: true,
    externalLabel: "Open Instagram Reel ↗"
  },
  {
    id: 2,
    title: "Informative Reel — Storytelling & B-Roll",
    externalUrl: "https://www.instagram.com/reel/DfB-UjDhLsm/?rpxt=cHh3emt0aXk3OXp1",
    category: "video",
    categoryName: "Informative Reel · Storytelling",
    software: ["Storytelling", "B-Roll Editing", "Meme Templates"],
    description: "A storytelling reel with well-matched B-rolls and meme templates that keep the content engaging.",
    isExternal: true,
    externalLabel: "Open Instagram Reel ↗"
  },
  {
    id: 4,
    title: "Map Animation",
    driveUrl: "https://drive.google.com/file/d/15IPnmm10e0lawFvOdxVoQNh6lHcJxqDU/view?usp=sharing",
    previewUrl: "https://drive.google.com/file/d/15IPnmm10e0lawFvOdxVoQNh6lHcJxqDU/preview",
    category: "animation",
    categoryName: "2D Animation",
    software: ["DaVinci Resolve"],
    description: "A map animation showcasing dynamic route visualization, location markers, and custom motion graphics.",
    isFigma: false
  },
  {
    id: 5,
    title: "IRCTC Web Redesign",
    externalUrl: "https://www.figma.com/proto/4DGm4049ZDN9DpjRYMlMuN/IRCTC-Redesign?node-id=0-1&t=OCMwrCh6GxucJMv3-1",
    category: "uiux",
    categoryName: "UI/UX Design",
    software: ["Figma"],
    description: "A modern IRCTC booking interface redesign focused on user experience, layout clarity, and accessibility.",
    isFigma: true
  },
  {
    id: 6,
    title: "Stranger Things Fan Wiki",
    externalUrl: "https://www.figma.com/proto/WejKvcQlX9ap72ucHIuAuN/Fan-Wiki?node-id=61-38&p=f&t=KEkLiQB7vVjkczyQ-1&starting-point-node-id=16%3A24",
    category: "uiux",
    categoryName: "UI/UX Design",
    software: ["Figma"],
    description: "A Stranger Things fan wiki prototype that won second place and a cash prize of Rs.5,000.",
    isFigma: true
  }
];

const services = [
  {
    num: "01",
    title: "Visual Storytelling & Video Editing",
    description: "Crafting narrative edits with strong pacing, sound design, color, and visual rhythm.",
    tags: ["DaVinci Resolve", "Story Editing", "Audio Polish"]
  },
  {
    num: "02",
    title: "2D Animation",
    description: "Creating route animations, map visuals, kinetic movement, and polished 2D overlays.",
    tags: ["Map Animation", "2D Motion", "Route Graphics"]
  },
  {
    num: "03",
    title: "Motion Graphics",
    description: "Designing expressive motion systems, title treatments, visual effects, and smooth 3D-inspired movement.",
    tags: ["Motion Design", "3D Motion", "Visual Effects"]
  },
  {
    num: "04",
    title: "UI/UX Design",
    description: "Designing intuitive interfaces, wireframes, and interactive prototypes with clarity and purpose.",
    tags: ["Figma", "UI/UX Design", "Wireframing"]
  }
];

const softwareTools = [
  { name: "DaVinci Resolve", category: "Primary Color & Edit Suite", badgeColor: "#6366f1", logo: "https://cdn.simpleicons.org/davinciresolve/ffffff", badgeLetter: "Dv", desc: "Node Color Grading, Fairlight Audio, Fusion VFX & Cut Page" },
  { name: "Claude", category: "AI Creative Assistance", badgeColor: "#d97757", logo: "https://cdn.simpleicons.org/claude/ffffff", badgeLetter: "Cl", desc: "Creative Direction, Writing Support & Structured Idea Development" },
  { name: "Google Gemini", category: "AI Scripting & Visual Hooks", badgeColor: "#3b82f6", logo: "https://cdn.simpleicons.org/googlegemini/ffffff", badgeLetter: "Ge", desc: "AI Storyboarding, Content Ideation & Visual Scripting" },
  { name: "Figma", category: "UI/UX & Storyboarding", badgeColor: "#f43f5e", logo: "https://cdn.simpleicons.org/figma/ffffff", badgeLetter: "Fg", desc: "Interactive Prototypes, UI Layouts & Motion Wireframes" },
  { name: "Adobe XD", category: "Layouts & UI Prototypes", badgeColor: "#d946ef", logo: "https://cdn.simpleicons.org/adobexd/ffffff", badgeLetter: "Xd", desc: "Interactive Motion Layouts & Screen Video Prototyping" },
  { name: "Adobe Lightroom", category: "Color & RAW Grading", badgeColor: "#38bdf8", logo: "https://cdn.simpleicons.org/adobelightroom/ffffff", badgeLetter: "Lr", desc: "Preset Creation, Color Balance & RAW Photo Enhancement" },
  { name: "Adobe Photoshop", category: "Photo Editing & Key Art", badgeColor: "#2563eb", logo: "https://cdn.simpleicons.org/adobephotoshop/ffffff", badgeLetter: "Ps", desc: "Thumbnails, Poster Graphics & Photo Manipulation" },
  { name: "CapCut", category: "Fast Social & Trend Edits", badgeColor: "#8b5cf6", logo: "https://cdn.simpleicons.org/capcut/ffffff", badgeLetter: "Cc", desc: "Speed Ramps, Auto Captions & Viral Short Form Effects" }
];

let state = {
  selectedCategory: 'all',
  activeModalProject: null,
  toastMessage: '',
  mobileMenuOpen: false
};

function setState(newState) {
  state = { ...state, ...newState };
  renderApp();
}

function showToast(msg) {
  state.toastMessage = msg;
  renderApp();
  setTimeout(() => {
    state.toastMessage = '';
    renderApp();
  }, 3500);
}

function renderApp() {
  const root = document.getElementById('root');
  if (!root) return;

  const filteredProjects = projects.filter(p => {
    if (state.selectedCategory === 'all') return true;
    return p.category === state.selectedCategory;
  });

  root.innerHTML = `
    <div class="app-wrapper">
      
      <!-- NAVBAR -->
      <nav class="navbar">
        <a href="#home" class="nav-brand">
          <span class="brand-dot"></span>
          <span>THIRUMENI<span class="text-lavender">.OV</span></span>
        </a>

        <ul class="nav-links">
          <li><a href="#home" class="nav-link">Home</a></li>
          <li><a href="#works" class="nav-link">Works</a></li>
          <li><a href="#services" class="nav-link">Services</a></li>
          <li><a href="#software" class="nav-link">Software</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>

        <div style="display:flex; align-items:center; gap:1rem;">
          <button onclick="window.openGmailCompose()" class="btn-primary">
            <span>Hire Me</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </button>

          <button class="mobile-menu-btn" onclick="window.toggleMobileMenu()">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="${state.mobileMenuOpen ? 'M18 6L6 18M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}"/>
            </svg>
          </button>
        </div>

        ${state.mobileMenuOpen ? `
          <div class="mobile-drawer">
            <a href="#home" onclick="window.toggleMobileMenu()" class="nav-link">Home</a>
            <a href="#works" onclick="window.toggleMobileMenu()" class="nav-link">Works</a>
            <a href="#services" onclick="window.toggleMobileMenu()" class="nav-link">Services</a>
            <a href="#software" onclick="window.toggleMobileMenu()" class="nav-link">Software</a>
            <a href="#contact" onclick="window.toggleMobileMenu()" class="nav-link">Contact</a>
          </div>
        ` : ''}
      </nav>

      <!-- HERO SECTION -->
      <section id="home" class="hero-section">
        <div class="hero-profile-left">
          <div class="profile-avatar-box-hero">
            <img src="${personalInfo.photoUrl}" alt="${personalInfo.name}" onerror="this.onerror=null; this.src='${personalInfo.photoFallback}';" />
          </div>

          <div style="display:flex; justify-content:space-between; align-items:center; background:var(--bg-card); border:1px solid var(--border-glass-hover); padding:1.2rem; border-radius:var(--radius-md); backdrop-filter:blur(20px);">
            <div style="display:flex; align-items:center; gap:0.6rem;">
              <span class="brand-dot"></span>
              <span style="font-size:0.85rem; color:#000; font-weight:600;">${personalInfo.status}</span>
            </div>
            <span style="font-family:var(--font-mono); font-size:0.8rem; color:var(--accent-lavender);">DAVINCI &amp; FIGMA</span>
          </div>
        </div>

        <div class="hero-intro-right">
          <div class="hero-tag">
            <span class="brand-dot"></span>
            <span>VISUAL STORYTELLER, VIDEO EDITOR &amp; UI/UX DESIGNER</span>
          </div>

          <h1 class="hero-title text-gradient">
            CRAFTING VISUAL STORIES THAT <span class="text-lavender">CAPTIVATE &amp; CONVERT</span>
          </h1>

          <p class="hero-description">
            Hi, I'm <strong style="color:#000;">${personalInfo.name}</strong>. I create commercial video edits, 2D map animations, photo enhancements, and interactive UI/UX designs using DaVinci Resolve, Claude, Gemini AI, Figma, Adobe XD, Lightroom, Photoshop, and CapCut.
          </p>

          <div class="hero-actions">
            <a href="#works" class="btn-primary">
              <span>Explore Works</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            </a>
            <button onclick="window.openGmailCompose()" class="btn-outline">
              <span>Contact Email</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </button>
          </div>
        </div>
      </section>

      <!-- WORKS SECTION -->
      <section id="works" class="section-container">
        <div class="section-header">
          <span class="section-tag">PORTFOLIO</span>
          <h2 class="section-title">FEATURED <span class="text-lavender">WORKS</span></h2>
        </div>

        <div class="category-tabs">
          <button class="tab-btn ${state.selectedCategory === 'all' ? 'active' : ''}" onclick="window.selectCategory('all')">All Works (7)</button>
          <button class="tab-btn ${state.selectedCategory === 'video' ? 'active' : ''}" onclick="window.selectCategory('video')">Video Editing</button>
          <button class="tab-btn ${state.selectedCategory === 'uiux' ? 'active' : ''}" onclick="window.selectCategory('uiux')">UI/UX Design</button>
          <button class="tab-btn ${state.selectedCategory === 'animation' ? 'active' : ''}" onclick="window.selectCategory('animation')">2D Animation</button>
        </div>

        <div class="works-grid-clean">
          ${filteredProjects.map(p => `
            <div class="work-card-clean">
              <div style="display:flex; align-items:center; gap:0.6rem; flex-wrap:wrap;">
                <span class="work-tag-pill">${p.categoryName}</span>
              </div>

              <h3 style="font-size:1.35rem; color:#000; margin-top:0.1rem;">${p.title}</h3>
              
              <p style="font-size:0.95rem; color:var(--accent-silver); line-height:1.5; margin-bottom:0.2rem;">${p.description}</p>
              
              <div style="display:flex; align-items:center; gap:0.5rem; flex-wrap:wrap;">
                ${p.software.map(sw => `<span class="software-badge-pill">${sw}</span>`).join('')}
              </div>

              <div class="project-action-row">
                ${p.isFigma ? `
                  <a href="${p.externalUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="flex:1; justify-content:center; padding:0.75rem; font-size:0.88rem;">
                    <span>Figma Prototype ↗</span>
                  </a>
                ` : p.isExternal ? `
                  <a href="${p.externalUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="flex:1; justify-content:center; padding:0.75rem; font-size:0.88rem;">
                    <span>${p.externalLabel}</span>
                  </a>
                ` : `
                  <button class="btn-primary" onclick="window.openModal(${p.id})" style="flex:1; justify-content:center; padding:0.75rem; font-size:0.88rem;">
                    <span>Preview Player</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  </button>
                  <a href="${p.driveUrl}" target="_blank" rel="noopener noreferrer" class="btn-outline" style="padding:0.75rem 1.4rem; font-size:0.88rem;">Drive Link ↗</a>
                `}
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- SERVICES SECTION -->
      <section id="services" class="section-container" style="border-top:1px solid var(--border-glass); border-bottom:1px solid var(--border-glass);">
        <div class="section-header">
          <span class="section-tag">CORE COMPETENCIES</span>
          <h2 class="section-title">EDITING &amp; DESIGN <span class="text-lavender">SERVICES</span></h2>
        </div>

        <div class="services-grid">
          ${services.map(s => `
            <div class="bento-card service-card">
              <span class="service-num" style="font-family:var(--font-mono); color:var(--accent-lavender); font-weight:800; font-size:1.1rem;">${s.num}</span>
              <h3 style="font-size:1.4rem; color:#000;">${s.title}</h3>
              <p style="font-size:0.95rem; color:var(--accent-silver);">${s.description}</p>
              <div style="display:flex; gap:0.5rem; flex-wrap:wrap; margin-top:auto;">
                ${s.tags.map(t => `<span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--accent-lavender); background:rgba(210,178,240,0.12); padding:0.25rem 0.6rem; border-radius:4px; border:1px solid rgba(210,178,240,0.3);">${t}</span>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- SOFTWARES KNOWN SECTION (RENAMED FROM SOFTWARE MASTERY) -->
      <section id="software" class="section-container">
        <div class="section-header">
          <span class="section-tag">POST-PRODUCTION &amp; DESIGN TOOLKIT</span>
          <h2 class="section-title">SOFTWARES <span class="text-lavender">KNOWN</span></h2>
        </div>

        <div class="software-grid-clean">
          ${softwareTools.map(t => `
            <div class="software-item-clean">
              <div style="display:flex; align-items:center; gap:0.8rem;">
                <div class="software-badge-letter" style="background:${t.badgeColor};" title="${t.name}">
                  <img src="${t.logo}" alt="${t.name} logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline';" />
                  <span style="display:none;">${t.badgeLetter}</span>
                </div>
                <div>
                  <h4 style="font-size:1.1rem; color:#000;">${t.name}</h4>
                  <span style="font-size:0.75rem; color:var(--accent-silver);">${t.category}</span>
                </div>
              </div>
              <p style="font-size:0.82rem; color:var(--accent-silver);">${t.desc}</p>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- CONTACT SECTION -->
      <section id="contact" class="section-container">
        <div class="section-header">
          <span class="section-tag">LET'S COLLABORATE</span>
          <h2 class="section-title">GET IN <span class="text-lavender">TOUCH</span></h2>
        </div>

        <div class="contact-grid">
          <div class="contact-card" style="display:flex; flex-direction:column; gap:2rem; justify-content:space-between;">
            <div>
              <h3 style="font-size:1.8rem; color:#000; margin-bottom:0.6rem;">START A PROJECT</h3>
              <p style="font-size:0.95rem; color:var(--accent-silver);">I am available for video editing, 2D animations, photo editing, and UI/UX design assignments.</p>
            </div>

            <div>
              <span style="font-size:0.8rem; color:var(--accent-silver); text-transform:uppercase; letter-spacing:0.05em; display:block; margin-bottom:0.3rem;">Direct Email Address</span>
              <strong style="font-size:1.2rem; color:var(--accent-lavender);">${personalInfo.email}</strong>
            </div>

            <div style="display:flex; gap:0.8rem; flex-wrap:wrap;">
              <button class="btn-primary" onclick="window.copyEmail()">
                <span>Copy Email</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              </button>
              <button onclick="window.openGmailCompose()" class="btn-outline">Compose Mail ↗</button>
            </div>

            <div style="padding:1.2rem; background:rgba(210,178,240,0.06); border:1px solid rgba(210,178,240,0.3); border-radius:var(--radius-md);">
              <div style="font-size:0.85rem; color:var(--accent-lavender); font-weight:700; margin-bottom:0.2rem;">⚡ RELIABLE TURNAROUND &amp; CLEAR COMMUNICATION</div>
              <div style="font-size:0.82rem; color:var(--accent-silver);">Dedicated remote editing &amp; design workspace ensuring fast project delivery and clear file coordination.</div>
            </div>
          </div>

          <div class="contact-card">
            <h3 style="font-size:1.4rem; color:#000; margin-bottom:1.5rem;">PROJECT INQUIRY FORM</h3>
            <form onsubmit="window.handleFormSubmit(event)">
              <div class="form-group">
                <label class="form-label">Your Name</label>
                <input type="text" class="form-input" id="form-name" required placeholder="e.g. Alex Johnson" />
              </div>
              <div class="form-group">
                <label class="form-label">Your Email</label>
                <input type="email" class="form-input" id="form-email" required placeholder="e.g. alex@company.com" />
              </div>
              <div class="form-group">
                <label class="form-label">Project Category</label>
                <select class="form-input" id="form-project-type">
                  <option value="Content Creation from Scratch">Content Creation from Scratch</option>
                  <option value="Reel Editing">Reel Editing</option>
                  <option value="Animation">Animation</option>
                  <option value="UI/UX">UI/UX</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Project Details &amp; References</label>
                <textarea class="form-textarea" id="form-message" required placeholder="Tell me about your project scope, requirements, or reference links..."></textarea>
              </div>
              <button type="submit" class="btn-primary" style="width:100%; justify-content:center;">
                <span>Send Project Inquiry</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      <!-- FOOTER -->
      <footer class="footer">
        <div style="max-width:1360px; margin:0 auto; display:flex; flex-direction:column; align-items:center; gap:1.5rem;">
          <div style="display:flex; align-items:center; gap:0.6rem;">
            <span class="brand-dot"></span>
            <span style="font-family:var(--font-heading); font-weight:800; font-size:1.2rem; color:#000;">${personalInfo.name}</span>
          </div>
          <p style="color:var(--accent-silver); max-width:500px;">Visual Storyteller, Video Editor & UI/UX Designer. Specializing in DaVinci Resolve, Claude, Gemini AI, Figma, Adobe XD, Lightroom, Photoshop, and CapCut.</p>
          <div style="font-size:0.8rem; color:var(--accent-silver); opacity:0.6; border-top:1px solid rgba(210,178,240,0.2); padding-top:1.5rem; width:100%;">
            © ${new Date().getFullYear()} ${personalInfo.name}. All rights reserved. Portfolio.
          </div>
        </div>
      </footer>

      <!-- MODAL PLAYER -->
      ${state.activeModalProject ? `
        <div class="modal-backdrop" onclick="window.closeModal()">
          <div class="modal-box" onclick="event.stopPropagation()">
            <div class="modal-header-bar">
              <div>
                <span class="section-tag" style="margin:0;">${state.activeModalProject.categoryName}</span>
                <h3 style="font-size:1.4rem; color:#000; margin-top:0.2rem;">${state.activeModalProject.title}</h3>
              </div>
              <button class="modal-close-icon" onclick="window.closeModal()" aria-label="Close modal">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>

            <div class="modal-video-frame">
              <iframe src="${state.activeModalProject.previewUrl}" title="${state.activeModalProject.title}" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>

            <div class="modal-footer-bar">
              <div style="display:flex; flex-direction:column; gap:0.5rem; max-width:600px;">
                <p style="font-size:0.92rem; color:var(--accent-silver);">${state.activeModalProject.description}</p>
                <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
                  ${state.activeModalProject.software.map(sw => `<span style="font-size:0.75rem; background:rgba(210,178,240,0.15); color:#000000; font-weight:600; padding:0.2rem 0.6rem; border-radius:4px;">${sw}</span>`).join('')}
                </div>
              </div>
              <a href="${state.activeModalProject.driveUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="padding:0.7rem 1.4rem; font-size:0.88rem;">
                <span>Google Drive File ↗</span>
              </a>
            </div>
          </div>
        </div>
      ` : ''}

      <!-- TOAST NOTIFICATION -->
      ${state.toastMessage ? `
        <div class="toast-box">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>${state.toastMessage}</span>
        </div>
      ` : ''}

    </div>
  `;
}

// --- GLOBAL ACTION HANDLERS ---
window.selectCategory = function(catId) {
  setState({ selectedCategory: catId });
};

window.openModal = function(projectId) {
  const proj = projects.find(p => p.id === projectId);
  setState({ activeModalProject: proj });
};

window.closeModal = function() {
  setState({ activeModalProject: null });
};

window.copyEmail = function() {
  navigator.clipboard.writeText(personalInfo.email);
  showToast(`Copied email (${personalInfo.email}) to clipboard!`);
};

window.openGmailCompose = function() {
  navigator.clipboard.writeText(personalInfo.email);
  showToast(`Copied email (${personalInfo.email}) & opening Gmail...`);
  setTimeout(() => {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}`, '_blank');
  }, 250);
};

window.toggleMobileMenu = function() {
  setState({ mobileMenuOpen: !state.mobileMenuOpen });
};

window.handleFormSubmit = function(e) {
  e.preventDefault();
  const name = document.getElementById('form-name').value;
  const email = document.getElementById('form-email').value;
  const projectType = document.getElementById('form-project-type').value;
  const message = document.getElementById('form-message').value;

  const subject = encodeURIComponent(`Project Inquiry: ${projectType}`);
  const body = encodeURIComponent(`Hi Thirumeni,\n\nMy name is ${name} (${email}).\n\nProject Category: ${projectType}\n\nMessage:\n${message}\n`);
  
  navigator.clipboard.writeText(personalInfo.email);
  showToast("Opening Gmail Compose with inquiry details...");
  setTimeout(() => {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}&su=${subject}&body=${body}`, '_blank');
  }, 250);
};

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && state.activeModalProject) {
    window.closeModal();
  }
});

document.addEventListener('DOMContentLoaded', renderApp);
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  renderApp();
}
