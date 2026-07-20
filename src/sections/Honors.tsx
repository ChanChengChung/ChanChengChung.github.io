import { Section } from '../components/ui'
import { profile } from '../data/profile'

export default function Honors() {
  return (
    <Section id="honors" title="Honors & Awards">
      <ul className="honors-list">
        {profile.honors.map((h, i) => (
          <li key={i}>{h.text}</li>
        ))}
      </ul>
    </Section>
  )
}
