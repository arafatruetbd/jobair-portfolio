## MODIFIED Requirements

### Requirement: Header and Navigation Landmark
The system SHALL render a persistent or top navigation `<header>` containing the Jobair identity, the subtitle "Acumatica ERP & Ticket Operations Specialist", anchor links (`#home`, `#portfolio`, `#about`, `#contact`), a "Contact Me" CTA button scrolling to `#contact`, and an accessible collapsible mobile navigation menu for screen widths below 768px. The mobile drawer menu SHALL feature a dismissible backdrop overlay, keyboard dismissal upon pressing the `Escape` key, automatic background scroll prevention when open, and minimum 44px touch targets on the menu toggle and navigation links.

#### Scenario: Desktop navigation links
- **WHEN** the user views the header on a desktop screen (>=768px)
- **THEN** all four section links and the "Contact Me" button are visible and accessible via keyboard navigation

#### Scenario: Mobile navigation toggle
- **WHEN** the user views the header on a mobile screen (<768px)
- **THEN** the full navigation links collapse into a menu button that toggles link visibility upon activation with `aria-expanded` and `aria-controls` properly set

#### Scenario: Mobile navigation Escape key dismissal
- **WHEN** the mobile navigation drawer is open and the user presses the `Escape` key
- **THEN** the drawer closes and focus returns to the navigation toggle button

#### Scenario: Mobile navigation backdrop dismissal
- **WHEN** the mobile navigation drawer is open and the user clicks or taps outside the drawer on the backdrop
- **THEN** the mobile navigation drawer closes

### Requirement: Hero Presentation and Positioning
The system SHALL render a hero section identified by `#home` communicating Jobair's primary specialization. It MUST include an "Available for new opportunities" status badge with reduced-motion safe animation, headline "Jobair" with responsive typography scaling (`text-3xl sm:text-5xl lg:text-6xl`) to avoid clipping on 375px/430px viewports, professional title "Acumatica ERP & Ticket Operations Specialist", supporting line "E-commerce Orders | AXS | Ticketmaster", a summary description of 4+ years experience, a primary CTA button "View My Work" navigating to `#portfolio`, a secondary CTA button "Get in Touch" navigating to `#contact`, three professional qualities: "Reliable Operations", "Data-Driven Results", and "Long-Term Collaboration", and an accessible avatar placeholder with semantic `role="img"` and descriptive `aria-label`.

#### Scenario: Hero content and specialization rendering
- **WHEN** the homepage loads
- **THEN** the title "Jobair" and specialization "Acumatica ERP & Ticket Operations Specialist" are rendered in high-contrast primary text with responsive sizing that prevents line clipping on narrow viewports

#### Scenario: Hero CTA navigation
- **WHEN** a user clicks "View My Work"
- **THEN** the viewport scrolls to the `#portfolio` anchor section

#### Scenario: Hero avatar accessible labeling
- **WHEN** a screen reader inspects the hero avatar element
- **THEN** it encounters `role="img"` with an accessible description distinguishing the visual portrait placeholder

### Requirement: Contact Section and Footer Landmark
The system SHALL render a Contact section identified by `#contact` featuring "Let's Work Together" messaging, availability statement, and verified contact links (Email, LinkedIn, Upwork) equipped with descriptive `aria-label` attributes distinguishing external link destinations. The page MUST conclude with a semantic `<footer>` landmark containing copyright, navigation links, and platform references, with interactive touch targets meeting accessibility height baselines.

#### Scenario: Contact section links
- **WHEN** a user reaches the `#contact` section
- **THEN** clickable contact channels for Email, LinkedIn, and Upwork are accessible, open appropriately, and provide descriptive accessible labels for assistive technologies

#### Scenario: Footer landmark rendering
- **WHEN** the footer is rendered
- **THEN** copyright text and anchored navigation links are present within `<footer>` with compliant contrast and spacing
