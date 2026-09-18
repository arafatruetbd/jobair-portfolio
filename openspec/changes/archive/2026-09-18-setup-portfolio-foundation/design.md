## Context

The repository contains a default Vite + React + TypeScript starter with `tailwindcss@^4.3.3` and `@tailwindcss/vite@^4.3.3` installed in `package.json`. However, the Tailwind plugin is not configured in `vite.config.ts`, `src/index.css` retains Vite demo styles, and no layout primitives or design tokens have been established. See `proposal.md` for motivation and scope.

## Goals / Non-Goals

**Goals:**
- Configure Tailwind CSS v4 seamlessly with Vite and set the deployment base path for GitHub Pages.
- Establish the color palette, typography hierarchy, and spacing tokens in `src/index.css` matching PRD.md Section 5 and architecture.md Section 11.
- Build lightweight, reusable primitives: `Container` (max-width 1200px–1280px with responsive gutters), `Button` (primary and outline variants with 150–250ms transitions), and `SectionHeading`.
- Provide baseline accessibility guarantees: keyboard focus indicator (`:focus-visible`), `prefers-reduced-motion` handling, semantic HTML landmarks, and a skip-to-content mechanism.
- Establish baseline domain and UI type definitions in `src/types/index.ts`.
- Clean up starter assets and demo CSS to maintain an uncluttered foundation.

**Non-Goals:**
- Assembling hero, portfolio, about, tools, contact, or footer sections.
- Populating data records in `src/data/`.
- Introducing state management libraries, client-side routing, or animation packages.

## Decisions

### 1. Tailwind v4 Configuration via `@tailwindcss/vite`
- **Choice**: Integrate `@tailwindcss/vite` directly inside `vite.config.ts` and import Tailwind via `@import "tailwindcss";` in `src/index.css`.
- **Rationale**: Tailwind CSS v4 eliminates the need for `postcss.config.js` and `tailwind.config.js`. It utilizes Lightning CSS under the hood for faster build times and zero configuration overhead.
- **Alternatives Considered**: Legacy Tailwind v3 PostCSS setup — rejected as Tailwind v4 is already pinned in `package.json`.

### 2. Design Token Declaration via `@theme` in `src/index.css`
- **Choice**: Register custom color tokens and font definitions inside the `@theme` directive in `src/index.css`:
  - `--color-bg-primary: #ffffff`
  - `--color-surface: #f8faf9`
  - `--color-text-primary: #0b1b35`
  - `--color-text-secondary: #5f6b7a`
  - `--color-accent: #16845b`
  - `--color-accent-hover: #116c4a`
  - `--color-accent-soft: #eef8f3`
  - `--color-border-subtle: #e4e9e7`
- **Rationale**: Tailwind v4 `@theme` generates first-class utility classes (e.g. `bg-surface`, `text-text-primary`, `border-border-subtle`, `bg-accent`) while preserving CSS custom properties for direct usage.
- **Alternatives Considered**: Defining raw hex classes in individual components — rejected because it risks visual divergence across sections.

### 3. Layout and UI Primitives Structure
- **Choice**: Place foundational layout components in `src/components/layout/` (`Container.tsx`) and atomic UI components in `src/components/ui/` (`Button.tsx`, `SectionHeading.tsx`).
- **Rationale**: Directly aligns with repository structure specified in architecture.md Section 6.
- **Alternatives Considered**: Placing all components in a flat `src/components/` directory — rejected to maintain clean architectural separation between layout wrappers and UI widgets.

### 4. Accessibility and Reduced Motion Strategy
- **Choice**: Apply global focus styles using `:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }` and wrap smooth scrolling inside `@media (prefers-reduced-motion: no-preference)`. Provide an accessible skip-to-content link targeting `<main id="main">`.
- **Rationale**: Fulfills PRD Section 15 and architecture.md Section 16 requirements for WCAG AA compliance and keyboard accessibility without extra libraries.
- **Alternatives Considered**: Leaving focus rings to browser defaults — rejected because default browser outlines can clash or fail contrast on colored surfaces.

## Risks / Trade-offs

- **[Risk]** Tailwind v4 CSS utility naming differs slightly from v3 custom config.
  - **Mitigation**: Verify generated classes (`bg-surface`, `text-text-primary`, `bg-accent`, `border-border-subtle`) in local build.
- **[Risk]** GitHub Pages deployment path breaks relative asset loading if base path is omitted.
  - **Mitigation**: Configure `base: "/jobair-portfolio/"` in `vite.config.ts` per architecture.md Section 21.
- **[Risk]** Default Vite template styles in `src/App.css` conflicting with Tailwind v4 resets.
  - **Mitigation**: Remove `App.css` and its import from `App.tsx` during baseline cleanup.

## Migration Plan

1. Clean up unused starter files (`src/App.css`, `src/assets/hero.png`, `src/assets/react.svg`, `public/icons.svg`).
2. Update `vite.config.ts` with `@tailwindcss/vite` and `base`.
3. Update `src/index.css` with `@import "tailwindcss";`, `@theme` token definitions, and accessibility resets.
4. Add foundational types to `src/types/index.ts`.
5. Implement `Container.tsx`, `Button.tsx`, and `SectionHeading.tsx`.
6. Update `src/App.tsx` to render a minimal shell with the skip link, landmarks, and foundation test elements.
7. Run `npm run lint` and `npm run build` to verify clean compilation.
