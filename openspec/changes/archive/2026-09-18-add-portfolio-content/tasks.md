## 1. Data Model & Types Alignment

- [x] 1.1 Update `PortfolioItem` in `src/types/index.ts` to include `featured?: boolean`, verifying TypeScript compiles without errors
- [x] 1.2 Audit and verify `src/data/portfolio.ts` against PRD.md Section 7.4–7.7 specifications, assigning `featured: true` to the Acumatica ERP item and ensuring 100% compliance with zero invented claims

## 2. Card Hierarchy & Expandable Details

- [x] 2.1 Refactor `src/components/ui/PortfolioCard.tsx` to display concise summaries by default and apply prominent visual prioritization (featured badge, accent highlight border) when `item.featured` is true
- [x] 2.2 Implement accessible expandable disclosure ("View Details" / "Hide Details") with `aria-expanded` and `aria-controls` in `src/components/ui/PortfolioCard.tsx` to reveal granular responsibilities on demand
- [x] 2.3 Refine `src/components/sections/Portfolio.tsx` to optimize layout hierarchy for the featured Acumatica card across mobile, tablet, and desktop breakpoints

## 3. Quality & Verification

- [x] 3.1 Run `npm run lint` and `npm run build` to verify clean compilation with zero TypeScript errors or lint warnings
