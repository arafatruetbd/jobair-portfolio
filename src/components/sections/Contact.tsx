import { ArrowUpRight, Mail } from 'lucide-react'
import { siteConfig } from '../../data/site'
import { Container } from '../layout/Container'
import { Button } from '../ui/Button'
import { SectionHeading } from '../ui/SectionHeading'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-20 lg:py-24 bg-surface">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="GET IN TOUCH"
          title={siteConfig.contact.heading}
          description={siteConfig.contact.description}
          align="center"
        />

        <div className="mx-auto max-w-xl text-center space-y-8">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              asAnchor
              href={`mailto:${siteConfig.contact.email}`}
              variant="primary"
              className="gap-2"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              <span>Send an Email</span>
            </Button>
            <Button
              asAnchor
              href={siteConfig.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              className="gap-2"
            >
              <span>LinkedIn Profile</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              asAnchor
              href={siteConfig.contact.upworkUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              className="gap-2"
            >
              <span>Upwork Profile</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>

          <div className="rounded-lg border border-border-subtle bg-bg-primary p-6 text-xs text-text-secondary leading-relaxed">
            <p>
              Available for remote contracts, operational consultations, and long-term full-time
              or part-time engagements.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
