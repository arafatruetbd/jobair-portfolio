import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { siteConfig } from '../../data/site'
import { useActiveSection } from '../../hooks/useActiveSection'
import { Button } from '../ui/Button'
import { Container } from './Container'

const sectionIds = ['home', 'portfolio', 'about', 'contact']

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const activeSection = useActiveSection(sectionIds, 'home')

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle bg-bg-primary/95 backdrop-blur-sm transition-all duration-200">
      <Container className="flex h-16 items-center justify-between">
        {/* Brand identity */}
        <a
          href="#home"
          className="flex flex-col sm:flex-row sm:items-center sm:gap-3 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <span className="text-lg font-bold tracking-tight text-text-primary group-hover:text-accent transition-colors duration-150">
            {siteConfig.name}
          </span>
          <span className="hidden sm:inline-block border-l border-border-subtle pl-3 text-xs text-text-secondary">
            {siteConfig.role}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main desktop navigation"
        >
          {siteConfig.navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '')
            return (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-150 relative py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  isActive
                    ? 'text-accent font-semibold'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute inset-x-0 -bottom-1 h-0.5 bg-accent rounded-full"
                    aria-hidden="true"
                  />
                )}
              </a>
            )
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Button
            asAnchor
            href="#contact"
            variant="primary"
            className="hidden sm:inline-flex text-xs px-4 py-2"
          >
            Contact Me
          </Button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="inline-flex md:hidden p-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border-subtle bg-bg-primary px-4 py-4 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2" aria-label="Mobile navigation">
            {siteConfig.navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '')
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleNavClick}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-accent-soft text-accent font-semibold'
                      : 'text-text-secondary hover:bg-surface hover:text-text-primary'
                  }`}
                >
                  {link.label}
                </a>
              )
            })}
          </nav>
          <div className="pt-2 border-t border-border-subtle">
            <Button
              asAnchor
              href="#contact"
              onClick={handleNavClick}
              variant="primary"
              className="w-full text-center py-2"
            >
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
