// Navbar toggle
document.getElementById("menu-toggle").addEventListener("click", () => {
    document.getElementById("nav-links").classList.toggle("active");
  });
  
  // Image slider logic
  let currentIndex = 0;
  const slides = document.getElementById("slides");
  const totalSlides = slides.children.length;
  
  function showSlide(index) {
    const offset = -index * 100;
    slides.style.transform = `translateX(${offset}%)`;
  }
  
  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }
  
  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  }
  
  // Auto slide (optional)
  setInterval(() => {
    nextSlide();
  }, 4000);
  
  // Contact Form Validation and Submission
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const response = document.getElementById("form-response");
  
    if (!name || !email || !message) {
      response.textContent = "Please fill in all fields.";
      response.style.color = "red";
      return;
    }
  
    // Simulated email submission
    response.textContent = "Message sent successfully!";
    response.style.color = "green";
    this.reset();
  });
  
