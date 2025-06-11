/**
 * Sketch Persona Selector
 * Replaces the loading screen with a creative notebook-style persona selection interface
 */

class SketchPersonaSelector {
    constructor() {
        // Performance optimization: detect slower devices
        this.isLowPerformance = this.detectLowPerformance();
        
        this.personas = [
            {
                id: 'student',
                emoji: '🎓',
                label: 'Fellow Student',
                description: 'Here to learn and grow together!',
                colors: {
                    primary: '#3498db',
                    rgb: '52, 152, 219'
                }
            },
            {
                id: 'recruiter',
                emoji: '💼', 
                label: 'Talent Scout',
                description: 'Looking for the perfect candidate',
                colors: {
                    primary: '#e74c3c',
                    rgb: '231, 76, 60'
                }
            },
            {
                id: 'dev',
                emoji: '💻',
                label: 'Fellow Developer', 
                description: 'Code together, debug together',
                colors: {
                    primary: '#2ecc71',
                    rgb: '46, 204, 113'
                }
            },
            {
                id: 'other',
                emoji: '🌟',
                label: 'Curious Explorer',
                description: 'Just here to discover cool stuff',
                colors: {
                    primary: '#f39c12',
                    rgb: '243, 156, 18'
                }
            }
        ];
        
        this.selectedPersona = null;
        this.onComplete = null;
    }    show(onComplete) {
        this.onComplete = onComplete;
        this.createSketchInterface();
        
        // Apply performance optimizations immediately after creation
        this.applyPerformanceOptimizations();
        
        this.bindEvents();
        this.addDoodles();
    }createSketchInterface() {
        const sketchHTML = `
            <div class="sketch-persona-selector" 
                 id="sketch-persona-selector"
                 role="dialog"
                 aria-labelledby="sketch-title"
                 aria-describedby="sketch-subtitle"
                 aria-modal="true">
                <div class="sketch-notebook">
                    <div class="sketch-doodles" id="sketch-doodles" aria-hidden="true">
                        <!-- Doodles will be added by JavaScript -->
                    </div>
                    
                    <h1 class="sketch-title" id="sketch-title">Hey there! 👋</h1>
                    <p class="sketch-subtitle" id="sketch-subtitle">
                        What brings you here today?
                        <br>Pick the option that feels most like you!
                    </p>
                    
                    <div class="sketch-personas" 
                         id="sketch-personas"
                         role="radiogroup"
                         aria-labelledby="sketch-title">
                        ${this.personas.map((persona, index) => `
                            <div class="sketch-persona-option" 
                                 data-persona="${persona.id}"
                                 role="radio"
                                 aria-checked="false"
                                 tabindex="${index === 0 ? '0' : '-1'}"
                                 aria-label="${persona.label}: ${persona.description}"
                                 style="--color: ${persona.colors.primary}; --color-rgb: ${persona.colors.rgb}">
                                <span class="sketch-persona-emoji" aria-hidden="true">${persona.emoji}</span>
                                <div class="sketch-persona-label">${persona.label}</div>
                                <div class="sketch-persona-desc">${persona.description}</div>
                                <div class="sketch-arrow" aria-hidden="true"></div>
                            </div>
                        `).join('')}
                    </div>
                    
                    <div class="sketch-footer">
                        <div class="sketch-footer-text">
                            Don't worry, you can always change this later! ✨
                        </div>
                        <div class="sketch-instructions" aria-live="polite">
                            Use arrow keys to navigate, Enter or Space to select
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', sketchHTML);
        
        // Set focus to the first persona option for accessibility
        setTimeout(() => {
            const firstOption = document.querySelector('.sketch-persona-option[tabindex="0"]');
            if (firstOption) {
                firstOption.focus();
            }
        }, 100);
    }    bindEvents() {
        const personaOptions = document.querySelectorAll('.sketch-persona-option');
        const selector = document.getElementById('sketch-persona-selector');
        
        // Keyboard navigation for accessibility
        selector.addEventListener('keydown', (e) => {
            this.handleKeyboardNavigation(e, personaOptions);
        });
        
        personaOptions.forEach((option, index) => {
            // Click/touch selection
            option.addEventListener('click', (e) => {
                this.selectPersona(option.dataset.persona);
            });
            
            // Enter/Space key selection
            option.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.selectPersona(option.dataset.persona);
                }
            });

            // Add hover effects for desktop, touch feedback for mobile
            option.addEventListener('mouseenter', () => {
                if (!this.isMobile()) {
                    this.addHoverEffect(option);
                }
            });
            
            // Focus management for accessibility
            option.addEventListener('focus', () => {
                this.updateFocusState(option, personaOptions);
            });
            
            // Add touch feedback for mobile
            option.addEventListener('touchstart', () => {
                if (this.isMobile()) {
                    this.addTouchFeedback(option);
                }
            });
        });

        // Add keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.hide();
            }
        });
        
        // Prevent zoom on double-tap for mobile
        if (this.isMobile()) {
            document.addEventListener('touchend', (e) => {
                e.preventDefault();
            }, { passive: false });
        }
    }

    isMobile() {
        return window.innerWidth <= 768 || 'ontouchstart' in window;
    }

    addTouchFeedback(option) {
        // Add subtle scale effect for touch feedback
        option.style.transform = 'scale(0.98)';
        option.style.transition = 'transform 0.1s ease';
        
        setTimeout(() => {
            option.style.transform = '';
            option.style.transition = '';
        }, 150);
    }

    addHoverEffect(option) {
        // Add a subtle scale and rotation effect
        const currentTransform = option.style.transform;
        option.style.transition = 'transform 0.2s ease';
        
        setTimeout(() => {
            option.style.transition = '';
        }, 200);
    }    addDoodles() {
        const doodlesContainer = document.getElementById('sketch-doodles');
        const doodles = ['✏️', '📝', '✨', '💭', '🎨', '📚', '⚡', '🔍'];
        
        // Reduce number of doodles on mobile for cleaner look
        const doodleCount = this.isMobile() ? 4 : 8;
        
        doodles.slice(0, doodleCount).forEach((doodle, index) => {
            const doodleElement = document.createElement('div');
            doodleElement.className = 'sketch-doodle';
            doodleElement.textContent = doodle;
            
            // Better positioning for mobile
            if (this.isMobile()) {
                // Keep doodles in corners and edges on mobile
                const positions = [
                    { top: '10%', left: '5%' },
                    { top: '15%', right: '5%' },
                    { bottom: '20%', left: '8%' },
                    { bottom: '15%', right: '8%' }
                ];
                const pos = positions[index] || positions[0];
                Object.assign(doodleElement.style, pos);
            } else {
                // Random positioning for desktop
                doodleElement.style.top = Math.random() * 80 + '%';
                doodleElement.style.left = Math.random() * 80 + '%';
            }
            
            doodleElement.style.animationDelay = Math.random() * 4 + 's';
            doodlesContainer.appendChild(doodleElement);
        });
    }

    selectPersona(personaId) {
        this.selectedPersona = personaId;
        
        // Find the selected option
        const selectedOption = document.querySelector(`[data-persona="${personaId}"]`);
        if (selectedOption) {
            selectedOption.classList.add('selected');
            
            // Add selection feedback
            this.showSelectionFeedback(selectedOption);
            
            // Wait for animation then proceed
            setTimeout(() => {
                this.savePersonaAndComplete(personaId);
            }, 800);
        }
    }

    showSelectionFeedback(selectedOption) {
        // Create a fun selection animation
        const emoji = selectedOption.querySelector('.sketch-persona-emoji');
        const label = selectedOption.querySelector('.sketch-persona-label');
        
        if (emoji) {
            emoji.style.animation = 'sketchEmojiWiggle 0.5s ease-in-out 3';
        }
        
        // Add some sparkle effects
        this.createSparkles(selectedOption);
        
        // Show feedback message
        this.showFeedbackMessage(selectedOption.dataset.persona);
    }

    createSparkles(element) {
        const sparkles = ['✨', '⭐', '💫', '🌟'];
        const rect = element.getBoundingClientRect();
        
        for (let i = 0; i < 6; i++) {
            setTimeout(() => {
                const sparkle = document.createElement('div');
                sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
                sparkle.style.position = 'fixed';
                sparkle.style.left = rect.left + Math.random() * rect.width + 'px';
                sparkle.style.top = rect.top + Math.random() * rect.height + 'px';
                sparkle.style.pointerEvents = 'none';
                sparkle.style.fontSize = '1.5rem';
                sparkle.style.zIndex = '10001';
                sparkle.style.animation = 'sketchSparkle 1s ease-out forwards';
                
                document.body.appendChild(sparkle);
                
                setTimeout(() => {
                    if (document.body.contains(sparkle)) {
                        document.body.removeChild(sparkle);
                    }
                }, 1000);
            }, i * 100);
        }
        
        // Add sparkle animation
        if (!document.getElementById('sparkle-styles')) {
            const style = document.createElement('style');
            style.id = 'sparkle-styles';
            style.textContent = `
                @keyframes sketchSparkle {
                    0% {
                        opacity: 0;
                        transform: scale(0) rotate(0deg);
                    }
                    50% {
                        opacity: 1;
                        transform: scale(1) rotate(180deg);
                    }
                    100% {
                        opacity: 0;
                        transform: scale(0) rotate(360deg);
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    showFeedbackMessage(personaId) {
        const messages = {
            student: "a fellow procrastinator, I like that.",
            recruiter: "(nervous chuckles)",
            dev: "i use arch btw",
            other: "soo what's your favorite color?"
        };
        
        const message = messages[personaId] || "Great choice! 🎉";
        
        // Update the footer text
        const footerText = document.querySelector('.sketch-footer-text');
        if (footerText) {
            footerText.style.transition = 'all 0.3s ease';
            footerText.style.transform = 'scale(1.1)';
            footerText.style.color = '#2ecc71';
            footerText.textContent = message;
            
            setTimeout(() => {
                footerText.style.transform = 'scale(1)';
            }, 300);        }
    }
    
    // Accessibility methods
    handleKeyboardNavigation(e, personaOptions) {
        const currentFocus = document.activeElement;
        const currentIndex = Array.from(personaOptions).indexOf(currentFocus);
        let newIndex = currentIndex;
        
        switch(e.key) {
            case 'ArrowDown':
            case 'ArrowRight':
                e.preventDefault();
                newIndex = (currentIndex + 1) % personaOptions.length;
                break;
            case 'ArrowUp':
            case 'ArrowLeft':
                e.preventDefault();
                newIndex = currentIndex === 0 ? personaOptions.length - 1 : currentIndex - 1;
                break;
            case 'Home':
                e.preventDefault();
                newIndex = 0;
                break;
            case 'End':
                e.preventDefault();
                newIndex = personaOptions.length - 1;
                break;
            default:
                return;
        }
        
        // Update tabindex and focus
        personaOptions.forEach((option, index) => {
            option.tabIndex = index === newIndex ? 0 : -1;
        });
        
        personaOptions[newIndex].focus();
    }
    
    updateFocusState(focusedOption, allOptions) {
        // Update aria-checked state for radio group behavior
        allOptions.forEach(option => {
            option.setAttribute('aria-checked', 'false');
        });
        
        // Visual focus indicator
        allOptions.forEach(option => {
            option.classList.remove('sketch-focused');
        });
        focusedOption.classList.add('sketch-focused');
    }    savePersonaAndComplete(personaId) {
        // Save the persona preference to localStorage (persists across sessions)
        localStorage.setItem('preferredPersona', personaId);
        
        // Mark that persona was selected this session (prevents showing sketch again in same session)
        sessionStorage.setItem('personaSelectedThisSession', 'true');
        
        // Hide the sketch selector
        this.hide();
        
        // Call completion callback
        if (this.onComplete) {
            this.onComplete(personaId);
        }
    }hide() {
        const selector = document.getElementById('sketch-persona-selector');
        if (selector) {
            selector.classList.add('hidden');
            
            setTimeout(() => {
                if (document.body.contains(selector)) {
                    document.body.removeChild(selector);
                }
            }, 500);
        }
    }
    
    // Performance optimization: detect slower devices
    detectLowPerformance() {
        // Check for low-end device indicators
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        const isSlowConnection = connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g');
        const isLowMemory = navigator.deviceMemory && navigator.deviceMemory < 4;
        const isOldBrowser = !window.requestIdleCallback;
        
        return isSlowConnection || isLowMemory || isOldBrowser || 
               (window.innerWidth < 768 && window.devicePixelRatio > 2); // High DPI mobile
    }
    
    // Apply performance optimizations based on device capabilities
    applyPerformanceOptimizations() {
        if (this.isLowPerformance) {
            const selector = document.getElementById('sketch-persona-selector');
            if (selector) {
                // Disable heavy animations on slower devices
                selector.classList.add('no-animation');
                
                // Reduce doodle count
                const doodles = selector.querySelectorAll('.sketch-doodle');
                doodles.forEach((doodle, index) => {
                    if (index > 2) doodle.style.display = 'none'; // Only show first 3 doodles
                });
                
                // Simplify background patterns
                const notebook = selector.querySelector('.sketch-notebook');
                if (notebook) {
                    notebook.style.backgroundImage = 'none';
                }
            }
        }
    }    // Static method to check if sketch selector should be shown
    static shouldShow() {
        // Check for force parameter
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('force-sketch') === 'true') {
            return true;
        }
        
        const hasStoredPersona = localStorage.getItem('preferredPersona');
        const personaSelectedThisSession = sessionStorage.getItem('personaSelectedThisSession');
        
        // Show sketch selector ONLY if:
        // 1. No stored persona preference in localStorage AND
        // 2. Haven't selected a persona in this session
        // This prioritizes persistent localStorage over temporary sessionStorage
        return !hasStoredPersona && !personaSelectedThisSession;
    }
}

// Export for use in other modules
window.SketchPersonaSelector = SketchPersonaSelector;
