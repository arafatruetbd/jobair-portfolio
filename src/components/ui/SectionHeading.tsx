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
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-semibold tracking-tight text-text-primary sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-text-secondary">
          {description}
        </p>
      )}
    </div>
  )
}
