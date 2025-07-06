// Personas JavaScript - Clean persona management

// Persona configuration
const personaConfig = {
    student: {
        name: 'Student',
        icon: 'graduation-cap',
        theme: 'blue',
        description: 'Learning journey and educational content'
    },
    recruiter: {
        name: 'Recruiter', 
        icon: 'briefcase',
        theme: 'green',
        description: 'Professional experience and achievements'
    },
    developer: {
        name: 'Developer',
        icon: 'code',
        theme: 'cyan',
        description: 'Technical projects and development insights'
    },
    explorer: {
        name: 'Explorer',
        icon: 'compass',
        theme: 'purple',
        description: 'Creative projects and general overview'
    }
};

// Persona-specific content data
const personaContentData = {
    student: {
        profileTitle: 'Computer Science Student',
        intro: "I'm currently pursuing my studies in computer science while building practical skills through hands-on projects. My learning journey is focused on understanding both theoretical foundations and real-world applications of software development.",
        favorites: {
            'Platform': 'Stack Overflow',
            'Language': 'Java, Python',
            'Book': 'Head First Java',
            'Study Time': 'Late night coding',
            'IDE': 'VS Code',
            'Learning': 'Cybersecurity'
        },
        focus: [
            {
                icon: 'book-open',
                title: 'Academic Excellence',
            },
            {
                icon: 'users',
                title: 'Collaborative Learning',
            }
        ],
        connectDescription: "Always eager to connect with fellow students and learn from experienced developers!",
        facts: [
            { icon: 'graduation-cap', text: 'CS Student' },
            { icon: 'clock', text: 'Late night coder' },
            { icon: 'brain', text: 'Brainstormer' },
            { icon: 'users', text: 'Collaborative' }
        ]
    },
    recruiter: {
        profileTitle: 'Software Engineer',
        intro: "Experienced full-stack developer with a proven track record of delivering high-quality software solutions. I bring technical expertise combined with strong communication skills and a results-driven approach to every project.",
        favorites: {
            'Experience': '3+ Years',
            'Specialization': 'Software Development',
            'Team Size': '5-10 developers',
            'Methodology': 'Agile/Scrum',
            'Leadership': 'Technical Lead',
            'Environment': 'Collaborative'
        },
        focus: [
            {
                icon: 'briefcase',
                title: 'Professional Excellence',
            },
            {
                icon: 'users',
                title: 'Team Collaboration',
            }
        ],
        connectDescription: "Open to discussing career opportunities and technical challenges in software development.",
        facts: [
            { icon: 'briefcase', text: 'Professional experience' },
            { icon: 'award', text: 'Team leader' },
            { icon: 'trending-up', text: 'Performance focused' },
            { icon: 'handshake', text: 'Client relations' }
        ]
    },
    developer: {
        profileTitle: 'Full-Stack Developer',
        intro: "Passionate about creating elegant solutions to complex problems. I love diving deep into new technologies, contributing to open source, and building applications that make a real impact.",
        favorites: {
            'Editor': 'Vi',
            'Languages': 'Java, Python, JavaScript',
            'OS': 'Linux (Arch BTW)',
            'Terminal': 'Alacritty',
            'Shell': 'Zsh + Oh My Zsh',
            'Container': 'Docker + Kubernetes'
        },
        focus: [
            {
                icon: 'code-2',
                title: 'Clean Architecture',
            },
            {
                icon: 'git-branch',
                title: 'Open Source',
            }
        ],
        connectDescription: "Love connecting with fellow developers to discuss tech, share knowledge, and collaborate on interesting projects!",
        facts: [
            { icon: 'terminal', text: 'Living in shells' },
            { icon: 'coffee', text: 'Coffeeholic' },
            { icon: 'github', text: 'Open source advocate' },
            { icon: 'zap', text: 'Performance nerd' }
        ]
    },
    explorer: {
        profileTitle: 'Creative Technologist',
        intro: "I approach technology with curiosity and creativity, exploring the intersection of code, design, and human experience. Always excited about emerging technologies and their potential to solve real-world problems.",
        favorites: {
            'Inspiration': 'Behance',
            'Tools': 'Adobe CC',
            'Interest': 'Typography',
            'Hobby': 'Reading, Gaming',
            'Philosophy': 'Less is More',
            'Innovation': 'Humans'
        },
        focus: [
            {
                icon: 'palette',
                title: 'Design & Code',
            },
            {
                icon: 'lightbulb',
                title: 'Innovation',
            }
        ],
        connectDescription: "Always excited to connect with creative minds and explore the possibilities of technology!",
        facts: [
            { icon: 'gamepad', text: 'Occasional Gamer' },
            { icon: 'palette', text: 'Design enthusiast' },
            { icon: 'globe', text: 'Tech explorer' },
            { icon: 'rocket', text: 'Innovation driven' }
        ]
    }
};

// Initialize persona system
function initializePersonaSystem() {
    loadPersonaPreference();
    setupPersonaEventListeners();
    updatePersonaUI();
    checkFirstVisit();
}

// Load saved persona preference
function loadPersonaPreference() {
    let savedPersona = null;
    
    // Try to get saved persona with error handling for localStorage issues
    try {
        savedPersona = localStorage.getItem('preferred-persona');
    } catch (e) {
        console.warn('localStorage not available:', e);
    }
    
    const urlParams = new URLSearchParams(window.location.search);
    const urlPersona = urlParams.get('persona');
    
    // Priority: URL parameter > saved preference > default
    const activePersona = urlPersona || savedPersona || 'developer';
    
    if (personaConfig[activePersona]) {
        setActivePersona(activePersona);
    } else {
        setActivePersona('developer');
    }
}

// Set the active persona
function setActivePersona(persona) {
    if (!personaConfig[persona]) return;
    
    // Update body data attribute
    document.body.setAttribute('data-persona', persona);
    
    // Update active states in UI
    updatePersonaCardStates(persona);
    
    // Update content based on persona
    updatePersonaContent(persona);
    
    // Save preference with error handling
    try {
        localStorage.setItem('preferred-persona', persona);
    } catch (e) {
        console.warn('Could not save persona preference:', e);
    }
    
    // Trigger custom event
    document.dispatchEvent(new CustomEvent('personaChanged', {
        detail: { persona, config: personaConfig[persona] }
    }));
}

// Update persona card active states
function updatePersonaCardStates(activePersona) {
    document.querySelectorAll('.persona-card').forEach(card => {
        const cardPersona = card.dataset.persona;
        card.classList.toggle('active', cardPersona === activePersona);
        
        // Update aria-pressed for accessibility
        card.setAttribute('aria-pressed', cardPersona === activePersona ? 'true' : 'false');
    });
}

// Update content based on active persona
function updatePersonaContent(persona) {
    const config = personaConfig[persona];
    if (!config) return;
    
    // Update greeting
    updateGreeting(persona);
    
    // Update main content
    updateHeroContent(persona);
    
    // Update navigation
    updateNavigationHighlight(persona);
    
    // Update terminal output
    updateTerminalContent(persona);
    
    // Update About page content
    updateAboutPageContent(persona);
}

// Update greeting based on persona
function updateGreeting(persona) {
    const greetingElement = document.querySelector('.greeting-text');
    if (!greetingElement) return;
    
    const greetings = {
        student: 'Hello, Fellow Learner!',
        recruiter: 'Welcome, Recruiter!',
        developer: 'Hello, World!',
        explorer: 'Hey, Explorer!'
    };
    
    greetingElement.textContent = greetings[persona] || greetings.developer;
}

// Update hero content based on persona
function updateHeroContent(persona) {
    const contentMap = {
        student: {
            subtitle: 'A dedicated student exploring the world of code',
            description: 'Currently studying Computer Science and passionate about learning new technologies, building projects, and growing as a developer.',
            primaryAction: 'View Learning Journey',
            secondaryAction: 'Study Notes'
        },
        recruiter: {
            subtitle: 'A skilled developer ready for new opportunities',
            description: 'Computer Science student with hands-on experience in full-stack development, strong problem-solving skills, and a passion for creating impactful solutions.',
            primaryAction: 'View Resume',
            secondaryAction: 'Download CV'
        },
        developer: {
            subtitle: 'A passionate developer crafting digital experiences',
            description: 'Building meaningful software with modern technologies, always learning something new, and sharing the journey with the community.',
            primaryAction: 'View Projects',
            secondaryAction: 'Check GitHub'
        },
        explorer: {
            subtitle: 'A creative mind exploring the digital frontier',
            description: 'Passionate about technology, design, and innovation. Always curious about new possibilities and excited to share discoveries.',
            primaryAction: 'Explore Projects',
            secondaryAction: 'See Creative Work'
        }
    };
    
    const content = contentMap[persona] || contentMap.developer;
    
    // Update subtitle
    const subtitleElement = document.getElementById('dynamic-subtitle');
    if (subtitleElement) {
        subtitleElement.textContent = content.subtitle;
    }
    
    // Update description
    const descriptionElement = document.getElementById('dynamic-description');
    if (descriptionElement) {
        descriptionElement.textContent = content.description;
    }
    
    // Update action buttons (only on homepage)
    const primaryButton = document.querySelector('.hero-actions .btn-primary span');
    if (primaryButton) {
        primaryButton.textContent = content.primaryAction;
    }
}

// Update terminal content based on persona
function updateTerminalContent(persona) {
    const terminalOutput = document.getElementById('terminal-output');
    if (!terminalOutput) return;
    
    const outputs = {
        student: [
            'shehab@learning',
            'Uptime: Napping',
            'Packages: Java, Python',
            'Shell: Zsh',
            'Theme: Dark',
            'Status: Procrastinating'
        ],
        recruiter: [
            'shehab@professional',
            'OS: Career Ready',
            'Uptime: 4+ years coding',
            'Skills: Java, Node.js, React, Python',
            'Experience: Multiple Projects',
            'Education: Computer Engineering',
            'Status: Open to Opportunities'
        ],
        developer: [
            'shehab@dev',
            'OS: Development Environment',
            'Uptime: Coding when I feel like it',
            'Tools: Git, VS Code, Docker',
            'Status: Building Something Cool'
        ],
        explorer: [
            'shehab@explorer-mode',
            'OS: Discovery OS',
            'Uptime: Exploring',
            'Interests: Tech, Graphic Design, Gaming',
            'Status: Gaming probably'
        ]
    };
    
    const output = outputs[persona] || outputs.developer;
    
    // Clear and add new content without fade animation
    terminalOutput.innerHTML = '';
    
    output.forEach((line, index) => {
        setTimeout(() => {
            const lineElement = document.createElement('div');
            lineElement.className = 'output-line';
            lineElement.textContent = line;
            terminalOutput.appendChild(lineElement);
        }, index * 50); // Faster typing effect
    });
}

// Update navigation highlight
function updateNavigationHighlight(persona) {
    // This could be used to highlight different nav items based on persona
    // For now, we'll keep it simple but leave room for expansion
    const config = personaConfig[persona];
    if (config) {
        document.documentElement.style.setProperty('--current-persona-color', 
            `var(--persona-primary, var(--accent-primary))`);
    }
}

// Update About page content based on persona
function updateAboutPageContent(persona) {
    const data = personaContentData[persona];
    if (!data) return;
    
    // Update profile title
    const profileTitle = document.getElementById('profile-title');
    if (profileTitle) {
        profileTitle.textContent = data.profileTitle;
    }
    
    // Update introduction text
    const dynamicIntro = document.getElementById('dynamic-intro');
    if (dynamicIntro) {
        dynamicIntro.innerHTML = `<p>${data.intro}</p>`;
    }
    
    // Update favorites section
    const personaFavorites = document.getElementById('persona-favorites');
    if (personaFavorites && data.favorites) {
        personaFavorites.innerHTML = Object.entries(data.favorites)
            .map(([key, value]) => `
                <div class="favorite-item">
                    <div class="favorite-label">${key}</div>
                    <div class="favorite-value">${value}</div>
                </div>
            `).join('');
    }
    
    // Update current focus
    const dynamicFocus = document.getElementById('dynamic-focus');
    if (dynamicFocus && data.focus) {
        dynamicFocus.innerHTML = data.focus.map(item => `
            <div class="focus-item">
                <div class="focus-icon">
                    <i data-lucide="${item.icon}"></i>
                </div>
                <div class="focus-content">
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                </div>
            </div>
        `).join('');
    }
    
    // Update connect description
    const connectDescription = document.getElementById('connect-description');
    if (connectDescription) {
        connectDescription.textContent = data.connectDescription;
    }
    
    // Update fun facts
    const dynamicFacts = document.getElementById('dynamic-facts');
    if (dynamicFacts && data.facts) {
        dynamicFacts.innerHTML = data.facts.map(fact => `
            <div class="fact-item">
                <i data-lucide="${fact.icon}"></i>
                <span>${fact.text}</span>
            </div>
        `).join('');
    }
    
    // Re-initialize Lucide icons for new content
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons({
            strokeWidth: 2,
            fill: 'none'
        });
    }
}

// Setup event listeners for persona interactions
function setupPersonaEventListeners() {
    // Persona card clicks
    document.querySelectorAll('.persona-card').forEach(card => {
        card.addEventListener('click', () => {
            const persona = card.dataset.persona;
            if (persona && personaConfig[persona]) {
                setActivePersona(persona);
                
                // Close modal if open
                const modal = document.getElementById('persona-modal');
                if (modal && modal.getAttribute('aria-hidden') === 'false') {
                    // Use PortfolioApp.closeModal if available, otherwise close directly
                    if (window.PortfolioApp?.closeModal) {
                        window.PortfolioApp.closeModal(modal);
                    } else {
                        modal.setAttribute('aria-hidden', 'true');
                        document.body.style.overflow = '';
                    }
                }
            }
        });
        
        // Keyboard support
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
    
    // Listen for external persona changes
    document.addEventListener('personaChanged', (e) => {
        console.log('Persona changed to:', e.detail.persona);
        updatePersonaUI();
    });
}

// Update persona UI elements
function updatePersonaUI() {
    const currentPersona = document.body.getAttribute('data-persona') || 'developer';
    const config = personaConfig[currentPersona];
    
    if (!config) return;
    
    // Update persona toggle icon if it exists
    const personaToggle = document.querySelector('.persona-toggle');
    if (personaToggle) {
        personaToggle.setAttribute('title', `Current: ${config.name}`);
    }
    
    // Update any other UI elements that depend on persona
    updatePersonaCardStates(currentPersona);
}

// Utility function to get current persona
function getCurrentPersona() {
    return document.body.getAttribute('data-persona') || 'developer';
}

// Utility function to get persona config
function getPersonaConfig(persona) {
    return personaConfig[persona] || null;
}

// Check if this is the first visit and show persona modal
function checkFirstVisit() {
    let hasVisited = false;
    
    try {
        hasVisited = localStorage.getItem('has-visited-before') === 'true';
    } catch (e) {
        console.warn('localStorage not available for first visit check:', e);
    }
    
    if (!hasVisited) {
        // Mark as visited
        try {
            localStorage.setItem('has-visited-before', 'true');
        } catch (e) {
            console.warn('Could not save visit status:', e);
        }
        
        // Auto-open persona modal after a short delay
        setTimeout(() => {
            const modal = document.getElementById('persona-modal');
            if (modal && window.PortfolioApp?.openModal) {
                window.PortfolioApp.openModal(modal);
            }
        }, 1500); // Delay to let the page load and animations settle
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePersonaSystem);
} else {
    // If DOM is already loaded, wait a bit to ensure other scripts have initialized
    setTimeout(initializePersonaSystem, 100);
}

// Export for external use
window.PersonaManager = {
    setActivePersona,
    getCurrentPersona,
    getPersonaConfig,
    personaConfig
};
