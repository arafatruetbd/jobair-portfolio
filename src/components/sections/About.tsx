import { CheckCircle } from 'lucide-react'
import { Container } from '../layout/Container'
import { SectionHeading } from '../ui/SectionHeading'

const operationalCompetencies = [
  'Acumatica sales order processing',
  'Multi-channel e-commerce fulfillment',
  'SKU verification & inventory sync',
  'Duplicate order checking & SOP compliance',
  'Live-event ticket research & pricing',
  'Section, row & seat-level analysis',
  'Spec listing & batch price updates',
  'Sales, profit & margin analysis',
]

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-12 sm:py-16 lg:py-20 bg-surface">
      <Container className="space-y-10 sm:space-y-12">
        <SectionHeading
          eyebrow="BACKGROUND"
          title="About Me"
          description="Experienced, organized, reliable, and specialized in multi-channel ERP operations and live ticketing systems."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start lg:gap-12">
          {/* Narrative Column */}
          <div className="space-y-6 lg:col-span-7">
            <p className="text-base sm:text-lg leading-relaxed text-text-secondary">
              I am an operations specialist with 4 years of hands-on experience in Acumatica ERP,
              multi-channel e-commerce order processing, and live-event ticket operations. My work
              focuses on accuracy, structured workflows, inventory and order management, market
              research, pricing, and reliable execution.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-text-secondary">
              I have worked across e-commerce and ticketing platforms, following company-specific
              SOPs and operational processes to ensure accurate order handling, inventory
              monitoring, pricing decisions, and fulfillment coordination.
            </p>
            <div className="border-l-2 border-accent pl-4 py-1">
              <p className="text-sm sm:text-base font-medium text-text-primary leading-relaxed">
                Focused on operational discipline: eliminating duplicate orders, verifying SKUs,
                monitoring inventory thresholds, and tracking real-time event demand to protect margin.
              </p>
            </div>
          </div>

          {/* Operational Competencies Card */}
          <div className="rounded-xl border border-border-subtle bg-bg-primary p-6 sm:p-8 lg:col-span-5 shadow-xs space-y-4">
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-text-primary">
              Operational Competencies
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {operationalCompetencies.map((competency) => (
                <div key={competency} className="flex items-start gap-2.5 text-sm leading-relaxed text-text-secondary">
                  <CheckCircle className="h-4 w-4 shrink-0 text-accent mt-0.5" aria-hidden="true" />
                  <span>{competency}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

