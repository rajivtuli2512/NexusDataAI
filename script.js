// Responsive menu toggle
const toggleButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#primary-menu');

toggleButton.addEventListener('click', () => {
  const expanded = toggleButton.getAttribute('aria-expanded') === 'true' || false;
  toggleButton.setAttribute('aria-expanded', !expanded);
  navLinks.classList.toggle('active');
});

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Scroll animations
const faders = document.querySelectorAll('.fade-in, .slide-up');
const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);
faders.forEach(fader => appearOnScroll.observe(fader));

// AJAX Contact Form
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData.entries());

  try {
    // Example endpoint: Replace with your actual backend or use a service like Formspree/Netlify Forms
    const response = await fetch('https://example.com/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    if(response.ok) {
      alert('Thank you! Your message has been sent.');
      contactForm.reset();
    } else {
      alert('Oops! Something went wrong, please try again.');
    }
  } catch(err) {
    alert('Network error. Please try again later.');
    console.error(err);
  }
});
