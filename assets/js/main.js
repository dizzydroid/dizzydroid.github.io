// Main JavaScript - Clean, minimal functionality

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    initializeNavigation();
    initializePersonaModal();
    initializeTerminalAnimation();
    initializeStatAnimations();
    initializeScrollEffects();
    initializeLucideIcons();
}

// Navigation functionality
function initializeNavigation() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Persona modal functionality
function initializePersonaModal() {
    const personaToggle = document.querySelector('.persona-toggle');
    const modal = document.getElementById('persona-modal');
    const modalClose = document.querySelector('.modal-close');
    const modalBackdrop = document.querySelector('.modal-backdrop');
    const personaCards = document.querySelectorAll('.persona-card');
    
    if (personaToggle && modal) {
        personaToggle.addEventListener('click', () => {
            openModal(modal);
        });
    }
    
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            closeModal(modal);
        });
    }
    
    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', () => {
            closeModal(modal);
        });
    }
    
    // Handle persona selection
    personaCards.forEach(card => {
        card.addEventListener('click', () => {
            const persona = card.dataset.persona;
            switchPersona(persona);
            closeModal(modal);
        });
    });
    
    // Load saved persona preference
    const savedPersona = localStorage.getItem('preferred-persona') || 'developer';
    switchPersona(savedPersona);
}

function openModal(modal) {
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    
    // Focus management
    const firstFocusable = modal.querySelector('button, a, input, [tabindex]');
    if (firstFocusable) {
        setTimeout(() => firstFocusable.focus(), 100);
    }
}

function closeModal(modal) {
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

function switchPersona(persona) {
    // Update body data attribute
    document.body.setAttribute('data-persona', persona);
    
    // Update persona cards active state
    document.querySelectorAll('.persona-card').forEach(card => {
        card.classList.toggle('active', card.dataset.persona === persona);
    });
    
    // Update dynamic content
    updatePersonaContent(persona);
    
    // Save preference
    localStorage.setItem('preferred-persona', persona);
}

function updatePersonaContent(persona) {
    const contentMap = {
        student: {
            greeting: 'Hello, Fellow Learner!',
            subtitle: 'A dedicated student exploring the world of code',
            description: 'Currently studying Computer Science and passionate about learning new technologies, building projects, and growing as a developer.',
            primaryAction: 'View Learning Journey',
            terminalOutput: `shehab@student-mode
OS: Learning Environment
Kernel: Curiosity 3.0
Uptime: Always Growing
Packages: JavaScript, Python, C++
Shell: VS Code
Theme: Student [Dark]
Status: Currently Learning`
        },
        recruiter: {
            greeting: 'Welcome, Recruiter!',
            subtitle: 'A skilled developer ready for new opportunities',
            description: 'Computer Science student with hands-on experience in full-stack development, strong problem-solving skills, and a passion for creating impactful solutions.',
            primaryAction: 'View Resume',
            terminalOutput: `shehab@professional-mode
OS: Career Ready
Kernel: Experience 2.0
Uptime: 2+ years coding
Packages: React, Node.js, Python
Experience: Multiple projects
Education: Computer Science
Status: Open to Opportunities`
        },
        developer: {
            greeting: 'Hello, World!',
            subtitle: 'A passionate developer crafting digital experiences',
            description: 'Building meaningful software with modern technologies, always learning something new, and sharing the journey with the community.',
            primaryAction: 'View Projects',
            terminalOutput: `shehab@dev-mode
OS: Code Environment
Kernel: Innovation 4.0
Uptime: Always Coding
Packages: React, Next.js, Node.js
Tools: Git, Docker, VS Code
Language: TypeScript
Status: Building Something Cool`
        },
        explorer: {
            greeting: 'Hey, Explorer!',
            subtitle: 'A creative mind exploring the digital frontier',
            description: 'Passionate about technology, design, and innovation. Always curious about new possibilities and excited to share discoveries.',
            primaryAction: 'Explore Projects',
            terminalOutput: `shehab@explorer-mode
OS: Discovery OS
Kernel: Creativity 5.0
Uptime: Always Exploring
Interests: Tech, Design, Innovation
Tools: Code, Art, Ideas
Mission: Building The Future
Status: Discovering New Horizons`
        }
    };
    
    const content = contentMap[persona] || contentMap.developer;
    
    // Update greeting
    const greetingElement = document.querySelector('.greeting-text');
    if (greetingElement) {
        greetingElement.textContent = content.greeting;
    }
    
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
    
    // Update primary action button
    const primaryButton = document.querySelector('.btn-primary span');
    if (primaryButton) {
        primaryButton.textContent = content.primaryAction;
    }
    
    // Update terminal output
    const terminalOutput = document.getElementById('terminal-output');
    if (terminalOutput) {
        terminalOutput.innerHTML = content.terminalOutput.split('\n').map(line => 
            `<div class="output-line">${line}</div>`
        ).join('');
    }
}

// Terminal typing animation
function initializeTerminalAnimation() {
    const terminalOutput = document.getElementById('terminal-output');
    if (!terminalOutput) return;
    
    // Add typing effect on load
    setTimeout(() => {
        terminalOutput.style.opacity = '0';
        terminalOutput.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            terminalOutput.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            terminalOutput.style.opacity = '1';
            terminalOutput.style.transform = 'translateY(0)';
        }, 500);
    }, 1000);
}

// Animate statistics counters
function initializeStatAnimations() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    stats.forEach(stat => {
        statsObserver.observe(stat);
    });
}

function animateCounter(element) {
    const target = parseInt(element.textContent);
    const suffix = element.textContent.replace(/\d+/g, '');
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + suffix;
    }, 16);
}

// Initialize Lucide icons
function initializeLucideIcons() {
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }
}

// Utility functions
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func(...args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func(...args);
    };
}

// Handle keyboard navigation
document.addEventListener('keydown', function(e) {
    // Close modal on Escape
    if (e.key === 'Escape') {
        const openModal = document.querySelector('.modal[aria-hidden="false"]');
        if (openModal) {
            closeModal(openModal);
        }
    }
    
    // Toggle mobile menu on menu key
    if (e.key === 'Menu') {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        if (mobileToggle) {
            mobileToggle.click();
        }
    }
});

// Handle reduced motion preferences
if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Disable animations for users who prefer reduced motion
    document.documentElement.style.setProperty('--transition-fast', '0s');
    document.documentElement.style.setProperty('--transition-normal', '0s');
    document.documentElement.style.setProperty('--transition-slow', '0s');
}

// Scroll effects for navbar
function initializeScrollEffects() {
    const navbar = document.querySelector('.main-nav');
    let isScrolled = false;
    
    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const shouldBeScrolled = scrollTop > 50;
        
        if (shouldBeScrolled !== isScrolled) {
            isScrolled = shouldBeScrolled;
            navbar.classList.toggle('scrolled', isScrolled);
        }
    }
    
    // Throttle scroll events
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    // Initial check
    handleScroll();
}

// Export functions for use in other modules
window.PortfolioApp = {
    switchPersona,
    openModal,
    closeModal,
    initializeLucideIcons
};
