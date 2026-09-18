import type { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ContainerProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'section' | 'main' | 'header' | 'footer'
}

export type ButtonVariant = 'primary' | 'outline'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  children: ReactNode
  className?: string
  asAnchor?: boolean
  href?: string
  target?: string
  rel?: string
}

export interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export interface PortfolioItem {
  id: string
  category: 'ERP' | 'Ticket Operations' | string
  title: string
  subtitle: string
  summary: string
  platforms: string[]
  responsibilities: string[]
  featured?: boolean
}

export interface ExperienceStat {
  value: string
  label: string
}

export interface Platform {
  name: string
  category: 'erp' | 'ecommerce' | 'ticketing'
  logo?: string
}

export interface ContactLink {
  label: string
  href: string
}
