class PersonaEngine {
    constructor() {
        this.currentPersona = 'dev'; // Default to dev theme
        this.personas = {
            student: {
                badge: 'Welcome, Fellow Learner! 🎓',
                subtitle: 'A passionate CS student exploring the vast world of tech.',
                description: 'Computer Science student with insatiable curiosity for everything tech. Constantly building projects that challenge my understanding.',
                stats: [
                    { label: 'Courses Completed', value: 15, suffix: '+' },
                    { label: 'Study Projects', value: 20, suffix: '+' },
                    { label: 'Coffee Cups/Week', value: 9, suffix: '+' }
                ],                actions: [
                    { text: 'Study Projects', icon: '📚', href: 'projects.html' },
                    { text: 'GitHub Profile', icon: 'fab fa-github', href: 'https://github.com/dizzydroid' }
                ],
                neofetch: {
                    logo: '🎓',
                    user: 'student@learner',
                    title: 'CS Student',
                    lines: [
                        { label: 'Status', value: 'Learning & Growing' },
                        { label: 'Major', value: 'Computer Engineering' },
                        { label: 'Interests', value: 'Open Source, AI, Web Dev' },
                        { label: 'Hobbies', value: 'Coding, Gaming, Reading' },
                        { label: 'Languages', value: 'Java, C, C++, Python, Javascript' },
                        { label: 'Goal', value: 'Build Amazing Things' },
                        { label: 'Motto', value: 'Always stay curious' }
                    ]
                }
            },
            recruiter: {
                badge: 'Welcome, Talent Professional! 💼',
                subtitle: 'A motivated CS student ready to make an impact',
                description: 'Dedicated Computer Science student with strong problem-solving skills, project experience, and genuine passion for technology. Ready to contribute to innovative teams and grow professionally.',
                stats: [
                    { label: 'Projects Completed', value: 15, suffix: '+' },
                    { label: 'Technical Skills', value: 12, suffix: '+' },
                    { label: 'Soft Skills', value: 8, suffix: '+' }
                ],                actions: [
                    { text: 'View Resume', icon: 'fa-solid fa-file', iconStyle: 'color:rgb(255, 164, 164);', href: 'contact.html' },
                    { text: 'GitHub Profile', icon: 'fab fa-github', href: 'https://github.com/dizzydroid' }
                ],
                neofetch: {
                    logo: '💼',
                    user: 'candidate@hire',
                    title: 'Software Developer',
                    lines: [
                        { label: 'Name', value: 'Shehab Mahmoud' },
                        { label: 'Role', value: 'CS Student & Developer' },
                        { label: 'Experience', value: '2+ Years Projects' },
                        { label: 'Strengths', value: 'Problem Solving, Learning' },
                        { label: 'Availability', value: 'Open to Opportunities' },
                        { label: 'Work Style', value: 'Collaborative & Driven' }
                    ]
                }
            },
            dev: {
                badge: 'Hey there, Fellow Dev! 💻',
                subtitle: 'A coding enthusiast who lives for clean code and collaboration',
                description: 'Passionate developer who believes in the power of open source, continuous learning, and building meaningful software that makes a difference in people\'s lives.',
                stats: [
                    { label: 'GitHub Repos', value: 30, suffix: '+' },
                    { label: 'Commits This Year', value: 200, suffix: '+' },
                    { label: 'Stars Earned', value: 60, suffix: '+' }
                ],                actions: [
                    { text: 'Explore Code', icon: '🔍', href: 'projects.html' },
                    { text: 'GitHub Profile', icon: 'fab fa-github', href: 'https://github.com/dizzydroid' }
                ],
                neofetch: {
                    logo: '💻',
                    user: 'dev@terminal',
                    title: 'Exhausted Developer',
                    lines: [
                        { label: 'Host', value: 'Shehab\'s Workstation' },
                        { label: 'OS', value: 'Arch' },
                        { label: 'Uptime', value: '42 hrs' },
                        { label: 'Shell', value: 'zsh' },
                        { label: 'Packages', value: 'Java, Python, Node.js' },
                        { label: 'Status', value: 'stuck in Vim' }
                    ]
                }
            },
            other: {
                badge: 'Hello, Curious Explorer! 🌟',
                subtitle: 'A creative soul on an endless journey of discovery',
                description: 'Creative problem-solver who finds joy in experimenting with new technologies, building fun projects, and sharing discoveries along this amazing journey of continuous learning.',
                stats: [
                    { label: 'Fun Projects', value: 19, suffix: '+' },
                    { label: 'Experiments Tried', value: 35, suffix: '+' },
                    { label: 'Creative Ideas', value: 42, suffix: '+' }
                ],
                actions: [
                    { text: 'Fun Projects', icon: '🎨', href: 'projects.html' },
                    { text: 'GitHub Profile', icon: 'fab fa-github', href: 'https://github.com/dizzydroid' }
                ],
                neofetch: {
                    logo: '🌟',
                    user: 'explorer@universe',
                    title: 'Creative Developer',
                    lines: [
                        { label: 'Personality', value: 'Optimist & Dreamer' },
                        { label: 'Mode', value: 'Creative Exploration' },
                        { label: 'Passion', value: 'Building Cool Stuff' },
                        { label: 'Energy', value: 'Powered by Coffee' },
                        { label: 'Philosophy', value: 'Life is an Adventure' },
                        { label: 'Current Quest', value: 'Next Big Idea' }
                    ]
                }
            }
        };
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.showLoading();
        this.loadSavedPreference();
        this.applyPersona(this.currentPersona);
    }
    
    showLoading() {
        // Check if this is the first visit or a direct page load
        const hasVisitedBefore = sessionStorage.getItem('hasVisitedBefore');
        
        if (hasVisitedBefore) {
            // Skip loading animation for returning visitors
            document.getElementById('loading').classList.add('hidden');
            document.getElementById('main-content').classList.remove('hidden');
            this.startCountUpAnimations();
        } else {
            // First visit, show loading animation
            setTimeout(() => {
                document.getElementById('loading').classList.add('hidden');
                document.getElementById('main-content').classList.remove('hidden');
                this.startCountUpAnimations();
                
                // Set the flag that user has visited before
                sessionStorage.setItem('hasVisitedBefore', 'true');
            }, 1500);
        }
    }
    
    bindEvents() {
        // Persona icon clicks
        document.querySelectorAll('.persona-icon').forEach(icon => {
            icon.addEventListener('click', (e) => {
                const persona = e.currentTarget.dataset.persona;
                this.switchPersona(persona);
            });
        });

        // Terminal control interactions
        document.querySelector('.terminal-control.close').addEventListener('click', () => {
            this.minimizeTerminal();
        });
        
        document.querySelector('.terminal-control.maximize').addEventListener('click', () => {
            this.toggleTerminalFullscreen();
        });
    }
    
    switchPersona(newPersona) {
        if (newPersona === this.currentPersona) return;
        
        // Add transition effect
        document.body.classList.add('theme-changing');
        
        // Update active icon
        document.querySelectorAll('.persona-icon').forEach(icon => {
            icon.classList.remove('active');
        });
        document.querySelector(`.persona-icon.${newPersona}`).classList.add('active');
        
        // Apply new persona
        setTimeout(() => {
            this.currentPersona = newPersona;
            this.applyPersona(newPersona);
            
            // Remove transition class
            setTimeout(() => {
                document.body.classList.remove('theme-changing');
            }, 100);
        }, 150);
        
        // Store preference
        localStorage.setItem('preferredPersona', newPersona);
        
        // Show switch success message
        this.showSwitchFeedback(newPersona);
    }
    
    applyPersona(persona) {
        const config = this.personas[persona];
        
        // Apply theme class
        document.body.className = `persona-${persona}`;
        
        // Update content
        this.updateHeroContent(config);
        this.updateStats(config.stats);
        this.updateActions(config.actions);
        this.updateNeofetchTerminal(config.neofetch);
        this.updateActiveIcon(persona);
        
        // Restart animations for new content
        this.restartAnimations();
    }
    
    updateHeroContent(config) {
        document.getElementById('persona-badge').textContent = config.badge;
        document.getElementById('hero-subtitle').textContent = config.subtitle;
        document.querySelector('.hero-description').textContent = config.description;
    }
    
    updateStats(stats) {
        const statsContainer = document.getElementById('dynamic-stats');
        statsContainer.innerHTML = stats.map(stat => `
            <div class="stat">
                <div class="stat-number" data-target="${stat.value}" data-suffix="${stat.suffix}">0${stat.suffix}</div>
                <div class="stat-label">${stat.label}</div>
            </div>
        `).join('');
    }
        
    updateActions(actions) {
        const actionsContainer = document.getElementById('dynamic-actions');
        actionsContainer.innerHTML = actions.map((action, index) => `
            <a href="${action.href}" class="${index === 0 ? 'btn-primary' : 'btn-secondary'}" ${action.href.startsWith('http') ? 'target="_blank"' : ''}>
                <span>${action.text}</span>
                <i class="${action.icon}" ${action.iconStyle ? `style="${action.iconStyle}"` : ''}></i>
            </a>
        `).join('');
    }
        
    updateNeofetchTerminal(neofetchConfig) {
        // Update terminal title
        document.getElementById('terminal-title').textContent = `${neofetchConfig.user}:~$ neofetch`;
        
        // Update logo
        document.getElementById('neofetch-logo').textContent = neofetchConfig.logo;
        
        // Update info section
        const neofetchInfo = document.getElementById('neofetch-info');
        
        // Clear existing content and reset animations
        neofetchInfo.innerHTML = '';
        
        // Add title
        const titleLine = document.createElement('div');
        titleLine.className = 'neofetch-line';
        titleLine.innerHTML = `
            <span class="neofetch-label">User:</span>
            <span class="neofetch-value">${neofetchConfig.title}</span>
        `;
        neofetchInfo.appendChild(titleLine);
        
        // Add separator
        const separator = document.createElement('div');
        separator.className = 'neofetch-line';
        separator.innerHTML = '<span style="color: var(--primary-color);">─────────────────────</span>';
        neofetchInfo.appendChild(separator);
        
        // Add info lines
        neofetchConfig.lines.forEach(line => {
            const lineElement = document.createElement('div');
            lineElement.className = 'neofetch-line';
            lineElement.innerHTML = `
                <span class="neofetch-label">${line.label}:</span>
                <span class="neofetch-value">${line.value}</span>
            `;
            neofetchInfo.appendChild(lineElement);
        });
        
        // Add cursor
        const cursorLine = document.createElement('div');
        cursorLine.className = 'neofetch-line';
        cursorLine.innerHTML = `<span class="terminal-cursor">█</span>`;
        neofetchInfo.appendChild(cursorLine);
        
        // Restart terminal animations
        this.animateNeofetch();
    }
    
    animateNeofetch() {
        const lines = document.querySelectorAll('#neofetch-info .neofetch-line');
        lines.forEach((line, index) => {
            line.style.opacity = '0';
            line.style.animation = 'none';
            
            setTimeout(() => {
                line.style.animation = `terminalType 0.1s ease forwards`;
                line.style.animationDelay = `${index * 0.1}s`;
            }, 100);
        });
    }
    
    updateActiveIcon(persona) {
        document.querySelectorAll('.persona-icon').forEach(icon => {
            icon.classList.remove('active');
        });
        document.querySelector(`.persona-icon.${persona}`).classList.add('active');
    }
    
    startCountUpAnimations() {
        const numbers = document.querySelectorAll('.stat-number[data-target]');
        
        numbers.forEach(number => {
            const target = parseFloat(number.dataset.target);
            const suffix = number.dataset.suffix || '';
            let current = 0;
            const increment = target / 50;
            const isDecimal = target % 1 !== 0;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                
                const displayValue = isDecimal ? current.toFixed(1) : Math.floor(current);
                number.textContent = displayValue + suffix;
            }, 30);
        });
    }
    
    restartAnimations() {
        // Restart count-up animations for new stats
        setTimeout(() => {
            this.startCountUpAnimations();
        }, 300);
    }
    
    showPersonaSelector() {
        // Highlight all icons briefly to draw attention
        document.querySelectorAll('.persona-icon').forEach(icon => {
            icon.style.animation = 'pulse 0.5s ease';
        });
        
        setTimeout(() => {
            document.querySelectorAll('.persona-icon').forEach(icon => {
                icon.style.animation = '';
            });
        }, 500);
    }
    
    showSwitchFeedback(persona) {
        const personaNames = {
            student: 'Student Mode',
            recruiter: 'Professional Mode',
            dev: 'Developer Mode',
            other: 'Explorer Mode'
        };
        
        // Create feedback element
        const feedback = document.createElement('div');
        feedback.className = 'switch-feedback';
        feedback.textContent = `Switched to ${personaNames[persona]} ✨`;
        feedback.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: var(--primary-color);
            color: var(--bg-primary);
            padding: 0.75rem 1rem;
            border-radius: 8px;
            font-weight: 500;
            z-index: 1002;
            animation: slideInRight 0.3s ease;
        `;
        
        document.body.appendChild(feedback);
        
        setTimeout(() => {
            feedback.style.animation = 'slideOutRight 0.3s ease forwards';
            setTimeout(() => {
                document.body.removeChild(feedback);
            }, 300);
        }, 2000);
    }
    
    minimizeTerminal() {
        const terminal = document.querySelector('.neofetch-terminal');
        terminal.style.transform = 'scale(0.8)';
        terminal.style.opacity = '0.7';
        
        setTimeout(() => {
            terminal.style.transform = 'scale(1)';
            terminal.style.opacity = '1';
        }, 300);
    }
    
    toggleTerminalFullscreen() {
        const terminal = document.querySelector('.neofetch-terminal');
        terminal.classList.toggle('fullscreen');
        
        if (terminal.classList.contains('fullscreen')) {
            terminal.style.cssText += `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                max-width: 80vw;
                max-height: 80vh;
                z-index: 1001;
            `;
        } else {
            terminal.style.cssText = '';
        }
    }
    
    // Load saved preference
    loadSavedPreference() {
        const saved = localStorage.getItem('preferredPersona');
        if (saved && this.personas[saved]) {
            this.currentPersona = saved;
        }
    }
}

// CSS for additional animations
const additionalCSS = `
@keyframes slideOutRight {
    from { 
        opacity: 1; 
        transform: translateX(0); 
    }
    to { 
        opacity: 0; 
        transform: translateX(100%); 
    }
}

.switch-feedback {
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}
`;

// Inject CSS
const style = document.createElement('style');
style.textContent = additionalCSS;
document.head.appendChild(style);

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new PersonaEngine();
});