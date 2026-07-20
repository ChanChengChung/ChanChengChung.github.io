import { Section, Timeline } from '../components/ui'
import { profile } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'

export default function Experience() {
  const { t } = useLanguage()
  const items = profile.experience.map((e) => ({
    head: e.role,
    sub: e.org,
    meta: e.period,
    points: e.points,
  }))
  return (
    <Section id="experience" title={t('section_experience')}>
      <Timeline items={items} />
    </Section>
  )
}
