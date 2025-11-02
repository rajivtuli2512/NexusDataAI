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
const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
