import { experienceStats } from '../../data/experience'
import { Container } from '../layout/Container'
import { StatCard } from '../ui/StatCard'

export function ExperienceStats() {
  return (
    <section className="py-6 sm:py-8 lg:py-12 border-y border-border-subtle bg-surface/50">
      <Container>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {experienceStats.map((stat) => (
            <StatCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              description={stat.description}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
