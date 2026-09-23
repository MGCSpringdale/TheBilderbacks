(function () {
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasGsap = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';

  if (prefersReducedMotion || !hasGsap) {
    return; // CSS fallback keeps everything visible and statically laid out
  }

  document.body.classList.add('gsap-ready');
  gsap.registerPlugin(ScrollTrigger);

  // Cap how far .scrub-text is allowed to scale so it never overflows the viewport
  function getScrubMaxScale() {
    var el = document.querySelector('.scrub-text');
    if (!el) return 1.5;
    var naturalWidth = el.getBoundingClientRect().width; // rendered at scale(1) pre-animation
    var safeWidth = window.innerWidth * 0.92;
    var fit = safeWidth / naturalWidth;
    return Math.min(1.5, Math.max(0.6, fit));
  }

  // ---- Hero: title recedes, image slowly zooms, statement arrives ----
  if (document.getElementById('hero-pin')) {
    gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: '#hero-pin',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.6
      }
    })
      .to('.hero-stage .hero-media img', { scale: 1.18, duration: 1 }, 0)
      .to('.hero-title-group', { opacity: 0, y: -70, scale: 0.94, duration: 0.32 }, 0.08)
      .fromTo('.hero-statement', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.26 }, 0.42)
      .to('.hero-statement', { opacity: 0, y: -40, duration: 0.16 }, 0.82);
  }

  // ---- Legacy: family photo shrinks into the year, story fades in beside it ----
  if (document.getElementById('legacy-pin')) {
    gsap.set('.legacy-photo', { xPercent: -50, yPercent: -50, top: '50%', left: '50%' });
    gsap.set('.legacy-year', { xPercent: -50, yPercent: -50, top: '50%', left: '50%', scale: 1.6 });
    gsap.set('.legacy-copy', { top: '62%', left: '50%', xPercent: -50, yPercent: 0 });

    gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: '#legacy-pin',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.6
      }
    })
      .to('.legacy-year', { opacity: 1, scale: 1, duration: 0.5 }, 0.05)
      .to('.legacy-photo', {
        width: 'min(30vw, 280px)',
        top: '30%',
        left: '24%',
        duration: 0.6,
        ease: 'none'
      }, 0.15)
      .fromTo('.legacy-copy', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.35 }, 0.5);
  }

  // ---- Text scrub: SINGING grows while album art fades in behind it ----
  if (document.getElementById('scrub-singing')) {
    gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: '#scrub-singing',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.6
      }
    })
      .fromTo('.scrub-text', { scale: 0.6, opacity: 0.4 }, { scale: getScrubMaxScale(), opacity: 1, duration: 1 }, 0)
      .to('.scrub-bg', { opacity: 0.5, duration: 0.6 }, 0.3);
  }

  // ---- Family: photo holds, names cycle through ----
  if (document.getElementById('family-pin')) {
    var names = gsap.utils.toArray('.fname');
    var tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: '#family-pin',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.6
      }
    });
    gsap.set('.family-photo', { scale: 1.08 });
    tl.to('.family-photo', { scale: 1, duration: 1 }, 0);
    var step = 1 / names.length;
    names.forEach(function (el, i) {
      var start = i * step;
      tl.fromTo(el, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: step * 0.4 }, start + step * 0.12);
      tl.to(el, { opacity: 0, y: -24, duration: step * 0.3 }, start + step * 0.7);
    });
  }

  // ---- General reveals (non-pinned) using GSAP for consistent easing ----
  gsap.utils.toArray('.reveal').forEach(function (el) {
    gsap.fromTo(el, { opacity: 0, y: 28 }, {
      opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%' }
    });
  });

  gsap.utils.toArray('.reveal-lines').forEach(function (el) {
    var spans = el.querySelectorAll('span');
    gsap.fromTo(spans, { opacity: 0, y: '100%' }, {
      opacity: 1, y: '0%', duration: 0.8, ease: 'power3.out', stagger: 0.12,
      scrollTrigger: { trigger: el, start: 'top 85%' }
    });
  });

  ScrollTrigger.refresh();
})();

// ---- Contextual cursor (desktop, pointer:fine only) ----
(function () {
  if (window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(hover: none)').matches) return;
  var dot = document.getElementById('cursor-dot');
  if (!dot) return;

  var targets = document.querySelectorAll('[data-cursor]');
  if (!targets.length) return;

  var mx = 0, my = 0, active = false;
  window.addEventListener('mousemove', function (e) {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = 'translate3d(' + mx + 'px,' + my + 'px,0) translate(-50%,-50%) scale(' + (active ? 1 : 0.7) + ')';
  }, { passive: true });

  targets.forEach(function (el) {
    el.addEventListener('mouseenter', function () {
      dot.textContent = el.getAttribute('data-cursor') || '';
      dot.classList.add('visible');
      active = true;
    });
    el.addEventListener('mouseleave', function () {
      dot.classList.remove('visible');
      active = false;
    });
  });
})();

// ---- Mobile menu link stagger ----
(function () {
  var toggle = document.querySelector('.menu-toggle');
  var menu = document.querySelector('.mobile-menu');
  if (!toggle || !menu || typeof window.gsap === 'undefined') return;
  var links = menu.querySelectorAll('a');

  toggle.addEventListener('click', function () {
    if (menu.classList.contains('open')) {
      gsap.fromTo(links, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, ease: 'power3.out', delay: 0.15 });
    }
  });
})();
