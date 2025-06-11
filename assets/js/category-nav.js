// Category navigation for mobile
document.addEventListener('DOMContentLoaded', function() {
    const categoriesContainer = document.getElementById('blog-categories-container');
    const prevBtn = document.getElementById('category-nav-prev');
    const nextBtn = document.getElementById('category-nav-next');
    
    if (!categoriesContainer || !prevBtn || !nextBtn) return;
    
    // Function to scroll categories horizontally
    function scrollCategories(direction) {
        const scrollAmount = 200; // pixels to scroll
        if (direction === 'left') {
            categoriesContainer.scrollLeft -= scrollAmount;
        } else {
            categoriesContainer.scrollLeft += scrollAmount;
        }
    }
    
    // Event listeners for the navigation buttons
    prevBtn.addEventListener('click', () => scrollCategories('left'));
    nextBtn.addEventListener('click', () => scrollCategories('right'));
    
    // Check if scrolling is needed
    function checkScrollability() {
        const isScrollable = categoriesContainer.scrollWidth > categoriesContainer.clientWidth;
        
        if (isScrollable) {
            prevBtn.style.display = 'flex';
            nextBtn.style.display = 'flex';
        } else {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'none';
        }
        
        // Check scroll position to conditionally show/hide buttons
        if (categoriesContainer.scrollLeft <= 10) {
            prevBtn.style.opacity = '0.5';
            prevBtn.style.pointerEvents = 'none';
        } else {
            prevBtn.style.opacity = '1';
            prevBtn.style.pointerEvents = 'auto';
        }
        
        if (categoriesContainer.scrollLeft + categoriesContainer.clientWidth >= categoriesContainer.scrollWidth - 10) {
            nextBtn.style.opacity = '0.5';
            nextBtn.style.pointerEvents = 'none';
        } else {
            nextBtn.style.opacity = '1';
            nextBtn.style.pointerEvents = 'auto';
        }
    }
    
    // Add event listener for scrolling
    categoriesContainer.addEventListener('scroll', checkScrollability);
    
    // Check on page load and resize
    window.addEventListener('resize', checkScrollability);
    checkScrollability();
});
