import type { ExperienceStat } from '../../types'

interface StatCardProps extends ExperienceStat {
  description?: string
  className?: string
}

export function StatCard({ value, label, description, className = '' }: StatCardProps) {
  return (
    <div
      className={`rounded-lg border border-border-subtle bg-surface p-6 transition-all duration-200 hover:border-accent/30 ${className}`.trim()}
    >
      <p className="text-3xl font-bold tracking-tight text-accent sm:text-4xl">{value}</p>
      <h3 className="mt-2 text-base font-semibold text-text-primary">{label}</h3>
      {description && (
        <p className="mt-1 text-xs leading-relaxed text-text-secondary">{description}</p>
      )}
    </div>
  )
}
