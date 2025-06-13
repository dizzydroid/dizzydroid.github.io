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
        
        // Hamburger menu functionality - guaranteed to work on all pages
        this.setupHamburgerMenu();
    }
    
    setupHamburgerMenu() {
        // Get mobile menu elements using both ID and class selector for better compatibility
        const hamburgerToggle = document.getElementById('hamburger-toggle');
        const mobileMenu = document.getElementById('mobile-menu') || document.querySelector('.nav-links');
        
        // console.log('Hamburger menu setup: ', {hamburgerToggle, mobileMenu});
        
        if (hamburgerToggle && mobileMenu) {
            // Define the toggle function
            const toggleMenu = function() {
                // console.log('Hamburger clicked');
                hamburgerToggle.classList.toggle('open');
                mobileMenu.classList.toggle('open');
                
                // Add body class to prevent scrolling when menu is open
                document.body.classList.toggle('menu-open');
            };
            
            // Remove existing event listeners by cloning the element
            const newHamburger = hamburgerToggle.cloneNode(true);
            hamburgerToggle.parentNode.replaceChild(newHamburger, hamburgerToggle);
            
            // Add event listener to the new element
            newHamburger.addEventListener('click', toggleMenu);
            
            // Close mobile menu when clicking a link
            const navLinks = document.querySelectorAll('.nav-links a');
            navLinks.forEach(link => {
                const newLink = link.cloneNode(true);
                link.parentNode.replaceChild(newLink, link);
                newLink.addEventListener('click', () => {
                    newHamburger.classList.remove('open');
                    mobileMenu.classList.remove('open');
                    document.body.classList.remove('menu-open');
                });
            });
        } else {
            console.error('Hamburger menu elements not found:', {
                hamburgerToggle: !!hamburgerToggle,
                mobileMenu: !!mobileMenu
            });
        }
        
        // Add active class to current page nav link
        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            if (currentPath.includes(linkPath) && linkPath !== 'index.html') {
                link.classList.add('active');
            } else if (currentPath.endsWith('/') && linkPath === 'index.html') {
                link.classList.add('active');
            }
        });
    }
    
    setupContactForm() {
        // Contact form handling will be added later
        // console.log('Contact form setup ready');
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

// Initialize the app - using var to make it globally accessible if needed
var appInstance;
document.addEventListener('DOMContentLoaded', () => {
    // Create the app instance
    appInstance = new PortfolioApp();
    
    // Explicitly set up the hamburger menu to ensure it works on all pages
    appInstance.setupHamburgerMenu();
    
    // console.log('PortfolioApp initialized');
});

// Add some CSS for rainbow effect
const rainbowCSS = `
@keyframes rainbow {
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
}
`;

const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = rainbowCSS;
document.head.appendChild(rainbowStyle);