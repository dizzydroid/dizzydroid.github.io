/**
 * blog-post.js - Enhances blog post pages with responsive behavior and interactions
 */

document.addEventListener('DOMContentLoaded', function() {
    // Responsive image handling
    handleResponsiveImages();
    
    // Table of contents functionality
    setupTableOfContents();
    
    // Code blocks functionality
    setupCodeBlocks();
    
    // Smooth scrolling
    setupSmoothScrolling();
    
    // Handle external links
    setupExternalLinks();
    
    // Responsive tables
    makeTablesResponsive();
    
    // Add touch gestures for navigation on mobile
    setupMobileGestures();
});

/**
 * Handle responsive images with lazy loading and fade-in effects
 */
function handleResponsiveImages() {
    // Add lazy loading to all images
    const images = document.querySelectorAll('.blog-post-content img:not([loading])');
    images.forEach(img => {
        img.setAttribute('loading', 'lazy');
        
        // Add fade-in effect
        img.style.opacity = '0';
        img.onload = function() {
            img.style.transition = 'opacity 0.5s ease';
            img.style.opacity = '1';
        };
        
        // Add click to zoom functionality for mobile
        if (window.innerWidth < 768) {
            img.addEventListener('click', function() {
                if (this.classList.contains('zoomed')) {
                    this.classList.remove('zoomed');
                    this.style.transform = '';
                } else {
                    this.classList.add('zoomed');
                    this.style.transform = 'scale(1.5)';
                }
            });
        }
    });
}

/**
 * Setup Table of Contents functionality
 */
function setupTableOfContents() {
    const toc = document.querySelector('.table-of-contents');
    if (!toc) return;
    
    const headings = document.querySelectorAll('h2[id], h3[id]');
    const tocLinks = document.querySelectorAll('.toc-list a');
    
    // Create TOC toggle for mobile
    if (window.innerWidth < 768) {
        const tocTitle = toc.querySelector('.toc-title');
        const tocList = toc.querySelector('.toc-list');
        
        // Add toggle icon
        const toggleIcon = document.createElement('i');
        toggleIcon.className = 'fas fa-chevron-down toggle-icon';
        tocTitle.appendChild(toggleIcon);
        
        // Initially hide the list on mobile
        tocList.style.display = 'none';
        tocTitle.classList.add('collapsed');
        
        tocTitle.addEventListener('click', function() {
            if (tocList.style.display === 'none' || !tocList.style.display) {
                tocList.style.display = 'block';
                tocTitle.classList.remove('collapsed');
                toggleIcon.className = 'fas fa-chevron-up toggle-icon';
            } else {
                tocList.style.display = 'none';
                tocTitle.classList.add('collapsed');
                toggleIcon.className = 'fas fa-chevron-down toggle-icon';
            }
        });
    }
    
    // Smooth scrolling for TOC links
    tocLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offset = 100; // Account for fixed navbar
                const elementPosition = targetElement.offsetTop - offset;
                
                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Highlight active TOC item on scroll
    function highlightTocItem() {
        if (!tocLinks.length) return;
        
        let scrollPosition = window.scrollY;
        let currentSection;
        
        // Find the current section
        for (let heading of headings) {
            if (heading.offsetTop - 100 <= scrollPosition) {
                currentSection = heading.id;
            }
        }
        
        // If no section is found, use the first one
        if (!currentSection && headings.length) {
            currentSection = headings[0].id;
        }
        
        // Remove highlight from all TOC items
        tocLinks.forEach(link => link.classList.remove('active'));
        
        // Add highlight to current TOC item
        if (currentSection) {
            const activeLink = document.querySelector(`.toc-list a[href="#${currentSection}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    }
    
    // Call on scroll and on load
    window.addEventListener('scroll', highlightTocItem);
    highlightTocItem();
}

/**
 * Add functionality to code blocks
 */
function setupCodeBlocks() {
    const codeBlocks = document.querySelectorAll('.code-block');
    
    codeBlocks.forEach(block => {
        // Add copy button if not already present
        if (!block.querySelector('.copy-btn')) {
            const copyBtn = document.createElement('button');
            copyBtn.className = 'copy-btn';
            copyBtn.textContent = 'Copy';
            copyBtn.setAttribute('aria-label', 'Copy code');
            
            copyBtn.addEventListener('click', () => {
                const code = block.querySelector('pre').textContent;
                navigator.clipboard.writeText(code.trim())
                    .then(() => {
                        copyBtn.textContent = 'Copied!';
                        setTimeout(() => {
                            copyBtn.textContent = 'Copy';
                        }, 2000);
                    })
                    .catch(err => {
                        console.error('Failed to copy: ', err);
                        copyBtn.textContent = 'Failed';
                    });
            });
            
            block.appendChild(copyBtn);
        }
    });
}

/**
 * Setup smooth scrolling for anchor links
 */
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update URL without page jump
                history.pushState(null, null, targetId);
            }
        });
    });
}

/**
 * Setup external links to open in new tab with proper security attributes
 */
function setupExternalLinks() {
    const domain = window.location.hostname;
    
    document.querySelectorAll('a').forEach(link => {
        // Check if the link is external
        if (link.hostname !== domain && link.hostname !== '') {
            // Don't modify if already set up
            if (link.hasAttribute('target') && link.getAttribute('target') === '_blank') return;
            
            // Open in new tab with security attributes
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
            
            // Add visual indicator for external links
            if (!link.querySelector('.fa-external-link-alt')) {
                const icon = document.createElement('i');
                icon.className = 'fas fa-external-link-alt';
                icon.style.fontSize = '0.8em';
                icon.style.marginLeft = '0.3em';
                link.appendChild(icon);
            }
        }
    });
}

/**
 * Make tables responsive
 */
function makeTablesResponsive() {
    document.querySelectorAll('table').forEach(table => {
        // Skip if already wrapped
        if (table.parentNode.classList.contains('table-responsive')) return;
        
        const wrapper = document.createElement('div');
        wrapper.className = 'table-responsive';
        wrapper.style.overflowX = 'auto';
        
        // Replace table with wrapper containing table
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
    });
}

/**
 * Setup touch gestures for mobile navigation
 */
function setupMobileGestures() {
    if (window.innerWidth >= 768) return;
    
    let touchStartX = 0;
    let touchEndX = 0;
    
    const container = document.querySelector('.blog-post-container');
    if (!container) return;
    
    // Get navigation links
    const prevLink = document.querySelector('.blog-post-navigation a:first-child');
    const nextLink = document.querySelector('.blog-post-navigation a:last-child');
    
    container.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);
    
    container.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);
    
    function handleSwipe() {
        const minSwipeDistance = 100;
        const swipeDistance = touchEndX - touchStartX;
        
        if (Math.abs(swipeDistance) < minSwipeDistance) return;
        
        // Swipe left (next)
        if (swipeDistance < 0 && nextLink && nextLink.getAttribute('href') !== '#') {
            window.location.href = nextLink.getAttribute('href');
        }
        // Swipe right (previous)
        else if (swipeDistance > 0 && prevLink && prevLink.getAttribute('href') !== '#') {
            window.location.href = prevLink.getAttribute('href');
        }
    }
}
