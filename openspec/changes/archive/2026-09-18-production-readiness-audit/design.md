## Context

See `proposal.md` for motivation. The site is a static single-page portfolio built with React 19, TypeScript, Vite, and Tailwind CSS, hosted on GitHub Pages at `https://arafatruetbd.github.io/jobair-portfolio/`.

## Goals / Non-Goals

**Goals:**
- Add complete Open Graph, Twitter Card, and canonical metadata to `index.html` meeting Section 15 of `docs/architecture.md`.
- Fix `src/components/ui/Button.tsx` to forward `{...props}` to the rendered `<a>` tag when `asAnchor` is true, ensuring accessibility attributes like `aria-label` reach the DOM.
- Add anchor identifier `id="tools"` and `scroll-mt-24` to `src/components/sections/Tools.tsx` for navigation consistency.
- Verify zero TypeScript compiler errors (`npm run build`), zero ESLint issues (`npm run lint`), correct asset bundling, and responsive layouts across target viewports.

**Non-Goals:**
- Introducing new features, sections, or styling overhauls.
- Adding runtime dynamic metadata libraries (e.g., React Helmet) when static `index.html` tags satisfy single-page static hosting.
- Modifying verified copy or factual claims.

## Decisions

### Decision 1: Static Metadata in `index.html`
- **Choice**: Embed canonical URL, Open Graph (`og:type`, `og:title`, `og:description`, `og:url`, `og:image`), and Twitter Card (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`) directly into the `<head>` of `index.html`.
- **Rationale**: Since this is a static single-page portfolio deployed to GitHub Pages without server-side rendering, social crawlers (LinkedIn, Twitter/X, Discord) inspect static HTML before executing JavaScript. Hardcoding production metadata into `index.html` guarantees instant crawler visibility.
- **Alternatives Considered**: Client-side metadata libraries (React Helmet). Rejected because client-side injection is ineffective for crawlers that do not execute JavaScript, and introduces unnecessary runtime overhead.

### Decision 2: Anchor Props Spreading in `Button.tsx`
- **Choice**: Forward `{...props}` onto the `<a>` element in `src/components/ui/Button.tsx`:
  ```tsx
  <a href={href} target={target} rel={rel} className={combinedClasses} {...props}>
    {children}
  </a>
  ```
- **Rationale**: Currently, when `Button` is used with `asAnchor`, passing `aria-label` (as done in `src/components/sections/Contact.tsx`) is silently dropped because `{...props}` is not applied to the `<a>` tag. Passing `{...props}` preserves all accessibility attributes and standard anchor properties.
- **Alternatives Considered**: Explicit `ariaLabel?: string` prop. Rejected in favor of standard React prop forwarding which natively supports all ARIA and event attributes.

### Decision 3: Standardize Section Anchors
- **Choice**: Add `id="tools"` and `scroll-mt-24` to the `<section>` element in `src/components/sections/Tools.tsx`.
- **Rationale**: While other primary sections (`#home`, `#portfolio`, `#about`, `#contact`) have corresponding anchor IDs and scroll margins, `Tools.tsx` lacked an ID, making direct anchor targeting impossible. Adding `id="tools"` aligns it with architecture standards.

## Risks / Trade-offs

- **[Risk]** Absolute URLs in metadata breaking across preview environments.
  → **Mitigation**: Use canonical production URL `https://arafatruetbd.github.io/jobair-portfolio/` and point social image cards to `https://arafatruetbd.github.io/jobair-portfolio/profile.jpg` to match production deployment.
- **[Risk]** Button anchor prop conflicts with TypeScript button attributes.
  → **Mitigation**: Verify TypeScript compilation (`npm run build`) and ESLint (`npm run lint`) to ensure types resolve cleanly without any lint or type warnings.
