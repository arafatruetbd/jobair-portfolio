## Why

The Jobair portfolio website requires a robust, accessible, and structured technical foundation before any sections or content can be developed. Establishing the project structure, Tailwind CSS v4 styling architecture, design tokens from PRD.md and architecture.md, base typography, reusable layout primitives, and accessibility baselines now ensures all subsequent portfolio features remain consistent, maintainable, and compliant with design guidelines without introducing technical debt.

## What Changes

- **Vite & Tailwind Configuration**: Configure `@tailwindcss/vite` plugin in `vite.config.ts` and set the GitHub Pages repository base path (`/jobair-portfolio/`).
- **Global Design Tokens**: Configure standard CSS variables and Tailwind v4 theme tokens in `src/index.css` matching PRD.md Section 5 and architecture.md Section 11 (`#FFFFFF` background, `#F8FAF9` surface, `#0B1B35` primary text, `#5F6B7A` secondary text, `#16845B` accent green, `#116C4A` accent hover, `#E4E9E7` subtle border, `#EEF8F3` soft accent background).
- **Base Typography & Hierarchy**: Set up standard typography scale, Inter font configuration, and line-height tokens with maximum 3 weights (regular, medium, semibold).
- **Reusable Layout Primitives**: Create base layout building blocks in `src/components/layout/` and `src/components/ui/`:
  - `Container`: Centered container with max-width (1200px–1280px) and responsive horizontal padding.
  - `Button`: Primary and secondary/outline variants adhering to the 150–250ms transition rules and color specifications.
  - `SectionHeading`: Standardized section header with eyebrow label, heading text, and supporting copy.
- **Accessibility Foundations**: Establish WCAG AA baselines including visible focus rings (`:focus-visible`), conditional smooth scrolling respecting `prefers-reduced-motion`, semantic landmark wrappers, and a hidden skip-to-content link.
- **Foundational Types**: Add core domain and layout types in `src/types/index.ts`.
- **Boilerplate Cleanup**: Remove default starter template styles and assets (`src/App.css`, demo logos) in favor of the clean portfolio shell.

### Non-Goals
- Implementing full portfolio sections (Hero, Experience Stats, Portfolio Cards, About, Tools, Contact, Footer).
- Connecting mock or live data files.
- Adding routing, animations, or modal interactions.
- Inventing unverified credentials, metrics, or claims outside PRD.md.

## Capabilities

### New Capabilities
- `portfolio-foundation`: UI and styling foundation encompassing the Tailwind CSS v4 configuration, global design tokens, base typography, reusable layout primitives (`Container`, `Button`, `SectionHeading`), and WCAG AA accessibility baselines.

### Modified Capabilities
None (initial baseline setup for the repository).

## Impact

- **Build & Dev Tooling**: `vite.config.ts` will load `@tailwindcss/vite` and specify repository base path for GitHub Pages deployment.
- **Styles**: `src/index.css` replaces starter demo CSS with Tailwind v4 imports, theme token declarations, and accessibility reset rules.
- **Component Hierarchy**: Establishes `src/components/layout/`, `src/components/ui/`, and `src/types/` structure.
- **Dependencies**: Uses existing `tailwindcss`, `@tailwindcss/vite`, `react`, and `lucide-react` already in `package.json`.
