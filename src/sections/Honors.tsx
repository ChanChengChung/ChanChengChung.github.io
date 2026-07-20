import { Section } from '../components/ui'
import { profile } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'

export default function Honors() {
  const { t } = useLanguage()
  return (
    <Section id="honors" title={t('section_honors')}>
      <ul className="honors-list">
        {profile.honors.map((h, i) => (
          <li key={i}>{h.text}</li>
        ))}
      </ul>
    </Section>
  )
}
