// blog.js - Blog page functionality

class BlogManager {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupCategoryFilter();
        this.setupSearchFunctionality();
        this.setupSortingDropdown();
        this.setupHamburgerMenu();
        this.setupPagination();
    }
    
    setupCategoryFilter() {
        const categoryTags = document.querySelectorAll('.category-tag');
        const blogPosts = document.querySelectorAll('.blog-post');
        
        categoryTags.forEach(tag => {
            tag.addEventListener('click', () => {
                // Remove active class from all tags
                categoryTags.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked tag
                tag.classList.add('active');
                
                const selectedCategory = tag.getAttribute('data-category');
                
                // Filter posts
                blogPosts.forEach(post => {
                    if (selectedCategory === 'all' || post.getAttribute('data-category') === selectedCategory) {
                        post.style.display = 'block';
                    } else {
                        post.style.display = 'none';
                    }
                });
            });
        });
    }
    
    setupSearchFunctionality() {
        const searchInput = document.getElementById('blog-search-input');
        const blogPosts = document.querySelectorAll('.blog-post');
        
        if (searchInput) {
            searchInput.addEventListener('input', () => {
                const searchTerm = searchInput.value.toLowerCase();
                
                blogPosts.forEach(post => {
                    const title = post.querySelector('.blog-post-title').textContent.toLowerCase();
                    const excerpt = post.querySelector('.blog-post-excerpt').textContent.toLowerCase();
                    
                    if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
                        post.style.display = 'block';
                    } else {
                        post.style.display = 'none';
                    }
                });
            });
        }
    }
    
    setupSortingDropdown() {
        const sortBtn = document.getElementById('sort-filter-btn');
        const sortDropdown = document.getElementById('sort-dropdown');
        const dropdownItems = document.querySelectorAll('.filter-dropdown-item');
        const postsContainer = document.getElementById('blog-posts-container');
        
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
                    const posts = Array.from(document.querySelectorAll('.blog-post'));
                    
                    sortDropdown.classList.remove('show');
                    
                    // Update button text
                    sortBtn.querySelector('span').textContent = item.textContent;
                    
                    // Sort posts based on selected value
                    switch (sortValue) {
                        case 'newest':
                            this.sortPostsByDate(posts, true);
                            break;
                        case 'oldest':
                            this.sortPostsByDate(posts, false);
                            break;
                        case 'popular':
                            this.sortPostsByPopularity(posts);
                            break;
                    }
                    
                    // Re-append sorted posts
                    posts.forEach(post => {
                        postsContainer.appendChild(post);
                    });
                });
            });
        }
    }
    
    sortPostsByDate(posts, newestFirst = true) {
        posts.sort((a, b) => {
            const dateA = new Date(a.querySelector('.blog-post-meta span:first-child').textContent.replace('Calendar', ''));
            const dateB = new Date(b.querySelector('.blog-post-meta span:first-child').textContent.replace('Calendar', ''));
            
            return newestFirst ? dateB - dateA : dateA - dateB;
        });
    }
    
    sortPostsByPopularity(posts) {
        // For demonstration, we're using the blog post order as a proxy for popularity
        // In a real app, this would be based on view count, likes, comments, etc.
        const popularity = {
            'Building a REST API with Express.js': 5,
            'Clean Code Practices in JavaScript': 4,
            'The Future of Web Development': 3,
            'Getting Started with TypeScript': 2,
            'Design Principles Every Developer Should Know': 1,
            '5 VS Code Extensions Every Developer Needs': 0,
        };
        
        posts.sort((a, b) => {
            const titleA = a.querySelector('.blog-post-title').textContent;
            const titleB = b.querySelector('.blog-post-title').textContent;
            
            return (popularity[titleB] || 0) - (popularity[titleA] || 0);
        });
    }      // We'll let main.js handle the hamburger menu for all pages
      setupHamburgerMenu() {
        // This is now handled in main.js to ensure consistency across all pages
        console.log('Blog page: delegating hamburger menu setup to main.js');
    }
    
    setupPagination() {
        const paginationBtns = document.querySelectorAll('.pagination-btn');
        
        paginationBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // This is just for demonstration
                // In a real app, this would load a new set of posts
                if (!btn.classList.contains('active') && !btn.innerHTML.includes('fa-chevron')) {
                    paginationBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    
                    // Scroll to top of blog posts
                    document.querySelector('.blog-posts').scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new BlogManager();
});
