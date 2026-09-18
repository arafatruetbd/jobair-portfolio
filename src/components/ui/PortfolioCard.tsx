import { CheckCircle2, ChevronDown, ChevronUp, Star } from 'lucide-react'
import { useState } from 'react'
import type { PortfolioItem } from '../../types'
import { PlatformBadge } from './PlatformBadge'

interface PortfolioCardProps {
  item: PortfolioItem
  className?: string
}

export function PortfolioCard({ item, className = '' }: PortfolioCardProps) {
  const isFeatured = Boolean(item.featured)
  // For featured card, default to expanded so key workflows are immediately visible
  const [isExpanded, setIsExpanded] = useState(isFeatured)

  const cardBorderClass = isFeatured
    ? 'border-2 border-accent/40 bg-surface ring-1 ring-accent/15 hover:border-accent'
    : 'border border-border-subtle bg-surface hover:border-accent/40'

  return (
    <article
      className={`group flex flex-col justify-between rounded-xl p-6 sm:p-8 transition-all duration-200 shadow-xs ${cardBorderClass} ${className}`.trim()}
    >
      <div className="space-y-4">
        {/* Card Header: Category & Priority Status */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent">
            {item.category}
          </span>
          {isFeatured && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent-soft px-3 py-1 text-xs sm:text-sm font-semibold text-accent">
              <Star className="h-3.5 w-3.5 fill-accent text-accent" aria-hidden="true" />
              <span>Primary Specialization</span>
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <div>
          <h3
            className={`font-bold tracking-tight text-text-primary ${
              isFeatured ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-xl sm:text-2xl'
            }`}
          >
            {item.title}
          </h3>
          <p className="mt-1.5 text-sm sm:text-base font-medium text-text-secondary">
            {item.subtitle}
          </p>
        </div>

        {/* Card Summary */}
        <p className="text-sm sm:text-base leading-relaxed text-text-secondary">
          {item.summary}
        </p>

        {/* Interactive Disclosure Toggle Button */}
        <div className="pt-1">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-expanded={isExpanded}
            aria-controls={`responsibilities-${item.id}`}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-border-subtle bg-bg-primary text-xs sm:text-sm font-semibold text-text-primary hover:border-accent hover:text-accent active:bg-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent min-h-[44px] cursor-pointer transition-colors"
          >
            <span>{isExpanded ? 'Hide Key Responsibilities' : 'View Key Responsibilities'}</span>
            {isExpanded ? (
              <ChevronUp className="h-4 w-4 text-accent" aria-hidden="true" />
            ) : (
              <ChevronDown className="h-4 w-4 text-accent" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Detailed Responsibilities (Revealed on Demand) */}
        {isExpanded && (
          <div
            id={`responsibilities-${item.id}`}
            className="pt-4 border-t border-border-subtle space-y-3"
          >
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-text-primary">
              Key Responsibilities &amp; Workflows
            </h4>
            <ul
              className={
                isFeatured
                  ? 'grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5'
                  : 'space-y-2.5'
              }
            >
              {item.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm leading-relaxed text-text-secondary">
                  <CheckCircle2
                    className="mt-1 h-4 w-4 shrink-0 text-accent"
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
      <div className="mt-8 border-t border-border-subtle pt-6">
        <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-text-primary mb-3">
          Platforms &amp; Systems Handled
        </h4>
        <div className="flex flex-wrap gap-2">
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

