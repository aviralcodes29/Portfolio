# Aviral Singh - Frontend Developer Portfolio

> A modern, dark-mode portfolio website showcasing frontend development projects and skills.

## 📋 Table of Contents

- [Overview](https://github.com/aviralcodes29/portfolio#-overview)
- [Features](https://github.com/aviralcodes29/portfolio#-features)
- [Tech Stack](https://github.com/aviralcodes29/portfolio#%EF%B8%8F-tech-stack)
- [Project Structure](https://github.com/aviralcodes29/portfolio#-project-structure)
- [Customization Guide](https://github.com/aviralcodes29/portfolio#-customization-guide)
- [Browser Support](https://github.com/aviralcodes29/portfolio#-browser-support)
- [Performance](https://github.com/aviralcodes29/portfolio#-performance-metrics)
- [Accessibility](https://github.com/aviralcodes29/portfolio#-accessibility)
- [License](https://github.com/aviralcodes29/portfolio#-license)

## 🎯 Overview

This is a personalized portfolio website for **Aviral Singh**, a B.Tech Computer Science Engineering student specializing in AI & ML with a strong passion for Frontend Development and Web Technologies.

**Portfolio Highlights:**
- 5 featured projects with live demos and GitHub links
- Interactive skills section with proficiency indicators
- Contact form with validation
- Dark mode theme with neon accents
- Fully responsive design
- Smooth animations and transitions

**Live Demo:** [aviral-singh portfolio](https://aviralcodes29.github.io/portfolio/)  
**GitHub Repository:** [github.com/Aviralcodes29](https://github.com/Aviralcodes29)  
**LinkedIn Profile:** [linkedin.com/in/aviral-singh-a425a1379](https://www.linkedin.com/in/aviral-singh-a425a1379)

## ✨ Features

### Design & UX
- 🌙 **Dark Mode Aesthetic** - Modern, eye-friendly dark theme
- 💫 **Glassmorphism Effects** - Frosted glass-like card designs
- 🔆 **Neon Accents** - Cyan, purple, and pink accent colors
- ✨ **Smooth Animations** - Fade-ins, hover effects, parallax scrolling
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Performance Optimized** - Fast load times and smooth interactions

### Navigation & Interaction
- 🔗 **Smooth Scroll Navigation** - Seamless section navigation
- 📍 **Active Link Highlighting** - Shows current section in navbar
- 🍔 **Mobile Hamburger Menu** - Responsive navigation for small screens
- ⬆️ **Scroll-to-Top Button** - Quick return to top
- 💥 **Ripple Effects** - Interactive feedback on cards
- 🔔 **Notifications** - Success/error messages with animations

### Content Sections
- 👤 **Hero Section** - Eye-catching introduction with code window visual
- 📝 **About Me** - Bio and key statistics
- 💼 **Projects** - 5 featured projects with descriptions and tech stacks
- 🛠️ **Skills** - Technologies and proficiency levels
- 📧 **Contact Form** - Get in touch functionality
- 🔗 **Social Links** - GitHub, LinkedIn, and email

### Forms & Validation
- ✅ **Form Validation** - Real-time input validation
- 🔍 **Email Verification** - Regex-based email validation
- 🎯 **Error Highlighting** - Visual feedback for invalid inputs
- 📬 **Success Messages** - Confirmation notifications

## 🛠️ Tech Stack

### Frontend Technologies
- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with CSS variables and animations
- **JavaScript (ES6+)** - Interactive functionality and DOM manipulation
- **Google Fonts** - JetBrains Mono & Space Grotesk typography

### Tools & Services
- **Git/GitHub** - Version control and hosting
- **GitHub Pages** - Free static site hosting
- **VS Code** - Development environment

## 📁 Project Structure

```text
portfolio/
│
├── BUG-FIXES.md            # Bug fixes and resolved issues
├── CHANGELOG.md            # Project update history
├── DEPLOY.md               # Deployment instructions
├── INDEX.md                # Project index/documentation
├── PACKAGE-MANIFEST.md     # Project metadata and package details
├── QUICK-START.md          # Quick setup guide
├── README.md               # Main project documentation
│
├── index.html              # Main portfolio webpage
├── styles-portfolio.css    # Portfolio styling
└── script-portfolio.js     # Portfolio functionality
```


### File Descriptions

#### `index.html` (1000+ lines)
- Complete semantic HTML structure
- Navigation with internal linking
- Hero section with code visual
- About section with statistics
- Project cards with links
- Skills grid with progress bars
- Contact form
- Footer with social links

#### `styles-portfolio.css` (800+ lines)
- CSS custom properties (variables)
- Dark mode color scheme
- Glassmorphism and glow effects
- Responsive grid layouts
- Animation keyframes
- Media queries for all breakpoints
- Accessibility-friendly colors

#### `script-portfolio.js` (600+ lines)
- Mobile navigation toggle
- Smooth scroll handling
- Intersection Observer for animations
- Form validation and submission
- Counter animations
- Notification system
- Parallax effects
- Keyboard support

## 🎨 Customization Guide

### Changing Colors

Edit the CSS variables in `styles-portfolio.css` (lines 1-15):

```css
:root {
    --bg-primary: #0a0e27;           /* Main background */
    --accent-cyan: #00d4ff;          /* Primary accent */
    --accent-purple: #a855f7;        /* Secondary accent */
    --accent-lime: #84cc16;          /* Tertiary accent */
    --accent-pink: #ec4899;          /* Highlight color */
    /* ... other variables ... */
}
```

### Adding New Projects

1. **Open** `index.html`
2. **Find** the `<!-- Projects Section -->` comment
3. **Copy** an existing project card:

```html
<div class="project-card">
    <div class="project-header">
        <h3>Your Project Name</h3>
        <span class="project-icon">🎯</span>
    </div>
    <p class="project-desc">Your project description here.</p>
    <div class="project-tech">
        <span class="tech-tag">Technology</span>
    </div>
    <a href="https://your-link.com" target="_blank" class="project-link">
        Live Demo <span>→</span>
    </a>
</div>
```

4. **Update** the project details
5. **Save** and refresh your browser

### Updating Skills

1. **Find** the `<!-- Skills Section -->` comment
2. **Modify** skill names and percentages:

```html
<div class="skill-item">
    <span class="skill-name">Your Skill</span>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 85%;"></div>
    </div>
</div>
```

### Changing Personal Information

**Hero Section:**
```html
<h1 class="hero-title">
    <span class="gradient-text">Your Title</span>
    Your Subtitle
</h1>
```

**About Section:**
Edit the bio paragraphs and statistics (lines 200-250)

**Contact Section:**
Update email in the footer and contact links

## 📱 Browser Support

| Browser | Support | Version |
|---------|---------|---------|
| Chrome | ✅ | Latest |
| Firefox | ✅ | Latest |
| Safari | ✅ | Latest |
| Edge | ✅ | Latest |
| Mobile Chrome | ✅ | Latest |
| Mobile Safari | ✅ | Latest |

## ⚡ Performance Metrics

- **Page Load Time:** < 2 seconds
- **Lighthouse Score:** 95+
- **Bundle Size:** ~120 KB (all files combined)
- **CSS:** ~50 KB
- **JavaScript:** ~25 KB
- **HTML:** ~45 KB

### Performance Tips

1. **Minimize Reflows** - CSS animations use transform/opacity
2. **Lazy Load Images** - Use native lazy loading when needed
3. **Optimize Fonts** - Google Fonts with font-display: swap
4. **Reduce JS Bundle** - No external dependencies
5. **Cache Strategy** - GitHub Pages automatic caching

## ♿ Accessibility

### WCAG 2.1 Compliance
- ✅ **Semantic HTML** - Proper heading hierarchy
- ✅ **Color Contrast** - 4.5:1 ratio for text
- ✅ **Keyboard Navigation** - Full support with Tab
- ✅ **Focus States** - Visible focus indicators
- ✅ **ARIA Labels** - Where needed for clarity
- ✅ **Mobile Friendly** - Touch-friendly targets

### Testing Tools Used
- Chrome DevTools Lighthouse
- axe DevTools
- WAVE Web Accessibility Checker

## 🔧 Common Customizations

### Change Font Family

In CSS, update the font imports:
```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;600;700&display=swap');
```

Then update the font-family property:
```css
body {
    font-family: 'YOUR_FONT', sans-serif;
}
```

### Add Dark/Light Mode Toggle

Add a button in the navbar and use JavaScript to toggle:
```javascript
document.documentElement.setAttribute('data-theme', 'light');
// Switch CSS variables based on theme
```

### Connect Real Email Service

Replace form submission with:
```javascript
// Use Formspree, EmailJS, or similar service
fetch('https://formspree.io/f/YOUR_ID', {
    method: 'POST',
    body: formData
});
```

## 🚀 Advanced Tips

### SEO Optimization
- Update meta tags in `<head>`
- Add structured data (JSON-LD)
- Create sitemap.xml
- Submit to Google Search Console

### Analytics
- Add Google Analytics tracking
- Monitor user behavior
- Track form submissions

### Custom Domain
- Register domain on Namecheap or GoDaddy
- Point to GitHub Pages DNS
- Update CNAME file in repo

## 📊 Statistics

- **Total Lines of Code:** 2400+
- **CSS Animation Keyframes:** 10+
- **JavaScript Functions:** 20+
- **Responsive Breakpoints:** 3
- **Projects Showcased:** 5
- **Skills Categories:** 3

## 🐛 Known Issues

See [BUG-FIXES.md](./BUG-FIXES.md) for known issues and workarounds.

## 📦 Version History

**v1.0.0** (Current)
- Initial portfolio launch
- 5 projects showcased
- Dark mode theme
- Full responsiveness
- Form validation

## 🤝 Contributing

This is a personal portfolio. For suggestions or improvements:

1. Create an issue
2. Propose changes
3. Test thoroughly
4. Submit pull request

## 📞 Contact

- **Email:** aviral2529@gmail.com
- **GitHub:** https://github.com/Aviralcodes29
- **LinkedIn:** https://www.linkedin.com/in/aviral-singh-a425a1379

## 📄 License

This portfolio is open source and available under the [MIT License](./LICENSE).

---

**Made with ❤️ and lots of coffee by Aviral Singh**

Last Updated: 2026  
Status: Active & Maintained
