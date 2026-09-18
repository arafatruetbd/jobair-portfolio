## 1. Tooling & Configuration

- [x] 1.1 Configure `@tailwindcss/vite` and GitHub Pages base path in `vite.config.ts`, verifying that the Vite config loads without syntax or module errors
- [x] 1.2 Clean up starter boilerplate files (`src/App.css`, demo assets in `src/assets/`) and remove obsolete imports, verifying the directory is clean

## 2. Design Tokens & Styling Architecture

- [x] 2.1 Set up `src/index.css` with Tailwind v4 `@import "tailwindcss";` and register the project design tokens via `@theme` (`--color-bg-primary`, `--color-surface`, `--color-text-primary`, `--color-text-secondary`, `--color-accent`, `--color-accent-hover`, `--color-accent-soft`, `--color-border-subtle`), verifying Vite compiles CSS without errors
- [x] 2.2 Configure global accessibility styles in `src/index.css` including `:focus-visible` outline rings, font family defaults, minimum 16px body typography, and `@media (prefers-reduced-motion: no-preference)` smooth scrolling rules, verifying rules apply in the stylesheet

## 3. Foundational Types & Layout Primitives

- [x] 3.1 Create `src/types/index.ts` with domain and component prop types (`ContainerProps`, `ButtonProps`, `SectionHeadingProps`, `PortfolioItem`, `ExperienceStat`, `Platform`), verifying TypeScript passes check with `tsc --noEmit`
- [x] 3.2 Implement `src/components/layout/Container.tsx` with `max-w-7xl`, `mx-auto`, and responsive horizontal gutters (`px-4 sm:px-6 lg:px-8`), verifying component props and children rendering
- [x] 3.3 Implement `src/components/ui/Button.tsx` supporting `primary` and `outline` variants with 150–250ms transition and visible focus ring, verifying variant classes and click handling
- [x] 3.4 Implement `src/components/ui/SectionHeading.tsx` supporting uppercase accent eyebrow, dark navy heading, and readable description, verifying rendered text and hierarchy

## 4. Root Application Shell & Verification

- [x] 4.1 Update `index.html` and `src/App.tsx` to set up SEO title/meta, accessible skip-to-content link, semantic landmarks (`<header>`, `<main id="main">`, `<footer>`), and a showcase of foundation primitives, verifying keyboard Tab focus reaches the skip link and main landmark
- [x] 4.2 Run `npm run lint` and `npm run build` to verify clean compilation with zero TypeScript or lint errors
