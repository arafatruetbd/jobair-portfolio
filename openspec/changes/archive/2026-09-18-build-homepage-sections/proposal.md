## Why

With the core styling and layout foundation in place, the Jobair portfolio website requires the full set of content sections specified in PRD.md and architecture.md. Implementing these sections positions Jobair as a specialized Acumatica ERP and Ticket Operations Specialist, provides an easily scannable overview of his 4+ years of hands-on experience, and delivers a fully functional, responsive single-page portfolio.

## What Changes

- **Navigation Header**: Implement `src/components/layout/Header.tsx` with Jobair branding, anchor links (`#home`, `#portfolio`, `#about`, `#contact`), active section indicator, "Contact Me" CTA, and responsive mobile navigation menu.
- **Hero Section**: Implement `src/components/sections/Hero.tsx` with portrait avatar, "Available for new opportunities" status badge, primary title ("Jobair"), professional title ("Acumatica ERP & Ticket Operations Specialist"), supporting platform subtitle ("E-commerce Orders | AXS | Ticketmaster"), core summary, primary CTA ("View My Work"), secondary CTA ("Get in Touch"), and right-side professional highlights with Lucide icons.
- **Experience Stats**: Implement `src/components/sections/ExperienceStats.tsx` and `src/components/ui/StatCard.tsx` displaying the four metrics specified in PRD Section 7.3 ("4+ Years Experience", "10+ Platforms Worked", "1000+ Orders & Tickets Handled", "Reliable Long-Term Collaboration").
- **Selected Portfolio**: Implement `src/components/sections/Portfolio.tsx` and `src/components/ui/PortfolioCard.tsx` rendering the four primary portfolio cards:
  1. Acumatica ERP Specialist (Multi-Channel E-commerce Order Processing)
  2. AXS Ticket Operations (Event Research, Pricing & Inventory Management)
  3. Ticketmaster Ticket Operations (Research, Pricing & Market Analysis)
  4. Multi-Platform Ticket Operations (AXS, Ticketmaster, StubHub, SeatGeek & More)
- **About Section**: Implement `src/components/sections/About.tsx` communicating Jobair's operational background, attention to detail, and SOP compliance.
- **Tools & Platforms**: Implement `src/components/sections/Tools.tsx` and `src/components/ui/PlatformBadge.tsx` displaying platform badges grouped into ERP/E-commerce and Ticketing categories.
- **Contact Section**: Implement `src/components/sections/Contact.tsx` with "Let's Work Together", contact copy, and verified channels (email, LinkedIn, Upwork).
- **Footer**: Implement `src/components/layout/Footer.tsx` with branding, anchored navigation, social/platform links, and dynamic copyright.
- **Data Modules**: Create data structures in `src/data/portfolio.ts`, `src/data/platforms.ts`, `src/data/experience.ts`, and `src/data/site.ts` to keep content decoupled from UI presentation.
- **Active Section Hook**: Implement `src/hooks/useActiveSection.ts` using `IntersectionObserver` to track the current active section for navigation highlighting.
- **Page Assembly**: Integrate all sections into `src/App.tsx` within the semantic landmarks (`<header>`, `<main>`, `<footer>`).

### Non-Goals
- Multi-page routing or dedicated subpages (MVP is single-page with anchor navigation).
- Backend contact form processing or external database integrations.
- Unverified metrics, fabricated testimonials, or decorative animations beyond subtle 150–250ms transitions.

## Capabilities

### New Capabilities
- `homepage-sections`: Complete single-page portfolio layout, section components, data models, and anchored navigation adhering to PRD.md and architecture.md specifications.

### Modified Capabilities
None.

## Impact

- **UI & Presentation**: Replaces the foundation testing shell in `src/App.tsx` with the complete single-page portfolio.
- **New Modules**: Populates `src/components/sections/`, `src/components/layout/`, `src/components/ui/`, `src/data/`, and `src/hooks/`.
- **Dependencies**: Uses existing `lucide-react`, `react`, and `tailwindcss` packages already installed.
