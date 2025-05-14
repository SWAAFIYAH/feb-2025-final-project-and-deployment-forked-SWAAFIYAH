const images = ["images/baby1.jpg", "images/baby2.jpg", "images/baby3.jpg"];
let current = 0;
const img = document.getElementById("slider-image");

setInterval(() => {
  current = (current + 1) % images.length;
  img.src = images[current];
}, 3000);

document.getElementById("contactForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (name && email && message) {
    formMessage.textContent = "Thank you for contacting us!";
    formMessage.style.color = "green";
  } else {
    formMessage.textContent = "Please fill in all fields.";
    formMessage.style.color = "red";
  }
});
