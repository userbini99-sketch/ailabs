# AIKit Studio — AI digital product storefront

A complete, working online store for selling AI digital products: prompt packs, templates,
automation blueprints and courses.

Plain HTML, CSS and JavaScript. **No build step, no npm, no framework.** Double-click
`index.html` and it runs. Push it to any static host and it's live.

---

## What's in the box

| Page | File | What it does |
|---|---|---|
| Home | `index.html` | Hero, categories, bestsellers, how-it-works, stats, guarantees, testimonials, pricing, FAQ, newsletter |
| Shop | `shop.html` | All products with live search, category filter, price filter and sorting — filters are saved in the URL so results are shareable |
| Product | `product.html?id=…` | Full detail page, quantity picker, add-to-cart, buy-now, specs, reviews, related products |
| Cart | `cart.html` | Line items, quantity controls, remove, discount codes, live totals |
| Checkout | `checkout.html` | Customer details, payment method choice, validation, order summary |
| Confirmation | `success.html` | Order number, download list, receipt summary |
| About | `about.html` | Story, promises, social proof |
| FAQ | `faq.html` | Full accordion of questions |
| Contact | `contact.html` | Validated contact form + direct email addresses |
| Legal | `legal.html` | Terms, privacy, refunds, licence |
| Not found | `404.html` | Friendly 404 |

Also included: dark/light theme with a toggle (remembers your choice), a persistent cart
that survives page reloads, working discount codes, toast notifications, scroll-reveal
animations, full keyboard accessibility, and a mobile layout down to 320px wide.

---

## Make it yours in 5 minutes

**Everything you need to change lives in one file: `assets/js/data.js`.**

### 1. Your brand

Open `assets/js/data.js`, find the `SITE` block at the top, and edit it:

```js
const SITE = {
  name: 'Your Store Name',
  tagline: 'What you sell, in one line',
  email: 'hello@yourdomain.com',
  supportEmail: 'support@yourdomain.com',
  currency: 'USD',
  currencySymbol: '$',
  social: { x: 'https://x.com/you', youtube: '#', linkedin: '#', instagram: '#' },
  coupons: {
    LAUNCH20: { off: 0.20, label: '20% launch discount' },   // percentage off
    FIRST10:  { flat: 10,  label: '$10 off your first order' }, // fixed amount off
  },
};
```

The name and tagline update the header, footer, page titles and legal page automatically.

### 2. Your products

Each product is one object in the `PRODUCTS` array. Copy an existing one and edit it:

```js
{
  id: 'my-product',            // must be unique — this becomes the URL
  name: 'My Product Name',
  category: 'prompts',         // must match an id in CATEGORIES
  price: 39,
  compareAt: 59,               // optional — shows a struck-through "was" price
  rating: 4.8, reviews: 120,
  badges: ['Bestseller'],      // optional — 'New', 'Best value', anything
  gradient: ['#5b4bff', '#00c2b2'],   // the two colours of the cover art
  icon: 'sparkles',            // see the icon list below
  short: 'One-sentence description shown on cards.',
  includes: ['What they get', 'One bullet per line'],
  specs: { Format: 'PDF', Files: '3 files, 12 MB', Updates: 'Lifetime', License: 'Personal' },
  body: `<p>Long description. Plain HTML — use &lt;h3&gt;, &lt;p&gt;, &lt;ul&gt;.</p>`,
}
```

Delete the demo products you don't want. Nothing else needs updating — the shop page,
homepage, category counts, related products and footer links all read from this array.

**Available `icon` values:** `sparkles`, `layout`, `bolt`, `play`, `mail`, `doc`, `search`,
`brain`, `share`, `rocket`, `box`, `shield`, `refresh`, `check`, `chat`.

### 3. Your categories, testimonials, FAQ and stats

Further down the same file: `CATEGORIES`, `TESTIMONIALS`, `FAQS`, `FEATURES`, `STATS`.
All plain lists — add, edit or delete entries.

> Replace the demo testimonials with real ones before you launch. Publishing invented
> customer quotes as if they were genuine is deceptive and illegal in most places.

### 4. Your colours (optional)

`assets/css/styles.css`, at the very top. Change `--brand` and `--accent` in **both** the
`:root` block (light theme) and the `:root[data-theme="dark"]` block, and everything —
buttons, links, gradients, badges — follows.

---

## Putting it online

All of these are free and take a few minutes.

**Netlify (easiest)** — go to [app.netlify.com/drop](https://app.netlify.com/drop) and drag
the whole folder into the page. You get a live URL immediately.

**GitHub Pages** — push this repo to GitHub, then Settings → Pages → Source: `main` branch,
`/ (root)`. Live at `https://yourname.github.io/reponame/` in about a minute.

**Vercel** — `npx vercel` in this folder, or connect the repo at
[vercel.com/new](https://vercel.com/new). No framework preset needed.

**Cloudflare Pages** — connect the repo, leave the build command empty, set the output
directory to `/`.

Any of them will let you point your own domain at it for free.

---

## Taking real payments

**The checkout is currently a demo.** It validates the form, then fakes a successful order
so you can see the whole flow. No card details go anywhere — nothing is transmitted.

To take real money, pick one of these:

### Option A — Gumroad or Lemon Squeezy (no code, fastest)

Both host the checkout, handle sales tax/VAT, and deliver files for you. Create the product
on their site, then in `assets/js/data.js` add a `buyUrl` to the product and change the
buttons to link there. This is the right choice if you don't want to run a server.

### Option B — Stripe Payment Links (no server, ~10 minutes)

1. In the Stripe Dashboard, create a Payment Link for each product.
2. Add the link to the product in `data.js`:
   ```js
   { id: 'my-product', /* … */ buyUrl: 'https://buy.stripe.com/xxxxx' }
   ```
3. In `checkout.html`, replace the `setTimeout(...)` block (it's marked with a comment)
   with a redirect:
   ```js
   const first = Cart.totals().lines[0].product;
   location.href = first.buyUrl;
   ```
4. Set the Stripe success URL to your `success.html`.

Best for a small catalogue where people buy one product at a time.

### Option C — Stripe Checkout with a server (full multi-item carts)

Needs a small backend, because your Stripe secret key must never be in the browser.

1. Create a serverless function (Netlify Functions, Vercel Functions, Cloudflare Workers).
2. It receives the cart, calls `stripe.checkout.sessions.create()` with the line items, and
   returns the session URL.
3. In `checkout.html`, replace the `setTimeout(...)` block with:
   ```js
   const res = await fetch('/api/create-checkout-session', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify({ items: Cart.read(), email }),
   });
   const { url } = await res.json();
   location.href = url;
   ```
4. **Always recalculate prices on the server from your own product list.** Never trust a
   price sent from the browser — anyone can edit it before it's sent.
5. Use a Stripe webhook to send download links after payment succeeds.

⚠️ **Never put a Stripe secret key (`sk_live_…`), or any API key, in these files.**
Everything in this folder is downloadable by anyone who visits your site.

---

## Delivering the files

The download buttons on `success.html` are placeholders. Real options:

- **Gumroad / Lemon Squeezy** — file delivery is built in, nothing to do.
- **Stripe + webhook** — on `checkout.session.completed`, email a signed, expiring link
  (S3 presigned URL, Cloudflare R2, or Bunny).
- **Manual, for very low volume** — email the files yourself when an order comes in.

Don't just link to a public file URL. Anyone who finds the link gets your product free.

---

## Making the forms work

The newsletter and contact forms currently show a confirmation toast without sending
anything. To connect them:

- **Formspree** — sign up, then set `action="https://formspree.io/f/YOUR_ID"` and
  `method="POST"` on the `<form>`, and delete the `e.preventDefault()` line in the page's
  script.
- **Netlify Forms** — if hosting on Netlify, just add `netlify` to the `<form>` tag.
- **Email list** — ConvertKit, Buttondown and Mailchimp all give you a form embed.

---

## Before you launch — checklist

- [ ] Replace every demo product with your real ones
- [ ] Replace demo testimonials with real customer quotes (or delete the section)
- [ ] Update the stats on the homepage to your real numbers (or remove them)
- [ ] Update `SITE.name`, emails and social links
- [ ] Have a lawyer check `legal.html` against the rules where your business is registered
- [ ] Connect a real payment provider and test with a real card
- [ ] Set up file delivery and confirm a test buyer receives the files
- [ ] Point the contact and newsletter forms at a real endpoint
- [ ] Replace the ⚡ favicon (it's the `<link rel="icon">` line in each page's `<head>`)
- [ ] Add your domain to `robots.txt` and create a `sitemap.xml`

---

## File structure

```
├── index.html          Homepage
├── shop.html           Catalogue with filters
├── product.html        Product detail (reads ?id= from the URL)
├── cart.html           Shopping cart
├── checkout.html       Checkout form
├── success.html        Order confirmation
├── about.html
├── faq.html
├── contact.html
├── legal.html          Terms, privacy, refunds, licence
├── 404.html
├── robots.txt
└── assets/
    ├── css/styles.css  All styling and both themes
    └── js/
        ├── data.js     ← YOUR PRODUCTS AND BRANDING LIVE HERE
        └── app.js      Cart, theme, header/footer, shared rendering
```

`app.js` builds the header and footer on every page, so adding a nav link once updates the
whole site — see the `NAV_LINKS` array near the top of that file.

---

## Notes

- The cart, theme choice and applied discount code are stored in the browser's
  `localStorage`. They persist across visits on the same device, and nothing is sent to a
  server.
- Everything renders without external requests — no CDN, no web fonts, no tracking. The
  site works offline and loads fast.
- Tested in Chromium at 1280px and 390px wide: all pages render, the full purchase flow
  works end to end, and there's no horizontal overflow on mobile.
