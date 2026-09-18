## 1. Data Models & Active Section Hook

- [x] 1.1 Create `src/data/site.ts`, `src/data/experience.ts`, `src/data/portfolio.ts`, and `src/data/platforms.ts` matching PRD.md Section 7–10 specifications, verifying all data structures compile without TypeScript errors
- [x] 1.2 Implement `src/hooks/useActiveSection.ts` using `IntersectionObserver` to track the visible section in view, verifying the hook returns the active section anchor ID

## 2. Reusable UI Widgets

- [x] 2.1 Implement `src/components/ui/StatCard.tsx` for metrics display, verifying numeric value and label rendering
- [x] 2.2 Implement `src/components/ui/PlatformBadge.tsx` for tool and platform badges, verifying badge styles and category variants
- [x] 2.3 Implement `src/components/ui/PortfolioCard.tsx` displaying category, title, subtitle, summary, responsibilities list, and platform tags, verifying card layout and typography

## 3. Section Components

- [x] 3.1 Implement `src/components/sections/Hero.tsx` with avatar placeholder, status badge, title, subtitle, summary, CTAs, and 3 key qualities with Lucide icons, verifying anchor target links and visual hierarchy
- [x] 3.2 Implement `src/components/sections/ExperienceStats.tsx` rendering the 4 verified metrics in responsive columns, verifying responsive grid layout
- [x] 3.3 Implement `src/components/sections/Portfolio.tsx` rendering the 4 portfolio cards with Acumatica ERP prioritized first, verifying cards list rendering
- [x] 3.4 Implement `src/components/sections/About.tsx` detailing operational accuracy and SOP compliance, verifying text presentation and readability
- [x] 3.5 Implement `src/components/sections/Tools.tsx` categorizing platforms into ERP/E-commerce and Ticketing groups, verifying grouped badge layout
- [x] 3.6 Implement `src/components/sections/Contact.tsx` with "Let's Work Together", copy, and verified contact links, verifying link targets and accessibility

## 4. Layout Landmarks & Page Assembly

- [x] 4.1 Implement `src/components/layout/Header.tsx` with brand identity, subtitle, desktop links, "Contact Me" button, active section highlighting, and mobile collapsible menu, verifying responsive navigation behavior
- [x] 4.2 Implement `src/components/layout/Footer.tsx` with branding, navigation links, and copyright notice, verifying footer landmarks
- [x] 4.3 Assemble all sections into `src/App.tsx` within `<header>`, `<main id="main">`, and `<footer>`, verifying smooth anchor scrolling across all sections
- [x] 4.4 Run `npm run lint` and `npm run build` to verify clean compilation with zero TypeScript or lint errors
