# Jobair Hossain — Professional Portfolio Website

[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=flat&logo=vite&logoColor=white)](https://vite.dev/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-CI%2FCD-2088FF?style=flat&logo=github-actions&logoColor=white)](https://github.com/features/actions)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Deployed-222222?style=flat&logo=github&logoColor=white)](https://pages.github.com/)

A minimalist, high-performance, and fully responsive professional portfolio website for **Jobair Hossain**, specializing in **Acumatica ERP & Ticket Operations**.

**Live Demo**: `https://arafatruetbd.github.io/jobair-portfolio/`

---

## Overview & Specializations

Built strictly following [`docs/PRD.md`](docs/PRD.md) and [`docs/architecture.md`](docs/architecture.md), this portfolio provides prospective clients, operations managers, and recruiters with an immediate, scannable overview of Jobair's 4+ years of operational experience:

1. **Acumatica ERP & Multi-Channel E-Commerce** (Primary Specialization):
   - Multi-channel order processing and fulfillment across Amazon, Walmart, Wayfair, Faire, Etsy, and WooCommerce.
   - Inventory checking, SKU verification, duplicate order filtering, backorder management, and SLA compliance.
2. **Ticket Operations & Inventory Management** (Secondary Specialization):
   - Secondary ticketing workflows across AXS, Ticketmaster, StubHub, SeatGeek, Vivid Seats, Gametime, and TickPick.
   - Pricing adjustments, market research, price tracking, inventory distribution, and margin protection.

---

## Key Features

- **Single Page Architecture**: Smooth anchor navigation (`#home`, `#portfolio`, `#about`, `#contact`) with zero unnecessary routing overhead.
- **Prioritized Visual Hierarchy**: Acumatica ERP card highlighted with prominent primary accent borders, accompanied by ticketing operations cards.
- **Expandable Detail Disclosures**: Compact initial layout with accessible "View Details" disclosures revealing complete operational responsibilities on demand.
- **Categorized Platforms**: Clear, non-intrusive platform categorization dividing ERP/E-commerce tools from Ticketing systems.
- **Accessibility & Motion Safety**:
  - Semantic HTML5 landmarks (`<header>`, `<main>`, `<section>`, `<footer>`).
  - High-contrast color palette meeting WCAG AA standards.
  - Interactive touch targets meeting the 44px minimum height standard.
  - Automatic suppression of animations and transitions when `prefers-reduced-motion: reduce` is detected.
  - Keyboard-accessible mobile navigation drawer with backdrop overlay, Escape key listener, and body scroll lock.
- **Static-First & Zero Backend**: Hosted on GitHub Pages with zero server dependencies, database overhead, or API keys to manage.

---

## Tech Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) | Component architecture with modern hooks |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) | Strict type safety and compile-time verification |
| **Bundler & Tooling** | [Vite 8](https://vite.dev/) | Rapid HMR dev server and optimized production rollup |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | Theme variables, utility-first layout primitives |
| **Icons** | [Lucide React](https://lucide.dev/) | Clean, consistent, tree-shakeable SVG icons |
| **CI/CD** | [GitHub Actions](https://github.com/features/actions) | Automated linting, build-gating, and Pages deployment |
| **Hosting** | [GitHub Pages](https://pages.github.com/) | Reliable, zero-cost static site hosting |

---

## Project Structure

```text
jobair-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions CI/CD deployment pipeline
├── docs/
│   ├── PRD.md                  # Product Requirements Document
│   └── architecture.md         # Technical Architecture & Guidelines
├── openspec/                   # OpenSpec specification and change archives
│   └── specs/
│       ├── github-pages-deployment/
│       ├── homepage-sections/
│       └── portfolio-foundation/
├── public/
│   ├── favicon.svg             # Website favicon
│   ├── icons.svg               # SVG asset icons
│   └── images/
│       └── profile/
│           └── profile.png     # Professional portrait image
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Container.tsx   # Responsive max-width container primitive
│   │   │   ├── Footer.tsx      # Footer landmark and verified links
│   │   │   └── Header.tsx      # Navigation, logo, and mobile drawer
│   │   ├── sections/
│   │   │   ├── About.tsx       # Professional background and competencies
│   │   │   ├── Contact.tsx     # Direct email CTA, LinkedIn, Upwork links
│   │   │   ├── ExperienceStats.tsx # Verified metrics grid
│   │   │   ├── Hero.tsx        # Portrait avatar, headline, core CTAs
│   │   │   ├── Portfolio.tsx   # Specialization cards with detail disclosure
│   │   │   └── Tools.tsx       # Categorized ERP and ticketing badges
│   │   └── ui/
│   │       ├── Button.tsx      # Accessible button component
│   │       ├── PlatformBadge.tsx # Tool/platform badge component
│   │       ├── PortfolioCard.tsx # Reusable portfolio card component
│   │       ├── SectionHeading.tsx# Eyebrow and heading component
│   │       └── StatCard.tsx    # Metric stat card component
│   ├── data/
│   │   ├── experience.ts       # Verified experience statistics
│   │   ├── platforms.ts        # Categorized platform datasets
│   │   ├── portfolio.ts        # Portfolio items and responsibilities
│   │   └── site.ts             # Site metadata, qualities, and contact URLs
│   ├── types/
│   │   └── index.ts            # Core TypeScript interfaces
│   ├── App.tsx                 # Root application component
│   ├── index.css               # Design tokens and reduced-motion reset
│   └── main.tsx                # React DOM entry point
├── eslint.config.js            # ESLint flat configuration
├── index.html                  # HTML entry point with SEO metadata
├── package.json                # Project dependencies and scripts
├── tsconfig.json               # TypeScript compiler configuration
└── vite.config.ts              # Vite configuration (base path & plugins)
```

---

## Local Development

### Prerequisites

- **Node.js**: v20 or higher recommended
- **npm**: v10 or higher

### Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/arafatruetbd/jobair-portfolio.git
   cd jobair-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```
   Open your browser to `http://localhost:5173/jobair-portfolio/` (Vite will serve under the configured base path).

4. **Run code linting**:
   ```bash
   npm run lint
   ```

5. **Create production build**:
   ```bash
   npm run build
   ```
   Executes TypeScript type checking (`tsc -b`) and Vite production bundling into `dist/`.

6. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## GitHub Pages Deployment

Continuous deployment is automated using GitHub Actions (`.github/workflows/deploy.yml`).

### Deployment Pipeline

```text
git push origin main
       │
       ▼
GitHub Actions Runner (ubuntu-latest, Node 20)
       │
       ├── 1. npm ci (clean install with npm cache)
       ├── 2. npm run lint (ESLint validation)
       ├── 3. npm run build (tsc -b && vite build)
       └── 4. actions/upload-pages-artifact@v3
       │
       ▼
Deploy Job (actions/deploy-pages@v4)
       │
       ▼
Live on GitHub Pages (https://arafatruetbd.github.io/jobair-portfolio/)
```

### Initial Repository Setup

To activate automated deployment on your GitHub repository:

1. Navigate to your repository on GitHub.
2. Go to **Settings** > **Pages** (under "Code and automation").
3. Under **Build and deployment**, set **Source** to **GitHub Actions** (do **not** select "Deploy from a branch").
4. Push your code to `main`:
   ```bash
   git push origin main
   ```
5. Monitor execution under the **Actions** tab. Once the run completes, your portfolio will be live at the reported URL.

### Subpath Configuration vs. Custom Domain

- **Default (GitHub Pages Subpath)**:  
  When deployed to `https://<username>.github.io/jobair-portfolio/`, Vite requires `base: '/jobair-portfolio/'` in `vite.config.ts`.
- **Custom Domain (e.g., `jobair.dev`)**:  
  If configuring a custom domain in GitHub Pages settings, update `vite.config.ts` to use root base path:
  ```ts
  export default defineConfig({
    plugins: [react(), tailwindcss()],
    base: '/',
  })
  ```

---

## Quality & Verification Rules

As outlined in [`docs/architecture.md`](docs/architecture.md) and [`docs/PRD.md`](docs/PRD.md):

- **No Fabricated Claims**: Only verified experience, platforms, and metrics are displayed.
- **Content Safety**: Jobair does not imply official partnerships with platforms (e.g. AXS, Ticketmaster, Amazon) — language emphasizes "Hands-on experience with..." and "Supported operations across...".
- **Zero Console Errors**: Builds must pass linting and type-checking with zero warnings or errors.

---

## Documentation References

- **[PRD.md](docs/PRD.md)**: Authoritative product and content requirements.
- **[architecture.md](docs/architecture.md)**: Technical architecture, styling principles, and deployment specifications.
- **[OpenSpec Changes](openspec/)**: Change specifications and traceability archives.
