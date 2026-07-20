import { Section, ProjectCard } from '../components/ui'
import { profile } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'

export default function Projects() {
  const { t } = useLanguage()
  return (
    <Section id="projects" title={t('section_projects')}>
      <div className="pub-list">
        {profile.projects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </Section>
  )
}
