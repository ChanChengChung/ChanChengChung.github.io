import { Section, Timeline } from '../components/ui'
import { profile } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'

export default function Education() {
  const { t } = useLanguage()
  const items = profile.education.map((e) => ({
    head: e.degree,
    sub: e.school,
    meta: e.period,
    points: e.points,
  }))
  return (
    <Section id="education" title={t('section_education')}>
      <Timeline items={items} />
    </Section>
  )
}
