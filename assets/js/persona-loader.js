// Simple Persona Loader for non-index pages
class SimplePersonaLoader {
    constructor() {
        this.init();
    }
    
    init() {
        // Load saved persona preference
        const savedPersona = localStorage.getItem('preferredPersona') || 'dev';
        
        // Apply persona class to body
        document.body.className = `persona-${savedPersona}`;
        
        // Update active persona selector if it exists
        this.updatePersonaSelector(savedPersona);
        
        // Setup persona selector event listeners
        this.setupPersonaSelector();
    }
    
    updatePersonaSelector(activePersona) {
        const personaIcons = document.querySelectorAll('.persona-icon');
        personaIcons.forEach(icon => {
            icon.classList.remove('active');
            if (icon.dataset.persona === activePersona) {
                icon.classList.add('active');
            }
        });
    }
    
    setupPersonaSelector() {
        const personaIcons = document.querySelectorAll('.persona-icon');
        personaIcons.forEach(icon => {
            icon.addEventListener('click', () => {
                const persona = icon.dataset.persona;
                this.switchPersona(persona);
            });
        });
    }
    
    switchPersona(newPersona) {
        // Save to localStorage
        localStorage.setItem('preferredPersona', newPersona);
        
        // Update body class
        document.body.className = `persona-${newPersona}`;
        
        // Update active state
        this.updatePersonaSelector(newPersona);
        
        // Add visual feedback
        const selectedIcon = document.querySelector(`[data-persona="${newPersona}"]`);
        if (selectedIcon) {
            selectedIcon.style.transform = 'scale(1.1)';
            setTimeout(() => {
                selectedIcon.style.transform = '';
            }, 200);
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Only initialize if this is not the index page (which has full PersonaEngine)
    if (!document.getElementById('hero-subtitle')) {
        new SimplePersonaLoader();
    }
});
