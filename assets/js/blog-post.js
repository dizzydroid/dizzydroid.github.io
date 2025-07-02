/**
 * blog-post.js - Enhances blog post pages with responsive behavior and interactions
 */

document.addEventListener('DOMContentLoaded', function() {
    // Only run on blog post pages
    if (!document.querySelector('.blog-post')) return;
    
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
    
    // Setup social sharing
    setupSocialSharing();
    
    // Reading progress indicator
    setupReadingProgress();
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
                    this.style.zIndex = '1000';
                    this.style.position = 'relative';
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
        
        if (tocTitle && tocList) {
            // Add toggle icon
            const toggleIcon = document.createElement('i');
            toggleIcon.setAttribute('data-lucide', 'chevron-down');
            toggleIcon.className = 'toggle-icon';
            tocTitle.appendChild(toggleIcon);
            
            // Initially hide the list on mobile
            tocList.style.display = 'none';
            tocTitle.classList.add('collapsed');
            
            tocTitle.addEventListener('click', function() {
                if (tocList.style.display === 'none' || !tocList.style.display) {
                    tocList.style.display = 'block';
                    tocTitle.classList.remove('collapsed');
                    toggleIcon.setAttribute('data-lucide', 'chevron-up');
                } else {
                    tocList.style.display = 'none';
                    tocTitle.classList.add('collapsed');
                    toggleIcon.setAttribute('data-lucide', 'chevron-down');
                }
                
                // Refresh Lucide icons
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons(tocTitle, {
                        strokeWidth: 2,
                        fill: 'none'
                    });
                }
            });
        }
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
            if (heading.offsetTop - 150 <= scrollPosition) {
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
    const codeBlocks = document.querySelectorAll('pre');
    
    codeBlocks.forEach(pre => {
        let wrapper = pre.parentElement;
        
        // Wrap in code-block container if not already
        if (!wrapper.classList.contains('code-block')) {
            wrapper = document.createElement('div');
            wrapper.className = 'code-block';
            pre.parentNode.insertBefore(wrapper, pre);
            wrapper.appendChild(pre);
        }
        
        // Add copy button if not already present
        if (!wrapper.querySelector('.copy-btn')) {
            const copyBtn = document.createElement('button');
            copyBtn.className = 'copy-btn';
            copyBtn.innerHTML = '<i data-lucide="copy"></i><span>Copy</span>';
            copyBtn.setAttribute('aria-label', 'Copy code');
            
            copyBtn.addEventListener('click', () => {
                const code = pre.textContent;
                navigator.clipboard.writeText(code.trim())
                    .then(() => {
                        copyBtn.innerHTML = '<i data-lucide="check"></i><span>Copied!</span>';
                        setTimeout(() => {
                            copyBtn.innerHTML = '<i data-lucide="copy"></i><span>Copy</span>';
                            if (typeof lucide !== 'undefined') {
                                lucide.createIcons(copyBtn, {
                                    strokeWidth: 2,
                                    fill: 'none'
                                });
                            }
                        }, 2000);
                    })
                    .catch(err => {
                        console.error('Failed to copy: ', err);
                        copyBtn.innerHTML = '<i data-lucide="x"></i><span>Failed</span>';
                    });
                
                // Refresh Lucide icons
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons(copyBtn, {
                        strokeWidth: 2,
                        fill: 'none'
                    });
                }
            });
            
            wrapper.appendChild(copyBtn);
            
            // Initialize Lucide icons for the button
            if (typeof lucide !== 'undefined') {
                lucide.createIcons(copyBtn, {
                    strokeWidth: 2,
                    fill: 'none'
                });
            }
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
                const offset = 100;
                const elementPosition = targetElement.offsetTop - offset;
                
                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
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
    
    document.querySelectorAll('.blog-post-content a').forEach(link => {
        // Check if the link is external
        if (link.hostname !== domain && link.hostname !== '') {
            // Don't modify if already set up
            if (link.hasAttribute('target') && link.getAttribute('target') === '_blank') return;
            
            // Open in new tab with security attributes
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
            
            // Add visual indicator for external links
            if (!link.querySelector('[data-lucide="external-link"]')) {
                const icon = document.createElement('i');
                icon.setAttribute('data-lucide', 'external-link');
                icon.style.width = '0.8em';
                icon.style.height = '0.8em';
                icon.style.marginLeft = '0.3em';
                icon.style.display = 'inline';
                link.appendChild(icon);
                
                // Initialize Lucide icon
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons(link);
                }
            }
        }
    });
}

/**
 * Make tables responsive
 */
function makeTablesResponsive() {
    document.querySelectorAll('.blog-post-content table').forEach(table => {
        // Skip if already wrapped
        if (table.parentNode.classList.contains('table-responsive')) return;
        
        const wrapper = document.createElement('div');
        wrapper.className = 'table-responsive';
        wrapper.style.overflowX = 'auto';
        wrapper.style.marginBottom = 'var(--space-lg)';
        
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
    
    const container = document.querySelector('.blog-post');
    if (!container) return;
    
    // Get navigation links
    const navLinks = document.querySelectorAll('.blog-post-nav-link');
    const prevLink = navLinks[0];
    const nextLink = navLinks[1];
    
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
        if (swipeDistance < 0 && nextLink && nextLink.getAttribute('href') !== '../blog.html') {
            window.location.href = nextLink.getAttribute('href');
        }
        // Swipe right (previous)
        else if (swipeDistance > 0 && prevLink && prevLink.getAttribute('href') !== '../blog.html') {
            window.location.href = prevLink.getAttribute('href');
        }
    }
}

/**
 * Setup social sharing functionality
 */
function setupSocialSharing() {
    const socialButtons = document.querySelectorAll('.social-share-button');
    
    socialButtons.forEach(button => {
        // Update existing social share buttons to use Lucide icons
        const iconWrapper = button.querySelector('.icon-wrapper');
        if (iconWrapper) {
            const oldIcon = iconWrapper.querySelector('i');
            if (oldIcon) {
                let lucideIcon = '';
                if (oldIcon.classList.contains('fa-twitter')) lucideIcon = 'twitter';
                else if (oldIcon.classList.contains('fa-facebook-f')) lucideIcon = 'facebook';
                else if (oldIcon.classList.contains('fa-linkedin-in')) lucideIcon = 'linkedin';
                else if (oldIcon.classList.contains('fa-link')) lucideIcon = 'link';
                
                if (lucideIcon) {
                    iconWrapper.innerHTML = `<i data-lucide="${lucideIcon}"></i>`;
                    if (typeof lucide !== 'undefined') {
                        lucide.createIcons(iconWrapper);
                    }
                }
            }
        }
    });
}

/**
 * Setup reading progress indicator
 */
function setupReadingProgress() {
    // Create progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.innerHTML = '<div class="reading-progress-fill"></div>';
    
    // Add to page
    document.body.appendChild(progressBar);
    
    const progressFill = progressBar.querySelector('.reading-progress-fill');
    
    function updateProgress() {
        const article = document.querySelector('.blog-post-content');
        if (!article) return;
        
        const articleTop = article.offsetTop;
        const articleHeight = article.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollTop = window.scrollY;
        
        // Calculate progress
        const articleBottom = articleTop + articleHeight;
        const windowBottom = scrollTop + windowHeight;
        
        let progress = 0;
        if (scrollTop > articleTop) {
            progress = (scrollTop - articleTop) / (articleHeight - windowHeight);
            progress = Math.min(Math.max(progress, 0), 1);
        }
        
        progressFill.style.width = `${progress * 100}%`;
    }
    
    window.addEventListener('scroll', updateProgress);
    updateProgress();
}

// Add CSS for reading progress if not already present
if (!document.querySelector('#reading-progress-styles')) {
    const style = document.createElement('style');
    style.id = 'reading-progress-styles';
    style.textContent = `
        .reading-progress {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: var(--bg-secondary);
            z-index: 9999;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .reading-progress.visible {
            opacity: 1;
        }
        
        .reading-progress-fill {
            height: 100%;
            background: var(--accent-primary);
            width: 0%;
            transition: width 0.1s ease;
        }
        
        .code-block {
            position: relative;
            margin: var(--space-lg) 0;
        }
        
        .copy-btn {
            position: absolute;
            top: var(--space-sm);
            right: var(--space-sm);
            display: flex;
            align-items: center;
            gap: var(--space-xs);
            padding: var(--space-xs) var(--space-sm);
            background: var(--bg-card);
            border: 1px solid var(--border-secondary);
            border-radius: var(--radius-sm);
            color: var(--text-secondary);
            font-size: 0.75rem;
            cursor: pointer;
            transition: var(--transition-normal);
            z-index: 10;
        }
        
        .copy-btn:hover {
            background: var(--bg-tertiary);
            color: var(--text-primary);
        }
        
        .copy-btn i {
            width: 12px;
            height: 12px;
        }
        
        @media (max-width: 768px) {
            .copy-btn span {
                display: none;
            }
        }
    `;
    document.head.appendChild(style);
}
