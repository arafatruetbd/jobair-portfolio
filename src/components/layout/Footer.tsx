import { siteConfig } from '../../data/site'
import { Container } from './Container'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border-subtle bg-surface/40 py-12 text-sm text-text-secondary">
      <Container className="space-y-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Left: Brand info */}
          <div className="space-y-1">
            <h3 className="text-base font-bold text-text-primary">{siteConfig.name}</h3>
            <p className="text-xs text-text-secondary">{siteConfig.role}</p>
          </div>

          {/* Center: Quick navigation */}
          <nav className="flex flex-wrap gap-6 text-xs font-medium" aria-label="Footer navigation">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Contact & profile links */}
          <div className="flex flex-wrap gap-6 text-xs font-medium">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Email
            </a>
            <a
              href={siteConfig.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.contact.upworkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Upwork
            </a>
          </div>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t border-border-subtle pt-6 text-xs text-text-secondary gap-2">
          <p>&copy; {currentYear} {siteConfig.name}. All rights reserved.</p>
          <p className="text-xs">
            Acumatica, AXS, Ticketmaster, and other trademarks belong to their respective owners.
          </p>
        </div>
      </Container>
    </footer>
  )
}
