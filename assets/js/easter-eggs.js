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
        this.checkMatrixMode();
    }
    
    checkMatrixMode() {
        // Check if matrix mode was previously activated
        if (localStorage.getItem('matrixMode') === 'true') {
            this.matrixMode = true;
            this.activateMatrixMode(false);
        }
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
                
                if (this.matrixMode) {
                    this.exitMatrixMode();
                } else {
                    this.activateKonamiEasterEgg();
                }
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
        const secretWords = ['matrix', 'hack', 'coffee', 'debug', 'sudo', 'exit'];
        
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
    
    // Easter Egg Activation Methods
    activateKonamiEasterEgg() {
        // Brief matrix effect before transformation
        this.createMatrixTransition(() => {
            this.activateMatrixMode(true);
        });
    }
    
    activateMatrixMode(showMessage = true) {
        this.matrixMode = true;
        localStorage.setItem('matrixMode', 'true');
        
        // Add matrix mode class to body
        document.body.classList.add('matrix-mode-active');
        
        // Transform the entire site
        this.transformToMatrix();
        
        if (showMessage) {
            setTimeout(() => {
                this.showMatrixMessage('WELCOME TO THE MATRIX');
                this.typeMatrixMessage('You are now in the Matrix... Or are you?');
            }, 1000);
        }
    }
    
    exitMatrixMode() {
        this.matrixMode = false;
        localStorage.removeItem('matrixMode');
        
        // Remove matrix mode class
        document.body.classList.remove('matrix-mode-active');
        
        // Show exit message
        this.showMatrixMessage('EXITING MATRIX MODE...');
        
        setTimeout(() => {
            location.reload(); // Reload to restore normal mode
        }, 1500);
    }
    
    transformToMatrix() {
        // Create matrix overlay interface
        const matrixOverlay = document.createElement('div');
        matrixOverlay.id = 'matrix-overlay';
        matrixOverlay.innerHTML = `
            <div class="matrix-header">
                <div class="matrix-title">
                    ██████╗ ██╗███████╗███████╗██╗   ██╗██████╗ ██████╗  ██████╗ ██╗██████╗ 
                    ██╔══██╗██║╚══███╔╝╚══███╔╝╚██╗ ██╔╝██╔══██╗██╔══██╗██╔═══██╗██║██╔══██╗
                    ██║  ██║██║  ███╔╝   ███╔╝  ╚████╔╝ ██║  ██║██████╔╝██║   ██║██║██║  ██║
                    ██║  ██║██║ ███╔╝   ███╔╝    ╚██╔╝  ██║  ██║██╔══██╗██║   ██║██║██║  ██║
                    ██████╔╝██║███████╗███████╗   ██║   ██████╔╝██║  ██║╚██████╔╝██║██████╔╝
                    ╚═════╝ ╚═╝╚══════╝╚══════╝   ╚═╝   ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝╚═════╝ 
                </div>
                <div class="matrix-subtitle">RETRO TERMINAL INTERFACE v2.0</div>
                <div class="matrix-status">STATUS: CONNECTED TO THE MATRIX</div>
            </div>
            
            <div class="matrix-nav">
                <span class="matrix-prompt">root@matrix:~$</span>
                <span class="matrix-nav-items">
                    <span class="matrix-nav-item" data-section="about">[1] ABOUT.EXE</span>
                    <span class="matrix-nav-item" data-section="projects">[2] PROJECTS.BAT</span>
                    <span class="matrix-nav-item" data-section="blog">[3] BLOG.COM</span>
                    <span class="matrix-nav-item" data-section="contact">[4] CONTACT.SYS</span>
                    <span class="matrix-nav-item exit-matrix">[ESC] EXIT_MATRIX</span>
                </span>
            </div>
            
            <div class="matrix-content">
                <div class="matrix-section active" id="matrix-main">
                    <div class="matrix-ascii-art">
    ╔══════════════════════════════════════════════════════════════╗
    ║                    SHEHAB.EXE - DEVELOPER PROFILE            ║
    ╠══════════════════════════════════════════════════════════════╣
    ║                                                              ║
    ║  > NAME: SHEHAB MAHMOUD                                      ║
    ║  > OCCUPATION: COMPUTER_SCIENCE_STUDENT.EXE                  ║
    ║  > STATUS: ALWAYS_LEARNING.BAT                               ║
    ║  > LOCATION: PROBABLY_EARTH.SYS                              ║
    ║                                                              ║
    ║  [SKILLS_LOADED]                                             ║
    ║  ► JAVASCRIPT ████████████ 90%                               ║
    ║  ► PYTHON     ████████░░░ 85%                                ║
    ║  ► REACT      ████████░░░ 80%                                ║
    ║  ► NODE.JS    ███████░░░░ 75%                                ║
    ║  ► HTML/CSS   ██████████ 95%                                 ║
    ║                                                              ║
    ║  [STATS_DISPLAY]                                             ║
    ║  ► GITHUB_REPOS: 30+                                         ║
    ║  ► COMMITS_2024: 500+                                        ║
    ║  ► COFFEE_CONSUMED: ∞                                        ║
    ║  ► BUGS_FIXED: 99.9% (the 0.1% are features)                 ║
    ║                                                              ║
    ╚══════════════════════════════════════════════════════════════╝
                    </div>
                    
                    <div class="matrix-terminal-output">
                        <div class="terminal-line">$ whoami</div>
                        <div class="terminal-response">shehab_mahmoud</div>
                        <div class="terminal-line">$ ls -la skills/</div>
                        <div class="terminal-response">
drwxr-xr-x  2 shehab dev  4096 Jun  5 22:48 ./
drwxr-xr-x  8 shehab dev  4096 Jun  5 22:48 ../
-rwxr-xr-x  1 shehab dev  9001 Jun  5 22:48 javascript.exe
-rwxr-xr-x  1 shehab dev  8500 Jun  5 22:48 python.py
-rwxr-xr-x  1 shehab dev  8000 Jun  5 22:48 react.jsx
-rwxr-xr-x  1 shehab dev  7500 Jun  5 22:48 nodejs.js
-rwxr-xr-x  1 shehab dev  9500 Jun  5 22:48 html_css.web
                        </div>
                        <div class="terminal-line">$ cat motto.txt</div>
                        <div class="terminal-response">An optimist, a human. ~ Always learning.</div>
                        <div class="terminal-line">$ echo $STATUS</div>
                        <div class="terminal-response">Ready to build amazing things!</div>
                        <div class="terminal-cursor">█</div>
                    </div>
                </div>
                
                <div class="matrix-section" id="matrix-about">
                    <div class="matrix-ascii-art">
    ╔══════════════════════════════════════════════════════════════╗
    ║                        ABOUT_ME.TXT                          ║
    ╠══════════════════════════════════════════════════════════════╣
    ║                                                              ║
    ║  Computer Science student with a passion for creating        ║
    ║  meaningful software solutions. I believe in clean code,     ║
    ║  continuous learning, and the power of collaboration.        ║
    ║                                                              ║
    ║  Currently exploring:                                        ║
    ║  • Full-stack web development                                ║
    ║  • Modern JavaScript frameworks                              ║
    ║  • Backend architecture                                      ║
    ║  • Open source contribution                                  ║
    ║                                                              ║
    ║  When I'm not coding, you'll find me:                        ║
    ║  • Learning new technologies                                 ║
    ║  • Reading tech blogs                                        ║
    ║  • Building side projects                                    ║
    ║  • Drinking way too much coffee                              ║
    ║                                                              ║
    ╚══════════════════════════════════════════════════════════════╝
                    </div>
                </div>
                
                <div class="matrix-section" id="matrix-projects">
                    <div class="matrix-ascii-art">
    ╔══════════════════════════════════════════════════════════════╗
    ║                     PROJECT_LIST.BAT                         ║
    ╠══════════════════════════════════════════════════════════════╣
    ║                                                              ║
    ║  [1] ASU_SOPHOMORE_PROJECT.EXE                               ║
    ║      Complete project with source code and documentation     ║
    ║      LANG: C++, Python | STATUS: COMPLETED                   ║
    ║                                                              ║
    ║  [2] ASU_SHEET_SOLUTIONS.BAT                                 ║
    ║      Practice sheets with solutions and code samples         ║
    ║      LANG: Multiple | STATUS: ACTIVE                         ║
    ║                                                              ║
    ║  [3] QUOTES_GENERATOR.WEB                                    ║
    ║      Random quote generator with beautiful UI                ║
    ║      LANG: HTML, CSS, JS | STATUS: LIVE                      ║
    ║                                                              ║
    ║  [4] EARTH_DAY_QUIZ.APP                                      ║
    ║      Interactive quiz about environmental awareness          ║
    ║      LANG: JavaScript | STATUS: COMPLETED                    ║
    ║                                                              ║
    ║  [5] WEATHER_APP.PY                                          ║
    ║      Python weather app using OpenWeather API                ║
    ║      LANG: Python | STATUS: FUNCTIONAL                       ║
    ║                                                              ║
    ║  [6] THIS_PORTFOLIO.MATRIX                                   ║
    ║      Interactive portfolio with easter eggs                  ║
    ║      LANG: HTML, CSS, JS | STATUS: YOU_ARE_HERE              ║
    ║                                                              ║
    ╚══════════════════════════════════════════════════════════════╝
                    </div>
                </div>
                
                <div class="matrix-section" id="matrix-contact">
                    <div class="matrix-ascii-art">
    ╔══════════════════════════════════════════════════════════════╗
    ║                    CONTACT_INFO.SYS                          ║
    ╠══════════════════════════════════════════════════════════════╣
    ║                                                              ║
    ║  ESTABLISHING CONNECTION...                                  ║
    ║  ████████████████████████████████████████ 100%               ║
    ║  CONNECTION ESTABLISHED!                                     ║
    ║                                                              ║
    ║  EMAIL    : shehabmahmoud2003@gmail.com                      ║
    ║  GITHUB   : github.com/dizzydroid                            ║
    ║  TWITTER  : @shehabtweets                                    ║
    ║  LINKEDIN : linkedin.com/in/ShehabMahmoud                    ║
    ║  LOCATION : Probably Earth                                   ║
    ║                                                              ║
    ║  PREFERRED_CONTACT_METHOD: EMAIL                             ║
    ║  RESPONSE_TIME: Usually within 24 hours                      ║
    ║  AVAILABILITY: Open to collaboration & opportunities         ║
    ║                                                              ║
    ║  WARNING: If you get rickrolled, it's not on me ;)           ║
    ║                                                              ║
    ╚══════════════════════════════════════════════════════════════╝
                    </div>
                </div>
            </div>
            
            <div class="matrix-footer">
                <div class="matrix-status-bar">
                    <span>MATRIX_MODE: ACTIVE</span>
                    <span>USER: NEO</span>
                    <span>TIME: ${new Date().toLocaleTimeString()}</span>
                    <span>KONAMI_CODE: ↑↑↓↓←→←→BA to EXIT</span>
                </div>
            </div>
        `;
        
        document.body.appendChild(matrixOverlay);
        
        // Add navigation functionality
        this.setupMatrixNavigation();
        
        // Start matrix rain background
        this.startMatrixRain();
        
        // Type out the terminal
        this.typeMatrixTerminal();
    }
    
    setupMatrixNavigation() {
        document.querySelectorAll('.matrix-nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const section = e.target.dataset.section;
                
                if (e.target.classList.contains('exit-matrix')) {
                    this.exitMatrixMode();
                    return;
                }
                
                // Hide all sections
                document.querySelectorAll('.matrix-section').forEach(s => {
                    s.classList.remove('active');
                });
                
                // Show selected section
                if (section) {
                    document.getElementById(`matrix-${section}`).classList.add('active');
                } else {
                    document.getElementById('matrix-main').classList.add('active');
                }
                
                // Update nav highlighting
                document.querySelectorAll('.matrix-nav-item').forEach(nav => {
                    nav.classList.remove('active');
                });
                e.target.classList.add('active');
                
                // Play terminal sound effect (if you want to add sound)
                this.playTerminalSound();
            });
        });
    }
    
    startMatrixRain() {
        const matrixRain = document.createElement('div');
        matrixRain.className = 'matrix-background-rain';
        document.getElementById('matrix-overlay').appendChild(matrixRain);
        
        // Create falling characters
        setInterval(() => {
            if (this.matrixMode) {
                this.createMatrixDrop(matrixRain);
            }
        }, 200);
    }
    
    createMatrixDrop(container) {
        const drop = document.createElement('div');
        drop.className = 'matrix-drop';
        drop.style.left = Math.random() * 100 + '%';
        drop.style.animationDuration = (Math.random() * 5 + 3) + 's';
        
        // Matrix characters
        const chars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZアイウエオカキクケコ♦♠♣♥';
        drop.textContent = chars[Math.floor(Math.random() * chars.length)];
        
        container.appendChild(drop);
        
        setTimeout(() => {
            if (container.contains(drop)) {
                container.removeChild(drop);
            }
        }, 8000);
    }
    
    typeMatrixTerminal() {
        const terminalLines = document.querySelectorAll('.terminal-line, .terminal-response');
        terminalLines.forEach((line, index) => {
            line.style.opacity = '0';
            setTimeout(() => {
                line.style.opacity = '1';
                line.style.animation = 'matrixType 0.5s ease';
            }, index * 300);
        });
    }
    
    playTerminalSound() {
        // Create a subtle click sound effect
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.1);
    }
    
    // Other easter egg methods remain the same...
    activatePartyMode() {
        if (this.matrixMode) return; // Don't party in matrix mode
        
        document.body.classList.add('party-mode');
        this.createConfetti();
        this.showSuccessMessage('🎊 PARTY MODE ACTIVATED! 🎊<br>You clicked like a maniac!');
        
        setTimeout(() => {
            document.body.classList.remove('party-mode');
        }, 5000);
    }
    
    activateWordEasterEgg(word) {
        const messages = {
            'matrix': 'You\'re already in the Matrix! 😎',
            'hack': 'Hacker detected! 👨‍💻',
            'coffee': '☕ Coffee is the fuel of developers!',
            'debug': '🐛 May your bugs be few and fixes swift!',
            'sudo': '🔐 With great power comes great responsibility!',
            'exit': this.matrixMode ? 'Type Konami code to exit Matrix! ↑↑↓↓←→←→BA' : 'Exit what? You\'re not in anything special! 🤔'
        };
        
        this.showSuccessMessage(messages[word]);
    }
    
    createMatrixTransition(callback) {
        const transition = document.createElement('div');
        transition.className = 'matrix-transition';
        transition.innerHTML = `
            <div class="transition-text">ENTERING THE MATRIX...</div>
            <div class="loading-bar">
                <div class="loading-fill"></div>
            </div>
        `;
        document.body.appendChild(transition);
        
        setTimeout(() => {
            callback();
            document.body.removeChild(transition);
        }, 2000);
    }
    
    showMatrixMessage(message) {
        const matrixMsg = document.createElement('div');
        matrixMsg.className = 'matrix-message';
        matrixMsg.textContent = message;
        document.body.appendChild(matrixMsg);
        
        setTimeout(() => {
            if (document.body.contains(matrixMsg)) {
                document.body.removeChild(matrixMsg);
            }
        }, 3000);
    }
    
    typeMatrixMessage(message) {
        const typeMsg = document.createElement('div');
        typeMsg.className = 'matrix-typing-message';
        document.body.appendChild(typeMsg);
        
        let i = 0;
        const typeInterval = setInterval(() => {
            typeMsg.textContent += message[i];
            i++;
            if (i >= message.length) {
                clearInterval(typeInterval);
                setTimeout(() => {
                    if (document.body.contains(typeMsg)) {
                        document.body.removeChild(typeMsg);
                    }
                }, 2000);
            }
        }, 50);
    }
    
    // Keep existing methods for other easter eggs...
    activateNightMode() {
        if (this.matrixMode) return;
        
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
            if (document.body.contains(nightMessage)) {
                document.body.removeChild(nightMessage);
            }
        }, 4000);
    }
    
    addFridayVibes() {
        if (this.matrixMode) return;
        
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
        if (this.matrixMode) return;
        
        const devMessage = document.createElement('div');
        devMessage.className = 'dev-tools-warning';
        devMessage.innerHTML = `
            <div>👨‍💻 Hello, fellow developer!</div>
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
                    if (document.body.contains(confetti)) {
                        document.body.removeChild(confetti);
                    }
                }, 5000);
            }, i * 50);
        }
    }
    
    showSuccessMessage(message) {
        if (this.matrixMode) return; // Don't show regular messages in matrix mode
        
        const popup = document.createElement('div');
        popup.className = 'konami-success';
        popup.innerHTML = message;
        document.body.appendChild(popup);
        
        setTimeout(() => {
            popup.style.animation = 'successPop 0.5s ease-out reverse';
            setTimeout(() => {
                if (document.body.contains(popup)) {
                    document.body.removeChild(popup);
                }
            }, 500);
        }, 3000);
    }
}

// Initialize easter eggs
document.addEventListener('DOMContentLoaded', () => {
    new EasterEggs();
});