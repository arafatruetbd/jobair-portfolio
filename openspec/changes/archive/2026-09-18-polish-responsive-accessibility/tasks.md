## 1. Global Styles and Interactive Primitives

- [x] 1.1 Update `src/index.css` to add global `prefers-reduced-motion: reduce` resets (suppressing animation and transition durations and enforcing instant scroll) and verify styling with build check.
- [x] 1.2 Refine `src/components/ui/Button.tsx` to include tactile active state (`active:scale-[0.98] motion-reduce:transform-none`), consistent 2px focus-visible outline and offset, and minimum 44px tap target height, verifying classes in component markup.
- [x] 1.3 Update `src/components/ui/PortfolioCard.tsx` disclosure button ("View Details" / "Hide Details") with a minimum 44px touch target height (`min-h-[44px] inline-flex items-center`) and verify layout on mobile viewports.

## 2. Mobile Navigation and Header Enhancements

- [x] 2.1 Update `src/components/layout/Header.tsx` to ensure the hamburger toggle button satisfies minimum 44px touch targets (`min-h-[44px] min-w-[44px]`) and includes `aria-controls="mobile-nav-menu"`.
- [x] 2.2 Add backdrop overlay to `Header.tsx` that renders when `mobileMenuOpen` is true, closes the menu when tapped/clicked, and covers the screen below header (`fixed inset-0 bg-text-primary/20 backdrop-blur-xs z-40`).
- [x] 2.3 Add `useEffect` event listeners in `Header.tsx` to dismiss the mobile drawer on `Escape` key press and lock background scrolling via `document.body.style.overflow = 'hidden'` with reliable cleanup.
- [x] 2.4 Update mobile drawer navigation links in `Header.tsx` with minimum 44px touch heights (`min-h-[44px] flex items-center`) and verify clean closing on link click.

## 3. Hero, Contact, and Semantic Accessibility Polish

- [x] 3.1 Update `src/components/sections/Hero.tsx` avatar placeholder to include `role="img"` and `aria-label="Portrait avatar placeholder for Jobair"`, add `motion-reduce:animate-none` to the status pulse indicator, and scale title typography to `text-3xl sm:text-5xl lg:text-6xl`.
- [x] 3.2 Update `src/components/sections/Contact.tsx` and `src/components/layout/Footer.tsx` with descriptive `aria-label` attributes on email and external social links (`Send an Email to Jobair`, `Jobair on LinkedIn (opens in new tab)`, `Jobair on Upwork (opens in new tab)`).

## 4. Responsive Viewport Audit and Quality Verification

- [x] 4.1 Audit responsive layouts across targeted viewport widths (375px, 430px, 768px, 1024px, 1280px, 1440px) to verify zero horizontal overflow, no text clipping, and compliant spacing.
- [x] 4.2 Run code linting (`npm run lint`) and production build (`npm run build`) to verify zero TypeScript errors, lint warnings, or broken builds.
