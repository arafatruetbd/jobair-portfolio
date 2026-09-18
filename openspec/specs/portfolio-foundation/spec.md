# portfolio-foundation Specification

## Purpose

Provides the foundational design tokens, responsive layout primitives, typography system, and accessibility baselines for the Jobair portfolio website.

## Requirements

### Requirement: Global Design Tokens and Palette
The system SHALL define and expose core design tokens matching the project visual specification: `#FFFFFF` for primary canvas background, `#F8FAF9` for surface cards and alternating bands, `#0B1B35` for primary high-contrast text, `#5F6B7A` for secondary readable body text, `#16845B` for primary interactive accent, `#116C4A` for accent hover states, `#EEF8F3` for soft accent highlights, and `#E4E9E7` for subtle structural borders.

#### Scenario: Canvas and surface colors match specifications
- **WHEN** the application loads the base stylesheet
- **THEN** the root canvas background evaluates to `#FFFFFF` and surface utility classes map to `#F8FAF9`

#### Scenario: Text and accent color contrast compliance
- **WHEN** text is rendered using the primary text token `#0B1B35` or secondary text token `#5F6B7A` on a white background
- **THEN** contrast ratios MUST achieve at least 4.5:1 meeting WCAG AA standards for normal text

### Requirement: Responsive Container Layout Primitive
The system SHALL provide a reusable Container layout component that centers content (`mx-auto`), constrains maximum width to between 1200px and 1280px (`max-w-7xl`), and applies responsive horizontal padding across breakpoints: 16px (`px-4`) on mobile (<640px), 24px (`px-6`) on tablet (640px–1023px), and 32px (`px-8`) on desktop (>=1024px). The layout across all sections SHALL maintain zero horizontal overflow or clipping across all targeted viewports (375px, 430px, 768px, 1024px, 1280px, and 1440px).

#### Scenario: Mobile viewport horizontal padding
- **WHEN** the viewport width is below 640px (including 375px and 430px)
- **THEN** the Container component applies 16px of horizontal padding to prevent edge collision and avoids horizontal scrollbars

#### Scenario: Desktop maximum content width
- **WHEN** the viewport width exceeds 1280px (including 1440px)
- **THEN** the Container component constrains its content width to a maximum of 1280px centered in the viewport

### Requirement: Base Typography Scale and Restraint
The system SHALL apply a single primary sans-serif font family with a maximum of three font weights (regular 400, medium 500, semibold 600). Body copy MUST have a minimum font size of 16px (`text-base`) with comfortable line spacing. Section headings MUST use semibold dark navy (`#0B1B35`) text, and section eyebrow labels MUST use small uppercase tracked styling with the primary accent color.

#### Scenario: Minimum body text sizing
- **WHEN** paragraph or body copy is rendered
- **THEN** the computed font size is at least 16px and the line height is at least 1.5

#### Scenario: Eyebrow and heading presentation
- **WHEN** a section heading component is rendered
- **THEN** the eyebrow label is displayed in uppercase tracking with the accent token, and the heading text is rendered in dark navy semibold

### Requirement: Accessible Interactive Elements
Interactive controls, including Button and Link primitives, MUST provide clear visual states across all interaction modes (`:hover`, `:active`, and `:focus-visible`). Primary buttons SHALL display with an accent green background (`#16845B`) and white text, transitioning to `#116C4A` on hover with a duration between 150ms and 250ms, and offering tactile visual feedback when pressed (`:active`). All interactive controls MUST exhibit a visible 2px focus ring with a 2px offset when focused via keyboard navigation (`:focus-visible`). Interactive touch targets on buttons, toggles, and disclosure links SHALL maintain a minimum target height of 44px to satisfy WCAG touch target criteria. When the Button component renders as an anchor tag, it SHALL forward all additional HTML attributes, event handlers, and accessibility attributes (including `aria-label`) to the underlying anchor element.

#### Scenario: Keyboard focus indication
- **WHEN** a keyboard user navigates to an interactive button or link using the Tab key
- **THEN** a visible 2px focus outline with a 2px offset is displayed around the element

#### Scenario: Button hover transition timing
- **WHEN** a user hovers over a primary button
- **THEN** the background color transitions between 150ms and 250ms without abrupt snapping or heavy motion

#### Scenario: Button active pressed feedback
- **WHEN** a user presses or activates a Button component
- **THEN** the button displays immediate active visual feedback indicating press state

#### Scenario: Touch target height compliance
- **WHEN** rendered on touch devices or mobile viewports
- **THEN** interactive buttons, mobile navigation controls, and disclosure toggles provide at least 44px of touch target height

#### Scenario: Button anchor attribute and aria-label forwarding
- **WHEN** a Button component renders as an anchor link (`asAnchor` with `href`) with accessibility attributes such as `aria-label`
- **THEN** the rendered `<a>` element retains and exposes the forwarded `aria-label` and additional attributes in the DOM

### Requirement: Accessibility and Reduced Motion Baselines
The application root layout SHALL include a skip-to-content link positioned before navigation landmarks that becomes visible on keyboard focus. The system SHALL structure sections using semantic HTML landmarks (`<header>`, `<main>`, `<footer>`, `<section>`). When the user agent indicates reduced motion preferences (`prefers-reduced-motion: reduce`), smooth scrolling, continuous animations (including status badge pulsing), and CSS transitions MUST be suppressed or reduced to immediate state changes.

#### Scenario: Skip to main content link navigation
- **WHEN** a keyboard user presses Tab upon initial page load
- **THEN** the skip-to-content link becomes visible and focused, and pressing Enter moves focus directly to `<main id="main">`

#### Scenario: Reduced motion preference respected
- **WHEN** the user agent indicates `prefers-reduced-motion: reduce`
- **THEN** smooth scrolling is suppressed and instant jump scrolling is used across anchor links

#### Scenario: Animation suppression under reduced motion
- **WHEN** `prefers-reduced-motion: reduce` is active
- **THEN** status indicator pulse animations and transition transformations are suppressed

### Requirement: Production SEO and Social Metadata
The system's root HTML document (`index.html`) SHALL define canonical link references, Open Graph social metadata (`og:title`, `og:description`, `og:url`, `og:image`, `og:type`), Twitter Card social metadata (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`), and SVG favicon references matching production deployment URLs and site configuration.

#### Scenario: Canonical URL presence
- **WHEN** the HTML document head is inspected
- **THEN** a `<link rel="canonical">` element pointing to `https://arafatruetbd.github.io/jobair-portfolio/` is present

#### Scenario: Open Graph and Twitter card metadata
- **WHEN** a search crawler or social platform scrapes `index.html`
- **THEN** valid Open Graph tags (`og:title`, `og:description`, `og:url`, `og:image`, `og:type`) and Twitter card tags (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`) are present with accurate portfolio content

