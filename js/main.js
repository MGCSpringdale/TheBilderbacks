const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// Note: scroll-reveal for .reveal / .reveal-lines is handled by motion.js (GSAP).
// CSS defaults these elements to visible; motion.js only hides-then-animates them
// once it confirms GSAP loaded, so nothing depends on that script for visibility.

// Placeholder tour-item links (no per-event detail pages yet) shouldn't jump the page
document.querySelectorAll('a.tour-item[href="#"]').forEach((a) => {
  a.addEventListener('click', (e) => e.preventDefault());
});

// Header background on scroll
const header = document.querySelector('.site-header');
if (header) {
  const onScroll = () => {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// Mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    menuToggle.classList.toggle('open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  mobileMenu.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      menuToggle.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

// Stat count-up
function animateCount(el) {
  const target = parseInt(el.textContent, 10);
  if (Number.isNaN(target) || prefersReducedMotion) return;
  const duration = 1000;
  const start = performance.now();
  el.textContent = '0';
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = target;
  }
  requestAnimationFrame(tick);
}

const statEls = document.querySelectorAll('.stat .num');
if (statEls.length && 'IntersectionObserver' in window) {
  const statIo = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        statIo.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  statEls.forEach((el) => statIo.observe(el));
}

// Lightbox (only present on pages with a Moments gallery)
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('lightbox-close');

if (lightbox && lightboxImg && closeBtn) {
  document.querySelectorAll('.moment').forEach((button) => {
    button.addEventListener('click', () => {
      const src = button.getAttribute('data-full');
      const alt = button.querySelector('img').getAttribute('alt');
      lightboxImg.src = src;
      lightboxImg.alt = alt;
      lightbox.hidden = false;
    });
  });

  const closeLightbox = () => {
    lightbox.hidden = true;
    lightboxImg.src = '';
  };

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
  });
}
