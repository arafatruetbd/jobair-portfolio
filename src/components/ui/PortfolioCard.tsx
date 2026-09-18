import { CheckCircle2 } from 'lucide-react'
import type { PortfolioItem } from '../../types'
import { PlatformBadge } from './PlatformBadge'

interface PortfolioCardProps {
  item: PortfolioItem
  className?: string
}

export function PortfolioCard({ item, className = '' }: PortfolioCardProps) {
  return (
    <article
      className={`group flex flex-col justify-between rounded-xl border border-border-subtle bg-surface p-6 transition-all duration-200 hover:border-accent/40 hover:shadow-sm sm:p-8 ${className}`.trim()}
    >
      <div>
        <div className="flex items-center justify-between gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">
            {item.category}
          </span>
        </div>

        <h3 className="mt-2 text-xl font-semibold tracking-tight text-text-primary sm:text-2xl">
          {item.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-text-secondary">{item.subtitle}</p>

        <p className="mt-4 text-sm leading-relaxed text-text-secondary">{item.summary}</p>

        <div className="mt-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-text-primary">
            Key Responsibilities
          </h4>
          <ul className="mt-3 space-y-2">
            {item.responsibilities.map((resp, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-text-secondary">
                <CheckCircle2
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 border-t border-border-subtle pt-6">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-text-primary mb-3">
          Platforms &amp; Systems
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {item.platforms.map((platform) => (
            <PlatformBadge
              key={platform}
              name={platform}
              category={item.category === 'ERP' ? 'erp' : 'ticketing'}
            />
          ))}
        </div>
      </div>
    </article>
  )
}
