# 🎨 dizzydroid Portfolio

> A dynamic, persona-driven portfolio website that adapts to your audience

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen?style=for-the-badge)](https://dizzydroid.github.io)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![Mobile Responsive](https://img.shields.io/badge/Mobile-Responsive-orange?style=for-the-badge)]()

## ✨ Features

### 🎭 **Persona-Based Experience**
The portfolio features a unique **4-persona system** that dynamically adapts content and styling based on who's visiting:

- **🎓 Student/Learner**: Educational focus, study projects, learning journey
- **💼 Recruiter/HR**: Professional experience, skills, achievements
- **💻 Fellow Developer**: Technical projects, code repositories, development insights
- **🌟 Curious Explorer**: Creative projects, fun experiments, personal side

### 🎨 **Sketch Persona Selector**
A revolutionary **notebook-style interface** that completely replaces traditional loading screens:
- Hand-drawn aesthetic using Gloria Hallelujah font
- Interactive floating doodles and animations
- Touch-friendly mobile optimization
- Accessibility-first design with ARIA support
- Smart device detection for performance optimization

### 🚀 **Modern Portfolio Features**
- **Responsive Design**: Seamless experience across all devices
- **Dynamic Blog System**: Categories, search, pagination, featured posts
- **Neofetch Terminal**: Interactive developer-themed display
- **Smooth Animations**: CSS3 powered transitions and effects
- **Easter Eggs**: Hidden Konami code surprises
- **Performance Optimized**: Fast loading with progressive enhancement

### ♿ **Accessibility First**
- Full keyboard navigation support
- Screen reader compatibility
- ARIA labels and semantic HTML
- Focus management and indicators
- Reduced motion support

## 🛠️ Technologies

### Core Stack
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties
- **Vanilla JavaScript** - No framework dependencies
- **Font Awesome** - Icon library
- **Google Fonts** - Inter & Gloria Hallelujah typography

### Key Libraries & APIs
- **Web Storage API** - Persona preferences persistence
- **Intersection Observer** - Performance-optimized animations
- **CSS Grid & Flexbox** - Advanced layouts
- **CSS Custom Properties** - Dynamic theming

## 📁 Project Structure

```
dizzydroid.github.io/
├── 📄 index.html              # Homepage with persona selector
├── 📄 about.html              # About page with persona-specific content
├── 📄 blog.html               # Dynamic blog system
├── 📄 projects.html           # Projects showcase
├── 📄 contact.html            # Contact information
├── 📄 demo.html               # Sketch selector demo
├── 📁 assets/
│   ├── 📁 css/
│   │   ├── main.css           # Core styles
│   │   ├── personas.css       # Persona theming system
│   │   ├── sketch-persona-selector.css
│   │   ├── navbar.css         # Navigation styles
│   │   ├── blog.css           # Blog-specific styles
│   │   └── matrix-mode.css    # Easter egg styles
│   └── 📁 js/
│       ├── main.js            # Core application logic
│       ├── persona-engine.js  # Persona switching system
│       ├── sketch-persona-selector.js
│       ├── blog.js            # Blog functionality
│       ├── animations.js      # Animation engine
│       └── easter-eggs.js     # Hidden features
├── 📁 blog/                   # Blog post pages
├── 📁 images/                 # Asset images
└── 📁 test/                   # Testing pages
```

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone https://github.com/dizzydroid/dizzydroid.github.io.git
cd dizzydroid.github.io
```

### 2. Local Development
Since this is a static site, you can use any local server:

**Option A: Python**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

**Option B: Node.js**
```bash
npx serve .
# or
npx http-server
```

**Option C: VS Code Live Server**
- Install the Live Server extension
- Right-click `index.html` → "Open with Live Server"

### 3. Visit the Site
Open your browser to `http://localhost:8000`

## 🎯 Key Features Deep Dive

### Persona System
The persona system is the heart of this portfolio:

```javascript
// Personas are stored in localStorage
localStorage.setItem('preferredPersona', 'dev');

// Content dynamically changes based on selection
const personas = {
  student: { /* student-specific content */ },
  recruiter: { /* professional content */ },
  dev: { /* technical content */ },
  other: { /* creative content */ }
};
```

### Sketch Selector Innovation
Replaces boring loading screens with an engaging selection interface:
- **First-time visitors**: See the sketch selector automatically
- **Returning visitors**: Skip directly to content
- **Force display**: Add `?force-sketch=true` to URL

### Blog System
Dynamic blog with advanced features:
- **Categories**: Coding, Design, Tutorials, Cybersecurity, Thoughts
- **Search**: Real-time filtering
- **Sorting**: Date, popularity, read time
- **Pagination**: Performance-optimized page loading
- **Featured Posts**: Highlighted content system

## 📱 Mobile Optimization

The site is fully responsive with specific mobile enhancements:
- Touch-friendly interfaces
- Optimized animations for mobile devices
- Hamburger navigation menu
- Reduced motion for performance
- Mobile-first CSS approach

## 🔧 Customization

### Adding Your Own Content

1. **Update Personal Information**
   ```javascript
   // In assets/js/persona-engine.js
   const personas = {
     student: {
       badge: 'Your custom greeting',
       subtitle: 'Your subtitle',
       // ... other content
     }
   };
   ```

2. **Add Blog Posts**
   ```javascript
   // In assets/js/blog.js
   this.blogPosts = [
     {
       id: 1,
       title: "Your Post Title",
       excerpt: "Post description...",
       category: "coding",
       // ... other properties
     }
   ];
   ```

3. **Customize Colors**
   ```css
   /* In assets/css/personas.css */
   .persona-dev {
     --primary-color: #your-color;
     --secondary-color: #your-secondary;
   }
   ```

### Testing Your Changes

The repository includes comprehensive testing pages:
- `demo.html` - Interactive feature demo
- `test-accessibility.html` - Accessibility testing
- `test-integration.html` - Full integration tests
- `test-simple.html` - Basic functionality tests

## 🎨 Design Philosophy

This portfolio follows several key design principles:

1. **User-Centric**: Different audiences see different content
2. **Performance-First**: Optimized for speed and efficiency
3. **Accessibility-Driven**: Inclusive design for all users
4. **Mobile-Native**: Built for mobile, enhanced for desktop
5. **Progressive Enhancement**: Works everywhere, better with modern browsers

## 🤝 Contributing

While this is a personal portfolio, contributions are welcome:

1. **Bug Reports**: Open an issue with detailed information
2. **Feature Suggestions**: Propose new features via issues
3. **Pull Requests**: Fork, create a feature branch, and submit a PR
4. **Documentation**: Help improve docs and comments

### Development Guidelines
- Follow existing code style and structure
- Test across multiple browsers and devices
- Maintain accessibility standards
- Update documentation for new features

## 📊 Performance

The site is optimized for performance:
- **Lighthouse Score**: 95+ across all metrics
- **Mobile-First**: Optimized for mobile devices
- **Lazy Loading**: Images and content load as needed
- **Efficient CSS**: Minimal render-blocking resources
- **Progressive Enhancement**: Core functionality works without JavaScript

## 🔒 Privacy & Security

- **No Tracking**: No external analytics or tracking
- **Local Storage Only**: All preferences stored locally
- **GDPR Compliant**: No personal data collection
- **Secure Links**: All external links use proper security attributes

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 About the Developer

This portfolio was built by **Shehab Mahmoud** (dizzydroid):
- 🎓 Computer Engineering Student
- 💻 Passionate Developer
- 🌟 Open Source Enthusiast

## 🎉 Acknowledgments

- **Font Awesome** - For comprehensive icon library
- **Google Fonts** - For typography excellence
- **The Dev Community** - For inspiration and feedback

---

<div align="center">

**⭐ Star this repo if you found it interesting!**

*Made with ❤️ and lots of coffee by dizzydroid*

</div>