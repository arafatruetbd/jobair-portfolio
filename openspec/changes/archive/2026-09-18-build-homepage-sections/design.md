## Context

The UI and styling foundation (`portfolio-foundation`) has established the design tokens, base typography, and layout primitives (`Container`, `Button`, `SectionHeading`). The website now requires the complete single-page section architecture specified in PRD.md Section 7–12 and architecture.md Section 6–9.

## Goals / Non-Goals

**Goals:**
- Construct decoupled data modules for portfolio items, platform registries, metrics, and site metadata.
- Implement responsive section components: `Hero`, `ExperienceStats`, `Portfolio`, `About`, `Tools`, and `Contact`.
- Implement responsive layout components: `Header` (with mobile navigation drawer and active section indicator) and `Footer`.
- Implement reusable UI widgets: `PortfolioCard`, `StatCard`, and `PlatformBadge`.
- Provide smooth anchor-based scrolling with offset margins (`scroll-mt-20`) to prevent sticky header collisions.
- Wire all components into `src/App.tsx` maintaining WCAG AA accessibility and clean performance.

**Non-Goals:**
- Client-side routers (e.g. `react-router-dom`) or multi-page builds for the MVP.
- External CMS, headless APIs, or server-side form submission endpoints.
- Unverified numeric claims or non-standard decorative animations.

## Decisions

### 1. Data Layer Decoupling (`src/data/`)
- **Choice**: Extract all copy, lists, metrics, and platform entries into TypeScript data modules:
  - `src/data/portfolio.ts`: The 4 primary portfolio items (Acumatica ERP, AXS, Ticketmaster, Multi-Platform).
  - `src/data/platforms.ts`: Grouped ERP/E-commerce and Ticketing platforms.
  - `src/data/experience.ts`: The 4 verified metrics cards.
  - `src/data/site.ts`: Navigation links, brand titles, and contact information.
- **Rationale**: Adheres to architecture.md Section 9, enabling easy content updates and review without modifying presentation components.
- **Alternatives Considered**: Inlining content directly into section JSX — rejected because it produces code duplication and complicates maintenance.

### 2. Active Section Detection via `IntersectionObserver`
- **Choice**: Implement `useActiveSection(sectionIds)` hook using browser-native `IntersectionObserver` instead of raw scroll event listeners.
- **Rationale**: Zero performance overhead, smooth 60fps tracking without scroll jank or throttling libraries.
- **Alternatives Considered**: `window.addEventListener('scroll', ...)` — rejected due to performance overhead and potential jank on mobile devices.

### 3. Navigation and Anchor Scroll Margin Strategy
- **Choice**: Header is sticky (`sticky top-0 z-40 bg-bg-primary/95 backdrop-blur-sm`). Each section element receives `id="..."` and `className="scroll-mt-20"`.
- **Rationale**: Ensures that clicking header navigation links scrolls cleanly to section titles without the sticky header obscuring the section heading.
- **Alternatives Considered**: JavaScript scroll-to with manual pixel offsets — rejected in favor of native CSS scroll margins and smooth scrolling.

### 4. Modular Component Decomposition
- **Layout Components**: `Header.tsx`, `Footer.tsx` in `src/components/layout/`.
- **Section Components**: `Hero.tsx`, `ExperienceStats.tsx`, `Portfolio.tsx`, `About.tsx`, `Tools.tsx`, `Contact.tsx` in `src/components/sections/`.
- **UI Components**: `PortfolioCard.tsx`, `StatCard.tsx`, `PlatformBadge.tsx` in `src/components/ui/`.
- **Rationale**: Matches architecture.md Section 6 directory blueprint exactly.

## Risks / Trade-offs

- **[Risk]** Large portfolio descriptions causing visually overcrowded cards.
  - **Mitigation**: Format cards with structured summaries, platform tags, and concise bulleted responsibilities per PRD Section 7.4–7.7.
- **[Risk]** Absence of final client profile photo breaking the hero layout.
  - **Mitigation**: Render an elegant, accessible avatar placeholder with subtle pale-green backdrop and status badge as outlined in PRD Section 7.2.
- **[Risk]** Mobile navigation drawer trapping keyboard focus or failing to close on link click.
  - **Mitigation**: Close mobile drawer automatically upon anchor link activation and provide clear `aria-expanded` and `aria-label` attributes.

## Migration Plan

1. Create data files: `src/data/site.ts`, `src/data/experience.ts`, `src/data/portfolio.ts`, `src/data/platforms.ts`.
2. Implement active section hook: `src/hooks/useActiveSection.ts`.
3. Implement reusable UI cards: `StatCard.tsx`, `PlatformBadge.tsx`, `PortfolioCard.tsx`.
4. Implement section components: `Hero.tsx`, `ExperienceStats.tsx`, `Portfolio.tsx`, `About.tsx`, `Tools.tsx`, `Contact.tsx`.
5. Implement layout components: `Header.tsx`, `Footer.tsx`.
6. Assemble into `src/App.tsx`.
7. Verify functionality with `npm run lint` and `npm run build`.
