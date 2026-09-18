import { ArrowUpRight, Mail } from 'lucide-react'
import { siteConfig } from '../../data/site'
import { Container } from '../layout/Container'
import { Button } from '../ui/Button'
import { SectionHeading } from '../ui/SectionHeading'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-12 sm:py-16 lg:py-20 bg-surface">
      <Container className="space-y-8 sm:space-y-10">
        <SectionHeading
          eyebrow="GET IN TOUCH"
          title={siteConfig.contact.heading}
          description={siteConfig.contact.description}
          align="center"
        />

        <div className="mx-auto max-w-xl text-center space-y-6">
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
            <Button
              asAnchor
              href={`mailto:${siteConfig.contact.email}`}
              variant="primary"
              className="gap-2.5 px-6 py-3 min-h-[48px] text-base font-semibold shadow-xs"
              aria-label={`Send an Email to ${siteConfig.name} (${siteConfig.contact.email})`}
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
              <span>Send an Email</span>
            </Button>
            <Button
              asAnchor
              href={siteConfig.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              className="gap-2 px-5 py-3 min-h-[48px] text-sm sm:text-base font-medium"
              aria-label={`${siteConfig.name} on LinkedIn (opens in new tab)`}
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              asAnchor
              href={siteConfig.contact.upworkUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              className="gap-2 px-5 py-3 min-h-[48px] text-sm sm:text-base font-medium"
              aria-label={`${siteConfig.name} on Upwork (opens in new tab)`}
            >
              <span>Upwork</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>

          <p className="text-sm sm:text-base text-text-secondary leading-relaxed max-w-md mx-auto">
            Available for remote contracts, operational consultations, and dedicated long-term engagements.
          </p>
        </div>
      </Container>
    </section>
  )
}

