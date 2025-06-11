class BlogManager {
    constructor() {
        // Blog post data structure
        this.blogPosts = [
            {
                id: 1,
                title: "Open Your Eyes",
                excerpt: "How many more thousands of children have to die? How many more families need to be torn apart? How long will the world stay silent? How long will you keep your eyes closed?",
                content: "",
                image: "images/palestinebanner.png",
                category: "thoughts",
                date: "May 15, 2024",
                readTime: "7 min read",
                featured: true,
                url: "blog/open-your-eyes.html",
                popularity: 24
            },
            {
                id: 2,
                title: "𝚜𝚔𝚖𝚋𝚕",
                excerpt: "A really simple arcade-style game with great personality ^_^ , you play as that green fella dodging the red fellas falling from the sky, but it gets trickier! How long can you skimble?",
                content: "",
                image: "images/skimblegif.gif",
                category: "coding",
                date: "September 29, 2023",
                readTime: "3 min read",
                featured: false,
                url: "https://dizzydroid.github.io/skimble",
                externalLinks: {
                    play: "https://dizzydroid.github.io/skimble",
                    repo: "https://github.com/dizzydroid/skimble"
                },
                popularity: 3
            },
            {
                id: 3,
                title: "Tell your story, your way.",
                excerpt: "Have you ever wanted to showcase yourself in a few simple steps? Look no further! With basic HTML knowledge, you can edit this website to act as your own simple portfolio, fully customizable to your needs!",
                content: "",
                image: "images/portfoliod.png",
                category: "design",
                date: "August 16, 2023",
                readTime: "4 min read",
                featured: false,
                url: "https://dizzydroid.github.io/portfoliod",
                externalLinks: {
                    site: "https://dizzydroid.github.io/portfoliod",
                    repo: "https://github.com/dizzydroid/portfoliod"
                },
                popularity: 2
            },
            {
                id: 4,
                title: "In quoting others, we cite ourselves..",
                excerpt: "This simple website generates random quotes everytime you visit it, so there's always something new to digest! If you're lucky enough, you'll even find my personal favorite quotes in there, labeled!",
                content: "",
                image: "images/quotes.png",
                category: "coding",
                date: "May 26, 2023",
                readTime: "2 min read",
                featured: false,
                url: "https://dizzydroid.github.io/quotes",
                externalLinks: {
                    site: "https://dizzydroid.github.io/quotes",
                    repo: "https://www.github.com/dizzydroid/quotes"
                },
                popularity: 3
            },
            {
                id: 5,
                title: "Earth is what we all have in common..",
                excerpt: "Celebrating Earth Day 2023! Get to know more about our planet and how to protect it, check out EarthDay's website and take this quiz to test your knowledge about our planet!",
                content: "",
                image: "images/earthday.png",
                category: "thoughts",
                date: "April 22, 2023",
                readTime: "5 min read",
                featured: false,
                url: "https://dizzydroid.github.io/earth-day-quiz",
                externalLinks: {
                    quiz: "https://dizzydroid.github.io/earth-day-quiz",
                    repo: "https://github.com/dizzydroid/earth-day-quiz"
                },
                popularity: 3
            },
            {
                id: 6,
                title: "The Illusion of Thinking: How close are we to AGI?",
                excerpt: "Artificial General Intelligence (AGI) is a topic of great interest and debate in the tech community. This article largely discusses the recent paper by Apple: 'The Illusion of Thinking: Understanding the Strengths and Limitations of Reasoning Models via the Lens of Problem Complexity'",
                content: "",
                image: "images/agi.png",
                category: "artificial-intelligence",
                date: "June 8, 2025",
                readTime: "5 min read",
                featured: false,
                url: "blog/agi-illusion-of-thinking.html",
                popularity: 2
            },
            {
                id: 7,
                title: "Design Patterns in a Nutshell",
                excerpt: "A beginner-friendly handbook that serves as a guide/quick reference for most design patterns covered by the Gang of Four, with a companion repository containing code examples in Java.",
                content: "",
                image: "images/dpn.png",
                category: "tutorials",
                date: "January 10, 2025",
                readTime: "1.3 hr read",
                featured: false,
                url: "https://drive.google.com/file/d/19qE0GULc0QBZ7pHO0XIFj_GkTRuBpd5v/view",
                externalLinks: {
                    book: "https://drive.google.com/file/d/19qE0GULc0QBZ7pHO0XIFj_GkTRuBpd5v/view",
                    repo: "https://github.com/dizzydroid/DesignPatternsNutshell"
                },
                popularity: 27
            }
        ];
        
        this.currentPage = 1;
        this.postsPerPage = 6;
        this.filteredPosts = [...this.blogPosts];
        this.sortMethod = 'newest';
        this.currentCategory = 'all';
        this.searchTerm = '';
        
        this.init();
    }
    
    init() {
        this.renderFeaturedPost();
        this.setupCategoryFilter();
        this.setupSearchFunctionality();
        this.setupSortingDropdown();
        this.setupHamburgerMenu();
        this.renderPosts();
        this.setupPagination();
    }
      renderFeaturedPost() {
        const featuredPost = this.blogPosts.find(post => post.featured);
        if (!featuredPost) return;
        
        const featuredSection = document.querySelector('.featured-post-section');
        if (!featuredSection) return;
        
        // Clear existing content
        featuredSection.innerHTML = '';
        
        // Create featured post HTML
        const featuredPostHTML = `
            <div class="featured-post">
                <img src="${featuredPost.image}" alt="${featuredPost.title}" class="featured-post-img">
                <div class="featured-post-content">
                    <div>
                        <span class="featured-tag">Featured</span>
                        <h2 class="featured-title">${featuredPost.title}</h2>
                        <p class="featured-excerpt">${featuredPost.excerpt}</p>
                    </div>
                    <div>
                        <div class="featured-meta">
                            <span><i class="far fa-calendar"></i> ${featuredPost.date}</span>
                            <span><i class="far fa-clock"></i> ${featuredPost.readTime}</span>
                        </div>
                        <a href="${featuredPost.url}" class="read-more">Read Article <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        `;
        
        featuredSection.innerHTML = featuredPostHTML;
    }
    
    renderPosts() {
        const startIndex = (this.currentPage - 1) * this.postsPerPage;
        const endIndex = startIndex + this.postsPerPage;
        
        // Filter posts based on category and search term
        this.filteredPosts = this.blogPosts.filter(post => {
            // Skip featured post in the grid
            if (post.featured) return false;
            
            // Apply category filter
            const categoryMatch = this.currentCategory === 'all' || post.category === this.currentCategory;
            
            // Apply search filter
            const searchMatch = this.searchTerm === '' || 
                post.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                post.excerpt.toLowerCase().includes(this.searchTerm.toLowerCase());
                
            return categoryMatch && searchMatch;
        });
        
        // Sort filtered posts
        this.sortPosts();
        
        // Get current page posts
        const currentPagePosts = this.filteredPosts.slice(startIndex, endIndex);
        
        // Get container
        const postsContainer = document.getElementById('blog-posts-container');
        if (!postsContainer) return;
        
        // Clear container
        postsContainer.innerHTML = '';
        
        // If no posts match filters
        if (currentPagePosts.length === 0) {
            postsContainer.innerHTML = `
                <div class="no-posts-message">
                    <i class="fas fa-search"></i>
                    <h3>No posts found</h3>
                    <p>Try adjusting your search or filter to find what you're looking for.</p>
                </div>
            `;
            this.updatePagination();
            return;
        }
        
        // Render posts
        currentPagePosts.forEach(post => {
            const postHTML = this.createPostHTML(post);
            postsContainer.innerHTML += postHTML;
        });
        
        this.updatePagination();
    }
    
    createPostHTML(post) {
        let externalLinksHTML = '';
        
        if (post.externalLinks) {
            const links = [];
            if (post.externalLinks.play) links.push(`<a href="${post.externalLinks.play}" target="_blank" class="external-link">Play Now</a>`);
            if (post.externalLinks.site) links.push(`<a href="${post.externalLinks.site}" target="_blank" class="external-link">Visit Site</a>`);
            if (post.externalLinks.repo) links.push(`<a href="${post.externalLinks.repo}" target="_blank" class="external-link">View Repo</a>`);
            if (post.externalLinks.quiz) links.push(`<a href="${post.externalLinks.quiz}" target="_blank" class="external-link">Take Quiz</a>`);
            if (post.externalLinks.book) links.push(`<a href="${post.externalLinks.book}" target="_blank" class="external-link">Read Book</a>`);

            externalLinksHTML = links.join('');
        }
        
        return `
            <div class="blog-post" data-category="${post.category}" data-id="${post.id}">
                <div class="blog-post-img-container">
                    <img src="${post.image}" alt="${post.title}" class="blog-post-img">
                </div>
                <div class="blog-post-content">
                    <span class="blog-post-tag">${this.getCategoryName(post.category)}</span>
                    <h3 class="blog-post-title">${post.title}</h3>
                    <p class="blog-post-excerpt">${post.excerpt}</p>
                    <div class="blog-post-meta">
                        <span><i class="far fa-calendar"></i> ${post.date}</span>
                        <span><i class="far fa-clock"></i> ${post.readTime}</span>
                    </div>
                    <div class="blog-post-actions">
                        ${externalLinksHTML || `<a href="${post.url}" class="read-more">Read Article <i class="fas fa-arrow-right"></i></a>`}
                    </div>
                </div>
            </div>
        `;
    }
    
    getCategoryName(categorySlug) {
        const categories = {
            'coding': 'Coding',
            'design': 'Design',
            'tutorials': 'Tutorials',
            'tools': 'Dev Tools',
            'thoughts': 'Thoughts',
            'artificial-intelligence': 'AI',
            'cybersecurity': 'Security'
        };
        
        return categories[categorySlug] || categorySlug;
    }
    
    setupCategoryFilter() {
        const categoryTags = document.querySelectorAll('.category-tag');
        
        categoryTags.forEach(tag => {
            tag.addEventListener('click', () => {
                // Remove active class from all tags
                categoryTags.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tag
                tag.classList.add('active');
                
                // Update current category
                this.currentCategory = tag.getAttribute('data-category');
                
                // Reset to first page
                this.currentPage = 1;
                
                // Render posts with new filter
                this.renderPosts();
            });
        });
    }
    
    setupSearchFunctionality() {
        const searchInput = document.getElementById('blog-search-input');
        const searchButton = document.querySelector('.blog-search button');
        
        if (searchInput) {
            // Search on input with debounce
            searchInput.addEventListener('input', this.debounce(() => {
                this.searchTerm = searchInput.value.trim();
                this.currentPage = 1;
                this.renderPosts();
            }, 300));
            
            // Search on enter key
            searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    this.searchTerm = searchInput.value.trim();
                    this.currentPage = 1;
                    this.renderPosts();
                }
            });
            
            // Search button click
            if (searchButton) {
                searchButton.addEventListener('click', () => {
                    this.searchTerm = searchInput.value.trim();
                    this.currentPage = 1;
                    this.renderPosts();
                });
            }
        }
    }
    
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
    }
    
    setupSortingDropdown() {
        const sortBtn = document.getElementById('sort-filter-btn');
        const sortDropdown = document.getElementById('sort-dropdown');
        const dropdownItems = document.querySelectorAll('.filter-dropdown-item');
        
        if (sortBtn && sortDropdown) {
            // Toggle dropdown
            sortBtn.addEventListener('click', () => {
                sortDropdown.classList.toggle('show');
            });
            
            // Close dropdown when clicking outside
            document.addEventListener('click', (event) => {
                if (!event.target.closest('.blog-filter-dropdown')) {
                    sortDropdown.classList.remove('show');
                }
            });
            
            // Sort posts
            dropdownItems.forEach(item => {
                item.addEventListener('click', () => {
                    const sortValue = item.getAttribute('data-value');
                    this.sortMethod = sortValue;
                    
                    sortDropdown.classList.remove('show');
                    
                    // Update button text
                    sortBtn.querySelector('span').textContent = item.textContent;
                    
                    // Render posts with new sort
                    this.renderPosts();
                });
            });
        }
    }
    
    sortPosts() {
        switch (this.sortMethod) {
            case 'newest':
                this.filteredPosts.sort((a, b) => {
                    return new Date(b.date) - new Date(a.date);
                });
                break;
            case 'oldest':
                this.filteredPosts.sort((a, b) => {
                    return new Date(a.date) - new Date(b.date);
                });
                break;
            case 'popular':
                this.filteredPosts.sort((a, b) => {
                    return b.popularity - a.popularity;
                });
                break;
        }
    }      // We'll let main.js handle the hamburger menu for all pages
      setupHamburgerMenu() {
        // This is now handled in main.js to ensure consistency across all pages
        console.log('Blog page: delegating hamburger menu setup to main.js');
    }
    
    setupPagination() {
        const paginationSection = document.querySelector('.blog-pagination');
        if (!paginationSection) return;
        
        // Initial event delegation for pagination
        paginationSection.addEventListener('click', (e) => {
            const target = e.target.closest('.pagination-btn');
            if (!target) return;
            
            // Handle previous button
            if (target.querySelector('.fa-chevron-left')) {
                if (this.currentPage > 1) {
                    this.currentPage--;
                    this.renderPosts();
                }
                return;
            }
            
            // Handle next button
            if (target.querySelector('.fa-chevron-right')) {
                const totalPages = Math.ceil(this.filteredPosts.length / this.postsPerPage);
                if (this.currentPage < totalPages) {
                    this.currentPage++;
                    this.renderPosts();
                }
                return;
            }
            
            // Handle page number button
            if (!target.classList.contains('active') && !target.innerHTML.includes('fa-chevron')) {
                this.currentPage = parseInt(target.textContent);
                this.renderPosts();
            }
            
            // Scroll to top of blog posts
            document.querySelector('.blog-posts').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
    
    updatePagination() {
        const paginationSection = document.querySelector('.blog-pagination');
        if (!paginationSection) return;
        
        const totalPages = Math.ceil(this.filteredPosts.length / this.postsPerPage);
        
        // Generate pagination HTML
        let paginationHTML = `
            <div class="pagination-btn ${this.currentPage === 1 ? 'disabled' : ''}"><i class="fas fa-chevron-left"></i></div>
        `;
        
        // Only show up to 5 page numbers
        const startPage = Math.max(1, this.currentPage - 2);
        const endPage = Math.min(totalPages, startPage + 4);
        
        for (let i = startPage; i <= endPage; i++) {
            paginationHTML += `
                <div class="pagination-btn ${i === this.currentPage ? 'active' : ''}">${i}</div>
            `;
        }
        
        paginationHTML += `
            <div class="pagination-btn ${this.currentPage === totalPages ? 'disabled' : ''}"><i class="fas fa-chevron-right"></i></div>
        `;
        
        paginationSection.innerHTML = paginationHTML;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new BlogManager();
});
