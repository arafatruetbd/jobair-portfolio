import { erpPlatforms, ticketingPlatforms } from '../../data/platforms'
import { Container } from '../layout/Container'
import { PlatformBadge } from '../ui/PlatformBadge'
import { SectionHeading } from '../ui/SectionHeading'

export function Tools() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 border-b border-border-subtle">
      <Container className="space-y-10 sm:space-y-12">
        <SectionHeading
          eyebrow="ECOSYSTEM"
          title="Tools &amp; Platforms"
          description="Operational familiarity with multi-channel ERP systems, marketplaces, and primary/secondary ticketing exchanges."
        />

        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
          {/* ERP & E-commerce */}
          <div className="rounded-xl border border-border-subtle bg-surface p-6 sm:p-8 space-y-4 shadow-xs hover:border-accent/40 transition-colors">
            <h3 className="text-base sm:text-lg font-bold tracking-tight text-text-primary">
              ERP &amp; E-commerce Marketplaces
            </h3>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Order processing, inventory verification, backorders, and multi-channel fulfillment.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {erpPlatforms.map((platform) => (
                <PlatformBadge
                  key={platform.name}
                  name={platform.name}
                  category={platform.category}
                />
              ))}
            </div>
          </div>

          {/* Ticketing Platforms */}
          <div className="rounded-xl border border-border-subtle bg-surface p-6 sm:p-8 space-y-4 shadow-xs hover:border-accent/40 transition-colors">
            <h3 className="text-base sm:text-lg font-bold tracking-tight text-text-primary">
              Live-Event Ticketing Exchanges
            </h3>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Event monitoring, section/row research, inventory pricing, and multi-platform sales tracking.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {ticketingPlatforms.map((platform) => (
                <PlatformBadge
                  key={platform.name}
                  name={platform.name}
                  category={platform.category}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

