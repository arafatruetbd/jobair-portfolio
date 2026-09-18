## Purpose

Provides the foundational design tokens, responsive layout primitives, typography system, and accessibility baselines for the Jobair portfolio website.

## ADDED Requirements

### Requirement: Global Design Tokens and Palette
The system SHALL define and expose core design tokens matching the project visual specification: `#FFFFFF` for primary canvas background, `#F8FAF9` for surface cards and alternating bands, `#0B1B35` for primary high-contrast text, `#5F6B7A` for secondary readable body text, `#16845B` for primary interactive accent, `#116C4A` for accent hover states, `#EEF8F3` for soft accent highlights, and `#E4E9E7` for subtle structural borders.

#### Scenario: Canvas and surface colors match specifications
- **WHEN** the application loads the base stylesheet
- **THEN** the root canvas background evaluates to `#FFFFFF` and surface utility classes map to `#F8FAF9`

#### Scenario: Text and accent color contrast compliance
- **WHEN** text is rendered using the primary text token `#0B1B35` or secondary text token `#5F6B7A` on a white background
- **THEN** contrast ratios MUST achieve at least 4.5:1 meeting WCAG AA standards for normal text

### Requirement: Responsive Container Layout Primitive
The system SHALL provide a reusable Container layout component that centers content (`mx-auto`), constrains maximum width to between 1200px and 1280px (`max-w-7xl`), and applies responsive horizontal padding across breakpoints: 16px (`px-4`) on mobile (<640px), 24px (`px-6`) on tablet (640px–1023px), and 32px (`px-8`) on desktop (>=1024px).

#### Scenario: Mobile viewport horizontal padding
- **WHEN** the viewport width is below 640px
- **THEN** the Container component applies 16px of horizontal padding to prevent edge collision

#### Scenario: Desktop maximum content width
- **WHEN** the viewport width exceeds 1280px
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
Interactive controls, including Button and Link primitives, MUST provide clear visual states. Primary buttons SHALL display with an accent green background (`#16845B`) and white text, transitioning to `#116C4A` on hover with a duration between 150ms and 250ms. All interactive controls MUST exhibit a visible 2px focus ring with an offset when focused via keyboard navigation (`:focus-visible`).

#### Scenario: Keyboard focus indication
- **WHEN** a keyboard user navigates to an interactive button or link using the Tab key
- **THEN** a visible 2px focus outline with a 2px offset is displayed around the element

#### Scenario: Button hover transition timing
- **WHEN** a user hovers over a primary button
- **THEN** the background color transitions between 150ms and 250ms without abrupt snapping or heavy motion

### Requirement: Accessibility and Reduced Motion Baselines
The application root layout SHALL include a skip-to-content link positioned before navigation landmarks that becomes visible on keyboard focus. The system SHALL structure sections using semantic HTML landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`). When the user enables reduced motion preferences (`prefers-reduced-motion: reduce`), smooth scrolling and transition effects MUST be disabled.

#### Scenario: Skip to main content link navigation
- **WHEN** a keyboard user presses Tab upon initial page load
- **THEN** the skip-to-content link becomes visible and focused, and pressing Enter moves focus directly to `<main id=\"main\">`

#### Scenario: Reduced motion preference respected
- **WHEN** the user agent indicates `prefers-reduced-motion: reduce`
- **THEN** smooth scrolling is suppressed and instant jump scrolling is used across anchor links
