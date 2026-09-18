import { portfolioItems } from '../../data/portfolio'
import { Container } from '../layout/Container'
import { PortfolioCard } from '../ui/PortfolioCard'
import { SectionHeading } from '../ui/SectionHeading'

export function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="MY WORK"
          title="Selected Portfolio"
          description="Real operational experience executing sales orders, managing multi-channel inventory, and tracking primary and secondary ticketing platforms."
        />

        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  )
}
