/* ==========================================================================
   app.js — shared behaviour for every page.
   Header/footer rendering, theme, cart storage, toasts, product cards.
   You should not need to edit this file to run your own store — see data.js.
   ========================================================================== */

/* --- Inline icon set (no external requests) ------------------------------- */
const ICONS = {
  sparkles: '<path d="M12 3l1.9 4.6L18.5 9.5 13.9 11.4 12 16l-1.9-4.6L5.5 9.5l4.6-1.9L12 3z"/><path d="M19 14l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2z"/><path d="M5 15l.6 1.5L7 17l-1.4.5L5 19l-.6-1.5L3 17l1.4-.5L5 15z"/>',
  layout: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',
  bolt: '<path d="M13 2L4.5 13.5H11l-1 8.5L19.5 10.5H13l0-8.5z"/>',
  play: '<circle cx="12" cy="12" r="9"/><path d="M10 8.5l6 3.5-6 3.5v-7z"/>',
  mail: '<rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="M3 6.5l9 6 9-6"/>',
  doc: '<path d="M14 2.5H7a2 2 0 00-2 2v15a2 2 0 002 2h10a2 2 0 002-2V7.5l-5-5z"/><path d="M14 2.5v5h5M8.5 13h7M8.5 17h5"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.6-3.6"/>',
  brain: '<path d="M9.5 3.5A3 3 0 006.6 7 3 3 0 004.5 12a3 3 0 002 2.8A3 3 0 009.5 20.5c1.4 0 2.5-.9 2.5-2V5.5c0-1.1-1.1-2-2.5-2z"/><path d="M14.5 3.5A3 3 0 0117.4 7a3 3 0 012.1 5 3 3 0 01-2 2.8 3 3 0 01-3 5.7c-1.4 0-2.5-.9-2.5-2V5.5c0-1.1 1.1-2 2.5-2z"/>',
  share: '<circle cx="18" cy="5" r="2.6"/><circle cx="6" cy="12" r="2.6"/><circle cx="18" cy="19" r="2.6"/><path d="M8.3 10.8l7.4-4.3M8.3 13.2l7.4 4.3"/>',
  rocket: '<path d="M12 2.5c3.5 2 5.5 5.6 5.5 9.5L14 15.5h-4L6.5 12c0-3.9 2-7.5 5.5-9.5z"/><circle cx="12" cy="10" r="1.8"/><path d="M10 15.5c-1.6 1-2.3 2.6-2.5 5 2.4-.2 4-.9 5-2.5M14 15.5c1.6 1 2.3 2.6 2.5 5-2.4-.2-4-.9-5-2.5"/>',
  box: '<path d="M21 8.5l-9-5-9 5v7l9 5 9-5v-7z"/><path d="M3 8.5l9 5 9-5M12 13.5v7"/>',
  shield: '<path d="M12 2.8l7.5 3v5.4c0 4.5-3.1 8.3-7.5 9.5-4.4-1.2-7.5-5-7.5-9.5V5.8l7.5-3z"/><path d="M9 12l2 2 4-4"/>',
  refresh: '<path d="M20.5 12a8.5 8.5 0 01-14.9 5.6"/><path d="M3.5 12a8.5 8.5 0 0114.9-5.6"/><path d="M18.5 2.5v4h-4M5.5 21.5v-4h4"/>',
  check: '<circle cx="12" cy="12" r="9"/><path d="M8 12.2l2.8 2.8L16 9.8"/>',
  chat: '<path d="M21 11.5a8 8 0 01-11.6 7.2L3.5 20.5l1.8-5.8A8 8 0 1121 11.5z"/>',
  cart: '<circle cx="9" cy="20" r="1.6"/><circle cx="18" cy="20" r="1.6"/><path d="M2.5 3.5h3l2.4 11.2a2 2 0 002 1.6h7.6a2 2 0 002-1.6L21 7H6.2"/>',
  star: '<path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1.1 5.9L12 16.9 6.7 19.7l1.1-5.9L3.5 9.7l5.9-.8L12 3.5z" fill="currentColor" stroke="none"/>',
  sun: '<circle cx="12" cy="12" r="4.2"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8"/>',
  moon: '<path d="M20.5 14.5A8.5 8.5 0 019.5 3.5a8.5 8.5 0 1011 11z"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="M6 6l12 12M18 6L6 18"/>',
  download: '<path d="M12 3.5v11M7.5 10.5L12 15l4.5-4.5"/><path d="M4 18.5h16"/>',
  arrow: '<path d="M4 12h15M13 6l6 6-6 6"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  lock: '<rect x="4.5" y="10.5" width="15" height="10" rx="2"/><path d="M8 10.5V7a4 4 0 018 0v3.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5.2l3.2 2"/>',
  x: '<path d="M4 4l16 16M20 4L4 20"/>',
  youtube: '<rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10.5 9.5l5 2.5-5 2.5v-5z"/>',
  linkedin: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7.5 10.5V17M7.5 7.5v.01M11.5 17v-3.6a2.4 2.4 0 014.8 0V17"/>',
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5v.01"/>',
};

/** Build an inline SVG string for an icon key. */
function icon(name, cls) {
  const path = ICONS[name] || ICONS.sparkles;
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"${cls ? ` class="${cls}"` : ''}>${path}</svg>`;
}

/* --- Small helpers -------------------------------------------------------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

/** Escape user/data text before putting it in HTML. */
function esc(str) {
  return String(str).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function money(n) {
  return SITE.currencySymbol + Number(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function getProduct(id) {
  return PRODUCTS.find(p => p.id === id) || null;
}

function categoryName(id) {
  const c = CATEGORIES.find(c => c.id === id);
  return c ? c.name : id;
}

/* --- Theme ---------------------------------------------------------------- */
const Theme = {
  key: 'aikit.theme',
  get() { return localStorage.getItem(this.key); },
  apply(mode) {
    if (mode) document.documentElement.setAttribute('data-theme', mode);
    else document.documentElement.removeAttribute('data-theme');
  },
  toggle() {
    const current = this.get() ||
      (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(this.key, next);
    this.apply(next);
    renderThemeButton();
  },
  init() { this.apply(this.get()); },
};
Theme.init();

function renderThemeButton() {
  const btn = $('#theme-toggle');
  if (!btn) return;
  const isDark = (Theme.get() || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')) === 'dark';
  btn.innerHTML = icon(isDark ? 'sun' : 'moon');
  btn.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
}

/* --- Cart ----------------------------------------------------------------- */
const Cart = {
  key: 'aikit.cart',

  read() {
    try {
      const raw = JSON.parse(localStorage.getItem(this.key) || '[]');
      // Drop anything whose product no longer exists (e.g. after you edit data.js).
      return Array.isArray(raw) ? raw.filter(l => getProduct(l.id)) : [];
    } catch { return []; }
  },

  write(lines) {
    localStorage.setItem(this.key, JSON.stringify(lines));
    document.dispatchEvent(new CustomEvent('cart:change'));
  },

  add(id, qty = 1) {
    const lines = this.read();
    const line = lines.find(l => l.id === id);
    if (line) line.qty += qty;
    else lines.push({ id, qty });
    this.write(lines);
  },

  setQty(id, qty) {
    let lines = this.read();
    if (qty <= 0) lines = lines.filter(l => l.id !== id);
    else lines = lines.map(l => (l.id === id ? { ...l, qty } : l));
    this.write(lines);
  },

  remove(id) { this.write(this.read().filter(l => l.id !== id)); },

  clear() { localStorage.removeItem(this.key); document.dispatchEvent(new CustomEvent('cart:change')); },

  count() { return this.read().reduce((n, l) => n + l.qty, 0); },

  /** Full price breakdown, including any applied coupon. */
  totals() {
    const lines = this.read().map(l => {
      const p = getProduct(l.id);
      return { ...l, product: p, lineTotal: p.price * l.qty };
    });
    const subtotal = lines.reduce((n, l) => n + l.lineTotal, 0);
    const code = Coupon.get();
    const rule = code ? SITE.coupons[code] : null;
    let discount = 0;
    if (rule) discount = rule.off ? subtotal * rule.off : Math.min(rule.flat, subtotal);
    const total = Math.max(0, subtotal - discount);
    return { lines, subtotal, discount, total, code: discount > 0 ? code : null, rule };
  },
};

const Coupon = {
  key: 'aikit.coupon',
  get() { return localStorage.getItem(this.key); },
  set(code) {
    const clean = String(code || '').trim().toUpperCase();
    if (!SITE.coupons[clean]) return false;
    localStorage.setItem(this.key, clean);
    document.dispatchEvent(new CustomEvent('cart:change'));
    return true;
  },
  clear() { localStorage.removeItem(this.key); document.dispatchEvent(new CustomEvent('cart:change')); },
};

/* --- Toasts --------------------------------------------------------------- */
function toast(message, iconName = 'check') {
  let host = $('.toast-host');
  if (!host) {
    host = document.createElement('div');
    host.className = 'toast-host';
    host.setAttribute('role', 'status');
    host.setAttribute('aria-live', 'polite');
    document.body.appendChild(host);
  }
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = `${icon(iconName)}<span>${esc(message)}</span>`;
  host.appendChild(el);
  setTimeout(() => {
    el.style.transition = 'opacity .3s, transform .3s';
    el.style.opacity = '0';
    el.style.transform = 'translateY(8px)';
    setTimeout(() => el.remove(), 320);
  }, 2600);
}

/* --- Header & footer ------------------------------------------------------ */
const NAV_LINKS = [
  { href: 'index.html', label: 'Home' },
  { href: 'shop.html', label: 'Shop' },
  { href: 'shop.html?cat=courses', label: 'Courses' },
  { href: 'about.html', label: 'About' },
  { href: 'faq.html', label: 'FAQ' },
  { href: 'contact.html', label: 'Contact' },
];

function currentPage() {
  const file = location.pathname.split('/').pop();
  return file === '' ? 'index.html' : file;
}

function renderHeader() {
  const host = $('#site-header');
  if (!host) return;
  const page = currentPage();
  host.className = 'site-header';
  host.innerHTML = `
    <div class="wrap site-header__inner">
      <a class="brand" href="index.html">
        <span class="brand__mark">${icon('sparkles')}</span>
        <span>${esc(SITE.name)}</span>
      </a>
      <nav class="nav" id="primary-nav" aria-label="Primary">
        ${NAV_LINKS.map(l => {
          const isCurrent = l.href === page;
          return `<a href="${l.href}"${isCurrent ? ' aria-current="page"' : ''}>${esc(l.label)}</a>`;
        }).join('')}
        <a class="btn btn--primary nav__cta" href="shop.html">Browse products</a>
      </nav>
      <div class="header-actions">
        <button class="icon-btn" id="theme-toggle" type="button"></button>
        <a class="icon-btn" href="cart.html" aria-label="Cart">
          ${icon('cart')}
          <span class="cart-count" id="cart-count" hidden>0</span>
        </a>
        <a class="btn btn--primary btn--sm header-cta" href="shop.html">Browse products</a>
        <button class="icon-btn nav-toggle" id="nav-toggle" type="button"
                aria-expanded="false" aria-controls="primary-nav" aria-label="Menu">${icon('menu')}</button>
      </div>
    </div>`;

  renderThemeButton();
  $('#theme-toggle').addEventListener('click', () => Theme.toggle());

  const nav = $('#primary-nav');
  const toggle = $('#nav-toggle');
  const setNav = open => {
    nav.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.innerHTML = icon(open ? 'close' : 'menu');
  };
  const mq = matchMedia('(max-width: 860px)');
  const syncNav = () => setNav(!mq.matches);
  syncNav();
  mq.addEventListener('change', syncNav);
  toggle.addEventListener('click', () => setNav(nav.hidden));

  updateCartCount();
}

function renderFooter() {
  const host = $('#site-footer');
  if (!host) return;
  const year = new Date().getFullYear();
  host.className = 'site-footer';
  host.innerHTML = `
    <div class="wrap">
      <div class="footer-grid">
        <div class="footer-about">
          <a class="brand" href="index.html">
            <span class="brand__mark">${icon('sparkles')}</span>
            <span>${esc(SITE.name)}</span>
          </a>
          <p>${esc(SITE.tagline)}. Digital products for people who use AI to do real work — delivered instantly, updated for life.</p>
          <div class="socials">
            <a href="${SITE.social.x}" aria-label="X">${icon('x')}</a>
            <a href="${SITE.social.youtube}" aria-label="YouTube">${icon('youtube')}</a>
            <a href="${SITE.social.linkedin}" aria-label="LinkedIn">${icon('linkedin')}</a>
            <a href="${SITE.social.instagram}" aria-label="Instagram">${icon('instagram')}</a>
          </div>
        </div>
        <div>
          <h4>Shop</h4>
          <ul>
            <li><a href="shop.html">All products</a></li>
            ${CATEGORIES.map(c => `<li><a href="shop.html?cat=${c.id}">${esc(c.name)}</a></li>`).join('')}
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li><a href="about.html">About</a></li>
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="mailto:${esc(SITE.supportEmail)}">Support</a></li>
          </ul>
        </div>
        <div>
          <h4>Legal</h4>
          <ul>
            <li><a href="legal.html#terms">Terms</a></li>
            <li><a href="legal.html#privacy">Privacy</a></li>
            <li><a href="legal.html#refunds">Refunds</a></li>
            <li><a href="legal.html#licence">Licence</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; ${year} ${esc(SITE.name)}. All rights reserved.</span>
        <nav aria-label="Legal">
          <a href="legal.html#terms">Terms</a>
          <a href="legal.html#privacy">Privacy</a>
          <a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a>
        </nav>
      </div>
    </div>`;
}

function updateCartCount() {
  const el = $('#cart-count');
  if (!el) return;
  const n = Cart.count();
  el.textContent = n;
  el.hidden = n === 0;
}
document.addEventListener('cart:change', updateCartCount);

/* --- Reusable renderers --------------------------------------------------- */
function artStyle(product) {
  return `background: linear-gradient(135deg, ${product.gradient[0]}, ${product.gradient[1]})`;
}

function stars(rating) {
  return `<span class="rating">${icon('star')}<b>${rating.toFixed(1)}</b></span>`;
}

function productCard(p) {
  return `
    <article class="product-card">
      <a class="product-card__art" style="${artStyle(p)}" href="product.html?id=${p.id}"
         aria-label="${esc(p.name)}">
        ${p.badges?.length ? `<span class="product-card__flags">${p.badges.map(b => `<span class="badge">${esc(b)}</span>`).join('')}</span>` : ''}
        ${icon(p.icon)}
      </a>
      <div class="product-card__body">
        <span class="product-card__cat">${esc(categoryName(p.category))}</span>
        <h3 class="product-card__title"><a href="product.html?id=${p.id}">${esc(p.name)}</a></h3>
        <p class="product-card__desc">${esc(p.short)}</p>
        <div class="rating">${icon('star')} ${p.rating.toFixed(1)} <span class="muted">(${p.reviews})</span></div>
        <div class="product-card__foot">
          <span class="price">${money(p.price)}${p.compareAt ? `<del>${money(p.compareAt)}</del>` : ''}</span>
          <button class="btn btn--primary btn--sm" type="button" data-add="${p.id}">Add to cart</button>
        </div>
      </div>
    </article>`;
}

/** One delegated listener handles every "Add to cart" button on every page. */
document.addEventListener('click', e => {
  const btn = e.target.closest('[data-add]');
  if (!btn) return;
  const p = getProduct(btn.dataset.add);
  if (!p) return;
  Cart.add(p.id, Number(btn.dataset.qty || 1));
  toast(`${p.name} added to cart`);
});

/* --- Reveal on scroll ----------------------------------------------------- */
function initReveal() {
  const items = $$('.reveal');
  if (!items.length || !('IntersectionObserver' in window)) {
    items.forEach(i => i.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: .05 });
  items.forEach(i => io.observe(i));
}

/* --- Newsletter (demo) ---------------------------------------------------- */
function initSubscribeForms() {
  $$('form[data-subscribe]').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (!input.value) return;
      toast('You are on the list. Check your inbox.');
      form.reset();
    });
  });
}

/* --- Boot ----------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
  initReveal();
  initSubscribeForms();
  document.title = document.title.includes(SITE.name) ? document.title : `${document.title} — ${SITE.name}`;
});
