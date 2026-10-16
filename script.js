/* Sallu Conteh — portfolio behaviour. Lists come from data/content.js. */
(function () {
  'use strict';
  var D = window.SITE_CONTENT;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  function esc(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function safeUrl(u) {
    u = String(u || '').trim();
    if (/^(https?:|mailto:)/i.test(u)) return u;
    if (/^[a-z0-9._\-\/#]+$/i.test(u) && !/^\/\//.test(u)) return u;
    return '#';
  }
  function tags(list) {
    return list && list.length ? '<div class="tags">' + list.map(function (t) { return '<span class="tag">' + esc(t) + '</span>'; }).join('') + '</div>' : '';
  }
  function links(list) {
    if (!list || !list.length) return '';
    return '<p style="margin-top:.75rem">' + list.map(function (l) {
      return '<a href="' + esc(safeUrl(l.url)) + '" target="_blank" rel="noopener">' + esc(l.label) + '<span class="sr-only"> (opens in a new tab)</span></a>';
    }).join(' &middot; ') + '</p>';
  }
  var MOTOR_ICON = '<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="10" y="18" width="36" height="28" rx="6"/><path d="M46 32h10M16 46v6M40 46v6M10 26H4M10 38H4"/><circle cx="28" cy="32" r="7"/><path d="M28 25v-7"/></svg>';

  function render() {
    var targets = ['#experience-list', '#education-list', '#projects-list', '#training-list', '#references-list'].map(function (s) { return $(s); });
    if (!D) {
      targets.forEach(function (el) { if (el) el.innerHTML = '<p class="empty-note">This list could not be loaded. Check <code>data/content.js</code> for a missing comma or quote.</p>'; });
      if (window.console) console.error('SITE_CONTENT missing — data/content.js failed to load or has a syntax error.');
      return;
    }
    targets[0].innerHTML = (D.experience || []).map(function (x) {
      return '<div class="xp-item reveal"><div class="xp-when"><span class="dates">' + esc(x.dates) + '</span>' +
        (x.place ? '<span class="place">' + esc(x.place) + '</span>' : '') + '</div>' +
        '<article class="xp-card"><h3 class="xp-role">' + esc(x.role) + '</h3><div class="xp-org">' + esc(x.org) + '</div>' +
        (x.points && x.points.length ? '<ul>' + x.points.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') + '</ul>' : '') +
        tags(x.tags) + '</article></div>';
    }).join('');

    targets[1].innerHTML = (D.education || []).map(function (e) {
      return '<article class="edu reveal"><div class="edu-top"><h3>' + esc(e.degree) + '</h3>' +
        (e.badge ? '<span class="badge">' + esc(e.badge) + '</span>' : '') + '</div>' +
        (e.school ? '<div class="edu-school">' + esc(e.school) + '</div>' : '') +
        (e.dates ? '<div class="edu-dates">' + esc(e.dates) + '</div>' : '') +
        (e.notes && e.notes.length ? '<ul>' + e.notes.map(function (n) { return '<li>' + esc(n) + '</li>'; }).join('') + '</ul>' : '') +
        '</article>';
    }).join('');

    targets[2].innerHTML = (D.projects || []).map(function (p) {
      return '<article class="feature reveal"><div class="feature-icon">' + MOTOR_ICON + '</div><div>' +
        '<div class="kind">' + esc(p.kind) + '</div><h3>' + esc(p.title) + '</h3><p>' + esc(p.summary) + '</p>' +
        tags(p.tags) + links(p.links) + '</div></article>';
    }).join('');

    targets[3].innerHTML = (D.training || []).map(function (t) {
      return '<div class="train"><div class="train-date">' + esc(t.date) + '</div><div><div class="train-name">' + esc(t.name) +
        '</div><div class="train-issuer">' + esc(t.issuer) + '</div></div></div>';
    }).join('');

    targets[4].innerHTML = (D.references || []).map(function (r) {
      return '<div class="ref"><div class="ref-name">' + esc(r.name) + '</div><div class="ref-role">' + esc(r.role) +
        '</div><div class="ref-org">' + esc(r.org) + '</div></div>';
    }).join('');
  }

  function initTheme() {
    var b = $('#theme-toggle'); if (!b) return;
    function sync() {
      var dark = document.documentElement.getAttribute('data-theme') === 'dark';
      b.setAttribute('aria-pressed', String(dark));
      b.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    }
    b.addEventListener('click', function () {
      var dark = document.documentElement.getAttribute('data-theme') !== 'dark';
      if (dark) document.documentElement.setAttribute('data-theme', 'dark'); else document.documentElement.removeAttribute('data-theme');
      try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) {}
      sync();
    });
    sync();
  }

  function initMenu() {
    var b = $('#menu-toggle'), l = $('#nav-links'); if (!b || !l) return;
    function set(open) { l.classList.toggle('open', open); b.setAttribute('aria-expanded', String(open)); b.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); }
    b.addEventListener('click', function () { set(!l.classList.contains('open')); });
    $$('a', l).forEach(function (a) { a.addEventListener('click', function () { set(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && l.classList.contains('open')) { set(false); b.focus(); } });
  }

  function initNav() {
    var nav = $('#site-nav');
    window.addEventListener('scroll', function () { nav.classList.toggle('scrolled', window.scrollY > 10); }, { passive: true });
    if (!('IntersectionObserver' in window)) return;
    var map = {}; $$('.nav-links a').forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (x) {
        if (x.isIntersecting && map[x.target.id]) {
          $$('.nav-links a').forEach(function (a) { a.classList.remove('active'); a.removeAttribute('aria-current'); });
          map[x.target.id].classList.add('active'); map[x.target.id].setAttribute('aria-current', 'true');
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    $$('main section[id]').forEach(function (s) { io.observe(s); });
  }

  function initReveal() {
    var els = $$('.reveal');
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('visible'); }); return; }
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (x) { if (x.isIntersecting) { x.target.classList.add('visible'); io.unobserve(x.target); } });
    }, { threshold: 0.06 });
    els.forEach(function (e) { io.observe(e); });
  }

  render(); initTheme(); initMenu(); initNav(); initReveal();
  var y = $('#year'); if (y) y.textContent = new Date().getFullYear();
})();
