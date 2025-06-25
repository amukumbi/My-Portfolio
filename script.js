// ===== Smooth Scroll for Navbar Links =====
document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    const target = document.querySelector(targetId);

    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });

      // Close mobile menu after clicking a link (optional for hamburger)
      const navList = document.querySelector('.nav-list');
      const menuToggle = document.querySelector('.menu-toggle');
      if (navList.classList.contains('active')) {
        navList.classList.remove('active');
        if (menuToggle) menuToggle.classList.remove('active');
      }
    }
  });
});

// ===== Mobile Menu Toggle (Add hamburger icon in HTML for this to work) =====
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

if (menuToggle && navList) {
  menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
    menuToggle.classList.toggle('active'); // Optional: animate hamburger icon
  });
}

// ===== Typewriter Restart on Page Load =====
window.addEventListener('load', () => {
  ['.typewriter', '.typewrite-line'].forEach(selector => {
    const element = document.querySelector(selector);
    if (element) {
      element.style.animation = 'none';
      void element.offsetWidth; // Force reflow
      element.style.animation = '';
    }
  });
});

// ===== Contact Form Validation =====
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', e => {
    const name = contactForm.querySelector('input[name="name"]');
    const email = contactForm.querySelector('input[name="email"]');
    const message = contactForm.querySelector('textarea[name="message"]');

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      e.preventDefault();
      alert('Please fill in all fields.');
      return;
    }

    // Simple Email Format Validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      e.preventDefault();
      alert('Please enter a valid email address.');
    }
  });
}
