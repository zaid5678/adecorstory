/* ─── Header scroll state ───────────────────────────── */
(function () {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ─── Active nav link ───────────────────────────────── */
(function () {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.site-nav a, .nav-panel a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

/* ─── Hamburger menu ────────────────────────────────── */
(function () {
  const btn = document.querySelector('.hamburger');
  const panel = document.querySelector('.nav-panel');
  const overlay = document.querySelector('.nav-overlay');
  if (!btn || !panel) return;

  const focusable = () =>
    Array.from(panel.querySelectorAll('a, button, [tabindex]')).filter(
      el => !el.closest('[hidden]')
    );

  function open() {
    btn.classList.add('open');
    panel.classList.add('open');
    overlay && overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    btn.setAttribute('aria-expanded', 'true');
    const els = focusable();
    if (els.length) els[0].focus();
  }

  function close() {
    btn.classList.remove('open');
    panel.classList.remove('open');
    overlay && overlay.classList.remove('open');
    document.body.style.overflow = '';
    btn.setAttribute('aria-expanded', 'false');
    btn.focus();
  }

  btn.addEventListener('click', () => {
    btn.classList.contains('open') ? close() : open();
  });

  overlay && overlay.addEventListener('click', close);

  const closeBtn = panel.querySelector('.nav-panel-close');
  closeBtn && closeBtn.addEventListener('click', close);

  panel.querySelectorAll('a').forEach(a => a.addEventListener('click', close));

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && panel.classList.contains('open')) {
      close();
      return;
    }
    if (e.key === 'Tab' && panel.classList.contains('open')) {
      const els = focusable();
      if (!els.length) return;
      const first = els[0], last = els[els.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }
  });
})();

/* ─── Scroll reveal ─────────────────────────────────── */
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  const io = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  els.forEach(el => io.observe(el));
})();

/* ─── Footer year ───────────────────────────────────── */
(function () {
  const el = document.querySelector('.footer-year');
  if (el) el.textContent = new Date().getFullYear();
})();
