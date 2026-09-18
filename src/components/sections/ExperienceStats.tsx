import { experienceStats } from '../../data/experience'
import { Container } from '../layout/Container'
import { StatCard } from '../ui/StatCard'

export function ExperienceStats() {
  return (
    <section className="py-8 sm:py-10 border-y border-border-subtle bg-surface/40">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
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
