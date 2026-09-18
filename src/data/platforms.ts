import type { Platform } from '../types'

export const erpPlatforms: Platform[] = [
  { name: 'Acumatica', category: 'erp' },
  { name: 'Amazon', category: 'ecommerce' },
  { name: 'Walmart', category: 'ecommerce' },
  { name: 'Wayfair', category: 'ecommerce' },
  { name: 'Faire', category: 'ecommerce' },
  { name: 'Etsy', category: 'ecommerce' },
  { name: 'WooCommerce', category: 'ecommerce' },
]

export const ticketingPlatforms: Platform[] = [
  { name: 'AXS', category: 'ticketing' },
  { name: 'Ticketmaster', category: 'ticketing' },
  { name: 'StubHub', category: 'ticketing' },
  { name: 'SeatGeek', category: 'ticketing' },
  { name: 'Gametime', category: 'ticketing' },
  { name: 'TickPick', category: 'ticketing' },
  { name: 'TicketNetwork', category: 'ticketing' },
  { name: 'GoTickets', category: 'ticketing' },
]

export const allPlatforms = [...erpPlatforms, ...ticketingPlatforms]
