import { portfolioItems } from '../../data/portfolio'
import { Container } from '../layout/Container'
import { PortfolioCard } from '../ui/PortfolioCard'
import { SectionHeading } from '../ui/SectionHeading'

export function Portfolio() {
  const featuredItem = portfolioItems.find((item) => item.featured)
  const regularItems = portfolioItems.filter((item) => !item.featured)

  return (
    <section id="portfolio" className="scroll-mt-24 py-12 sm:py-16 lg:py-20">
      <Container className="space-y-10 sm:space-y-12">
        <SectionHeading
          eyebrow="MY WORK"
          title="Selected Portfolio"
          description="Real operational experience executing sales orders, managing multi-channel inventory, and tracking primary and secondary ticketing platforms."
        />

        <div className="space-y-8">
          {/* Featured Primary Specialization: Acumatica ERP */}
          {featuredItem && (
            <div className="w-full">
              <PortfolioCard item={featuredItem} />
            </div>
          )}

          {/* Live Ticketing Operations Focus Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularItems.map((item, index) => (
              <PortfolioCard
                key={item.id}
                item={item}
                className={index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

