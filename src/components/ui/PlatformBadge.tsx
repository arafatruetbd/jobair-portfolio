import type { Platform } from '../../types'

interface PlatformBadgeProps extends Partial<Platform> {
  name: string
  className?: string
}

export function PlatformBadge({ name, category, className = '' }: PlatformBadgeProps) {
  const isAccent = category === 'erp'

  const colorClasses = isAccent
    ? 'bg-accent-soft text-accent border-accent/30 font-semibold'
    : 'bg-bg-primary text-text-primary border-border-subtle'

  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-1 text-xs sm:text-sm font-medium transition-colors duration-150 ${colorClasses} ${className}`.trim()}
    >
      {name}
    </span>
  )
}

