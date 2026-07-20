import { Section } from '../components/ui'
import { profile } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'

export default function News() {
  const { t } = useLanguage()
  return (
    <Section id="news" title={t('section_news')}>
      <ul className="news-list">
        {profile.news.map((n, i) => (
          <li key={i}>
            <span className="news-date">{n.date}</span>
            <span dangerouslySetInnerHTML={{ __html: n.html }} />
          </li>
        ))}
      </ul>
    </Section>
  )
}
