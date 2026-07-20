import { Section } from '../components/ui'
import { profile } from '../data/profile'

export default function News() {
  return (
    <Section id="news" title="News">
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
