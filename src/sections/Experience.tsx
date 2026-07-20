import { Section, Timeline } from '../components/ui'
import { profile } from '../data/profile'

export default function Experience() {
  const items = profile.experience.map((e) => ({
    head: e.role,
    sub: e.org,
    meta: e.period,
    points: e.points,
  }))
  return (
    <Section id="experience" title="Experience & Work">
      <Timeline items={items} />
    </Section>
  )
}
