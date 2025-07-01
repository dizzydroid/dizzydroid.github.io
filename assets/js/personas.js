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

// Initialize persona system
function initializePersonaSystem() {
    loadPersonaPreference();
    setupPersonaEventListeners();
    updatePersonaUI();
}

// Load saved persona preference
function loadPersonaPreference() {
    const savedPersona = localStorage.getItem('preferred-persona');
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
    
    // Save preference
    localStorage.setItem('preferred-persona', persona);
    
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
    
    // Update action buttons
    const primaryButton = document.querySelector('.btn-primary span');
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
            'shehab@learning-mode',
            'OS: Education Environment',
            'Kernel: Curiosity 3.0.1',
            'Uptime: Always Growing',
            'Packages: JavaScript, Python, C++',
            'Shell: VS Code Student Edition',
            'Theme: Learning [Dark]',
            'Status: Currently Studying'
        ],
        recruiter: [
            'shehab@professional-mode',
            'OS: Career Ready',
            'Kernel: Experience 2.1.0',
            'Uptime: 2+ years coding',
            'Skills: React, Node.js, Python',
            'Experience: Multiple Projects',
            'Education: Computer Science',
            'Status: Open to Opportunities'
        ],
        developer: [
            'shehab@dev-mode',
            'OS: Development Environment',
            'Kernel: Innovation 4.2.0',
            'Uptime: Always Coding',
            'Stack: React, Next.js, Node.js',
            'Tools: Git, Docker, VS Code',
            'Language: TypeScript Preferred',
            'Status: Building Something Cool'
        ],
        explorer: [
            'shehab@explorer-mode',
            'OS: Discovery OS',
            'Kernel: Creativity 5.0.0',
            'Uptime: Always Exploring',
            'Interests: Tech, Design, Art',
            'Tools: Code, Design, Ideas',
            'Mission: Building The Future',
            'Status: Discovering New Horizons'
        ]
    };
    
    const output = outputs[persona] || outputs.developer;
    
    // Clear and animate new content
    terminalOutput.innerHTML = '';
    
    output.forEach((line, index) => {
        setTimeout(() => {
            const lineElement = document.createElement('div');
            lineElement.className = 'output-line';
            lineElement.textContent = line;
            lineElement.style.opacity = '0';
            lineElement.style.transform = 'translateY(10px)';
            
            terminalOutput.appendChild(lineElement);
            
            // Animate line in
            setTimeout(() => {
                lineElement.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                lineElement.style.opacity = '1';
                lineElement.style.transform = 'translateY(0)';
            }, 50);
        }, index * 100);
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
                    window.PortfolioApp?.closeModal(modal);
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

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePersonaSystem);
} else {
    initializePersonaSystem();
}

// Export for external use
window.PersonaManager = {
    setActivePersona,
    getCurrentPersona,
    getPersonaConfig,
    personaConfig
};
