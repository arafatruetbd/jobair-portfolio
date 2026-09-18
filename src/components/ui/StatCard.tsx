import type { ExperienceStat } from '../../types'

interface StatCardProps extends ExperienceStat {
  description?: string
  className?: string
}

export function StatCard({ value, label, description, className = '' }: StatCardProps) {
  return (
    <div
      className={`rounded-xl border border-border-subtle bg-surface p-5 sm:p-6 transition-colors hover:border-accent/40 flex flex-col justify-between ${className}`.trim()}
    >
      <div>
        <p className="text-2xl sm:text-3xl font-bold tracking-tight text-accent">{value}</p>
        <h3 className="mt-2 text-base font-semibold text-text-primary">{label}</h3>
      </div>
      {description && (
        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-text-secondary">{description}</p>
      )}
    </div>
  )
}
