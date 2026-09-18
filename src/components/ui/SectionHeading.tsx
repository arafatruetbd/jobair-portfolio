import type { SectionHeadingProps } from '../../types'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const alignmentClasses = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`space-y-2 ${alignmentClasses} ${className}`.trim()}>
      {eyebrow && (
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary">
        {title}
      </h2>
      {description && (
        <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-text-secondary mt-2">
          {description}
        </p>
      )}
    </div>
  )
}
