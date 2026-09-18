# Architecture — Jobair Portfolio Website

## 1. Overview

This document defines the technical architecture for Jobair’s professional portfolio website.

The website will be deployed directly from GitHub using **GitHub Pages**.

The architecture is intentionally simple, static, fast, maintainable, and easy to deploy.

---

## 2. Architecture Goals

The system should be:

- Simple to understand and maintain
- Fully static
- Compatible with GitHub Pages
- Fast to load
- Responsive
- SEO-friendly
- Easy to update from GitHub
- Data-driven where practical
- Free from unnecessary backend complexity

---

## 3. Recommended Technology Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React

### Deployment

- GitHub
- GitHub Actions
- GitHub Pages

### Optional

- Framer Motion for subtle animations only
- React Router if dedicated portfolio pages are needed

---

## 4. Why Vite Instead of Next.js

GitHub Pages is best suited for static websites.

Vite is preferred because:

- Static deployment is straightforward
- No server is required
- No server-side rendering configuration is required
- Builds are fast
- GitHub Pages deployment is simple
- The final output is plain HTML, CSS, and JavaScript

Next.js can also work with static export, but it introduces extra configuration that is unnecessary for this portfolio.

---

## 5. High-Level Architecture

```text
User Browser
     |
     v
GitHub Pages
     |
     v
Static Build Output
     |
     +-- index.html
     +-- CSS
     +-- JavaScript
     +-- Images
     +-- Fonts
     |
     v
React Application
     |
     +-- Header
     +-- Hero
     +-- Experience Stats
     +-- Portfolio
     +-- About
     +-- Tools
     +-- Contact
     +-- Footer
```

No backend server is required.

---

# 6. Repository Structure

Recommended structure:

```text
jobair-portfolio/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── public/
│   ├── images/
│   │   ├── profile/
│   │   │   └── jobair.webp
│   │   │
│   │   ├── portfolio/
│   │   │   ├── acumatica.webp
│   │   │   ├── axs.webp
│   │   │   ├── ticketmaster.webp
│   │   │   └── multi-platform.webp
│   │   │
│   │   └── logos/
│   │       ├── acumatica.svg
│   │       ├── amazon.svg
│   │       ├── walmart.svg
│   │       ├── wayfair.svg
│   │       ├── faire.svg
│   │       ├── etsy.svg
│   │       ├── woocommerce.svg
│   │       ├── axs.svg
│   │       ├── ticketmaster.svg
│   │       ├── stubhub.svg
│   │       └── seatgeek.svg
│   │
│   ├── favicon.svg
│   └── resume.pdf
│
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Container.tsx
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── ExperienceStats.tsx
│   │   │   ├── Portfolio.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Tools.tsx
│   │   │   └── Contact.tsx
│   │   │
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── PortfolioCard.tsx
│   │       ├── StatCard.tsx
│   │       ├── PlatformBadge.tsx
│   │       └── SectionHeading.tsx
│   │
│   ├── data/
│   │   ├── portfolio.ts
│   │   ├── platforms.ts
│   │   ├── experience.ts
│   │   └── site.ts
│   │
│   ├── types/
│   │   └── index.ts
│   │
│   ├── hooks/
│   │   └── useActiveSection.ts
│   │
│   ├── utils/
│   │   └── constants.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
├── PRD.md
├── architecture.md
└── README.md
```

---

# 7. Application Structure

The MVP should remain a single-page application.

```text
App
│
├── Header
│
├── main
│   ├── Hero
│   ├── ExperienceStats
│   ├── Portfolio
│   ├── About
│   ├── Tools
│   └── Contact
│
└── Footer
```

Navigation should use section anchors.

Example:

```text
/
#home
#portfolio
#about
#contact
```

This avoids unnecessary routing complexity.

---

# 8. Component Architecture

## Header

Responsibilities:

- Display Jobair branding
- Desktop navigation
- Mobile navigation
- Contact CTA
- Active section indicator

Should not contain business logic.

---

## Hero

Responsibilities:

- Profile image
- Name
- Professional title
- Experience summary
- Availability badge
- Primary CTA
- Secondary CTA
- Professional highlights

---

## ExperienceStats

Displays verified high-level metrics.

Example:

```ts
[
  {
    value: "4+",
    label: "Years Experience"
  },
  {
    value: "10+",
    label: "Platforms Worked"
  }
]
```

Unverified numbers must not be hard-coded.

---

## Portfolio

Receives portfolio items from:

```text
src/data/portfolio.ts
```

It should map data into reusable `PortfolioCard` components.

Example:

```tsx
portfolioItems.map((item) => (
  <PortfolioCard
    key={item.id}
    item={item}
  />
))
```

---

## PortfolioCard

Responsibilities:

- Category
- Title
- Subtitle
- Summary
- Selected platforms
- Details CTA

No portfolio content should be duplicated directly inside the card component.

---

## About

Static professional summary.

Keep content concise and readable.

---

## Tools

Displays platform badges grouped by category.

Categories:

- ERP
- E-commerce
- Ticketing

---

## Contact

Responsibilities:

- Contact CTA
- Email
- LinkedIn
- Upwork

Only verified links should be displayed.

---

# 9. Data Architecture

Portfolio content should live separately from UI components.

This makes future updates easier.

## `src/data/portfolio.ts`

Example:

```ts
import type { PortfolioItem } from "../types";

export const portfolioItems: PortfolioItem[] = [
  {
    id: "acumatica",
    category: "ERP",
    title: "Acumatica ERP Specialist",
    subtitle:
      "Multi-Channel E-commerce Order Processing & Order Management",
    summary:
      "Process and manage orders across multiple e-commerce channels using Acumatica ERP.",
    platforms: [
      "Acumatica",
      "Amazon",
      "Walmart",
      "Wayfair",
      "Faire",
      "Etsy",
      "WooCommerce"
    ],
    responsibilities: [
      "Sales order processing",
      "Inventory checking",
      "SKU verification",
      "Backorder handling",
      "Order scheduling",
      "Fulfillment coordination",
      "Duplicate order checking"
    ]
  }
];
```

---

# 10. Type Definitions

Recommended interfaces:

```ts
export interface PortfolioItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  summary: string;
  platforms: string[];
  responsibilities: string[];
}

export interface ExperienceStat {
  value: string;
  label: string;
}

export interface Platform {
  name: string;
  category: "erp" | "ecommerce" | "ticketing";
  logo?: string;
}

export interface ContactLink {
  label: string;
  href: string;
}
```

---

# 11. Styling Architecture

Use Tailwind CSS for styling.

### Principles

- Utility-first
- Minimal custom CSS
- Consistent spacing
- Consistent typography
- Reusable layout primitives
- Mobile-first

---

## Design Tokens

Define reusable values through Tailwind configuration or CSS variables.

```css
:root {
  --background: #ffffff;
  --surface: #f8faf9;
  --text-primary: #0b1b35;
  --text-secondary: #5f6b7a;
  --accent: #16845b;
  --accent-hover: #116c4a;
  --border: #e4e9e7;
  --accent-soft: #eef8f3;
}
```

---

# 12. Responsive Architecture

Use a mobile-first layout.

### Breakpoints

```text
Mobile:      < 640px
Tablet:      640px – 1023px
Desktop:     >= 1024px
Large:       >= 1280px
```

---

## Hero

Desktop:

```text
Profile | Main Content | Highlights
```

Tablet:

```text
Profile | Main Content
Highlights underneath
```

Mobile:

```text
Profile
Main Content
Highlights
```

---

## Portfolio Cards

```text
Desktop: 4 columns
Tablet: 2 columns
Mobile: 1 column
```

---

# 13. Navigation Architecture

Use anchor-based navigation.

Example:

```tsx
<a href="#portfolio">Portfolio</a>
```

Each major section should have an ID.

```tsx
<section id="portfolio">
```

Add:

```css
html {
  scroll-behavior: smooth;
}
```

Respect users who prefer reduced motion.

---

# 14. Asset Strategy

## Images

Use:

- WebP
- AVIF where useful
- SVG for logos and icons

Profile image target:

```text
300–600 KB maximum
```

Portfolio images:

```text
200–400 KB each
```

Avoid unnecessary high-resolution assets.

---

## Platform Logos

Preferred:

- Official SVG where legally appropriate
- Neutral text badges as fallback

Do not modify company logos in misleading ways.

---

# 15. SEO Architecture

Since this is a static website, SEO should primarily live in `index.html`.

Example:

```html
<title>
  Jobair | Acumatica ERP & Ticket Operations Specialist
</title>

<meta
  name="description"
  content="Jobair is an Acumatica ERP and Ticket Operations Specialist with 4 years of experience in e-commerce order processing, AXS, Ticketmaster, pricing, inventory management, and operations."
/>
```

Also include:

- Open Graph title
- Open Graph description
- Open Graph image
- Twitter card metadata
- Canonical URL
- Favicon

---

# 16. Accessibility Architecture

Use semantic HTML.

Example:

```html
<header>
<nav>
<main>
<section>
<footer>
```

Requirements:

- All images need `alt`
- Interactive elements must be keyboard accessible
- Buttons must use `<button>` where appropriate
- Navigation links should use `<a>`
- Visible focus state
- Sufficient contrast
- Heading order must remain logical
- Use `aria-label` only when necessary

---

# 17. Performance Strategy

The website should avoid:

- Heavy JavaScript libraries
- Large animation packages unless required
- Video backgrounds
- Large image files
- Excessive font variants

Recommended:

- One font family
- Maximum 3 font weights
- Lazy load below-the-fold images
- Prefer CSS effects over JavaScript
- Tree-shake unused components

---

# 18. State Management

No global state library is needed.

Do not use:

- Redux
- Zustand
- MobX
- Context for ordinary static content

Local React state is enough for:

- Mobile menu
- Optional portfolio modal
- Active navigation section

---

# 19. Backend Architecture

No backend is required for MVP.

```text
Frontend only
     |
GitHub Pages
```

Contact links can use:

```text
mailto:
LinkedIn
Upwork
```

If a contact form is added later, possible services include:

- Formspree
- Web3Forms
- EmailJS

That should remain a future enhancement.

---

# 20. Routing Strategy

## MVP

Use one page only.

```text
/
```

Sections:

```text
/#home
/#portfolio
/#about
/#contact
```

---

## Future

If case-study pages are added:

```text
/portfolio/acumatica/
/portfolio/axs/
/portfolio/ticketmaster/
/portfolio/ticket-operations/
```

Because GitHub Pages has special routing considerations for SPAs, static generated pages or hash routing should be preferred if multi-page navigation becomes necessary.

---

# 21. GitHub Pages Configuration

## Vite Base Path

If repository name is:

```text
jobair-portfolio
```

and URL is:

```text
https://username.github.io/jobair-portfolio/
```

configure:

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/jobair-portfolio/"
});
```

---

## Custom Domain

If later using:

```text
https://jobair.dev
```

the base can normally be:

```ts
base: "/"
```

---

# 22. GitHub Actions Deployment

Create:

```text
.github/workflows/deploy.yml
```

Recommended workflow:

```yaml
name: Deploy Portfolio

on:
  push:
    branches:
      - main

  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    runs-on: ubuntu-latest
    needs: build

    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

# 23. Build Flow

```text
Developer
   |
   v
git push origin main
   |
   v
GitHub Actions
   |
   +-- npm ci
   +-- npm run build
   |
   v
/dist
   |
   v
GitHub Pages
   |
   v
Live Portfolio
```

---

# 24. Development Workflow

Local development:

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

# 25. Branching Strategy

For a personal portfolio, keep Git workflow simple.

Recommended:

```text
main
feature/*
fix/*
```

Examples:

```text
feature/hero-section
feature/portfolio-cards
feature/mobile-navigation
fix/responsive-layout
```

Merge completed work into `main`.

Every push to `main` should automatically deploy.

---

# 26. Environment Variables

MVP should ideally require no environment variables.

If analytics or external forms are added:

```text
.env.local
```

Never commit private secrets.

Use:

```text
.env.example
```

for documenting required variables.

---

# 27. Security Considerations

Even though the site is static:

- Never commit passwords
- Never commit API keys
- Never expose private client information
- Never expose customer order data
- Never expose internal SOPs
- Avoid uploading screenshots with sensitive information

Use sample or anonymized data where needed.

---

# 28. Content Safety

Because Jobair has worked with external commercial platforms, the website should not imply official affiliation.

Avoid statements such as:

```text
Official Ticketmaster Partner
Amazon Partner
AXS Partner
```

unless independently verified.

Preferred language:

```text
Experience working with...
Hands-on experience using...
Supported operations across...
```

---

# 29. Verification Rules

Before displaying any numeric metric, verify it.

Examples:

```text
4+ Years Experience
10+ Platforms Worked
1000+ Orders & Tickets Handled
```

If a number cannot be verified, replace it with qualitative wording.

Example:

```text
Multi-Platform Experience
```

---

# 30. Testing Strategy

## Functional Testing

Test:

- Navigation links
- Contact links
- Mobile menu
- Portfolio CTAs
- External links
- Anchor scrolling

---

## Responsive Testing

Test at minimum:

```text
375px
430px
768px
1024px
1280px
1440px
```

---

## Browser Testing

Minimum:

- Chrome
- Edge
- Firefox
- Safari

---

## Accessibility Testing

Check:

- Keyboard navigation
- Focus states
- Heading order
- Alt text
- Color contrast
- Reduced motion

---

# 31. Quality Checks Before Deployment

Run:

```bash
npm run lint
npm run build
```

The application should have:

- No TypeScript errors
- No broken imports
- No console errors
- No broken image paths
- No placeholder content
- No invalid links

---

# 32. Deployment Checklist

Before first release:

- [ ] Repository created
- [ ] Vite configured
- [ ] Correct `base` path configured
- [ ] GitHub Pages enabled
- [ ] GitHub Actions workflow added
- [ ] Production build succeeds
- [ ] Profile image optimized
- [ ] Contact information verified
- [ ] Portfolio content reviewed
- [ ] Unverified claims removed
- [ ] Favicon added
- [ ] SEO metadata added
- [ ] Mobile layout tested
- [ ] Desktop layout tested
- [ ] Accessibility checked
- [ ] `main` branch deployed successfully

---

# 33. Recommended Initial Setup

Create the project:

```bash
npm create vite@latest jobair-portfolio -- --template react-ts

cd jobair-portfolio

npm install

npm install lucide-react

npm install -D tailwindcss @tailwindcss/vite
```

Then configure Tailwind and build the page components defined in this architecture.

---

# 34. Future Architecture

Potential future expansion:

```text
GitHub Pages
     |
React Portfolio
     |
     +-- Case Studies
     +-- Downloadable CV
     +-- Testimonials
     +-- Contact Form
     +-- Analytics
     +-- Multilingual Content
```

Avoid adding a backend until there is a concrete requirement for one.

---

# 35. Final Architecture Decision

For this portfolio, the preferred architecture is:

```text
React
+
TypeScript
+
Vite
+
Tailwind CSS
+
GitHub Actions
+
GitHub Pages
```

This architecture provides the best balance of:

- Simplicity
- Professional quality
- Performance
- Maintainability
- Free deployment
- GitHub-native workflow

The portfolio should remain **static-first and content-focused**.

Do not introduce backend services, databases, authentication, or complex state management unless future requirements clearly justify them.
