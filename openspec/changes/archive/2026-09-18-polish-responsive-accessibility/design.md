## Context

The portfolio codebase comprises a Vite + React + TypeScript + Tailwind CSS application with all primary sections and PRD content in place. See `proposal.md` for motivation and background. To bring the implementation into alignment with strict responsiveness (across viewports 375px, 430px, 768px, 1024px, 1280px, 1440px) and WCAG AA accessibility standards, this design addresses mobile navigation enhancements, focus and active states, touch targets, reduced-motion behavior, and semantic markup without introducing external dependencies.

## Goals / Non-Goals

**Goals:**
- Provide zero horizontal overflow, seamless line wrapping, and comfortable padding across 375px (iPhone SE), 430px (iPhone 16 Pro Max), 768px (iPad Mini), 1024px (iPad Pro), 1280px (Desktop), and 1440px (Wide Desktop).
- Implement accessible mobile drawer controls in `Header.tsx`: dismissible backdrop overlay, `Escape` key dismissal, body scroll locking during open state, and minimum 44px touch targets.
- Standardize interactive states on `Button.tsx` and interactive links: active feedback (`active:scale-[0.98]` with `motion-reduce:transform-none`), hover color transitions, and consistent 2px focus-visible rings with 2px offset.
- Ensure minimum 44px tap targets for mobile nav links, menu hamburger toggle, and card disclosure buttons (`PortfolioCard.tsx`).
- Enforce full `prefers-reduced-motion: reduce` compliance across CSS animations (status badge pulse) and transitions.
- Enhance semantic HTML and assistive descriptions (`role="img"` and `aria-label` on hero avatar, descriptive `aria-label`s on external links).
- Verify WCAG AA color contrast (>= 4.5:1 for normal copy, >= 3:1 for large text/badges).

**Non-Goals:**
- Adding third-party UI libraries (e.g., Radix, Headless UI, Framer Motion).
- Redesigning visual themes, color palette, or typography families.
- Introducing multi-page routing or backend endpoints.

## Decisions

### 1. Lightweight React Hooks for Mobile Drawer Navigation
- **Choice**: Use standard React `useEffect` hooks within `Header.tsx` to handle `Escape` key down events and toggle `document.body.style.overflow = 'hidden'`. Include an accessible semi-transparent backdrop (`fixed inset-0 bg-text-primary/20 backdrop-blur-xs z-40`) that closes the menu on click/tap.
- **Alternative considered**: Installing Headless UI or Radix Dialog.
- **Rationale**: Keeps bundle size minimal, avoids extra dependencies, and fully satisfies mobile drawer accessibility requirements with native browser primitives and clean cleanup effects.

### 2. Global and Local Reduced-Motion Architecture
- **Choice**: Implement a two-layer reduced motion architecture:
  1. Global safety net in `src/index.css`: under `@media (prefers-reduced-motion: reduce)`, set `animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important;` for all elements.
  2. Component-level utility classes: add `motion-reduce:animate-none` to the hero status indicator pulse and `motion-reduce:transform-none` to button active scales.
- **Alternative considered**: Removing animations entirely.
- **Rationale**: Preserves subtle visual polish for users who prefer motion while guaranteeing strict compliance for users with vestibular or motion sensitivity.

### 3. Touch Target Sizing via Direct Layout Utilities
- **Choice**: Apply `min-h-[44px]` and `min-w-[44px]` directly to interactive items (mobile hamburger button, drawer navigation links, and "View Details" / "Hide Details" toggles on `PortfolioCard`).
- **Alternative considered**: Invisible absolute overlay pseudo-elements (`::after`).
- **Rationale**: Explicit flex/inline-flex heights prevent collision and accidental overlapping clicks while remaining simple to inspect and verify.

### 4. Responsive Headline Scaling for 375px/430px Viewports
- **Choice**: Scale the Hero title from `text-4xl` to `text-3xl sm:text-5xl lg:text-6xl`.
- **Alternative considered**: CSS clamp function.
- **Rationale**: Tailwind responsive prefixes (`text-3xl sm:text-5xl lg:text-6xl`) align with the existing design token architecture and cleanly prevent text overflow or unappealing line wraps on 375px screens.

## Risks / Trade-offs

- **[Risk]** Body scroll lock (`overflow: hidden`) may leave the page unscrollable if unmounted unexpectedly.
  - **Mitigation**: Return a cleanup function in `useEffect` that reliably restores `document.body.style.overflow = ''` upon component unmount or drawer closure.
- **[Risk]** Active scale feedback (`active:scale-[0.98]`) might trigger unexpected shifts on touch devices.
  - **Mitigation**: Constrain scale to subtle `0.98` and suppress transformations when `motion-reduce` is detected.
- **[Risk]** Backdrop overlay could inadvertently trap desktop mouse events if rendered unconditionally.
  - **Mitigation**: Only render backdrop conditionally when `mobileMenuOpen` is true, and keep backdrop scoped to mobile viewports (`md:hidden`).
