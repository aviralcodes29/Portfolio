// ==========================================
// Aviral Singh Portfolio JavaScript
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
// Contact Form Validation
// ===============================
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !subject || !message) {
    formMessage.textContent = "Please fill in all fields.";
    formMessage.style.color = "#f87171";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

  if (!emailPattern.test(email)) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = "#f87171";
    return;
  }

  formMessage.textContent = "Message sent successfully! (Demo only)";
  formMessage.style.color = "#5eead4";
  contactForm.reset();
});

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
  revealOnScroll();
  setActiveLink();
  handleBackToTop();
  typeEffect();
});