## 1. Production Metadata and Accessibility Fixes

- [x] 1.1 Enrich `index.html` with canonical link (`https://arafatruetbd.github.io/jobair-portfolio/`), Open Graph metadata (`og:title`, `og:description`, `og:url`, `og:image`, `og:type`), and Twitter Card metadata (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`), and verify all tags exist in the HTML head.
- [x] 1.2 Update `src/components/ui/Button.tsx` to forward `{...props}` to the `<a>` element when `asAnchor` is true, and verify `aria-label` is rendered onto the DOM element.
- [x] 1.3 Add `id="tools"` and `scroll-mt-24` to `src/components/sections/Tools.tsx` and verify anchor tag positioning.

## 2. Production Audit Verification and Quality Gate

- [x] 2.1 Run ESLint via `npm run lint` and verify zero errors or warnings exist across the codebase.
- [x] 2.2 Run TypeScript compiler and production build via `npm run build` and verify clean build with asset outputs in `dist/`.
- [x] 2.3 Verify production bundle output in `dist/` confirms correct asset subpaths (`/jobair-portfolio/`), favicon inclusion, and valid `index.html` head tags.
