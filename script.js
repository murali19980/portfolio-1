document.addEventListener('DOMContentLoaded', () => {
  // ─── Dynamic Footer Year ──────────────────
  const footerYear = document.querySelector('.footer-left');
  if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.textContent = `© ${currentYear} Murali Krishna · muralikrishna.dpdns.org`;
  }

  // ─── Console Branding ─────────────────────
  console.log('%c Murali Krishna ', 'background:#2DD4BF; color:#0B0D0F; font-size:1.2rem; font-weight:bold; padding:4px 8px; border-radius:4px;');
  console.log('%c AI Systems Engineer · Local-First AI · Zero Cost Inference', 'color:#8FA3B8; font-size:0.9rem;');
  console.log('🚀 Available for projects on Upwork.');

  // ─── Nav Scroll Effect ─────────────────────
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
      } else {
        nav.style.boxShadow = 'none';
      }
    });
  }

  // ─── Smooth Scroll for Nav Links ───────────
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

  // ─── Fade-in Observer for Cards & Sections ──
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

  // ─── Back to Top Button ───────────────────
  const backToTopBtn = document.createElement('button');
  backToTopBtn.classList.add('back-to-top');
  backToTopBtn.innerHTML = '↑';
  document.body.appendChild(backToTopBtn);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
