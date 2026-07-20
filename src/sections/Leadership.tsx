import { Section, Timeline } from '../components/ui'
import { profile } from '../data/profile'

export default function Leadership() {
  const items = profile.leadership.map((l) => ({
    head: l.role,
    sub: l.org,
    meta: l.period,
    points: l.points,
  }))
  return (
    <Section id="leadership" title="Leadership & Service">
      <Timeline items={items} />
    </Section>
  )
}
