class EasterEggs {
    constructor() {
        this.konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA
        this.keysPressed = [];
        this.clickCount = 0;
        this.lastClickTime = 0;
        this.devToolsOpen = false;
        this.matrixMode = false;
        
        this.init();
    }
    
    init() {
        this.setupKonamiCode();
        this.setupClickEasterEgg();
        this.setupDevToolsDetection();
        this.setupTypingEasterEgg();
        this.setupTimeBasedEasterEggs();
        this.loadMatrixState();
    }
    
    setupKonamiCode() {
        document.addEventListener('keydown', (e) => {
            this.keysPressed.push(e.keyCode);
            
            // Keep only the last 10 keys
            if (this.keysPressed.length > this.konamiCode.length) {
                this.keysPressed.shift();
            }
            
            // Check if konami code is entered
            if (this.keysPressed.length === this.konamiCode.length && 
                this.keysPressed.every((key, index) => key === this.konamiCode[index])) {
                this.toggleMatrixMode();
            }
        });
    }
    
    setupClickEasterEgg() {
        document.addEventListener('click', (e) => {
            const now = Date.now();
            
            // Reset if too much time passed
            if (now - this.lastClickTime > 1000) {
                this.clickCount = 0;
            }
            
            this.clickCount++;
            this.lastClickTime = now;
            
            // 10 rapid clicks = party mode!
            if (this.clickCount >= 10) {
                this.activatePartyMode();
                this.clickCount = 0;
            }
        });
    }
    
    setupDevToolsDetection() {
        // Detect if dev tools are opened
        let devtools = {
            open: false,
            orientation: null
        };
        
        setInterval(() => {
            if (window.outerHeight - window.innerHeight > 160 || 
                window.outerWidth - window.innerWidth > 160) {
                if (!devtools.open) {
                    devtools.open = true;
                    this.showDevToolsMessage();
                }
            } else {
                devtools.open = false;
            }
        }, 500);
    }
    
    setupTypingEasterEgg() {
        let typedText = '';
        const secretWords = ['hack', 'coffee', 'debug', 'sudo', 'exit'];
        
        document.addEventListener('keypress', (e) => {
            typedText += e.key.toLowerCase();
            
            // Keep only last 10 characters
            if (typedText.length > 10) {
                typedText = typedText.slice(-10);
            }
            
            // Check for secret words
            secretWords.forEach(word => {
                if (typedText.includes(word)) {
                    this.activateWordEasterEgg(word);
                    typedText = '';
                }
            });
        });
    }
    
    setupTimeBasedEasterEggs() {
        const now = new Date();
        const hour = now.getHours();
        
        // Late night coding mode
        if (hour >= 23 || hour <= 5) {
            this.activateNightMode();
        }
        
        // Friday energy
        if (now.getDay() === 5) {
            this.addFridayVibes();
        }
    }
    
    // Matrix Mode Implementation
    toggleMatrixMode() {
        this.matrixMode = !this.matrixMode;
        
        if (this.matrixMode) {
            this.enterMatrixMode();
        } else {
            this.exitMatrixMode();
        }
        
        // Save state
        localStorage.setItem('matrixMode', this.matrixMode);
    }
    
    enterMatrixMode() {
        // Show transition effect
        this.createMatrixTransition();
        
        setTimeout(() => {
            // Apply Matrix styles
            document.body.classList.add('matrix-mode-active');
            this.transformContentToMatrix();
            this.startMatrixEffects();
            
            this.showSuccessMessage('▓▒░ WELCOME TO THE MATRIX ░▒▓<br>╔═══════════════════╗<br>║  REALITY HACKED   ║<br>╚═══════════════════╝');
        }, 1500);
    }
    
    exitMatrixMode() {
        // Remove Matrix effects
        this.stopMatrixEffects();
        document.body.classList.remove('matrix-mode-active');
        this.restoreOriginalContent();
        
        this.showSuccessMessage('🔵 BACK TO REALITY 🔵<br>Matrix mode deactivated');
    }
    
    createMatrixTransition() {
        const overlay = document.createElement('div');
        overlay.className = 'matrix-transition';
        overlay.innerHTML = `
            <div class="matrix-loader">
                <div class="matrix-text">
                    <div class="glitch-text">INITIALIZING MATRIX PROTOCOL...</div>
                    <div class="loading-bar">
                        <div class="loading-progress"></div>
                    </div>
                    <div class="matrix-code">
                        <span>010001000110100001101001011100110010000001101001011100110010000001110100</span>
                        <span>011010000110010100100000011100100110010101100001011011000010000001110111</span>
                        <span>011011110111001001101100011001000010111000100000010101000110000001101011</span>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(overlay);
        
        // Create matrix rain during transition
        this.createTransitionMatrixRain(overlay);
        
        setTimeout(() => {
            document.body.removeChild(overlay);
        }, 1500);
    }
    
    transformContentToMatrix() {
        // Transform text content to Matrix style
        const textElements = document.querySelectorAll('h1, h2, h3, p, span, a, .nav-link, .btn-primary, .btn-secondary');
        
        textElements.forEach(element => {
            if (!element.classList.contains('matrix-original')) {
                element.classList.add('matrix-original');
                element.dataset.originalText = element.textContent;
                
                // Convert to Matrix-style text
                if (element.tagName === 'H1' || element.classList.contains('hero-title')) {
                    element.innerHTML = this.convertToMatrixTitle(element.textContent);
                } else {
                    element.textContent = this.convertToMatrixText(element.textContent);
                }
            }
        });
        
        // Transform the neofetch terminal
        this.transformNeofetchToMatrix();
        
        // Transform stats
        this.transformStatsToMatrix();
    }
    
    transformNeofetchToMatrix() {
        const neofetchInfo = document.getElementById('neofetch-info');
        if (neofetchInfo) {
            neofetchInfo.innerHTML = `
                <div class="neofetch-line">
                    <span class="neofetch-label">USER:</span>
                    <span class="neofetch-value">█▓▒░ NEO ░▒▓█</span>
                </div>
                <div class="neofetch-line">
                    <span style="color: #00ff00;">╔══════════════════════╗</span>
                </div>
                <div class="neofetch-line">
                    <span class="neofetch-label">HOST:</span>
                    <span class="neofetch-value">MATRIX.REALITY.HACK</span>
                </div>
                <div class="neofetch-line">
                    <span class="neofetch-label">OS:</span>
                    <span class="neofetch-value">REALITY v0.1-BETA</span>
                </div>
                <div class="neofetch-line">
                    <span class="neofetch-label">KERNEL:</span>
                    <span class="neofetch-value">CONSCIOUSNESS 4.2.0</span>
                </div>
                <div class="neofetch-line">
                    <span class="neofetch-label">SHELL:</span>
                    <span class="neofetch-value">/BIN/REDPILL</span>
                </div>
                <div class="neofetch-line">
                    <span class="neofetch-label">MEMORY:</span>
                    <span class="neofetch-value">∞ GB (UNLIMITED)</span>
                </div>
                <div class="neofetch-line">
                    <span class="neofetch-label">STATUS:</span>
                    <span class="neofetch-value">AWAKE IN SIMULATION</span>
                </div>
                <div class="neofetch-line">
                    <span class="neofetch-label">POWER:</span>
                    <span class="neofetch-value">OVER 9000</span>
                </div>
                <div class="neofetch-line">
                    <span style="color: #00ff00;">╚══════════════════════╝</span>
                </div>
                <div class="neofetch-line">
                    <span class="terminal-cursor">█</span>
                </div>
            `;
        }
        
        // Change logo
        const logo = document.getElementById('neofetch-logo');
        if (logo) {
            logo.textContent = '⚡';
        }
        
        // Change terminal title
        const terminalTitle = document.getElementById('terminal-title');
        if (terminalTitle) {
            terminalTitle.textContent = 'neo@matrix:~$ wake_up';
        }
    }
    
    transformStatsToMatrix() {
        const stats = document.querySelectorAll('.stat-label');
        const matrixStats = [
            'REALITY GLITCHES',
            'CODE LINES HACKED',
            'SIMULATIONS BROKEN'
        ];
        
        stats.forEach((stat, index) => {
            if (matrixStats[index]) {
                stat.textContent = matrixStats[index];
            }
        });
    }
    
    convertToMatrixTitle(text) {
        // Convert name to Matrix-style with special characters
        return text
            .replace(/Shehab/gi, '█▓▒░ NEO ░▒▓█')
            .replace(/dizzydroid/gi, '╔═══ MATRIX HACKER ═══╗')
            .replace(/Hey!/gi, '▓▒░ WAKE UP ░▒▓')
            .replace(/Hello/gi, '▓▒░ GREETINGS ░▒▓');
    }
    
    convertToMatrixText(text) {
        // Convert regular text to Matrix-style
        const matrixPhrases = {
            'developer': 'CODE WARRIOR',
            'student': 'DIGITAL APPRENTICE',
            'Computer Science': 'REALITY HACKING',
            'projects': 'SIMULATIONS',
            'GitHub': 'CODE VAULT',
            'passionate': 'AWAKENED',
            'learning': 'DOWNLOADING KNOWLEDGE',
            'building': 'CONSTRUCTING REALITY',
            'Portfolio': 'DIGITAL IDENTITY',
            'Contact': 'ESTABLISH CONNECTION',
            'About': 'IDENTITY.EXE',
            'Blog': 'THOUGHT_STREAM.LOG'
        };
        
        let result = text;
        for (const [key, value] of Object.entries(matrixPhrases)) {
            const regex = new RegExp(key, 'gi');
            result = result.replace(regex, value);
        }
        
        return result;
    }
    
    startMatrixEffects() {
        // Continuous matrix rain
        this.matrixRainInterval = setInterval(() => {
            this.createMatrixRainDrop();
        }, 200);
        
        // Glitch effect on random elements
        this.glitchInterval = setInterval(() => {
            this.createRandomGlitch();
        }, 3000);
        
        // Terminal cursor blinking
        this.startTerminalEffects();
    }
    
    stopMatrixEffects() {
        if (this.matrixRainInterval) {
            clearInterval(this.matrixRainInterval);
        }
        if (this.glitchInterval) {
            clearInterval(this.glitchInterval);
        }
    }
    
    createMatrixRainDrop() {
        const drop = document.createElement('div');
        drop.className = 'matrix-rain-drop';
        drop.style.cssText = `
            position: fixed;
            top: -50px;
            left: ${Math.random() * 100}%;
            color: #00ff00;
            font-family: 'Courier New', monospace;
            font-size: ${Math.random() * 10 + 12}px;
            z-index: 1;
            pointer-events: none;
            animation: matrixRainFall ${Math.random() * 5 + 3}s linear forwards;
            text-shadow: 0 0 5px #00ff00;
        `;
        
        // Random matrix characters
        const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコサシスセソタチツテト日本語';
        drop.textContent = chars[Math.floor(Math.random() * chars.length)];
        
        document.body.appendChild(drop);
        
        setTimeout(() => {
            document.body.removeChild(drop);
        }, 8000);
    }
    
    createRandomGlitch() {
        const elements = document.querySelectorAll('.matrix-original');
        if (elements.length > 0) {
            const randomElement = elements[Math.floor(Math.random() * elements.length)];
            randomElement.classList.add('matrix-glitch');
            
            setTimeout(() => {
                randomElement.classList.remove('matrix-glitch');
            }, 500);
        }
    }
    
    startTerminalEffects() {
        // Add some terminal-style prompts occasionally
        setInterval(() => {
            if (this.matrixMode) {
                this.addTerminalPrompt();
            }
        }, 10000);
    }
    
    addTerminalPrompt() {
        const prompts = [
            'neo@matrix:~$ ls -la reality/',
            'neo@matrix:~$ sudo wake_up',
            'neo@matrix:~$ cat /dev/truth',
            'neo@matrix:~$ rm -rf illusion/*',
            'neo@matrix:~$ chmod 777 mind.exe'
        ];
        
        const prompt = document.createElement('div');
        prompt.className = 'floating-terminal-prompt';
        prompt.textContent = prompts[Math.floor(Math.random() * prompts.length)];
        prompt.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 20px;
            background: rgba(0, 0, 0, 0.9);
            border: 1px solid #00ff00;
            color: #00ff00;
            padding: 0.5rem;
            font-family: 'Courier New', monospace;
            font-size: 0.875rem;
            z-index: 1002;
            animation: terminalPromptSlide 4s ease-in-out;
        `;
        
        document.body.appendChild(prompt);
        
        setTimeout(() => {
            document.body.removeChild(prompt);
        }, 4000);
    }
    
    createTransitionMatrixRain(container) {
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const rain = document.createElement('div');
                rain.className = 'transition-matrix-rain';
                rain.style.cssText = `
                    position: absolute;
                    top: -100px;
                    left: ${Math.random() * 100}%;
                    color: #00ff00;
                    font-family: 'Courier New', monospace;
                    font-size: 16px;
                    animation: matrixRainFall 2s linear forwards;
                    text-shadow: 0 0 10px #00ff00;
                `;
                
                // Create column of characters
                let column = '';
                for (let j = 0; j < 20; j++) {
                    const chars = '01アイウエオカキクケコサシスセソ';
                    column += chars[Math.floor(Math.random() * chars.length)] + '<br>';
                }
                rain.innerHTML = column;
                
                container.appendChild(rain);
                
                setTimeout(() => {
                    container.removeChild(rain);
                }, 2000);
            }, i * 50);
        }
    }
    
    restoreOriginalContent() {
        const matrixElements = document.querySelectorAll('.matrix-original');
        matrixElements.forEach(element => {
            if (element.dataset.originalText) {
                element.textContent = element.dataset.originalText;
            }
            element.classList.remove('matrix-original');
            delete element.dataset.originalText;
        });
        
        // Restore neofetch (will be handled by persona engine)
        if (window.personaEngine) {
            window.personaEngine.updateNeofetchTerminal(
                window.personaEngine.personas[window.personaEngine.currentPersona].neofetch
            );
        }
    }
    
    loadMatrixState() {
        const saved = localStorage.getItem('matrixMode');
        if (saved === 'true') {
            this.matrixMode = true;
            // Apply matrix mode after page loads
            setTimeout(() => {
                this.enterMatrixMode();
            }, 2000);
        }
    }
    
    // Other Easter Egg Methods (unchanged)
    activatePartyMode() {
        document.body.classList.add('party-mode');
        this.createConfetti();
        this.showSuccessMessage('🎊 PARTY MODE ACTIVATED! 🎊<br>You clicked like a maniac!');
        
        setTimeout(() => {
            document.body.classList.remove('party-mode');
        }, 5000);
    }
    
    activateWordEasterEgg(word) {
        const messages = {
            'hack': 'Hacker detected! 👨‍💻 *plays cyberpunk music*',
            'coffee': '☕ Coffee is the fuel of developers!',
            'debug': '🐛 May your bugs be few and your fixes be swift!',
            'sudo': '🔐 With great power comes great responsibility!',
            'exit': this.matrixMode ? 'Type KONAMI code to exit Matrix!' : 'There is no exit... only return'
        };
        
        this.showSuccessMessage(messages[word]);
    }
    
    activateNightMode() {
        const nightMessage = document.createElement('div');
        nightMessage.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--primary-color);
            color: var(--bg-primary);
            padding: 0.75rem 1rem;
            border-radius: 8px;
            font-size: 0.875rem;
            z-index: 1003;
            animation: fadeInOut 4s ease;
        `;
        nightMessage.innerHTML = '🌙 Night owl detected! Happy late-night coding! ☕';
        document.body.appendChild(nightMessage);
        
        setTimeout(() => {
            document.body.removeChild(nightMessage);
        }, 4000);
    }
    
    addFridayVibes() {
        const styles = document.createElement('style');
        styles.textContent = `
            @keyframes fridayVibes {
                0%, 100% { transform: rotate(0deg); }
                25% { transform: rotate(1deg); }
                75% { transform: rotate(-1deg); }
            }
            
            .hero-title .highlight {
                animation: fridayVibes 2s ease-in-out infinite !important;
            }
        `;
        document.head.appendChild(styles);
    }
    
    showDevToolsMessage() {
        const devMessage = document.createElement('div');
        devMessage.className = 'dev-tools-warning';
        devMessage.innerHTML = `
            <div>👨‍💻 Hello, fellow developer!</div>
            <div>Inspecting the code? I like your style!</div>
            <div>🔍 Feel free to explore the source code</div>
            <div>💡 Try the Konami code for a surprise!</div>
        `;
        document.body.appendChild(devMessage);
        
        setTimeout(() => {
            if (document.body.contains(devMessage)) {
                document.body.removeChild(devMessage);
            }
        }, 5000);
    }
    
    createConfetti() {
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd'];
        
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.cssText = `
                    position: fixed;
                    top: -10px;
                    left: ${Math.random() * 100}%;
                    width: 10px;
                    height: 10px;
                    background: ${colors[Math.floor(Math.random() * colors.length)]};
                    transform: rotate(${Math.random() * 360}deg);
                    animation: confettiFall ${Math.random() * 3 + 2}s linear forwards;
                    z-index: 1001;
                    pointer-events: none;
                `;
                document.body.appendChild(confetti);
                
                setTimeout(() => {
                    document.body.removeChild(confetti);
                }, 5000);
            }, i * 50);
        }
    }
    
    showSuccessMessage(message) {
        const popup = document.createElement('div');
        popup.className = 'konami-success';
        popup.innerHTML = message;
        document.body.appendChild(popup);
        
        setTimeout(() => {
            popup.style.animation = 'successPop 0.5s ease-out reverse';
            setTimeout(() => {
                document.body.removeChild(popup);
            }, 500);
        }, 3000);
    }
}

// Initialize easter eggs and make persona engine available globally
document.addEventListener('DOMContentLoaded', () => {
    new EasterEggs();
    
    // Make persona engine globally accessible for matrix mode
    setTimeout(() => {
        window.personaEngine = document.personaEngine || 
            document.querySelector('script[src*="persona-engine"]')?.personaEngine;
    }, 1000);
});