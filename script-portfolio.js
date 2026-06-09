// ========== Mobile Navigation Toggle ==========
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ========== Smooth Scrolling ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========== Active Navigation Link Highlighting ==========
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 300) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });

    // Show/hide scroll top button
    const scrollTopBtn = document.getElementById('scrollTop');
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.display = 'flex';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

// ========== Scroll to Top Button ==========
const scrollTopBtn = document.getElementById('scrollTop');
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========== Intersection Observer for Animations ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe project cards, stat cards, and skill groups
document.querySelectorAll('.project-card, .stat-card, .skill-group').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// ========== Form Validation & Submission ==========
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = contactForm.querySelector('input[type="text"]');
    const emailInput = contactForm.querySelector('input[type="email"]');
    const messageInput = contactForm.querySelector('textarea');

    let isValid = true;

    // Validate name
    if (nameInput.value.trim() === '') {
        setInputError(nameInput, true);
        isValid = false;
    } else {
        setInputError(nameInput, false);
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value)) {
        setInputError(emailInput, true);
        isValid = false;
    } else {
        setInputError(emailInput, false);
    }

    // Validate message
    if (messageInput.value.trim() === '') {
        setInputError(messageInput, true);
        isValid = false;
    } else {
        setInputError(messageInput, false);
    }

    if (isValid) {
        // Show success message
        showNotification('Message sent successfully! I'll get back to you soon. ✨', 'success');
        contactForm.reset();
    } else {
        showNotification('Please fill in all fields correctly.', 'error');
    }
});
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}
function setInputError(input, hasError) {
    if (hasError) {
        input.style.borderColor = '#ec4899';
        input.style.boxShadow = '0 0 15px rgba(236, 72, 153, 0.3)';
    } else {
        input.style.borderColor = '';
        input.style.boxShadow = '';
    }
}

// ========== Notification System ==========
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 16px 24px;
        border-radius: 8px;
        background: ${type === 'success' ? 'rgba(132, 204, 22, 0.2)' : 'rgba(236, 72, 153, 0.2)'};
        color: ${type === 'success' ? '#84cc16' : '#ec4899'};
        border: 1px solid ${type === 'success' ? 'rgba(132, 204, 22, 0.5)' : 'rgba(236, 72, 153, 0.5)'};
        box-shadow: 0 0 20px ${type === 'success' ? 'rgba(132, 204, 22, 0.3)' : 'rgba(236, 72, 153, 0.3)'};
        z-index: 2000;
        animation: slideInNotification 0.4s ease-out;
        font-weight: 600;
        max-width: 400px;
        word-wrap: break-word;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutNotification 0.4s ease-out forwards';
        setTimeout(() => notification.remove(), 400);
    }, 3500);
}

// ========== Add Animations via Style Tag ==========
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInNotification {
        from {
            opacity: 0;
            transform: translateX(20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideOutNotification {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(20px);
        }
    }

    .nav-link.active {
        color: #00d4ff;
        text-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
    }

    .nav-link.active::after {
        width: 100%;
    }
`;

document.head.appendChild(style);

// ========== Parallax Effect on Scroll ==========
const heroSection = document.querySelector('.hero');

if (heroSection) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-visual');
        
        if (hero && scrolled < window.innerHeight) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// ========== Counter Animation for Stats ==========
function animateCounter(element, target, duration = 2000) {
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (isNaN(target) ? '' : '+');
        } else {
            element.textContent = Math.floor(current) + '+';
            requestAnimationFrame(updateCounter);
        }
    };

    requestAnimationFrame(updateCounter);
}

// Trigger counter animation when stats are in view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(item => {
                const targetValue = parseInt(item.textContent);
                if (!isNaN(targetValue)) {
                    animateCounter(item, targetValue);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutSection = document.querySelector('.about');
if (aboutSection) {
    statsObserver.observe(aboutSection);
}

// ========== Project Card Ripple Effect ==========
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(0, 212, 255, 0.6);
            left: ${x}px;
            top: ${y}px;
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        `;

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple-animation {
        from {
            opacity: 1;
            transform: scale(0);
        }
        to {
            opacity: 0;
            transform: scale(1);
        }
    }
`;
document.head.appendChild(rippleStyle);

// ========== Keyboard Navigation Support ==========
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
    }
});

// ========== Page Load Animation ==========
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease-out';

// ========== Print Friendly Styles ==========
const printStyle = document.createElement('style');
printStyle.textContent = `
    @media print {
        .navbar, .scroll-top, .footer {
            display: none !important;
        }
        body {
            margin: 0;
            padding: 0;
            background: white;
            color: black;
        }
    }
`;
document.head.appendChild(printStyle);

// ========== Skill Progress Animation ==========
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skill-progress').forEach(progress => {
                progress.style.animation = 'progress-fill 1.5s ease-out forwards';
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-group').forEach(group => {
    skillObserver.observe(group);
});

// ========== Hover Effects on Contact Links ==========
document.querySelectorAll('.contact-link').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.color = '#a855f7';
        this.style.textShadow = '0 0 10px rgba(168, 85, 247, 0.5)';
    });

    link.addEventListener('mouseleave', function() {
        this.style.color = '#00d4ff';
        this.style.textShadow = '';
    });
});

// ========== Custom Cursor Effect ==========
document.addEventListener('mousemove', (e) => {
    // Optional: You can add a custom cursor trail effect here
});

// ========== Initialize Page ==========
console.log('🚀 Aviral Singh\'s Portfolio loaded! Welcome!');
console.log('📧 Email: aviral2529@gmail.com');
console.log('🔗 GitHub: https://github.com/Aviralcodes29');
console.log('💼 LinkedIn: https://www.linkedin.com/in/aviral-singh-a425a1379');
