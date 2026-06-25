document.addEventListener('DOMContentLoaded', () => {
  // ── Nav Scroll Effect ──
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
    } else {
      nav.style.boxShadow = 'none';
    }
  });

  // ── Smooth Scroll for Nav Links ──
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // ── Fade-in Observer for Cards & Sections ──
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Targets for fade-in
  const animateTargets = document.querySelectorAll('.project-row, .service-item, .current-card');
  animateTargets.forEach((el, index) => {
    el.classList.add('fade-in-init');
    // Set a staggered transition delay via CSS variable
    el.style.setProperty('--delay', `${(index % 3) * 0.1}s`);
    observer.observe(el);
  });
});
