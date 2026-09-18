## Context

The initial homepage assembly established four portfolio cards in `src/components/sections/Portfolio.tsx` with data stored in `src/data/portfolio.ts`. However, all cards currently share uniform visual weight, and each card renders its complete list of operational responsibilities directly into the layout. PRD.md Section 7.4 and Section 8 explicitly mandate that Acumatica ERP receive the strongest visual priority as Jobair's primary specialization, card copy remain concise on the homepage, and detailed responsibilities be revealed on demand via expandable card interactions without introducing multi-page routing.

## Goals / Non-Goals

**Goals:**
- Give Acumatica ERP distinct visual prominence (featured badge, primary accent border, elevated styling) in `Portfolio.tsx` and `PortfolioCard.tsx`.
- Refactor `PortfolioCard` to display concise summaries and platform tags by default.
- Implement an accessible expandable disclosure ("View Details" / "Hide Details" with `aria-expanded`) to toggle granular operational responsibilities.
- Ensure all four portfolio areas in `src/data/portfolio.ts` strictly mirror PRD.md Sections 7.4–7.7 without invented claims, employers, or metrics.
- Keep the component architecture strictly decoupled between data (`src/data/portfolio.ts`) and presentation (`PortfolioCard.tsx`).

**Non-Goals:**
- Multi-page client-side routing (e.g. `/portfolio/:id`), adhering to single-page architecture constraints.
- Modal popups or overlays that obscure page context and complicate keyboard focus.
- Introducing external state management or animation libraries.

## Decisions

### 1. Visual Prioritization Mechanism for Acumatica ERP
- **Choice**: Mark the Acumatica item with `featured: true` in `src/data/portfolio.ts`. In `Portfolio.tsx` and `PortfolioCard.tsx`, render a "Primary Specialization" badge, high-contrast accent border highlight (`border-accent/40 hover:border-accent`), and distinct card presence that visually leads the portfolio grid.
- **Rationale**: Elevates Acumatica as the primary specialization per PRD Section 7.4 and user prompt while maintaining a clean, minimalist design language.
- **Alternatives Considered**: Inverting the card background to dark navy or using heavy gradients — rejected as it disrupts visual harmony with the rest of the canvas.

### 2. Accessible Expandable Disclosure for Detailed Responsibilities
- **Choice**: Add an inline disclosure button ("View Details" / "Hide Details" with `ChevronDown` / `ChevronUp` icons) to `PortfolioCard`. When activated, toggle a `<div id={`portfolio-details-${item.id}`}>` containing the complete responsibilities list with Lucide `CheckCircle2` checkmarks and `aria-expanded` attributes.
- **Rationale**: Keeps homepage cards scannable and concise on mobile and desktop while providing instant access to granular responsibilities. Fulfills PRD Section 7.4 ("Card copy should remain concise... Card CTA: 'View Details'") and Section 8 expandable card alternative.
- **Alternatives Considered**: Truncating text with CSS line-clamp without expansion — rejected because recruiters need access to full operational responsibilities.

### 3. Data Decoupling & Content Verification
- **Choice**: Store all 4 portfolio items, summaries, complete responsibilities, and platforms strictly in `src/data/portfolio.ts`. Update `PortfolioItem` interface in `src/types/index.ts` with optional `featured?: boolean`.
- **Rationale**: Keeps UI components decoupled from content as required by architecture.md Section 9 and enables easy content auditing.
- **Alternatives Considered**: Hardcoding copy in `Portfolio.tsx` or `PortfolioCard.tsx` — rejected to maintain architecture standards.

## Risks / Trade-offs

- **[Risk]** Grid alignment shift when one card is expanded.
  - **Mitigation**: Use independent flex column layouts on cards (`flex flex-col justify-between`) and smooth transitions so expanding a card does not produce jarring layout breaks on desktop.
- **[Risk]** Keyboard navigation when expanding/collapsing details.
  - **Mitigation**: Ensure the disclosure toggle is a native `<button>` element with appropriate `aria-expanded`, `aria-controls`, and visible focus rings (`focus-visible:outline-accent`).

## Migration Plan

1. Update `PortfolioItem` interface in `src/types/index.ts` to include `featured?: boolean`.
2. Update `src/data/portfolio.ts` ensuring exact content alignment with PRD.md Section 7.4–7.7 and setting `featured: true` on Acumatica.
3. Enhance `src/components/ui/PortfolioCard.tsx` to include featured visual treatment, concise initial view, and accessible expandable disclosure ("View Details" / "Hide Details").
4. Enhance `src/components/sections/Portfolio.tsx` to support the updated card hierarchy.
5. Verify clean compilation and zero lint/type errors with `npm run lint` and `npm run build`.
