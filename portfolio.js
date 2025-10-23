
    // --- Data Store ---
    const portfolioData = {
      name: "Monit Bhattacharjee",
      title: "2nd Year B.Tech CSE Student",
      about: "I’m a 2nd-year Computer Science student at the Institute of Engineering and Management, passionate about creating impactful software and intelligent systems. I have a strong foundation in C and Python, am currently learning C++, and plan to master Java next year.",
      contact: {
        phone: "+91 94322 52366",
        email: "monittbhattacharjee@gmail.com",
        linkedin: "https://linkedin.com/in/monit-bhattacharjee-0602a1318",
        github: "https://github.com/monitbhattacharjee"
      },
      education: {
        university: "B.Tech, Computer Science & Engineering - Institute of Engineering and Management (2024-2028)",
        school: "High School (CBSE) - Techno India Group Public School (Completed 2024)"
      },
      softwareProjects: [
        { id: 1, title: '🧠 Mind-Bridge', desc: 'A personal mental health assistant built to help students manage stress and emotions. Features mood tracking, journaling, self-assessments (GAD-7, PHQ-9), and counselor connections.', img: 'https://placehold.co/600x400/1e293b/94a3b8?text=Mind-Bridge&font=poppins', stack: ['HTML', 'CSS', 'JavaScript', 'TailwindCSS']},
        { id: 2, title: '💬 UEM Kolkata FeeBot', desc: 'An intelligent fee management system with separate admin/student portals and a Gemini-powered chatbot for students to query their dues and policies.', img: 'https://placehold.co/600x400/1e3a8a/93c5fd?text=FeeBot&font=poppins', stack: ['HTML', 'CSS', 'JavaScript', 'Tailwind', 'Gemini API']},
        { id: 3, title: '🚀 AstroMate', desc: 'A space-mission AI companion for SIH 2025. Helps astronauts with stress management, health tracking, and emotional support during long missions.', img: 'https://placehold.co/600x400/0f172a/e2e8f0?text=AstroMate&font=poppins', stack: ['HTML', 'CSS', 'JavaScript']}
      ],
      hardwareProjects: [
        { id: 4, title: '🔥 Fire-Fighting Robot', desc: 'An Arduino-based autonomous robot that detects and extinguishes fire using sensors and a water pump. Built for a first-year mechatronics lab.', img: 'https://placehold.co/600x400/dc2626/fef2f2?text=Fire-Fighting+Robot&font=poppins', stack: ['Arduino (C++)', 'Flame Sensors', 'Servo Motors']}
      ],
      skills: {
        programming: [
          { id: 10, name: "C", description: "Procedural Language", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-600"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>' },
          { id: 11, name: "C++", description: "Object-Oriented", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-600"><path d="M12 12h8M16 8v8M5 12h.01M5 8h.01M5 16h.01M1 12h.01"></path></svg>' },
          { id: 12, name: "Java", description: "Platform Independent", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-600"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><path d="M6 1v3M10 1v3M14 1v3"></path></svg>' },
          { id: 13, name: "Python", description: "High-Level Language", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-600"><path d="M10.5 8.5a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2"></path><path d="M10.5 15.5a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v-5a2 2 0 0 0 2-2h1a2 2 0 0 1 2-2"></path></svg>' },
        ],
        frontend: [
          { id: 1, name: "HTML&CSS", description: "Web Markup and Styling", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-600"><path d="M2 12s3-4 6-4 3 4 6 4 3-4 6-4"></path><path d="M2 20s3-4 6-4 3 4 6 4 3-4 6-4"></path><path d="M2 4s3 4 6 4 3-4 6-4 3 4 6 4"></path></svg>' },
          { id: 2, name: "JavaScript", description: "Scripting Language", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-600"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>' },
          { id: 3, name: "TypeScript", description: "Type-safe JavaScript", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-600"><path d="M16 18s-1-4-6-4-6 4-6 4"></path><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path></svg>' },
          { id: 4, name: "React", description: "Frontend Framework", icon: '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-600"><path d="M12 2v20M17.41 6.59l-2.83 2.83M6.59 17.41l2.83-2.83M18 12h4M2 12h4M6.59 6.59l2.83 2.83M17.41 17.41l-2.83-2.83"></path></svg>' },
        ]
      },
      achievements: [
        { id: 1, title: 'SIH 2025 Internal Round', desc: 'Selected for “AstroMate – AI Chat Support for Astronauts”', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80'},
        { id: 2, title: 'AI Web Systems', desc: 'Built 3 full working AI-based web systems individually.', img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=600&q=80'},
        { id: 3, title: 'Academics', desc: 'Maintaining a CGPA of 8.5 in B.Tech CSE.', img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80'}
      ],
      // NEW: Added certificate data
      certificates: [
        { id: 1, title: 'AI for Everyone', issuer: 'Coursera', img: 'https://placehold.co/600x400/8b5cf6/f5f3ff?text=AI+Certificate&font=poppins', link: '#' },
        { id: 2, title: 'JavaScript Algorithms & Data Structures', issuer: 'freeCodeCamp', img: 'https://placehold.co/600x400/f59e0b/fffbeb?text=JS+Certificate&font=poppins', link: '#' },
        { id: 3, title: 'Responsive Web Design', issuer: 'freeCodeCamp', img: 'https://placehold.co/600x400/10b981/f0fdfa?text=Web+Design+Cert&font=poppins', link: '#' }
      ],
      mainPicks: [
        { id: 'pick-1', title: 'Professional', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80', linkId: 'professional' },
        { id: 'pick-2', title: 'Skills', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80', linkId: 'skills' },
        { id: 'pick-3', title: 'Projects', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80', linkId: 'projects' },
        { id: 'pick-4', title: 'Experience', img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=600&q=80', linkId: 'achievements' },
        { id: 'pick-5', title: 'Certificates', img: 'https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=800&q=80', linkId: 'certificates' }
      ],
      continueWatchingPicks: [
        /* The "Contact Me" object is removed from here and hard-coded in the HTML */
      ]
    };
    
    // --- Application State ---
    let state = {
      role: null,
      activeView: 'home',
      selectedProject: null
    };

    // NEW: Flag for sound
    // let hasPlayedIntroSound = false;
    
    // --- DOM Elements ---
    const profileSelectionPage = document.getElementById('profile-selection-page');
    const mainPortfolioPage = document.getElementById('main-portfolio-page');
    const projectModal = document.getElementById('project-modal');
    const allViews = document.querySelectorAll('.view-container');
    
    // --- Utility Functions ---

    // NEW: Function to play sound
    
    async function playIntroSound() {
      try {
        // Start Tone.js audio context on user gesture
        await Tone.start();
        
        // UPDATED: Use a softer synth (AMSynth) and a lower chord
        const synth = new Tone.AMSynth().toDestination();
        
        // Play a two-note chord (C3 and E3)
        const now = Tone.now();
        synth.triggerAttackRelease(["C3", "E3"], "4n", now); // Hold for a quarter note

        console.log("Intro sound played.");
      } catch (e) {
        console.error("Tone.js audio context could not be started:", e);
      }
    }
    
    
    /**
     * Creates the HTML for a single "Pick Card" (e.g., Projects, Skills)
     */
    function createPickCard(pick) {
      return `
        <button data-view="${pick.linkId}" class="nav-link group relative rounded-lg overflow-hidden shadow-xl transform transition-transform duration-300 hover:scale-105 bg-gray-900 aspect-w-4 aspect-h-3">
          <img src="${pick.img}" alt="${pick.title}" class="absolute inset-0 w-full h-full object-cover" />
          <div class="absolute inset-0 bg-black/60 transition-all duration-300 group-hover:bg-black/40"></div>
          <h3 class="absolute inset-0 flex items-center justify-center text-xl sm:text-2xl font-bold text-white p-4 text-center">
            ${pick.title}
          </h3>
        </button>
      `;
    }
    
    /**
     * Creates the HTML for a single "Tech Icon" (e.g., HTML, CSS)
     */
    function createTechIcon(name) {
      return `
        <div class="flex items-center gap-1.5 bg-gray-700 px-3 py-1 rounded-full">
          <svg class="w-3 h-3 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
          <span class="text-xs font-medium text-gray-200">${name}</span>
        </div>
      `;
    }
    
    /**
     * Creates the HTML for a single "Project Card"
     */
    function createProjectCard(project) {
      const stackHtml = project.stack.map(createTechIcon).join('');
      return `
        <button data-project-id="${project.id}" class="project-card flex-shrink-0 w-80 sm:w-96 group relative rounded-lg overflow-hidden shadow-xl bg-[#222] transition-all duration-300 border-2 border-transparent hover:border-red-600 text-left">
          <div class="h-48 overflow-hidden">
            <img src="${project.img}" alt="${project.title}" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
          </div>
          <div class="p-5">
            <h3 class="text-xl font-bold text-red-500 mb-2">${project.title}</h3>
            <p class="text-sm text-gray-300 mb-4 h-20 overflow-hidden">${project.desc}</p>
            <div class="flex flex-wrap gap-2">${stackHtml}</div>
          </div>
        </button>
      `;
    }
    
    /**
     * Creates the HTML for a single "Skill Card" in the new format
     */
    function createNewSkillCard(skill) {
      return `
        <div class="flex flex-col items-center justify-center p-6 bg-gray-900 rounded-lg shadow-lg hover:bg-gray-800 transition-colors duration-300 text-center min-h-[160px]">
          ${skill.icon}
          <h3 class="text-xl font-bold text-white mt-3 mb-1">${skill.name}</h3>
          <p class="text-sm text-gray-400">${skill.description}</p>
        </div>
      `;
    }

    /**
     * Creates the HTML for a single "Achievement Card"
     */
    function createAchievementCard(achievement) {
      return `
        <div class="flex-shrink-0 w-80 sm:w-96 group relative rounded-lg overflow-hidden shadow-xl bg-gray-900">
          <img src="${achievement.img}" alt="${achievement.title}" class="w-full h-48 object-cover opacity-30" />
          <div class="p-6">
            <h3 class="text-2xl font-bold text-white">${achievement.title}</h3>
            <p class="text-gray-300 mt-2">${achievement.desc}</p>
          </div>
        </div>
      `;
    }

    /**
     * NEW: Creates the HTML for a single "Certificate Card"
     */
    function createCertificateCard(cert) {
      return `
        <a href="${cert.link}" target="_blank" rel="noopener noreferrer" class="group block bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:bg-gray-800 hover:shadow-xl hover:scale-[1.02]">
          <div class="h-48 bg-gray-800">
            <img src="${cert.img}" alt="${cert.title}" class="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90" />
          </div>
          <div class="p-5">
            <h3 class="text-xl font-bold text-white mb-1">${cert.title}</h3>
            <p class="text-md text-red-500">${cert.issuer}</p>
          </div>
        </a>
      `;
    }
    
    // --- Render Functions (Populate Content) ---
    
    /**
     * Populates all dynamic content on the page.
     * This only needs to run once on load.
     */
    function populateAllContent() {
      const { name, title, about, contact, education, softwareProjects, hardwareProjects, skills, achievements, certificates, mainPicks, continueWatchingPicks } = portfolioData;

      // 1. Populate Navbar with wave effect
      const navNameEl = document.getElementById('nav-name');
      if (navNameEl) {
          // Split name into parts (e.g., "Monit" and "Bhattacharjee")
          const nameParts = name.split(' ');
          let nameHtml = '';
          let charCount = 0; // Total chars for delay calculation
          
          nameParts.forEach((part, partIndex) => {
              if (partIndex > 0) {
                  nameHtml += '<span class="ml-2"></span>'; // Add margin for space
              }
              part.split('').forEach((char) => {
                  // Add animation delay
                  nameHtml += `<span style="animation-delay: ${0.05 * charCount}s">${char}</span>`;
                  charCount++;
              });
          });
          navNameEl.innerHTML = nameHtml;
      }
      
      // 2. Populate Hero
      document.getElementById('hero-name').innerText = name;
      document.getElementById('hero-title').innerText = title;
      document.getElementById('hero-about').innerText = about;
      document.getElementById('hero-linkedin-btn').href = contact.linkedin;

      // 3. Populate "Top Picks" Rows
      document.getElementById('main-picks-container').innerHTML = mainPicks.map(createPickCard).join('');
      // Changed from = to += to append to the hard-coded card
      document.getElementById('continue-watching-container').innerHTML += continueWatchingPicks.map(createPickCard).join('');
      
      // 4. Populate "Professional" (About) Page
      document.getElementById('professional-about-text').innerText = about;
      
      // 5. Populate "Skills" Page (using the new skill card function)
      document.getElementById('programming-skills-container').innerHTML = skills.programming.map(createNewSkillCard).join('');
      document.getElementById('frontend-skills-container').innerHTML = skills.frontend.map(createNewSkillCard).join('');
      
      // 6. Populate "Projects" Page
      document.getElementById('software-projects-container').innerHTML = softwareProjects.map(createProjectCard).join('');
      document.getElementById('hardware-projects-container').innerHTML = hardwareProjects.map(createProjectCard).join('');
      
      // 7. Populate "Achievements" Page
      document.getElementById('achievements-container').innerHTML = achievements.map(createAchievementCard).join('');

      // 8. NEW: Populate "Certificates" Page
      const certContainer = document.getElementById('certificates-container');
      if (certContainer) { // Add a check to ensure container exists
        if (certificates && certificates.length > 0) {
          certContainer.innerHTML += certificates.map(createCertificateCard).join(''); // Use += to append
        } else {
          // If no dynamic certs, do nothing (to preserve hard-coded card).
          // Only add placeholder if the container is *truly* empty.
          if (certContainer.innerHTML.trim() === '') {
             certContainer.innerHTML = '<p class="text-gray-400 col-span-full">No certificates have been added yet.</p>';
          }
        }
      }

      // 9. Populate "Contact" (Footer) Page
      document.getElementById('contact-name-new').innerText = name;
      document.getElementById('contact-title-new').innerText = title;
      // Shorten the university name for the affiliation
      document.getElementById('contact-affiliation-new').innerText = education.university.split('-')[1]?.trim() || education.university;

      const newLinkedInLink = document.getElementById('contact-linkedin-new');
      if (newLinkedInLink) {
        newLinkedInLink.href = contact.linkedin;
      }
      
      const newEmailLink = document.getElementById('contact-email-new');
      if (newEmailLink) {
        newEmailLink.href = `mailto:${contact.email}`;
        newEmailLink.querySelector('span').innerText = contact.email;
      }
      
      const newPhoneLink = document.getElementById('contact-phone-new');
      if (newPhoneLink) {
        newPhoneLink.href = `tel:${contact.phone}`;
        newPhoneLink.querySelector('span').innerText = contact.phone;
      }
    }
    
    /**
     * Updates the personalized greeting text
     */
    function renderPersonalizedGreeting(role) {
      const formattedRole = role.charAt(0).toUpperCase() + role.slice(1);
      document.getElementById('personalized-greeting-text').innerText = `Hey ${formattedRole}!`;
    }

    /**
     * Main render function. Hides/shows pages based on state.
     */
    function renderApp() {
      // 1. Show/Hide Profile Selection vs Main App
      if (state.role) {
        profileSelectionPage.classList.add('hidden');
        mainPortfolioPage.classList.remove('hidden');
      } else {
        profileSelectionPage.classList.remove('hidden');
        mainPortfolioPage.classList.add('hidden');
        
        // NEW: Hide profile button on logout
        const navProfileButton = document.getElementById('nav-profile-button');
        if (navProfileButton) {
            navProfileButton.classList.add('hidden');
        }

        return; // We're done if logged out
      }
      
      // 2. Show/Hide the correct "View" (page)
      allViews.forEach(view => {
        if (view.id === `view-${state.activeView}`) {
          view.classList.remove('hidden');
        } else {
          view.classList.add('hidden');
        }
      });
      
      // 3. Show/Hide and Populate the Modal
      if (state.selectedProject) {
        const { title, desc, img, stack } = state.selectedProject;
        document.getElementById('modal-title').innerText = title;
        document.getElementById('modal-desc').innerText = desc;
        document.getElementById('modal-img').src = img;
        document.getElementById('modal-img').alt = title;
        document.getElementById('modal-stack-container').innerHTML = stack.map(createTechIcon).join('');
        projectModal.classList.remove('hidden');
      } else {
        projectModal.classList.add('hidden');
      }
    }
    
    // --- Event Handlers ---
    
    function handleProfileSelect(e) {
      // NEW: Play sound on first profile select
      /*
      if (!hasPlayedIntroSound) {
        playIntroSound();
        hasPlayedIntroSound = true;
      }
      */

      const originalRole = e.currentTarget.getAttribute('data-role'); // Get the original role
      if (!originalRole) return;
      
      // Map roles for state.role (if needed for other logic)
      if (originalRole === 'stalker') state.role = 'recruiter';
      else if (originalRole === 'adventurer') state.role = 'developer';
      else state.role = originalRole;

      // NEW: Get the profile image source and update the nav icon
      const imgEl = e.currentTarget.querySelector('img');
      const navProfileButton = document.getElementById('nav-profile-button');
      const navProfileImg = document.getElementById('nav-profile-img');

      if (imgEl && navProfileButton && navProfileImg) {
        navProfileImg.src = imgEl.src;
        navProfileButton.classList.remove('hidden');
      }
      
      state.activeView = 'home';
      renderPersonalizedGreeting(originalRole); // Use originalRole for greeting
      renderApp();
    }
    
    function handleNavClick(e) {
      const viewId = e.currentTarget.getAttribute('data-view');
      if (!viewId) return;
      
      // UPDATED LOGIC:
      // All nav links, including "Home", will just change the active view.
      // The profile icon button handles logging out.
      state.activeView = viewId;
      
      window.scrollTo({ top: 0, behavior: 'smooth' });
      renderApp();
    }
    
    function handleProjectCardClick(e) {
      const card = e.target.closest('.project-card');
      if (!card) return;
      
      const projectId = card.getAttribute('data-project-id');
      const allProjects = [...portfolioData.softwareProjects, ...portfolioData.hardwareProjects];
      state.selectedProject = allProjects.find(p => p.id == projectId);
      renderApp();
    }
    
    function handleCloseModal() {
      state.selectedProject = null;
      renderApp();
    }

    // NEW: Handler for clicking the profile icon to log out
    function handleProfileLogoutClick() {
      state.role = null;
      // Setting role to null is all that's needed.
      // renderApp() will see the null role and show the profile selection page.
      window.scrollTo({ top: 0, behavior: 'smooth' });
      renderApp();
    }
    
    // --- App Initialization ---
    
    window.addEventListener('DOMContentLoaded', () => {
      // 1. Populate all static content
      populateAllContent();
      
      // 2. Attach all event listeners
      
      // Profile selection buttons
      document.querySelectorAll('.profile-select-button').forEach(btn => {
        btn.addEventListener('click', handleProfileSelect);
      });
      
      // Navbar links AND "Pick Card" links (they share the .nav-link class)
      document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', handleNavClick);
      });
      
      // NEW: Add listener for the profile button
      document.getElementById('nav-profile-button').addEventListener('click', handleProfileLogoutClick);

      // Hero "View My Work" button (scrolls to top picks)
      document.getElementById('hero-view-work-btn').addEventListener('click', () => {
        document.getElementById('top-picks-container').scrollIntoView({ behavior: 'smooth' });
      });
      
      // Project card clicks (using event delegation)
      document.getElementById('software-projects-container').addEventListener('click', handleProjectCardClick);
      document.getElementById('hardware-projects-container').addEventListener('click', handleProjectCardClick);
      
      // Modal close buttons
      document.getElementById('project-modal-close-btn').addEventListener('click', handleCloseModal);
      document.getElementById('project-modal-backdrop').addEventListener('click', handleCloseModal);
      
      // 3. Initial render
      renderApp();
    });
