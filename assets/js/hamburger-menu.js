function setupHamburgerMenu() {
    // console.log('Setting up hamburger menu...');
    
    // Get mobile menu elements using both ID and class selector
    const hamburgerToggle = document.getElementById('hamburger-toggle');
    const mobileMenu = document.getElementById('mobile-menu') || document.querySelector('.nav-links');
    
    // console.log('Elements found:', { hamburgerToggle, mobileMenu });
    
    if (hamburgerToggle && mobileMenu) {
        // Define the toggle function
        const toggleMenu = function() {
            // console.log('Toggle menu clicked');
            hamburgerToggle.classList.toggle('open');
            mobileMenu.classList.toggle('open');
            document.body.classList.toggle('menu-open');
        };
        
        // Close menu function
        const closeMenu = function() {
            // console.log('Closing menu');
            hamburgerToggle.classList.remove('open');
            mobileMenu.classList.remove('open');
            document.body.classList.remove('menu-open');
        };
        
        // Add event listener for hamburger toggle
        hamburgerToggle.addEventListener('click', toggleMenu);
        
        // Close mobile menu when clicking a link (but allow navigation to happen)
        const navLinks = document.querySelectorAll('.nav-links a');
        // console.log('Found nav links:', navLinks.length);
        
        navLinks.forEach((link, index) => {
            // console.log(`Adding click listener to link ${index}:`, link.href);
            link.addEventListener('click', function(event) {
                // console.log('Nav link clicked:', this.href);
                // Allow the navigation to happen normally
                closeMenu();
            });
        });

        // Close menu when clicking outside the sidebar (but not on links inside it)
        document.addEventListener('click', function(event) {
            const isClickInsideMenu = mobileMenu.contains(event.target);
            const isClickOnHamburger = hamburgerToggle.contains(event.target);
            const isClickOnNavLink = event.target.closest('.nav-links a');
            
            // Only close if clicking outside the menu and not on hamburger or nav links
            if (!isClickInsideMenu && !isClickOnHamburger && !isClickOnNavLink && mobileMenu.classList.contains('open')) {
                // console.log('Closing menu due to outside click');
                closeMenu();
            }
        });

        // Close menu with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && mobileMenu.classList.contains('open')) {
                // console.log('Closing menu due to Escape key');
                closeMenu();
            }
        });
        
        // console.log('Hamburger menu setup complete');
    } else {
        console.error('Hamburger menu elements not found!');
    }
}

// Initialize menu as soon as DOM is ready
document.addEventListener('DOMContentLoaded', setupHamburgerMenu);

// Also try to set it up immediately if the document is already loaded
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(setupHamburgerMenu, 1);
}
