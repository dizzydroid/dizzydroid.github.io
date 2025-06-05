// Main application logic
class PortfolioApp {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupThemeToggle();
        this.setupNavbarBehavior();
        this.setupContactForm();
        this.addEasterEggs();
    }
    
    setupThemeToggle() {
        // Add dark mode toggle if needed
        const toggleButton = document.querySelector('#theme-toggle');
        if (toggleButton) {
            toggleButton.addEventListener('click', this.toggleDarkMode);
        }
    }
    
    setupNavbarBehavior() {
        let lastScrollTop = 0;
        const navbar = document.querySelector('.main-nav');
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                // Scrolling down
                navbar.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                navbar.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;
        });
    }
    
    setupContactForm() {
        // Contact form handling will be added later
        console.log('Contact form setup ready');
    }
    
    addEasterEggs() {
        // Fun easter eggs
        let konamiCode = [];
        const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Up Up Down Down Left Right Left Right B A
        
        document.addEventListener('keydown', (e) => {
            konamiCode.push(e.keyCode);
            if (konamiCode.length > konamiSequence.length) {
                konamiCode.shift();
            }
            
            if (konamiCode.join(',') === konamiSequence.join(',')) {
                this.activateEasterEgg();
            }
        });
    }
    
    activateEasterEgg() {
        // Create fun animation or effect
        document.body.style.animation = 'rainbow 2s infinite';
        
        setTimeout(() => {
            document.body.style.animation = '';
            alert('🎉 You found the secret! Thanks for being curious!');
        }, 2000);
    }
    
    toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    }
}

// Utility functions
const utils = {
    // Debounce function for performance
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Smooth scroll to element
    scrollToElement(element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    },
    
    // Generate random ID
    generateId() {
        return Math.random().toString(36).substr(2, 9);
    }
};

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});

// Add some CSS for rainbow effect
const rainbowCSS = `
@keyframes rainbow {
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
}
`;

const style = document.createElement('style');
style.textContent = rainbowCSS;
document.head.appendChild(style);