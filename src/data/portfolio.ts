import type { PortfolioItem } from '../types'

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'acumatica',
    category: 'ERP',
    title: 'Acumatica ERP Specialist',
    subtitle: 'Multi-Channel E-commerce Order Processing & Order Management',
    summary:
      'Process and manage orders across multiple e-commerce channels using Acumatica ERP, including inventory checks, SKU verification, backorders, scheduling, fulfillment coordination, and duplicate-order prevention.',
    platforms: [
      'Acumatica',
      'Amazon',
      'Walmart',
      'Wayfair',
      'Faire',
      'Etsy',
      'WooCommerce',
      'Couronne Company',
      'MosaicBirdsCo',
      'Willow Commerce',
    ],
    responsibilities: [
      'Acumatica sales order processing & validation',
      'Multi-channel e-commerce order management across retail marketplaces',
      'Order import review, product verification & duplicate order prevention',
      'SKU verification, inventory availability checking & backorder handling',
      'Restock management, sales order confirmation & scheduling',
      'Fulfillment coordination, shipping tracking & order status management',
      'Strict compliance with company-specific operational SOPs',
    ],
  },
  {
    id: 'axs',
    category: 'Ticket Operations',
    title: 'AXS Ticket Operations',
    subtitle: 'Event Research, Pricing & Inventory Management',
    summary:
      'Research events, evaluate inventory, review sections and rows, manage ticket listings, monitor pricing, track market activity, and analyze sales performance on AXS.',
    platforms: ['AXS'],
    responsibilities: [
      'AXS live event research and primary/secondary inventory evaluation',
      'Detailed section, row, and seat-level market value analysis',
      'Spec ticket listing, pricing strategy, and competitive market comparisons',
      'Listing, unlisting, relisting, and batch price adjustments',
      'Broadcast and unbroadcast management across distribution channels',
      'Sold-out monitoring, price-drop alerts, and broker activity tracking',
      'Pending order monitoring, sales recording, and profit & loss (P&L) tracking',
    ],
  },
  {
    id: 'ticketmaster',
    category: 'Ticket Operations',
    title: 'Ticketmaster Ticket Operations',
    subtitle: 'Research, Pricing & Market Analysis',
    summary:
      'Analyze Ticketmaster inventory, evaluate sections and rows, compare market prices, monitor listings, identify pricing opportunities, and track ticket performance.',
    platforms: ['Ticketmaster'],
    responsibilities: [
      'Ticketmaster event demand research and ticket inventory analysis',
      'Comparative section and row market valuation',
      'Real-time market price comparison and pricing optimization',
      'Inventory monitoring, price-drop tracking, and sell-through rate analysis',
      'Order status monitoring and sales execution tracking',
      'Profit margin analysis and inventory performance reporting',
    ],
  },
  {
    id: 'multi-platform',
    category: 'Ticket Operations',
    title: 'Multi-Platform Ticket Operations',
    subtitle: 'AXS, Ticketmaster, StubHub, SeatGeek & More',
    summary:
      'Support ticket operations across multiple platforms through research, inventory monitoring, pricing, listing management, competitor tracking, order monitoring, and performance analysis.',
    platforms: [
      'AXS',
      'Ticketmaster',
      'StubHub',
      'SeatGeek',
      'Gametime',
      'TickPick',
      'TicketNetwork',
      'GoTickets',
    ],
    responsibilities: [
      'Cross-platform ticket research, event monitoring, and inventory management',
      'Multi-channel ticket listing, repricing, and inventory broadcast syncing',
      'Competitor and secondary market broker monitoring',
      'Sold-out tracking, rapid price movement alerts, and order verification',
      'Consolidated sales tracking, profit performance, and operational reporting',
    ],
  },
]
