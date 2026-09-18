## MODIFIED Requirements

### Requirement: Selected Portfolio Cards
The system SHALL render four distinct portfolio cards in the `#portfolio` section representing Jobair's core experience in prioritized order:
1. Acumatica ERP Specialist (Multi-Channel E-commerce Order Processing & Order Management)
2. AXS Ticket Operations (Event Research, Pricing & Inventory Management)
3. Ticketmaster Ticket Operations (Research, Pricing & Market Analysis)
4. Multi-Platform Ticket Operations (AXS, Ticketmaster, StubHub, SeatGeek & More)
The Acumatica ERP card MUST possess the strongest visual priority using prominent styling, primary positioning, and distinct accent border treatment. Each card MUST display concise summary copy, category badge, and associated platform tags by default on the homepage. Granular operational responsibilities from PRD.md MUST be housed inside an accessible expandable disclosure ("View Details" / "Hide Details") per card, maintaining a compact initial layout while providing full operational details upon user interaction.

#### Scenario: Primary Acumatica portfolio card presentation
- **WHEN** the portfolio section is viewed
- **THEN** Acumatica ERP Specialist is rendered as the first portfolio card with the strongest visual priority distinguishing it from the ticketing cards

#### Scenario: Ticketing portfolio cards presentation
- **WHEN** the portfolio section is viewed
- **THEN** separate cards for AXS, Ticketmaster, and Multi-Platform operations are rendered with their respective platform badges and concise summaries

#### Scenario: Expandable details toggle for granular responsibilities
- **WHEN** a user activates the "View Details" control on any portfolio card
- **THEN** the card expands to reveal the full list of operational responsibilities documented in PRD.md with updated aria-expanded state
