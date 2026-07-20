import { Section, Timeline } from '../components/ui'
import { profile } from '../data/profile'

export default function Education() {
  const items = profile.education.map((e) => ({
    head: e.degree,
    sub: e.school,
    meta: e.period,
    points: e.points,
  }))
  return (
    <Section id="education" title="Education">
      <Timeline items={items} />
    </Section>
  )
}
