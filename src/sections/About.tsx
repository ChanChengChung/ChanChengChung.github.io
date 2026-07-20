import { Section } from '../components/ui'
import { profile } from '../data/profile'

export default function About() {
  return (
    <Section id="about" title="About Me">
      {profile.about.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </Section>
  )
}
