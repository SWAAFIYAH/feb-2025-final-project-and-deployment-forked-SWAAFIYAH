// Image slider logic
let images = ["images/slide1.jpg", "images/slide2.jpg", "images/slide3.jpg"];
let current = 0;
setInterval(() => {
  current = (current + 1) % images.length;
  document.getElementById("slider-image").src = images[current];
}, 3000);

// Form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  form?.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      document.getElementById("formMessage").textContent = "All fields are required.";
    } else {
      document.getElementById("formMessage").textContent = "Thank you for your message!";
      form.reset();
    }
  });
});
