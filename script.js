document.addEventListener('DOMContentLoaded', () => {
  // ── Typewriter Effect ──
  const textToType = 'ship → monetize → repeat';
  const typedTextEl = document.getElementById('typed-text');
  const cursorEl = document.getElementById('cursor');
  let charIndex = 0;

  function typeChar() {
    if (charIndex < textToType.length) {
      typedTextEl.textContent += textToType.charAt(charIndex);
      charIndex++;
      setTimeout(typeChar, 80);
    } else {
      // After typing is done, blink cursor a few times then hide
      setTimeout(() => {
        cursorEl.style.animation = 'none';
        cursorEl.style.opacity = '0';
      }, 2000);
    }
  }

  // Start typing after a short delay
  setTimeout(typeChar, 600);

  // ── Marquee Duplication ──
  // Duplicate marquee items for seamless infinite scroll
  const marqueeTrack = document.getElementById('marquee-track');
  const items = marqueeTrack.innerHTML;
  marqueeTrack.innerHTML = items + items;

  // ── Nav Scroll Effect ──
  const nav = document.querySelector('nav');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add subtle shadow on scroll
    if (currentScroll > 20) {
      nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
    } else {
      nav.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
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

  // ── Intersection Observer for Fade-in Animations ──
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Apply fade-in to cards and stat cards
  document.querySelectorAll('.card, .stat-card').forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
    observer.observe(el);
  });
});
