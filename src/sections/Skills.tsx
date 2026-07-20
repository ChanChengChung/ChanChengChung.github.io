import { Section } from '../components/ui'
import { profile } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'

export default function Skills() {
  const { t } = useLanguage()
  return (
    <Section id="skills" title={t('section_skills')}>
      <div className="skill-groups">
        {profile.skills.map((g) => (
          <div className="skill-group" key={g.category}>
            <h3 className="skill-group__title">{g.category}</h3>
            <div className="chips">
              {g.items.map((it) => (
                <span className="chip" key={it}>
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
