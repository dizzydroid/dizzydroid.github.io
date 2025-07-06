// Personas JavaScript - Clean persona management

// Persona configuration
const personaConfig = {
    student: {
        name: 'Student',
        icon: 'graduation-cap',
        theme: 'blue',
        description: 'Learning journey and educational content'
    },
    recruiter: {
        name: 'Recruiter', 
        icon: 'briefcase',
        theme: 'green',
        description: 'Professional experience and achievements'
    },
    developer: {
        name: 'Developer',
        icon: 'code',
        theme: 'cyan',
        description: 'Technical projects and development insights'
    },
    explorer: {
        name: 'Explorer',
        icon: 'compass',
        theme: 'purple',
        description: 'Creative projects and general overview'
    }
};

// Persona-specific content data
const personaContentData = {
    student: {
        profileTitle: 'Computer Science Student',
        intro: "I'm currently pursuing my studies in computer science while building practical skills through hands-on projects. My learning journey is focused on understanding both theoretical foundations and real-world applications of software development.",
        favorites: {
            'Platform': 'Stack Overflow',
            'Language': 'Java, Python',
            'Book': 'Head First Java',
            'Study Time': 'Late night coding',
            'IDE': 'VS Code',
            'Learning': 'Cybersecurity'
        },
        focus: [
            {
                icon: 'book-open',
                title: 'Academic Excellence',
            },
            {
                icon: 'users',
                title: 'Collaborative Learning',
            }
        ],
        connectDescription: "Always eager to connect with fellow students and learn from experienced developers!",
        facts: [
            { icon: 'graduation-cap', text: 'CS Student' },
            { icon: 'clock', text: 'Late night coder' },
            { icon: 'brain', text: 'Brainstormer' },
            { icon: 'users', text: 'Collaborative' }
        ],
        projects: [
            {
                title: "ASU CodeForces Tasks",
                description: "Solutions for competitive programming problems, showcasing algorithmic thinking and problem-solving skills.",
                tech: ["C++", "Algorithms", "Data Structures", "Problem Solving"],
                category: "Academic",
                link: "https://github.com/dizzydroid/ASU_CodeForces-Tasks",
                icon: "trophy",
                status: "Completed",
                featured: true
            },
            {
                title: "Digital Audio Filtering Project",
                description: "Python toolkit for audio signal manipulation with time/frequency domain visualizations and custom filtering.",
                tech: ["Python", "NumPy", "Signal Processing", "Matplotlib"],
                category: "Signal Processing",
                link: "https://github.com/dizzydroid/ASU_DigitalAudioFilteringPrjct",
                icon: "music",
                status: "Completed"
            },
            {
                title: "ByteWise Educational Platform",
                description: "Java-based platform connecting students and instructors for CSE231s course collaboration.",
                tech: ["Java", "JavaFX", "OOP", "GUI Design"],
                category: "Software Engineering",
                link: "https://github.com/dizzydroid/ASU_JuniorProject",
                icon: "graduation-cap",
                status: "Completed",
                featured: true
            },
            {
                title: "COVID-19 ML Prediction",
                description: "Machine learning models for COVID-19 outcome prediction, comparing different classification algorithms.",
                tech: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
                category: "Machine Learning",
                link: "https://github.com/dizzydroid/ASU_SeniorProject_ML",
                icon: "brain",
                status: "Completed"
            },
            {
                title: "CHRONOS CPU Scheduler",
                description: "Desktop application visualizing CPU scheduling algorithms with interactive Gantt charts.",
                tech: ["Python", "Tkinter", "OS Concepts", "Algorithms"],
                category: "Operating Systems",
                link: "https://github.com/dizzydroid/ASU_SeniorProject_OS",
                icon: "cpu",
                status: "Completed"
            },
            {
                title: "NodeScope XML Editor",
                description: "Python-based XML editor and graph visualizer for efficient file management and data analysis.",
                tech: ["Python", "XML", "Graph Theory", "Data Structures"],
                category: "Data Structures",
                link: "https://github.com/dizzydroid/ASU_SeniorProject_DSA",
                icon: "network",
                status: "Completed"
            },
            {
                title: "Algorithm Visualizers",
                description: "Interactive visualizations and solvers for six classic algorithmic puzzles, implemented in Java.",
                tech: ["Java", "Swing", "Algorithms", "Visualization"],
                category: "Computer Science",
                link: "https://github.com/dizzydroid/ASU_SeniorProject_Algorithms",
                icon: "zap",
                status: "Completed"
            },
            {
                title: "ASU Programming Sheets & Solutions",
                description: "Complete solutions for ASU CSE131s and CSE231s programming course assignments and exercises.",
                tech: ["C++", "Java", "Problem Solving", "Education"],
                category: "Academic Resources",
                link: "https://github.com/dizzydroid/ASU_Sheets-Solutions",
                icon: "book-open",
                status: "Completed"
            },
            {
                title: "Sophomore Year Project",
                description: "Multi-language software project demonstrating object-oriented programming concepts and software engineering principles.",
                tech: ["C++", "Java", "OOP", "Software Engineering"],
                category: "Academic",
                link: "https://github.com/dizzydroid/ASU_SophomoreProject",
                icon: "code",
                status: "Completed"
            }
        ]
    },
    recruiter: {
        profileTitle: 'Software Engineer',
        intro: "Experienced full-stack developer with a proven track record of delivering high-quality software solutions. I bring technical expertise combined with strong communication skills and a results-driven approach to every project.",
        favorites: {
            'Experience': '3+ Years',
            'Specialization': 'Software Development',
            'Team Size': '5-10 developers',
            'Methodology': 'Agile/Scrum',
            'Leadership': 'Technical Lead',
            'Environment': 'Collaborative'
        },
        focus: [
            {
                icon: 'briefcase',
                title: 'Professional Excellence',
            },
            {
                icon: 'users',
                title: 'Team Collaboration',
            }
        ],
        connectDescription: "Open to discussing career opportunities and technical challenges in software development.",
        facts: [
            { icon: 'briefcase', text: 'Professional experience' },
            { icon: 'award', text: 'Team leader' },
            { icon: 'trending-up', text: 'Performance focused' },
            { icon: 'handshake', text: 'Client relations' }
        ],
        resume: {
            contact: {
                name: "Shehab Mahmoud",
                location: "Cairo, EG",
                email: "shehabmahmoud2003@gmail.com",
                website: "dizzydroid.github.io",
                linkedin: "ShehabMahmoud",
                github: "dizzydroid", 
                behance: "dizzydroid"
            },
            summary: "A Computer Engineer with 4 years of experience in Software Engineering (Java, Python) and 2 years of hands-on Machine Learning project experience. Leverages a 6-year background in Graphic Design to build intuitive and effective applications. Currently expanding knowledge in Cybersecurity.",
            education: {
                degree: "BSc in Computer Engineering",
                university: "Faculty of Engineering - Ain Shams University",
                period: "2021 – Present"
            },
            projects: [
                {
                    title: "ReelRec: Movie Recommendation System",
                    type: "Software Testing Project | Team Lead",
                    period: "Mar. 2025",
                    githubUrl: "https://github.com/dizzydroid/ReelRec",
                    achievements: [
                        "Built a movie recommendation system with a Swing-based GUI and a CLI.",
                        "Used Maven for build automation and Jira for project and bug management.",
                        "Technologies: Java, Swing, JUnit5, Maven, GitHub Actions, Jira"
                    ]
                },
                {
                    title: "Design Patterns in a Nutshell",
                    type: "Personal Project",
                    period: "2025",
                    githubUrl: "https://github.com/dizzydroid/DesignPatternsNutshell",
                    achievements: [
                        "Authored a comprehensive handbook on Software Design Patterns."
                    ]
                },
                {
                    title: "Nodescope: XML Editor and Visualizer",
                    type: "DSA Project | Team Lead",
                    period: "Dec. 2024",
                    githubUrl: "https://github.com/dizzydroid/ASU_SeniorProject_DSA",
                    achievements: [
                        "Applied advanced Data Structures and Algorithms for XML data processing.",
                        "Developed a GUI and CLI for rapid file and directory operations, enhancing user workflow.",
                        "Technologies: Python, Matplotlib, Custom Tkinter"
                    ]
                },
                {
                    title: "ByteWise: Course Management System",
                    type: "Object-Oriented Programming Project | Team Lead",
                    period: "Apr. 2024",
                    githubUrl: "https://github.com/dizzydroid/ASU_JuniorProject",
                    achievements: [
                        "Led the development of the \"ByteWise\" educational platform.",
                        "Implemented Object-Oriented Programming (OOP) principles for a maintainable and flexible system design.",
                        "Engineered exception-handling mechanisms to improve application stability.",
                        "Technologies: Java, JavaFx, Figma"
                    ]
                }
            ],
            experience: [
                {
                    role: "Media Team Head",
                    company: "IEEE | ASUSB",
                    companyHtml: '<a href="https://www.linkedin.com/company/ieee-asusb/" target="_blank">IEEE | ASUSB</a>',
                    period: "2024 – Present",
                    achievements: [
                        "Led a team of 7 editors, driving content strategy and production, which resulted in a 30% increase in brand recognition across digital platforms.",
                        "Managed end-to-end content creation, improving content delivery speed by 70% and enhancing the quality of materials published.",
                        "Collaborated with the Marketing Team to execute visual strategies, increasing social media engagement.",
                        "Established initiatives to improve digital visibility through SEO, social media marketing, and other digital marketing channels."
                    ]
                },
                {
                    role: "Multimedia Designer",
                    company: "Google Developer Student Clubs (GDSC) — ASU",
                    companyHtml: '<a href="https://www.linkedin.com/company/gdsc-asu-eng/" target="_blank">Google Developer Student Clubs (GDSC) — ASU</a>',
                    period: "2023 – 2024",
                    achievements: [
                        "Created high-impact digital content, including graphics and videos, using Adobe Creative Cloud, leading to a 60% increase in audience engagement for key events.",
                        'Contributed to event promotion and planning as a key organizer for <a href="https://gdg.community.dev/events/details/google-gdg-cairo-presents-devfest-cairo-2023/" target="_blank">DEVFEST Cairo 2023</a>, which proved successful and was recognized by Google for its outstanding promotion.',
                        'Designed and executed marketing strategies for the <a href="https://www.facebook.com/events/425842583153760/" target="_blank">EXPLORE I/O</a> event.'
                    ]
                }
            ],
            certifications: [
                {
                    title: "Supervised Machine Learning: Regression and Classification",
                    issuer: "DeepLearning.AI",
                    date: "March 2024",
                    link: "https://www.coursera.org/account/accomplishments/records/AXUN9YUMN4BW",
                    skills: "Machine Learning"
                },
                {
                    title: "Penetration Testing, Incident Response and Forensics",
                    issuer: "IBM",
                    date: "February 2024", 
                    link: "https://www.coursera.org/account/accomplishments/records/RVAL2DTTLWYA",
                    skills: "Cybersecurity, Penetration Testing, OSINT, Digital Forensics"
                },
                {
                    title: "Generative AI Fundamentals",
                    issuer: "Google",
                    date: "December 2023",
                    link: "https://www.cloudskillsboost.google/public_profiles/b67657ab-a01a-4b5a-864d-20cc2e9e57e0/badges/6613315?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
                    skills: "Artificial Intelligence"
                }
            ],
            skills: {
                "Programming Languages": ["Java", "Python", "C++", "C", "JavaScript", "HTML", "CSS", "Embedded C", "SQL"],
                "Frameworks & Libraries": ["React", "JUnit", "Matplotlib", "Numpy", "Scikit-learn", "PyTorch", "Tensorflow"],
                "Developer Tools & DevOps": ["Git", "GitHub", "Docker", "Kubernetes", "Maven", "Jira", "GitHub Actions"],
                "Operating Systems": ["Linux", "Windows", "macOS"],
                "Core Competencies": ["Object-Oriented Programming", "Data Structures & Algorithms", "Machine Learning & Artificial Intelligence", "Software Development Life Cycle (SDLC)", "Software Testing & Quality Assurance", "Web Development", "Cybersecurity Fundamentals", "Penetration Testing", "Networking Fundamentals"],
                "Design & Professional Skills": ["Adobe Creative Cloud Suite", "Canva", "Figma", "Team Leadership & Collaboration", "Project Management & Agile Methodologies", "Content Strategy", "Technical Documentation & Communication"],
                "Languages": ["English (Fluent)", "Arabic (Native)", "French (Conversational)", "German (Elementary)"]
            }
        }
    },
    developer: {
        profileTitle: 'Full-Stack Developer',
        intro: "Passionate about creating elegant solutions to complex problems. I love diving deep into new technologies, contributing to open source, and building applications that make a real impact.",
        favorites: {
            'Editor': 'Vi',
            'Languages': 'Java, Python, JavaScript',
            'OS': 'Linux (Arch BTW)',
            'Terminal': 'Alacritty',
            'Shell': 'Zsh + Oh My Zsh',
            'Container': 'Docker + Kubernetes'
        },
        focus: [
            {
                icon: 'code-2',
                title: 'Clean Architecture',
            },
            {
                icon: 'git-branch',
                title: 'Open Source',
            }
        ],
        connectDescription: "Love connecting with fellow developers to discuss tech, share knowledge, and collaborate on interesting projects!",
        facts: [
            { icon: 'terminal', text: 'Living in shells' },
            { icon: 'coffee', text: 'Coffeeholic' },
            { icon: 'github', text: 'Open source advocate' },
            { icon: 'zap', text: 'Performance nerd' }
        ],
        projects: [
            {
                title: "Portfolio Website",
                description: "Modern, responsive portfolio with persona-based theming and clean design built with vanilla JavaScript.",
                tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
                category: "Web Development",
                link: "https://github.com/dizzydroid/dizzydroid.github.io",
                liveLink: "https://dizzydroid.github.io",
                icon: "globe",
                status: "Active",
                featured: true,
                image: "images/portfoliod.png"
            },
            {
                title: "Fraud Detection System",
                description: "Python implementation of Chung & Lee's 2023 fraud detection ensemble approach with 93%+ recall on PaySim dataset.",
                tech: ["Python", "Scikit-learn", "Ensemble Methods", "Data Science"],
                category: "Machine Learning",
                link: "https://github.com/dizzydroid/fraud-detection",
                icon: "shield",
                status: "Completed",
                featured: true
            },
            {
                title: "Learning Not to Learn",
                description: "PyTorch implementation of adversarial approach to mitigate dataset bias in deep neural networks.",
                tech: ["PyTorch", "Deep Learning", "Adversarial Training", "Research"],
                category: "AI Research",
                link: "https://github.com/dizzydroid/learning-not-to-learn",
                icon: "brain",
                status: "Research"
            },
            {
                title: "ReelRec Movie Recommender",
                description: "Java-based movie recommendation system with genre-based filtering and user preference learning for Software Testing course.",
                tech: ["Java", "Recommendation Systems", "Testing", "Software Engineering"],
                category: "Software",
                link: "https://github.com/dizzydroid/ReelRec",
                icon: "film",
                status: "Completed"
            },
            {
                title: "InvMan Inventory System",
                description: "PyQt-based inventory management application with order processing, refunds, and performance tracking.",
                tech: ["Python", "PyQt", "Database", "Desktop App"],
                category: "Desktop Software",
                link: "https://github.com/dizzydroid/InvMan",
                icon: "package",
                status: "Completed"
            },
            {
                title: "Design Patterns Handbook",
                description: "Comprehensive Java examples for my design patterns handbook with practical implementations of all major patterns.",
                tech: ["Java", "Design Patterns", "OOP", "Documentation"],
                category: "Educational",
                link: "https://github.com/dizzydroid/DesignPatternsNutshell",
                icon: "book",
                status: "Completed"
            },
            {
                title: "Python Weather App",
                description: "Simple yet elegant weather application built with Python, featuring real-time weather data and clean UI.",
                tech: ["Python", "API Integration", "GUI", "Weather Data"],
                category: "Desktop App",
                link: "https://github.com/dizzydroid/PythonWeatherApp",
                icon: "cloud",
                status: "Completed"
            },
            {
                title: "Wallster - Random Wallpapers",
                description: "Web app generating unlimited collection of random wallpapers with customizable parameters and download options.",
                tech: ["JavaScript", "Canvas API", "Procedural Generation", "Web APIs"],
                category: "Web Experiment",
                link: "https://github.com/dizzydroid/Wallster",
                liveLink: "https://dizzydroid.github.io/Wallster",
                icon: "image",
                status: "Completed"
            },
            {
                title: "Skimble Arcade Game",
                description: "Simple arcade-style web game with great personality and engaging gameplay mechanics.",
                tech: ["JavaScript", "HTML5 Canvas", "Game Development", "Animation"],
                category: "Game Development",
                link: "https://github.com/dizzydroid/skimble",
                liveLink: "https://dizzydroid.github.io/skimble",
                icon: "gamepad-2",
                status: "Completed",
                image: "images/skimblegif.gif"
            },
            {
                title: "Random Quotes Generator",
                description: "Simple website that generates inspirational and thought-provoking random quotes with beautiful typography.",
                tech: ["JavaScript", "CSS3", "Typography", "API"],
                category: "Web Experiment",
                link: "https://github.com/dizzydroid/quotes",
                liveLink: "https://dizzydroid.github.io/quotes",
                icon: "quote",
                status: "Completed",
                image: "images/quotes.png"
            },
            {
                title: "Earth Day Quiz 2023",
                description: "Interactive 15-question quiz for Earth Day 2023 promoting environmental awareness and education.",
                tech: ["JavaScript", "HTML5", "CSS3", "Interactive Quiz"],
                category: "Educational Web",
                link: "https://github.com/dizzydroid/earth-day-quiz",
                liveLink: "https://dizzydroid.github.io/earth-day-quiz",
                icon: "earth",
                status: "Completed"
            },
            {
                title: "Portfoliod Template",
                description: "Customizable portfolio template built with basic HTML/CSS knowledge requirements - get portfolio-ing now!",
                tech: ["HTML5", "CSS3", "Template", "Responsive"],
                category: "Web Template",
                link: "https://github.com/dizzydroid/portfoliod",
                liveLink: "https://dizzydroid.github.io/portfoliod",
                icon: "layout",
                status: "Completed"
            }
        ]
    },
    explorer: {
        profileTitle: 'Creative Technologist',
        intro: "I approach technology with curiosity and creativity, exploring the intersection of code, design, and human experience. Always excited about emerging technologies and their potential to solve real-world problems.",
        favorites: {
            'Inspiration': 'Behance',
            'Tools': 'Adobe CC',
            'Interest': 'Typography',
            'Hobby': 'Reading, Gaming',
            'Philosophy': 'Less is More',
            'Innovation': 'Humans'
        },
        focus: [
            {
                icon: 'palette',
                title: 'Design & Code',
            },
            {
                icon: 'lightbulb',
                title: 'Innovation',
            }
        ],
        connectDescription: "Always excited to connect with creative minds and explore the possibilities of technology!",
        facts: [
            { icon: 'gamepad', text: 'Occasional Gamer' },
            { icon: 'palette', text: 'Design enthusiast' },
            { icon: 'globe', text: 'Tech explorer' },
            { icon: 'rocket', text: 'Innovation driven' }
        ],
        projects: [
            {
                title: "Sea Biscuit Wildlife Shelter",
                description: "Logo and banner design for wildlife conservation organization",
                location: "North Carolina, USA",
                coordinates: { lat: 35.7796, lng: -78.6382 },
                category: "Branding",
                type: "Logo Design",
                client: "Wildlife Conservation",
                icon: "heart",
                status: "Completed",
                year: "2023"
            },
            {
                title: "Damn Fine Handpies",
                description: "Brand identity and logo design for artisanal bakery specializing in handcrafted pies",
                location: "Missouri, USA", 
                coordinates: { lat: 38.5767, lng: -92.1735 },
                category: "Food & Beverage",
                type: "Brand Identity",
                client: "Local Bakery",
                icon: "chef-hat",
                status: "Completed",
                year: "2023"
            },
            {
                title: "BlackBull Inn",
                description: "Complete visual identity package for boutique inn including logo, signage, and marketing materials",
                location: "Bolton, Canada",
                coordinates: { lat: 50.0712, lng: -79.9003 },
                category: "Hospitality",
                type: "Visual Identity",
                client: "Boutique Inn",
                icon: "building",
                status: "Completed",
                year: "2022"
            },
            {
                title: "Green Team Pandas",
                description: "Eco-friendly organization branding with focus on sustainability and environmental awareness",
                location: "California, USA",
                coordinates: { lat: 36.7783, lng: -119.4179 },
                category: "Environmental",
                type: "Brand Design",
                client: "Environmental Organization",
                icon: "leaf",
                status: "Completed",
                year: "2023"
            },
            {
                title: "MyKope Akademia Coffee Shop",
                description: "Complete branding package for specialty coffee shop including logo, menu design, and interior graphics",
                location: "Philippines",
                coordinates: { lat: 12.8797, lng: 121.7740 },
                category: "Food & Beverage",
                type: "Complete Branding",
                client: "Coffee Shop",
                icon: "coffee",
                status: "Completed",
                year: "2022"
            },
            {
                title: "Global Design Portfolio",
                description: "Hundreds of design projects for clients worldwide spanning various industries and design disciplines",
                location: "Worldwide",
                coordinates: { lat: 0, lng: 0 },
                category: "Portfolio",
                type: "Various Projects",
                client: "International Clients",
                icon: "globe",
                status: "Ongoing",
                year: "2020-Present",
                special: true
            }
        ]
    }
};

// Initialize persona system
function initializePersonaSystem() {
    loadPersonaPreference();
    setupPersonaEventListeners();
    updatePersonaUI();
    checkFirstVisit();
}

// Load saved persona preference
function loadPersonaPreference() {
    let savedPersona = null;
    
    // Try to get saved persona with error handling for localStorage issues
    try {
        savedPersona = localStorage.getItem('preferred-persona');
    } catch (e) {
        console.warn('localStorage not available:', e);
    }
    
    const urlParams = new URLSearchParams(window.location.search);
    const urlPersona = urlParams.get('persona');
    
    // Priority: URL parameter > saved preference > default
    const activePersona = urlPersona || savedPersona || 'developer';
    
    if (personaConfig[activePersona]) {
        setActivePersona(activePersona);
    } else {
        setActivePersona('developer');
    }
}

// Set the active persona
function setActivePersona(persona) {
    if (!personaConfig[persona]) return;
    
    // Update body data attribute
    document.body.setAttribute('data-persona', persona);
    
    // Update active states in UI
    updatePersonaCardStates(persona);
    
    // Update content based on persona
    updatePersonaContent(persona);
    
    // Save preference with error handling
    try {
        localStorage.setItem('preferred-persona', persona);
    } catch (e) {
        console.warn('Could not save persona preference:', e);
    }
    
    // Trigger custom event
    document.dispatchEvent(new CustomEvent('personaChanged', {
        detail: { persona, config: personaConfig[persona] }
    }));
}

// Update persona card active states
function updatePersonaCardStates(activePersona) {
    document.querySelectorAll('.persona-card').forEach(card => {
        const cardPersona = card.dataset.persona;
        card.classList.toggle('active', cardPersona === activePersona);
        
        // Update aria-pressed for accessibility
        card.setAttribute('aria-pressed', cardPersona === activePersona ? 'true' : 'false');
    });
}

// Update content based on active persona
function updatePersonaContent(persona) {
    const config = personaConfig[persona];
    if (!config) return;
    
    // Update greeting
    updateGreeting(persona);
    
    // Update main content
    updateHeroContent(persona);
    
    // Update navigation
    updateNavigationHighlight(persona);
    
    // Update terminal output
    updateTerminalContent(persona);
    
    // Update About page content
    updateAboutPageContent(persona);
    
    // Update Projects page content
    updateProjectsPageContent(persona);
}

// Update greeting based on persona
function updateGreeting(persona) {
    const greetingElement = document.querySelector('.greeting-text');
    if (!greetingElement) return;
    
    const greetings = {
        student: 'Hello, Fellow Learner!',
        recruiter: 'Welcome, Recruiter!',
        developer: 'Hello, World!',
        explorer: 'Hey, Explorer!'
    };
    
    greetingElement.textContent = greetings[persona] || greetings.developer;
}

// Update hero content based on persona
function updateHeroContent(persona) {
    const contentMap = {
        student: {
            subtitle: 'A dedicated student exploring the world of code',
            description: 'Currently studying Computer Science and passionate about learning new technologies, building projects, and growing as a developer.',
            primaryAction: 'View Learning Journey',
            secondaryAction: 'Study Notes'
        },
        recruiter: {
            subtitle: 'A skilled developer ready for new opportunities',
            description: 'Computer Science student with hands-on experience in full-stack development, strong problem-solving skills, and a passion for creating impactful solutions.',
            primaryAction: 'View Resume',
            secondaryAction: 'Download CV'
        },
        developer: {
            subtitle: 'A passionate developer crafting digital experiences',
            description: 'Building meaningful software with modern technologies, always learning something new, and sharing the journey with the community.',
            primaryAction: 'View Projects',
            secondaryAction: 'Check GitHub'
        },
        explorer: {
            subtitle: 'A creative mind exploring the digital frontier',
            description: 'Passionate about technology, design, and innovation. Always curious about new possibilities and excited to share discoveries.',
            primaryAction: 'Explore Projects',
            secondaryAction: 'See Creative Work'
        }
    };
    
    const content = contentMap[persona] || contentMap.developer;
    
    // Update subtitle
    const subtitleElement = document.getElementById('dynamic-subtitle');
    if (subtitleElement) {
        subtitleElement.textContent = content.subtitle;
    }
    
    // Update description
    const descriptionElement = document.getElementById('dynamic-description');
    if (descriptionElement) {
        descriptionElement.textContent = content.description;
    }
    
    // Update action buttons (only on homepage)
    const primaryButton = document.querySelector('.hero-actions .btn-primary span');
    if (primaryButton) {
        primaryButton.textContent = content.primaryAction;
    }
}

// Update terminal content based on persona
function updateTerminalContent(persona) {
    const terminalOutput = document.getElementById('terminal-output');
    if (!terminalOutput) return;
    
    const outputs = {
        student: [
            'shehab@learning',
            'Uptime: Napping',
            'Packages: Java, Python',
            'Shell: Zsh',
            'Theme: Dark',
            'Status: Procrastinating'
        ],
        recruiter: [
            'shehab@professional',
            'OS: Career Ready',
            'Uptime: 4+ years coding',
            'Skills: Java, Node.js, React, Python',
            'Experience: Multiple Projects',
            'Education: Computer Engineering',
            'Status: Open to Opportunities'
        ],
        developer: [
            'shehab@dev',
            'OS: Development Environment',
            'Uptime: Coding when I feel like it',
            'Tools: Git, VS Code, Docker',
            'Status: Building Something Cool'
        ],
        explorer: [
            'shehab@explorer-mode',
            'OS: Discovery OS',
            'Uptime: Exploring',
            'Interests: Tech, Graphic Design, Gaming',
            'Status: Gaming probably'
        ]
    };
    
    const output = outputs[persona] || outputs.developer;
    
    // Clear and add new content without fade animation
    terminalOutput.innerHTML = '';
    
    output.forEach((line, index) => {
        setTimeout(() => {
            const lineElement = document.createElement('div');
            lineElement.className = 'output-line';
            lineElement.textContent = line;
            terminalOutput.appendChild(lineElement);
        }, index * 50); // Faster typing effect
    });
}

// Update navigation highlight
function updateNavigationHighlight(persona) {
    // This could be used to highlight different nav items based on persona
    // For now, we'll keep it simple but leave room for expansion
    const config = personaConfig[persona];
    if (config) {
        document.documentElement.style.setProperty('--current-persona-color', 
            `var(--persona-primary, var(--accent-primary))`);
    }
}

// Update About page content based on persona
function updateAboutPageContent(persona) {
    const data = personaContentData[persona];
    if (!data) return;
    
    // Update profile title
    const profileTitle = document.getElementById('profile-title');
    if (profileTitle) {
        profileTitle.textContent = data.profileTitle;
    }
    
    // Update introduction text
    const dynamicIntro = document.getElementById('dynamic-intro');
    if (dynamicIntro) {
        dynamicIntro.innerHTML = `<p>${data.intro}</p>`;
    }
    
    // Update favorites section
    const personaFavorites = document.getElementById('persona-favorites');
    if (personaFavorites && data.favorites) {
        personaFavorites.innerHTML = Object.entries(data.favorites)
            .map(([key, value]) => `
                <div class="favorite-item">
                    <div class="favorite-label">${key}</div>
                    <div class="favorite-value">${value}</div>
                </div>
            `).join('');
    }
    
    // Update current focus
    const dynamicFocus = document.getElementById('dynamic-focus');
    if (dynamicFocus && data.focus) {
        dynamicFocus.innerHTML = data.focus.map(item => `
            <div class="focus-item">
                <div class="focus-icon">
                    <i data-lucide="${item.icon}"></i>
                </div>
                <div class="focus-content">
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                </div>
            </div>
        `).join('');
    }
    
    // Update connect description
    const connectDescription = document.getElementById('connect-description');
    if (connectDescription) {
        connectDescription.textContent = data.connectDescription;
    }
    
    // Update fun facts
    const dynamicFacts = document.getElementById('dynamic-facts');
    if (dynamicFacts && data.facts) {
        dynamicFacts.innerHTML = data.facts.map(fact => `
            <div class="fact-item">
                <i data-lucide="${fact.icon}"></i>
                <span>${fact.text}</span>
            </div>
        `).join('');
    }
    
    // Re-initialize Lucide icons for new content
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons({
            strokeWidth: 2,
            fill: 'none'
        });
    }
}

// Update Projects page content based on active persona
function updateProjectsPageContent(persona) {
    const data = personaContentData[persona];
    if (!data) return;
    
    // Update projects description
    const projectsDescription = document.getElementById('projects-description');
    if (projectsDescription) {
        const descriptions = {
            student: 'Explore my academic journey and learning projects',
            recruiter: 'Professional experience and technical achievements',
            developer: 'Open source contributions and technical portfolio',
            explorer: 'Creative works from around the globe'
        };
        projectsDescription.innerHTML = descriptions[persona] || descriptions.developer;
    }
    
    // Update projects grid
    const projectsGrid = document.getElementById('dynamic-projects');
    if (!projectsGrid) return;
    
    if (persona === 'recruiter') {
        // Show resume format for recruiters
        renderResumeView(projectsGrid, data.resume);
    } else if (persona === 'explorer') {
        // Show design projects in a map-like view
        renderDesignProjectsView(projectsGrid, data.projects);
    } else {
        // Show regular project cards for students and developers
        renderProjectCardsView(projectsGrid, data.projects);
    }
    
    // Re-initialize Lucide icons
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        lucide.createIcons();
    }
}

// Render resume view for recruiters
function renderResumeView(container, resumeData) {
    if (!resumeData) return;
    
    container.innerHTML = `
        <div class="resume-container">
            <div class="resume-header">
                <h2>${resumeData.contact.name}</h2>
                <div class="resume-contact">
                    <span><i class="fas fa-map-marker-alt"></i> ${resumeData.contact.location}</span>
                    <span><i class="fas fa-envelope"></i> <a href="mailto:${resumeData.contact.email}">${resumeData.contact.email}</a></span>
                    <span><i class="fas fa-globe"></i> <a href="https://${resumeData.contact.website}" target="_blank">${resumeData.contact.website}</a></span>
                </div>
                <div class="resume-social">
                    <span><i class="fab fa-linkedin"></i> <a href="https://linkedin.com/in/${resumeData.contact.linkedin}" target="_blank">${resumeData.contact.linkedin}</a></span>
                    <span><i class="fab fa-github"></i> <a href="https://github.com/${resumeData.contact.github}" target="_blank">${resumeData.contact.github}</a></span>
                    <span><i class="fab fa-behance"></i> <a href="https://behance.net/${resumeData.contact.behance}" target="_blank">${resumeData.contact.behance}</a></span>
                </div>
            </div>
            
            <div class="resume-section">
                <h3>Summary</h3>
                <p class="resume-summary">${resumeData.summary}</p>
            </div>
            
            <div class="resume-section">
                <h3>Education</h3>
                <div class="resume-item">
                    <div class="resume-item-header">
                        <h4>${resumeData.education.university}</h4>
                        <span class="resume-period">${resumeData.education.period}</span>
                    </div>
                    <p class="resume-degree">◦ ${resumeData.education.degree}</p>
                </div>
            </div>
            
            <div class="resume-section">
                <h3>Projects</h3>
                ${resumeData.projects.map(project => `
                    <div class="resume-item">
                        <div class="resume-item-header">
                            <h4>${project.title}</h4>
                            <span class="resume-github-link"><i class="fab fa-github"></i> <a href="${project.githubUrl}" target="_blank">GitHub Repository</a></span>
                        </div>
                        <p class="resume-project-type">${project.type} | ${project.period}</p>
                        <ul class="resume-achievements">
                            ${project.achievements.map(achievement => `<li>◦ ${achievement}</li>`).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
            
            <div class="resume-section">
                <h3>Experience</h3>
                ${resumeData.experience.map(exp => `
                    <div class="resume-item">
                        <div class="resume-item-header">
                            <h4>${exp.role}</h4>
                            <span class="resume-period">${exp.period}</span>
                        </div>
                        <p class="resume-company">${exp.companyHtml}</p>
                        <ul class="resume-achievements">
                            ${exp.achievements.map(achievement => `<li>◦ ${achievement}</li>`).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
            
            <div class="resume-section">
                <h3>Certifications</h3>
                ${resumeData.certifications.map(cert => `
                    <div class="resume-item">
                        <div class="resume-item-header">
                            <h4><a href="${cert.link}" target="_blank">${cert.title} <i class="fas fa-external-link-alt"></i></a></h4>
                        </div>
                        <p class="resume-cert-details">${cert.issuer}, Issued ${cert.date}</p>
                        <p class="resume-cert-skills">Relevant Skills: ${cert.skills}</p>
                    </div>
                `).join('')}
            </div>
            
            <div class="resume-section">
                <h3>Skills</h3>
                <div class="skills-grid">
                    ${Object.entries(resumeData.skills).map(([category, skills]) => `
                        <div class="skill-category">
                            <h4>${category}:</h4>
                            <p class="skill-list">${skills.join(', ')}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// Render design projects view for explorers
function renderDesignProjectsView(container, projects) {
    if (!projects) return;
    
    container.innerHTML = `
        <div class="design-projects-container">
            <div class="projects-world-map">
                <h2><i data-lucide="globe"></i> Design Work Around the World</h2>
                <p>My creative works have reached clients across the globe, from local businesses to international organizations.</p>
            </div>
            
            <div class="design-projects-grid">
                ${projects.map(project => `
                    <div class="design-project-card ${project.special ? 'special-project' : ''}">
                        <div class="project-image design-image ${project.image ? 'has-image' : ''}">
                            ${project.image ? 
                                `<img src="${project.image}" alt="${project.title}" class="design-thumbnail" />` :
                                `<i data-lucide="${project.icon}"></i>`
                            }
                            <div class="project-location">${project.location}</div>
                        </div>
                        <div class="project-content">
                            <div class="project-header">
                                <h3 class="project-title">${project.title}</h3>
                                <span class="project-year">${project.year}</span>
                            </div>
                            <p class="project-description">${project.description}</p>
                            <div class="project-meta">
                                <span class="project-type">${project.type}</span>
                                <span class="project-client">${project.client}</span>
                            </div>
                            <div class="project-category">
                                <span class="category-tag">${project.category}</span>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <div class="design-stats">
                <div class="stat-item">
                    <div class="stat-number">200+</div>
                    <div class="stat-label">Happy Clients</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">5</div>
                    <div class="stat-label">Countries</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">50+</div>
                    <div class="stat-label">Projects</div>
                </div>
            </div>
        </div>
    `;
}

// Render regular project cards view
function renderProjectCardsView(container, projects) {
    if (!projects) return;
    
    container.innerHTML = projects.map(project => `
        <div class="project-card ${project.featured ? 'featured-project' : ''}">
            <div class="project-image">
                ${project.image ? 
                    `<img src="${project.image}" alt="${project.title}" class="project-thumbnail" />` :
                    `<i data-lucide="${project.icon}"></i>`
                }
            </div>
            <div class="project-content">
                <div class="project-header">
                    <h3 class="project-title">${project.title}</h3>
                    <span class="project-status ${project.status.toLowerCase().replace(' ', '-')}">${project.status}</span>
                </div>
                <p class="project-description">${project.description}</p>
                ${project.category ? `<div class="project-category-badge">${project.category}</div>` : ''}
                <div class="project-tech">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.link}" class="project-link primary" target="_blank" rel="noopener">
                        <i data-lucide="github"></i>
                        <span>View Code</span>
                    </a>
                    ${project.liveLink ? `
                        <a href="${project.liveLink}" class="project-link" target="_blank" rel="noopener">
                            <i data-lucide="external-link"></i>
                            <span>Live Demo</span>
                        </a>
                    ` : ''}
                </div>
            </div>
        </div>
    `).join('');
}

// Setup event listeners for persona interactions
function setupPersonaEventListeners() {
    // Persona card clicks
    document.querySelectorAll('.persona-card').forEach(card => {
        card.addEventListener('click', () => {
            const persona = card.dataset.persona;
            if (persona && personaConfig[persona]) {
                setActivePersona(persona);
                
                // Close modal if open
                const modal = document.getElementById('persona-modal');
                if (modal && modal.getAttribute('aria-hidden') === 'false') {
                    // Use PortfolioApp.closeModal if available, otherwise close directly
                    if (window.PortfolioApp?.closeModal) {
                        window.PortfolioApp.closeModal(modal);
                    } else {
                        modal.setAttribute('aria-hidden', 'true');
                        document.body.style.overflow = '';
                    }
                }
            }
        });
        
        // Keyboard support
        card.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                card.click();
            }
        });
    });
    
    // Listen for external persona changes
    document.addEventListener('personaChanged', (e) => {
        console.log('Persona changed to:', e.detail.persona);
        updatePersonaUI();
    });
}

// Update persona UI elements
function updatePersonaUI() {
    const currentPersona = document.body.getAttribute('data-persona') || 'developer';
    const config = personaConfig[currentPersona];
    
    if (!config) return;
    
    // Update persona toggle icon if it exists
    const personaToggle = document.querySelector('.persona-toggle');
    if (personaToggle) {
        personaToggle.setAttribute('title', `Current: ${config.name}`);
    }
    
    // Update any other UI elements that depend on persona
    updatePersonaCardStates(currentPersona);
}

// Utility function to get current persona
function getCurrentPersona() {
    return document.body.getAttribute('data-persona') || 'developer';
}

// Utility function to get persona config
function getPersonaConfig(persona) {
    return personaConfig[persona] || null;
}

// Check if this is the first visit and show persona modal
function checkFirstVisit() {
    let hasVisited = false;
    
    try {
        hasVisited = localStorage.getItem('has-visited-before') === 'true';
    } catch (e) {
        console.warn('localStorage not available for first visit check:', e);
    }
    
    if (!hasVisited) {
        // Mark as visited
        try {
            localStorage.setItem('has-visited-before', 'true');
        } catch (e) {
            console.warn('Could not save visit status:', e);
        }
        
        // Auto-open persona modal after a short delay
        setTimeout(() => {
            const modal = document.getElementById('persona-modal');
            if (modal && window.PortfolioApp?.openModal) {
                window.PortfolioApp.openModal(modal);
            }
        }, 1500); // Delay to let the page load and animations settle
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePersonaSystem);
} else {
    // If DOM is already loaded, wait a bit to ensure other scripts have initialized
    setTimeout(initializePersonaSystem, 100);
}

// Export for external use
window.PersonaManager = {
    setActivePersona,
    getCurrentPersona,
    getPersonaConfig,
    personaConfig
};
