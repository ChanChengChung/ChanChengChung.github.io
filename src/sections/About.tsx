import { Section } from '../components/ui'
import { profile } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'

export default function About() {
  const { lang, t } = useLanguage()
  return (
    <Section id="about" title={t('section_about')}>
      {profile.about[lang].map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </Section>
  )
}
