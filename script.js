// ==========================================
// Aviral Singh Portfolio JavaScript
// Enhanced with Theme Toggle & Project Modal
// ==========================================

// Select elements
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const revealElements = document.querySelectorAll(".reveal");
const sections = document.querySelectorAll("section");
const header = document.getElementById("header");
const backToTop = document.getElementById("backToTop");
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const typingText = document.getElementById("typing-text");
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");
const themeToggle = document.getElementById("theme-toggle");
const projectModal = document.getElementById("projectModal");
const modalClose = document.getElementById("modalClose");
const projectViewButtons = document.querySelectorAll(".project-view-btn");

// ===============================
// Theme Toggle Feature
// ===============================
function initializeTheme() {
  const savedTheme = localStorage.getItem("theme") || "dark";
  
  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    updateThemeIcon(true);
  }
}

function updateThemeIcon(isLightMode) {
  const icon = themeToggle.querySelector(".theme-icon");
  icon.textContent = isLightMode ? "☀️" : "🌙";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  const isLightMode = document.body.classList.contains("light-mode");
  
  localStorage.setItem("theme", isLightMode ? "light" : "dark");
  updateThemeIcon(isLightMode);
});

// ===============================
// Project Modal Feature
// ===============================
const projectDetails = {
  "01": {
    title: "Calculator Application",
    description: "A fully functional calculator application that performs arithmetic operations including addition, subtraction, multiplication, and division. Built from scratch using vanilla JavaScript with a clean and intuitive user interface. The project helped me practice DOM manipulation, event handling, and state management. Features include real-time calculation display, error handling for invalid operations, and responsive button layout.",
    technologies: ["HTML5", "CSS3", "JavaScript", "DOM API"],
    links: [
      { text: "View Code", url: "https://github.com/aviralcodes29", type: "primary" },
      { text: "GitHub Repo", url: "https://github.com/aviralcodes29", type: "secondary" }
    ]
  },
  "02": {
    title: "Lost and Found Item Portal",
    description: "A web-based portal concept for reporting and tracking lost items in a community or campus. This project demonstrates my ability to conceptualize user problems and design solutions. The portal allows users to post lost items, search for found items, and connect with finders through contact information. Designed with user experience in mind, featuring intuitive navigation and clear categorization of items.",
    technologies: ["Web Design", "User Experience", "Problem Solving", "Information Architecture"],
    links: [
      { text: "Project Overview", url: "https://github.com/aviralcodes29", type: "primary" },
      { text: "GitHub Repo", url: "https://github.com/aviralcodes29", type: "secondary" }
    ]
  },
  "03": {
    title: "Personal Portfolio Website",
    description: "This responsive personal portfolio website showcasing my skills, projects, and experience. Built with modern HTML5, CSS3, and vanilla JavaScript, it features smooth animations, a clean design, and full mobile responsiveness. The portfolio is designed to make a great first impression on potential employers and collaborators. Includes light/dark theme toggle, interactive project modals, and optimized performance.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Animations"],
    links: [
      { text: "View Source", url: "https://github.com/aviralcodes29/Portfolio", type: "primary" },
      { text: "Visit Live", url: "https://aviralcodes29.github.io/Portfolio/", type: "secondary" }
    ]
  }
};

function openProjectModal(projectId) {
  const project = projectDetails[projectId];
  
  if (!project) {
    console.error(`❌ Project ${projectId} not found in projectDetails`);
    return;
  }
  
  document.getElementById("modalProjectNumber").textContent = `Project ${projectId}`;
  document.getElementById("modalProjectTitle").textContent = project.title;
  document.getElementById("modalProjectDescription").innerHTML = `<p>${project.description}</p>`;
  
  const techStackHTML = `
    <h3>Technologies Used</h3>
    <div class="tech-list">
      ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
    </div>
  `;
  document.getElementById("modalTechStack").innerHTML = techStackHTML;
  
  const actionsHTML = project.links.map(link => 
    `<a href="${link.url}" class="btn btn-${link.type}" target="_blank" rel="noopener noreferrer">${link.text}</a>`
  ).join('');
  document.getElementById("modalActions").innerHTML = actionsHTML;
  
  projectModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  projectModal.classList.remove("active");
  document.body.style.overflow = "auto";
}

projectViewButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    e.stopPropagation();
    const projectId = button.getAttribute("data-project");
    openProjectModal(projectId);
  });
});

modalClose.addEventListener("click", closeProjectModal);

projectModal.addEventListener("click", (e) => {
  if (e.target === projectModal) {
    closeProjectModal();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && projectModal.classList.contains("active")) {
    closeProjectModal();
  }
});

// ===============================
// Mobile Menu
// ===============================
menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");

  const isOpen = navMenu.classList.contains("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  });
});

// ===============================
// Scroll Reveal Animation
// ===============================
function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 100;

  revealElements.forEach((element) => {
    const revealTop = element.getBoundingClientRect().top;

    if (revealTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

// ===============================
// Active Nav Link
// ===============================
function setActiveLink() {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 140;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

// ===============================
// Typing Animation
// ===============================
const roles = [
  "Aspiring Web Developer",
  "B.Tech CSE Student (AI-ML)",
  "Open to Internships",
  "Fresher with Strong Fundamentals"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  if (!typingText) return;

  const currentRole = roles[roleIndex];

  if (!isDeleting) {
    typingText.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    typingText.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 90);
}

// ===============================
// Project Filter
// ===============================
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filterValue = button.getAttribute("data-filter");

    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const categories = card.getAttribute("data-category");

      if (filterValue === "all" || categories.includes(filterValue)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// ===============================
// Back to Top Button
// ===============================
function handleBackToTop() {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
}

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ===============================
// Hide Header on Scroll Down
// ===============================
let lastScrollY = window.scrollY;

function handleHeaderScroll() {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollY = currentScrollY;
}

// ===============================
// Contact Form Validation & Submission
// ===============================
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validation
  if (!name || !email || !subject || !message) {
    formMessage.textContent = "❌ Please fill in all fields.";
    formMessage.style.color = "#f87171";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

  if (!emailPattern.test(email)) {
    formMessage.textContent = "❌ Please enter a valid email address.";
    formMessage.style.color = "#f87171";
    return;
  }

  // If Formspree is configured, form will submit
  // If not, show instructions
  formMessage.textContent = "✅ Form ready! To send emails, integrate Formspree (see README).";
  formMessage.style.color = "#5eead4";
  
  console.log("Form data:", { name, email, subject, message });
  
  // Reset form after 2 seconds
  setTimeout(() => {
    contactForm.reset();
    formMessage.textContent = "";
  }, 2000);
});

// ===============================
// Resume Download with Validation
// ===============================
const resumeBtn = document.querySelector('a[download]');
if (resumeBtn) {
  resumeBtn.addEventListener("click", (e) => {
    const resumePath = resumeBtn.getAttribute("href");
    
    // Check if resume file exists by attempting to fetch
    fetch(resumePath, { method: "HEAD" })
      .catch(() => {
        e.preventDefault();
        alert("⚠️ Resume file not found. Please add Aviral_Singh_Resume.pdf to the repository root.");
        console.error(`Resume file not found at: ${resumePath}`);
      });
  });
}

// ===============================
// Window Events
// ===============================
window.addEventListener("scroll", () => {
  revealOnScroll();
  setActiveLink();
  handleBackToTop();
  handleHeaderScroll();
});

window.addEventListener("load", () => {
  initializeTheme();
  revealOnScroll();
  setActiveLink();
  handleBackToTop();
  typeEffect();
  
  // Log initialization
  console.log("✅ Portfolio loaded successfully!");
  console.log("🌙 Theme toggle: Available");
  console.log("📱 Project modal: Available");
  console.log("📧 Contact form: Ready for Formspree integration");
});
