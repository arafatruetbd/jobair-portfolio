import type { Platform } from '../../types'

interface PlatformBadgeProps extends Partial<Platform> {
  name: string
  className?: string
}

export function PlatformBadge({ name, category, className = '' }: PlatformBadgeProps) {
  const isAccent = category === 'erp'

  const colorClasses = isAccent
    ? 'bg-accent-soft text-accent border-accent/20 font-semibold'
    : 'bg-surface text-text-primary border-border-subtle'

  return (
    <span
      className={`inline-flex items-center rounded-md border px-3 py-1 text-xs font-medium transition-colors duration-150 ${colorClasses} ${className}`.trim()}
    >
      {name}
    </span>
  )
}
