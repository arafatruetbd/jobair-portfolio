import { CheckCircle2, ChevronDown, ChevronUp, Star } from 'lucide-react'
import { useState } from 'react'
import type { PortfolioItem } from '../../types'
import { PlatformBadge } from './PlatformBadge'

interface PortfolioCardProps {
  item: PortfolioItem
  className?: string
}

export function PortfolioCard({ item, className = '' }: PortfolioCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const isFeatured = Boolean(item.featured)

  const cardBorderClass = isFeatured
    ? 'border-accent/40 bg-surface shadow-sm ring-1 ring-accent/20 hover:border-accent hover:shadow-md'
    : 'border-border-subtle bg-surface hover:border-accent/30 hover:shadow-sm'

  return (
    <article
      className={`group flex flex-col justify-between rounded-xl border p-6 transition-all duration-200 sm:p-8 ${cardBorderClass} ${className}`.trim()}
    >
      <div>
        {/* Card Header: Category & Priority Status */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">
            {item.category}
          </span>
          {isFeatured && (
            <span className="inline-flex items-center gap-1 rounded-full border border-accent/30 bg-accent-soft px-2.5 py-0.5 text-xs font-medium text-accent">
              <Star className="h-3 w-3 fill-accent text-accent" aria-hidden="true" />
              <span>Primary Specialization</span>
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="mt-3 text-xl font-bold tracking-tight text-text-primary sm:text-2xl">
          {item.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-text-secondary">{item.subtitle}</p>

        {/* Concise Card Summary */}
        <p className="mt-4 text-sm leading-relaxed text-text-secondary">{item.summary}</p>

        {/* Expandable Disclosure Toggle Button */}
        <div className="mt-2">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            aria-controls={`responsibilities-${item.id}`}
            className="inline-flex items-center gap-1.5 min-h-[44px] py-2 text-xs font-semibold text-accent hover:text-accent-hover active:text-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors motion-reduce:transition-none cursor-pointer"
          >
            <span>{isExpanded ? 'Hide Details' : 'View Details'}</span>
            {isExpanded ? (
              <ChevronUp className="h-3.5 w-3.5" aria-hidden="true" />
            ) : (
              <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Detailed Responsibilities (Revealed on Demand) */}
        {isExpanded && (
          <div
            id={`responsibilities-${item.id}`}
            className="mt-4 pt-4 border-t border-border-subtle"
          >
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
        )}
      </div>

      {/* Associated Platforms & Systems */}
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
