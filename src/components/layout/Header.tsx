import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
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

  // Handle Escape key dismissal and background scroll locking
  useEffect(() => {
    if (!mobileMenuOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false)
      }
    }

    // Lock body scroll
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = originalOverflow
    }
  }, [mobileMenuOpen])

  return (
    <>
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
            <span className="hidden sm:inline-block border-l border-border-subtle pl-3 text-xs sm:text-sm text-text-secondary">
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
                  className={`text-sm sm:text-base font-medium transition-colors duration-150 relative py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
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
              className="hidden sm:inline-flex text-sm font-medium px-4 py-2 min-h-[40px]"
            >
              Contact Me
            </Button>

            {/* Mobile hamburger button */}
            <button
              type="button"
              className="inline-flex md:hidden items-center justify-center min-h-[44px] min-w-[44px] p-2.5 rounded-md text-text-secondary hover:text-text-primary hover:bg-surface active:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent cursor-pointer transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </Container>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-menu"
            className="md:hidden border-b border-border-subtle bg-bg-primary px-4 py-4 space-y-3 shadow-lg relative z-50 animate-in fade-in duration-150"
          >
            <nav className="flex flex-col space-y-1" aria-label="Mobile navigation">
              {siteConfig.navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '')
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={handleNavClick}
                    className={`min-h-[44px] flex items-center px-3.5 py-2.5 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-accent-soft text-accent font-semibold'
                        : 'text-text-secondary hover:bg-surface active:bg-surface hover:text-text-primary'
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
                className="w-full text-center py-2.5 min-h-[44px]"
              >
                Contact Me
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Backdrop overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-16 bg-text-primary/20 backdrop-blur-xs z-40 md:hidden animate-in fade-in duration-150"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
