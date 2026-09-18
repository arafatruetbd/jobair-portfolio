## MODIFIED Requirements

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

## ADDED Requirements

### Requirement: Production SEO and Social Metadata
The system's root HTML document (`index.html`) SHALL define canonical link references, Open Graph social metadata (`og:title`, `og:description`, `og:url`, `og:image`, `og:type`), Twitter Card social metadata (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`), and SVG favicon references matching production deployment URLs and site configuration.

#### Scenario: Canonical URL presence
- **WHEN** the HTML document head is inspected
- **THEN** a `<link rel="canonical">` element pointing to `https://arafatruetbd.github.io/jobair-portfolio/` is present

#### Scenario: Open Graph and Twitter card metadata
- **WHEN** a search crawler or social platform scrapes `index.html`
- **THEN** valid Open Graph tags (`og:title`, `og:description`, `og:url`, `og:image`, `og:type`) and Twitter card tags (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`) are present with accurate portfolio content
