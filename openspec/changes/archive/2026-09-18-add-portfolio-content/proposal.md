## Why

While the initial portfolio layout establishes four portfolio cards, PRD.md Sections 7.4–7.7 and Section 8 specify that Acumatica ERP must have the strongest visual priority as Jobair's primary specialization. Furthermore, the cards currently display full lists of responsibilities directly in the layout, making them overly verbose. To deliver a clean, scannable, and recruiter-friendly experience, the homepage cards need concise presentation with an accessible expandable details toggle ("View Details" / "Hide Details") for in-depth operational responsibilities, while strictly drawing content from PRD.md without fabricated claims.

## What Changes

- **Visual Prioritization of Acumatica ERP**: Update the `#portfolio` layout and `PortfolioCard` styling so that the Acumatica ERP Specialist card commands the strongest visual prominence (featured badge, primary accent border highlighting, distinct background elevation, and primary position).
- **Concise Card Presentation**: Refactor `PortfolioCard` to display concise summaries on the homepage, preventing visual overcrowding.
- **Accessible Expandable Details**: Implement an expandable details disclosure ("View Details" / "Hide Details" button with `aria-expanded` and smooth content transition) within `PortfolioCard` to reveal granular responsibilities on demand, consistent with PRD Section 8 and single-page architecture constraints.
- **Accurate PRD Content Enforcement**: Verify and structure all data in `src/data/portfolio.ts` to strictly mirror PRD.md Sections 7.4–7.7 (exact titles, subtitles, summaries, marketplace/ticketing platforms, and responsibilities), ensuring zero invented employers, numbers, achievements, client names, or metrics.
- **Decoupled Data Architecture**: Ensure `PortfolioCard` remains purely presentational with all content, platforms, and metadata consumed from `src/data/portfolio.ts` via TypeScript types.

### Non-Goals

- Multi-page routing or dedicated subpages (e.g. `/portfolio/acumatica`), adhering to architecture.md Section 7 single-page MVP scope.
- Popups, modal dialogs, or external routing that breaks keyboard navigation or adds dependency weight.
- Fabricating client names, customer logos, employer credentials, or unverified performance figures.

## Capabilities

### New Capabilities

None.

### Modified Capabilities

- `homepage-sections`: Update `Selected Portfolio Cards` requirement to mandate strongest visual priority for Acumatica ERP, concise card summary presentation, and an accessible expandable details interaction for granular responsibilities.

## Impact

- **UI & Presentation**: Updates [`src/components/ui/PortfolioCard.tsx`](file:///C:/Users/arafa/projects/MISC/jobair-portfolio/src/components/ui/PortfolioCard.tsx) with expandable toggle and featured styling. Updates [`src/components/sections/Portfolio.tsx`](file:///C:/Users/arafa/projects/MISC/jobair-portfolio/src/components/sections/Portfolio.tsx) for featured visual hierarchy.
- **Data Model**: Updates [`src/data/portfolio.ts`](file:///C:/Users/arafa/projects/MISC/jobair-portfolio/src/data/portfolio.ts) and [`src/types/index.ts`](file:///C:/Users/arafa/projects/MISC/jobair-portfolio/src/types/index.ts) if needed (e.g. `featured?: boolean`).
- **Dependencies**: No new external dependencies; uses native React state and `lucide-react` icons (`ChevronDown`, `ChevronUp`, `CheckCircle2`).
