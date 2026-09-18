## Why

Before final production deployment, a comprehensive production-readiness pass against `PRD.md`, `architecture.md`, and active OpenSpec specifications is required. While the core features, layout, and GitHub Pages deployment workflow are established, an audit identified small but critical gaps: missing Open Graph and Twitter Card social metadata and canonical links in `index.html`, attribute forwarding omissions in the `Button` anchor variant that silently drop `aria-label` attributes on assistive technologies, and a missing anchor ID on the Tools section. Resolving these issues ensures 100% adherence to product specifications, accessibility standards, and search engine readiness with zero console or lint errors.

## What Changes

- **Metadata & SEO**: Enrich `index.html` with canonical URL (`https://arafatruetbd.github.io/jobair-portfolio/`), Open Graph metadata (`og:title`, `og:description`, `og:url`, `og:image`, `og:type`), and Twitter Card metadata (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`).
- **Accessibility & Component Robustness**: Fix `src/components/ui/Button.tsx` when rendering as an anchor (`asAnchor`) so that all remaining HTML and accessibility props (such as `aria-label`, `aria-describedby`) are properly forwarded to the rendered `<a>` tag.
- **Section Anchors**: Ensure the Tools section in `src/components/sections/Tools.tsx` exposes `id="tools"` and `scroll-mt-24` for consistent internal page anchor navigation.
- **Audit Verification**: Validate that TypeScript check (`npm run build`), ESLint (`npm run lint`), responsive layouts, and asset paths run cleanly with zero warnings or errors.

## Capabilities

### Modified Capabilities

- `portfolio-foundation`: Update `Accessible Interactive Elements` to ensure button anchor variants forward accessibility attributes (`aria-label`), and add `Production SEO and Social Metadata` requiring Open Graph, Twitter card, and canonical link definitions.

## Impact

- `index.html`: Open Graph, Twitter Card, and canonical metadata added.
- `src/components/ui/Button.tsx`: Props spread forwarded to `<a>` element.
- `src/components/sections/Tools.tsx`: Added `id="tools"` and `scroll-mt-24`.
- No breaking API changes or new external dependencies introduced.
