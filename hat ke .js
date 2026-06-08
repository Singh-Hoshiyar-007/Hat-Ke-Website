// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Contact Form
const form = document.getElementById("contactForm");
const msg = document.getElementById("successMsg");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    msg.textContent = "Message sent successfully!";
    msg.style.color = "green";

    form.reset();
});