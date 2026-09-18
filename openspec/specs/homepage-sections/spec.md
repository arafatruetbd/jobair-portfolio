# homepage-sections Specification

## Purpose

Defines the structure, behavioral requirements, and content presentation for all homepage sections of the Jobair portfolio website.

## Requirements

### Requirement: Header and Navigation Landmark
The system SHALL render a persistent or top navigation `<header>` containing the Jobair identity, the subtitle "Acumatica ERP & Ticket Operations Specialist", anchor links (`#home`, `#portfolio`, `#about`, `#contact`), a "Contact Me" CTA button scrolling to `#contact`, and a collapsible mobile navigation menu for screen widths below 768px.

#### Scenario: Desktop navigation links
- **WHEN** the user views the header on a desktop screen (>=768px)
- **THEN** all four section links and the "Contact Me" button are visible and accessible via keyboard navigation

#### Scenario: Mobile navigation toggle
- **WHEN** the user views the header on a mobile screen (<768px)
- **THEN** the full navigation links collapse into a menu button that toggles link visibility upon activation

### Requirement: Hero Presentation and Positioning
The system SHALL render a hero section identified by `#home` communicating Jobair's primary specialization. It MUST include an "Available for new opportunities" status badge, headline "Jobair", professional title "Acumatica ERP & Ticket Operations Specialist", supporting line "E-commerce Orders | AXS | Ticketmaster", a summary description of 4+ years experience, a primary CTA button "View My Work" navigating to `#portfolio`, a secondary CTA button "Get in Touch" navigating to `#contact`, and three professional qualities: "Reliable Operations", "Data-Driven Results", and "Long-Term Collaboration".

#### Scenario: Hero content and specialization rendering
- **WHEN** the homepage loads
- **THEN** the title "Jobair" and specialization "Acumatica ERP & Ticket Operations Specialist" are rendered in high-contrast primary text

#### Scenario: Hero CTA navigation
- **WHEN** a user clicks "View My Work"
- **THEN** the viewport scrolls to the `#portfolio` anchor section

### Requirement: Experience Metrics Display
The system SHALL display four verified metrics below the hero section: "4+ Years Experience", "10+ Platforms Worked", "1000+ Orders & Tickets Handled", and "Reliable Long-Term Collaboration", arranged in a responsive grid (4 columns on desktop, 2 columns on tablet, 1 column or 2 columns on mobile).

#### Scenario: Metrics rendering and accuracy
- **WHEN** the metrics section is viewed
- **THEN** all four verified metric cards display their respective numeric values and descriptive labels

### Requirement: Selected Portfolio Cards
The system SHALL render four distinct portfolio cards in the `#portfolio` section representing Jobair's core experience in prioritized order:
1. Acumatica ERP Specialist (Multi-Channel E-commerce Order Processing & Order Management)
2. AXS Ticket Operations (Event Research, Pricing & Inventory Management)
3. Ticketmaster Ticket Operations (Research, Pricing & Market Analysis)
4. Multi-Platform Ticket Operations (AXS, Ticketmaster, StubHub, SeatGeek & More)
Each card MUST display the category, title, subtitle, summary, key responsibilities list, and platform tags.

#### Scenario: Primary Acumatica portfolio card presentation
- **WHEN** the portfolio section is viewed
- **THEN** Acumatica ERP Specialist is rendered as the first portfolio card and includes multi-channel e-commerce responsibilities

#### Scenario: Ticketing portfolio cards presentation
- **WHEN** the portfolio section is viewed
- **THEN** separate cards for AXS, Ticketmaster, and Multi-Platform operations are rendered with their respective platform badges

### Requirement: About Section and Operational Strengths
The system SHALL render an About section identified by `#about` describing Jobair's operational background, focus on accuracy, multi-platform workflows, and SOP compliance.

#### Scenario: About copy and strength areas
- **WHEN** the user navigates to `#about`
- **THEN** the professional narrative and core operational strengths (attention to detail, inventory monitoring, SOP compliance) are legibly displayed

### Requirement: Categorized Tools and Platforms
The system SHALL render a Tools and Platforms section grouping supported tools into "ERP & E-commerce" (Acumatica, Amazon, Walmart, Wayfair, Faire, Etsy, WooCommerce) and "Ticketing" (AXS, Ticketmaster, StubHub, SeatGeek, Gametime, TickPick, TicketNetwork, GoTickets) as clean badges. Platform logos and badges MUST NOT clutter the hero section.

#### Scenario: Tools section categorization
- **WHEN** the tools section is rendered
- **THEN** platforms are organized into ERP/E-commerce and Ticketing groups with distinct badges

### Requirement: Contact Section and Footer Landmark
The system SHALL render a Contact section identified by `#contact` featuring "Let's Work Together" messaging, availability statement, and verified contact links (Email, LinkedIn, Upwork). The page MUST conclude with a semantic `<footer>` landmark containing copyright, navigation links, and platform references.

#### Scenario: Contact section links
- **WHEN** a user reaches the `#contact` section
- **THEN** clickable contact channels for Email, LinkedIn, and Upwork are accessible and open appropriately

#### Scenario: Footer landmark rendering
- **WHEN** the footer is rendered
- **THEN** copyright text and anchored navigation links are present within `<footer>`
