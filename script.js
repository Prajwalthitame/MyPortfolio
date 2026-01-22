/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY + 80; // offset for fixed navbar
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute("href"));
    if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
      link.parentElement.classList.add("active");
    } else {
      link.parentElement.classList.remove("active");
    }
  });
});

// Smooth scroll for links
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// ===============================
// TYPED HERO TEXT
// ===============================
if (document.querySelector(".nm")) {
  new Typed(".nm", {
    strings: ["Web Developer", "Frontend Developer", "MERN Stack Learner"],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1200,
    loop: true
  });
}

// ===============================
// SKILL BAR ANIMATION ON SCROLL
// ===============================
const skillCards = document.querySelectorAll(".progress");

const skillObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        const width = bar.style.width;
        bar.style.width = "0";
        setTimeout(() => {
          bar.style.width = width;
        }, 200);
        skillObserver.unobserve(bar);
      }
    });
  },
  { threshold: 0.6 }
);

skillCards.forEach(bar => skillObserver.observe(bar));

// ===============================
// CONTACT FORM VALIDATION
// ===============================
const form = document.getElementById("contactForm");
const statusMsg = document.getElementById("statusMsg");

if(form){
  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
      statusMsg.textContent = "❌ Please fill all fields.";
      statusMsg.style.color = "#f87171";
      return;
    }

    statusMsg.textContent = "✅ Message sent successfully!";
    statusMsg.style.color = "#47d870";

    form.reset();
  });
}

// ===============================
// OPTIONAL: NAVBAR HIDE ON SCROLL DOWN
// ===============================
let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll && currentScroll > 100) {
    navbar.style.transform = "translateY(-120%)";
  } else {
    navbar.style.transform = "translateY(0)";
  }

  lastScroll = currentScroll;
});
// Active link hover + scroll effect
navLinks.forEach(link => {
  link.addEventListener("mouseenter", () => {
    link.style.transform = "scale(1.12)";
  });
  link.addEventListener("mouseleave", () => {
    link.style.transform = "";
  });
});

// certificates section//

ScrollReveal().reveal('.certificate-card', {
  origin: 'bottom',
  distance: '40px',
  duration: 800,
  interval: 200,
  easing: 'ease-in-out'
});
