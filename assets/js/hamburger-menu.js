/**
 * hamburger-menu.js - Provides consistent hamburger menu functionality across all pages
 */

function setupHamburgerMenu() {
    // Get mobile menu elements using both ID and class selector for better compatibility
    const hamburgerToggle = document.getElementById('hamburger-toggle');
    const mobileMenu = document.getElementById('mobile-menu') || document.querySelector('.nav-links');
    
    if (hamburgerToggle && mobileMenu) {
        // Define the toggle function
        const toggleMenu = function() {
            hamburgerToggle.classList.toggle('open');
            mobileMenu.classList.toggle('open');
            document.body.classList.toggle('menu-open');
        };
        
        // Add event listener
        hamburgerToggle.addEventListener('click', toggleMenu);
        
        // Close mobile menu when clicking a link
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburgerToggle.classList.remove('open');
                mobileMenu.classList.remove('open');
                document.body.classList.remove('menu-open');
            });
        });

        // Also close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideMenu = mobileMenu.contains(event.target);
            const isClickOnHamburger = hamburgerToggle.contains(event.target);
            
            if (!isClickInsideMenu && !isClickOnHamburger && mobileMenu.classList.contains('open')) {
                hamburgerToggle.classList.remove('open');
                mobileMenu.classList.remove('open');
                document.body.classList.remove('menu-open');
            }
        });
    } 
}

// Initialize menu as soon as DOM is ready
document.addEventListener('DOMContentLoaded', setupHamburgerMenu);

// Also try to set it up immediately if the document is already loaded
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(setupHamburgerMenu, 1);
}
