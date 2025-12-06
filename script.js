// validate if the input is a number
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const statusMsg = document.getElementById("statusMsg");

  // Simple email regex check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !subject || !message) {
    statusMsg.textContent = "⚠️ Please fill out all fields.";
    statusMsg.style.color = "#f87171"; // red
    return;
  }

  if (!emailPattern.test(email)) {
    statusMsg.textContent = "⚠️ Please enter a valid email address.";
    statusMsg.style.color = "#f87171";
    return;
  }

  // If everything is valid
  statusMsg.textContent = "✅ Message sent successfully! (Demo only)";
  statusMsg.style.color = "#4ade80"; // green

  // Optionally reset form
  document.getElementById("contactForm").reset();
});

// Animate skills when visible on scroll
const progressBars = document.querySelectorAll(".progress");

window.addEventListener("scroll", () => {
  progressBars.forEach((bar) => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      bar.style.width = bar.getAttribute("style").split(":")[1];
    }
  });
});

var typed = new Typed("#element", {
  strings: ["Web Developer", "Freelancer", "Designer"],
  typeSpeed: 50,
});

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});
