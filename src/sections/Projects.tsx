import { Section, ProjectCard } from '../components/ui'
import { profile } from '../data/profile'

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="pub-list">
        {profile.projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </Section>
  )
}
