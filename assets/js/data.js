/* ==========================================================================
   data.js — EVERYTHING YOU EDIT LIVES IN THIS FILE.
   Change your brand, your products, your prices, your testimonials here.
   No other file needs to be touched to launch your own store.
   ========================================================================== */

/* --------------------------------------------------------------------------
   1. YOUR BRAND
   -------------------------------------------------------------------------- */
const SITE = {
  name: 'AIKit Studio',
  tagline: 'AI products that actually ship work',
  email: 'hello@aikitstudio.com',
  supportEmail: 'support@aikitstudio.com',
  currency: 'USD',
  currencySymbol: '$',
  // Shown in the footer and on the contact page.
  social: {
    x: '#',
    youtube: '#',
    linkedin: '#',
    instagram: '#',
  },
  // Flat discount codes. code -> { off: 0.20 } (20%) or { flat: 10 } ($10 off).
  coupons: {
    LAUNCH20: { off: 0.20, label: '20% launch discount' },
    FIRST10: { flat: 10, label: '$10 off your first order' },
  },
};

/* --------------------------------------------------------------------------
   2. YOUR CATEGORIES
   -------------------------------------------------------------------------- */
const CATEGORIES = [
  { id: 'prompts', name: 'Prompt Packs', blurb: 'Battle-tested prompts you can paste in and run today.', icon: 'sparkles' },
  { id: 'templates', name: 'Templates', blurb: 'Notion, Sheets and doc systems wired for AI workflows.', icon: 'layout' },
  { id: 'automations', name: 'Automations', blurb: 'Ready-made agent and no-code flows that run themselves.', icon: 'bolt' },
  { id: 'courses', name: 'Courses', blurb: 'Step-by-step video training with downloadable assets.', icon: 'play' },
];

/* --------------------------------------------------------------------------
   3. YOUR PRODUCTS
   Fields:
     id        unique slug, used in the URL (product.html?id=...)
     price     current price, number
     compareAt optional "was" price for a strikethrough
     badges    optional array shown on the card, e.g. ['Bestseller']
     gradient  two colors for the generated cover art
     icon      key from ICONS in app.js
     includes  bullet list shown in the buy box
     specs     key/value rows shown on the product page
     body      long description, plain HTML
   -------------------------------------------------------------------------- */
const PRODUCTS = [
  {
    id: 'ultimate-prompt-vault',
    name: 'The Ultimate Prompt Vault — 1,200 Prompts',
    category: 'prompts',
    price: 49, compareAt: 89,
    rating: 4.9, reviews: 412,
    badges: ['Bestseller'],
    gradient: ['#5b4bff', '#00c2b2'],
    icon: 'sparkles',
    short: '1,200 categorised prompts for marketing, sales, ops and product work — with variables already mapped.',
    includes: [
      '1,200 prompts across 24 business categories',
      'Notion + Google Sheets + plain Markdown versions',
      'Fill-in-the-blank variables in every prompt',
      'Quarterly updates, free forever',
    ],
    specs: { Format: 'Notion, Sheets, Markdown', Files: '4 files, 38 MB', Updates: 'Lifetime', License: 'Personal + commercial' },
    body: `
      <p>Most prompt packs are a list of one-liners someone scraped in an afternoon. This is not that. Every prompt in the Vault has been run at least fifty times against real briefs, tightened, and given explicit variables so you know exactly what to swap.</p>
      <h3>What's inside</h3>
      <ul>
        <li><strong>Marketing (280 prompts)</strong> — launch emails, ad angles, landing copy, SEO briefs, repurposing chains.</li>
        <li><strong>Sales (190 prompts)</strong> — cold outreach, objection handling, discovery-call summaries, proposal drafts.</li>
        <li><strong>Operations (240 prompts)</strong> — SOP writing, meeting synthesis, hiring scorecards, vendor comparisons.</li>
        <li><strong>Product &amp; engineering (210 prompts)</strong> — spec drafts, user-story generation, code review checklists, changelogs.</li>
        <li><strong>Research &amp; analysis (280 prompts)</strong> — competitor teardowns, survey coding, data storytelling.</li>
      </ul>
      <h3>Who it's for</h3>
      <p>Founders, freelancers and in-house teams who already use an AI assistant daily and are tired of rewriting the same instructions from scratch every morning.</p>
    `,
  },
  {
    id: 'cold-email-engine',
    name: 'Cold Email Engine',
    category: 'prompts',
    price: 29,
    rating: 4.8, reviews: 186,
    badges: ['New'],
    gradient: ['#ff6b6b', '#5b4bff'],
    icon: 'mail',
    short: 'A prompt chain that researches a prospect, picks an angle, and writes a three-touch sequence in one pass.',
    includes: [
      '9-step research → angle → sequence prompt chain',
      '40 subject-line formulas with hit-rate notes',
      'Deliverability checklist',
      'Swipe file of 25 replied-to emails',
    ],
    specs: { Format: 'Markdown + Notion', Files: '3 files, 12 MB', Updates: 'Lifetime', License: 'Personal + commercial' },
    body: `
      <p>Cold email fails for one boring reason: the first line is about you. The Engine flips it by forcing a research pass before a single word of copy gets written.</p>
      <h3>How the chain runs</h3>
      <ol>
        <li>Paste the prospect's site and LinkedIn. The model extracts positioning, recent changes and likely pain.</li>
        <li>It scores four possible angles against your offer and picks one, with reasoning you can override.</li>
        <li>It writes touch one, a follow-up, and a breakup email — each under 90 words.</li>
      </ol>
      <p>Comes with the deliverability checklist we use before any sequence goes out, so your domain survives the campaign.</p>
    `,
  },
  {
    id: 'content-os-notion',
    name: 'Content OS for Notion',
    category: 'templates',
    price: 39, compareAt: 59,
    rating: 4.9, reviews: 298,
    badges: ['Bestseller'],
    gradient: ['#00c2b2', '#5b4bff'],
    icon: 'layout',
    short: 'A complete content pipeline in Notion — idea capture, AI drafting, review and a publishing calendar.',
    includes: [
      'Duplicate-ready Notion workspace',
      'Idea bank with automatic scoring',
      '30 embedded AI drafting prompts',
      'Editorial calendar with status automation',
      '18-minute setup walkthrough',
    ],
    specs: { Format: 'Notion template', Files: '1 duplicate link + video', Updates: 'Lifetime', License: 'Personal + team (up to 10)' },
    body: `
      <p>Content OS is the system behind a publishing cadence you can actually keep: three pieces a week, without the Sunday-night panic.</p>
      <h3>The four boards</h3>
      <ul>
        <li><strong>Capture</strong> — everything you notice, scored automatically on effort vs. reach.</li>
        <li><strong>Draft</strong> — each idea opens with the right AI prompt already embedded in the page.</li>
        <li><strong>Review</strong> — a checklist that catches the six things that kill a post before it ships.</li>
        <li><strong>Calendar</strong> — a month view that rolls unpublished work forward instead of losing it.</li>
      </ul>
    `,
  },
  {
    id: 'client-proposal-kit',
    name: 'Client Proposal Kit',
    category: 'templates',
    price: 34,
    rating: 4.7, reviews: 121,
    gradient: ['#f59e0b', '#ff6b6b'],
    icon: 'doc',
    short: 'Proposal, scope and SOW templates with AI prompts that fill them from a single discovery-call transcript.',
    includes: [
      '3 proposal templates (retainer, project, sprint)',
      'Scope + SOW documents in Docs and Markdown',
      'Transcript → proposal prompt',
      'Pricing page with anchor-tier structure',
    ],
    specs: { Format: 'Google Docs, Markdown', Files: '7 files, 6 MB', Updates: 'Lifetime', License: 'Personal + commercial' },
    body: `
      <p>Turn a messy discovery call into a signed-ready proposal in about twelve minutes. Drop the transcript in, run the prompt, and every section comes back filled with the client's own language.</p>
      <h3>Why it closes</h3>
      <p>The structure puts the client's stated problem on page one and your price on page four, after the outcome is already priced in their head. Three tiers, with the middle one built to be chosen.</p>
    `,
  },
  {
    id: 'inbox-triage-agent',
    name: 'Inbox Triage Agent',
    category: 'automations',
    price: 59,
    rating: 4.8, reviews: 97,
    badges: ['New'],
    gradient: ['#5b4bff', '#a855f7'],
    icon: 'bolt',
    short: 'A no-code automation that reads, labels, drafts replies to and escalates your inbox every fifteen minutes.',
    includes: [
      'Importable Make.com + n8n blueprints',
      'Classification prompt with 11 intent labels',
      'Draft-reply prompt matched to your tone',
      'Escalation rules so nothing urgent gets auto-handled',
      'Setup video (24 min)',
    ],
    specs: { Format: 'Make.com + n8n blueprints', Files: '5 files, 4 MB', Updates: 'Lifetime', License: 'Personal + commercial' },
    body: `
      <p>Runs on a schedule, sorts everything into eleven intents, drafts replies for the four that are safely automatable, and leaves the rest flagged for you.</p>
      <div class="notice" style="margin: 18px 0">
        <span>You'll need your own Make.com or n8n account and an API key from your AI provider. Both have free tiers that cover this workload.</span>
      </div>
      <h3>What it never does</h3>
      <p>It never sends. Every reply lands in your drafts folder. Legal, financial and anything from a named VIP list is escalated untouched.</p>
    `,
  },
  {
    id: 'research-agent-blueprint',
    name: 'Deep Research Agent Blueprint',
    category: 'automations',
    price: 69, compareAt: 99,
    rating: 4.9, reviews: 143,
    gradient: ['#0ea5e9', '#00c2b2'],
    icon: 'search',
    short: 'A multi-step agent that plans a research question, gathers sources, cross-checks claims and writes a cited brief.',
    includes: [
      'Full agent blueprint with planner, searcher, verifier and writer roles',
      'Source-scoring rubric that kills weak citations',
      'Output template: brief, evidence table, open questions',
      'Cost controls so a run stays under a dollar',
    ],
    specs: { Format: 'Blueprint + prompts + config', Files: '8 files, 9 MB', Updates: 'Lifetime', License: 'Personal + commercial' },
    body: `
      <p>Single-shot research prompts hallucinate because nothing checks the output. This blueprint splits the job across four roles that each see a different slice of the work.</p>
      <h3>The four roles</h3>
      <ul>
        <li><strong>Planner</strong> — turns a vague question into six answerable sub-questions.</li>
        <li><strong>Searcher</strong> — runs each sub-question separately so no angle gets crowded out.</li>
        <li><strong>Verifier</strong> — re-reads every claim against its source and drops anything unsupported.</li>
        <li><strong>Writer</strong> — assembles the brief with inline citations and an explicit "what we could not confirm" section.</li>
      </ul>
    `,
  },
  {
    id: 'ai-freelancer-course',
    name: 'The AI Freelancer — Full Course',
    category: 'courses',
    price: 149, compareAt: 249,
    rating: 4.9, reviews: 356,
    badges: ['Bestseller'],
    gradient: ['#a855f7', '#5b4bff'],
    icon: 'play',
    short: 'Six hours of video on packaging an AI service, pricing it, and landing the first five clients.',
    includes: [
      '38 lessons, 6h 12m of video',
      'Offer-design worksheet',
      'Pricing calculator (Sheets)',
      'Outreach scripts + contract template',
      'Lifetime access to updates',
    ],
    specs: { Format: 'Video (1080p) + workbook', Files: '38 lessons, 4.2 GB', Updates: 'Lifetime', License: 'Single seat' },
    body: `
      <p>Built from six years of freelance work and the last two spent selling AI-delivered services specifically. No theory chapters — every module ends with something you send or publish.</p>
      <h3>Modules</h3>
      <ol>
        <li><strong>Pick the offer</strong> — three service shapes that sell, and how to choose by your existing skills.</li>
        <li><strong>Price it</strong> — moving from hourly to outcome pricing without losing the deal.</li>
        <li><strong>Prove it</strong> — building a portfolio piece in a weekend when you have no clients yet.</li>
        <li><strong>Sell it</strong> — the outreach cadence, and what to say on the call.</li>
        <li><strong>Deliver it</strong> — systems so a five-client roster still fits in a normal week.</li>
        <li><strong>Raise it</strong> — when and how to double your rate.</li>
      </ol>
    `,
  },
  {
    id: 'prompt-engineering-course',
    name: 'Prompt Engineering, Properly',
    category: 'courses',
    price: 89,
    rating: 4.8, reviews: 211,
    gradient: ['#00c2b2', '#0ea5e9'],
    icon: 'brain',
    short: 'A practical course on structure, context and evaluation — the three things that separate a good prompt from a lucky one.',
    includes: [
      '22 lessons, 3h 40m of video',
      'Prompt evaluation harness you can reuse',
      '60 annotated before/after examples',
      'Certificate of completion',
    ],
    specs: { Format: 'Video (1080p) + exercises', Files: '22 lessons, 2.1 GB', Updates: 'Lifetime', License: 'Single seat' },
    body: `
      <p>You do not need tricks. You need structure, the right context in the window, and a way to tell whether a change actually helped. That is the whole course.</p>
      <h3>What you'll be able to do</h3>
      <ul>
        <li>Diagnose why a prompt failed instead of randomly rewording it.</li>
        <li>Build a small evaluation set so improvements are measurable.</li>
        <li>Write prompts that survive being handed to someone else on your team.</li>
      </ul>
    `,
  },
  {
    id: 'social-repurpose-pack',
    name: 'Repurpose Machine',
    category: 'prompts',
    price: 24,
    rating: 4.6, reviews: 88,
    gradient: ['#ec4899', '#f59e0b'],
    icon: 'share',
    short: 'One long-form piece in, twelve platform-native posts out — each rewritten for the platform, not just cropped.',
    includes: [
      '12 platform-specific rewrite prompts',
      'Hook library (140 openers)',
      'Posting cadence calendar',
    ],
    specs: { Format: 'Markdown + Notion', Files: '3 files, 5 MB', Updates: 'Lifetime', License: 'Personal + commercial' },
    body: `<p>Cross-posting the same text everywhere is why repurposing gets a bad name. Each prompt here knows the format it is writing for — length, tone, what the first line has to do, and what gets cut.</p>`,
  },
  {
    id: 'saas-launch-kit',
    name: 'SaaS Launch Kit',
    category: 'templates',
    price: 44,
    rating: 4.7, reviews: 76,
    gradient: ['#5b4bff', '#ec4899'],
    icon: 'rocket',
    short: 'Landing page copy framework, launch-week checklist and 30 days of announcement content, all AI-assisted.',
    includes: [
      'Landing page copy framework with 6 filled examples',
      'Launch-week checklist (42 items)',
      '30-day announcement content calendar',
      'Press + directory submission list',
    ],
    specs: { Format: 'Docs, Sheets, Markdown', Files: '9 files, 8 MB', Updates: 'Lifetime', License: 'Personal + commercial' },
    body: `<p>Everything that has to exist before launch day, in the order it has to exist. The copy framework alone has been used for launches that hit the front page of the usual places.</p>`,
  },
  {
    id: 'meeting-notes-automation',
    name: 'Meeting-to-Action Automation',
    category: 'automations',
    price: 39,
    rating: 4.7, reviews: 64,
    gradient: ['#f59e0b', '#00c2b2'],
    icon: 'bolt',
    short: 'Transcript in, structured summary plus assigned tasks out — pushed straight into your task manager.',
    includes: [
      'Zapier + n8n blueprints',
      'Summary prompt with decisions/owners/risks sections',
      'Task-extraction prompt with due-date inference',
      'Connectors for Notion, Linear, Asana and Todoist',
    ],
    specs: { Format: 'Zapier + n8n blueprints', Files: '6 files, 3 MB', Updates: 'Lifetime', License: 'Personal + commercial' },
    body: `<p>The summary is not a wall of text. It is four sections — decisions, owners, risks, open questions — and every action item leaves with a name and a date attached.</p>`,
  },
  {
    id: 'everything-bundle',
    name: 'The Everything Bundle',
    category: 'templates',
    price: 249, compareAt: 624,
    rating: 5.0, reviews: 189,
    badges: ['Best value'],
    gradient: ['#5b4bff', '#00c2b2'],
    icon: 'box',
    short: 'Every product on this site, plus every future release, for roughly the price of two.',
    includes: [
      'All 11 current products',
      'Every future release, free',
      'Priority email support',
      'Private community access',
    ],
    specs: { Format: 'All formats', Files: 'Everything', Updates: 'Lifetime + all future products', License: 'Personal + commercial' },
    body: `
      <p>If you are going to buy two things here, buy this instead. It includes every product currently listed and everything released from here on, at no extra cost.</p>
      <p>Roughly 60% of buyers pick the bundle within a week of their first purchase, so this saves you the second checkout.</p>
    `,
  },
];

/* --------------------------------------------------------------------------
   4. SOCIAL PROOF
   -------------------------------------------------------------------------- */
const TESTIMONIALS = [
  { quote: 'I bought the Prompt Vault expecting a spreadsheet of clichés. Three weeks later it is the first tab I open every morning. The variable mapping alone saved me hours.', name: 'Priya Raman', role: 'Head of Growth, Latchkey' },
  { quote: 'The Cold Email Engine got us a 14% reply rate on a list that had been dead for a year. The research step is the whole trick.', name: 'Marcus Dell', role: 'Founder, Northwind Ops' },
  { quote: 'Content OS finally made me consistent. Nine weeks of publishing three times a week, which I had never managed before.', name: 'Anna Kowalski', role: 'Independent writer' },
  { quote: 'I set up the Inbox Triage Agent on a Sunday and it has handled about 400 emails since. It has never sent anything on its own, which is exactly what I wanted.', name: 'Devon Price', role: 'Consultant' },
  { quote: 'Took the freelancer course, rebuilt my offer around one outcome, and raised my rate 80%. Two clients said yes at the new price without blinking.', name: 'Sofia Marchetti', role: 'AI implementation freelancer' },
  { quote: 'The research blueprint is the first agent setup I have used that admits when it could not verify something. That single section makes the output trustworthy.', name: 'Tom Beaufort', role: 'Strategy lead, Merridew' },
];

/* --------------------------------------------------------------------------
   5. FAQ
   -------------------------------------------------------------------------- */
const FAQS = [
  { q: 'How do I get my files after buying?', a: 'Download links appear on the confirmation screen the moment your order completes, and a copy is emailed to you. Links do not expire — you can re-download any time.' },
  { q: 'Do I need a paid AI subscription to use these?', a: 'For the prompt packs and templates, any assistant works, including free tiers. The automation blueprints need an API key from your AI provider and a Make.com, n8n or Zapier account; all of them have free tiers that comfortably cover normal personal usage.' },
  { q: 'Can I use these for client work?', a: 'Yes. Everything except the courses ships with a commercial licence, so you can use it in paid client delivery. What you cannot do is resell or redistribute the files themselves as your own product.' },
  { q: 'What is your refund policy?', a: 'Fourteen days, no questions asked. Email us and the refund goes back the same day. You keep any files you already downloaded — we would rather you not fight us over a $29 prompt pack.' },
  { q: 'Do I get updates?', a: 'Yes, free and for life on everything listed. When a product gets a new version you get an email with the new download link.' },
  { q: 'Is there a bundle?', a: 'The Everything Bundle includes all current products plus every future release for $249, against $624 if bought separately.' },
  { q: 'Do you offer team or agency licences?', a: 'Content OS covers up to ten seats out of the box. For larger teams or agency-wide use, email us and we will send a seat-based quote.' },
  { q: 'What payment methods do you accept?', a: 'Card, PayPal and Apple Pay at checkout. Prices are in USD and all taxes are calculated at checkout where applicable.' },
];

/* --------------------------------------------------------------------------
   6. THE PROMISE BLOCKS on the homepage
   -------------------------------------------------------------------------- */
const FEATURES = [
  { icon: 'bolt', title: 'Instant delivery', body: 'Files land in your hands the second the payment clears. No waiting on a human, no drip schedule.' },
  { icon: 'shield', title: '14-day refund', body: 'If it does not earn its price back, email us and we refund it the same day. You keep what you downloaded.' },
  { icon: 'refresh', title: 'Free updates for life', body: 'Every product gets revised as the models change. You get every new version at no cost, forever.' },
  { icon: 'check', title: 'Tested on real work', body: 'Nothing gets listed until it has been used on live client work. No theory, no scraped prompt lists.' },
  { icon: 'brain', title: 'Model-agnostic', body: 'Written to work across the major assistants. Switching providers does not make your purchase useless.' },
  { icon: 'chat', title: 'Real support', body: 'A person answers, usually within a day. Ask setup questions, ask for a walkthrough, ask if it fits your case.' },
];

const STATS = [
  { value: '12,400+', label: 'Customers served' },
  { value: '4.9 / 5', label: 'Average rating' },
  { value: '11', label: 'Products, all updated' },
  { value: '14 days', label: 'No-questions refunds' },
];
