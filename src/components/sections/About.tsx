import { CheckCircle } from 'lucide-react'
import { Container } from '../layout/Container'
import { SectionHeading } from '../ui/SectionHeading'

const strengthAreas = [
  'Operational accuracy',
  'Attention to detail',
  'SOP compliance',
  'Multi-platform workflows',
  'Inventory monitoring',
  'Order management',
  'Pricing research',
  'Market analysis',
  'Operational reporting',
  'Long-term collaboration',
]

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-20 lg:py-24 bg-surface">
      <Container className="space-y-12">
        <SectionHeading
          eyebrow="BACKGROUND"
          title="About Me"
          description="Experienced, organized, reliable, and specialized in multi-channel ERP operations and live ticketing systems."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          <div className="space-y-6 lg:col-span-7">
            <p className="text-base leading-relaxed text-text-secondary sm:text-lg">
              I am an operations specialist with 4 years of hands-on experience in Acumatica ERP,
              multi-channel e-commerce order processing, and live-event ticket operations. My work
              focuses on accuracy, structured workflows, inventory and order management, market
              research, pricing, and reliable execution.
            </p>
            <p className="text-base leading-relaxed text-text-secondary">
              I have worked across e-commerce and ticketing platforms, following company-specific
              SOPs and operational processes to ensure accurate order handling, inventory
              monitoring, pricing decisions, and fulfillment coordination.
            </p>
            <div className="rounded-lg border border-border-subtle bg-bg-primary p-6">
              <h4 className="text-sm font-semibold text-text-primary">Operational Discipline</h4>
              <p className="mt-1 text-xs leading-relaxed text-text-secondary">
                Eliminating duplicates, verifying SKUs, monitoring inventory thresholds, and tracking
                real-time event demand to protect margin and prevent fulfillment delays.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-border-subtle bg-bg-primary p-6 sm:p-8 lg:col-span-5">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-primary">
              Core Competencies
            </h4>
            <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {strengthAreas.map((strength) => (
                <div key={strength} className="flex items-center gap-2 text-xs text-text-secondary">
                  <CheckCircle className="h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
                  <span>{strength}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
