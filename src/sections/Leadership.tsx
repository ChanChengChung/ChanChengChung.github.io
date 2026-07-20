import { Section, Timeline } from '../components/ui'
import { profile } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'

export default function Leadership() {
  const { t } = useLanguage()
  const items = profile.leadership.map((l) => ({
    head: l.role,
    sub: l.org,
    meta: l.period,
    points: l.points,
  }))
  return (
    <Section id="leadership" title={t('section_leadership')}>
      <Timeline items={items} />
    </Section>
  )
}
