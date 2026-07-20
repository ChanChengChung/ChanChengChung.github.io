import { useState } from 'react'
import { profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import { useLanguage } from '../i18n/LanguageContext'
import { LANG_LABELS, type Lang } from '../i18n/translations'

// 顶部导航：站点名 + 锚点链接 + CV + 语言切换 + 暗色模式切换 + 移动端汉堡菜单
// 🧑‍🏫 NAV 的 id 必须和各 section 组件最外层 <section id="..."> 一致，否则锚点跳转和滚动高亮都会失效。
//    label 改为 key，由 t(key) 按当前语言取文字。
const NAV = [
  { id: 'about', key: 'nav_about' },
  { id: 'news', key: 'nav_news' },
  { id: 'projects', key: 'nav_projects' },
  { id: 'experience', key: 'nav_experience' },
  { id: 'education', key: 'nav_education' },
  { id: 'honors', key: 'nav_honors' },
  { id: 'skills', key: 'nav_skills' },
  { id: 'leadership', key: 'nav_leadership' },
  { id: 'blog', key: 'nav_blog' },
  { id: 'funfacts', key: 'nav_funfacts' },
  { id: 'contact', key: 'nav_contact' },
]

interface Props {
  theme: string
  onToggle: () => void
}

export default function Navbar({ theme, onToggle }: Props) {
  const [open, setOpen] = useState(false)
  // 🧑‍🏫 用自定义 Hook 算出当前滚到哪个板块，给对应导航项加高亮
  const activeId = useActiveSection(NAV.map((n) => n.id))
  const { lang, setLang, t } = useLanguage()

  return (
    <header className="masthead">
      <div className="masthead__inner">
        <a className="masthead__brand" href="#about" onClick={() => setOpen(false)}>
          {profile.name}
        </a>

        <button
          className="masthead__toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label="toggle menu"
        >
          <i className="fa-solid fa-bars" />
        </button>

        <nav className={`masthead__nav ${open ? 'is-open' : ''}`}>
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={() => setOpen(false)}
              className={activeId === n.id ? 'is-active' : undefined}
            >
              {t(n.key)}
            </a>
          ))}
          <a href={profile.cvUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
            CV
          </a>

          {/* 🧑‍🏫 语言切换：EN / 简 / 繁，当前语言高亮 */}
          <div className="lang-switch" role="group" aria-label="language">
            {(['en', 'zhCN', 'zhTW'] as Lang[]).map((l) => (
              <button
                key={l}
                type="button"
                className={lang === l ? 'is-active' : undefined}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
              >
                {LANG_LABELS[l]}
              </button>
            ))}
          </div>

          <button
            className="theme-toggle"
            onClick={onToggle}
            aria-label={t('theme_toggle')}
            title={t('theme_toggle')}
          >
            <i className={theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'} />
          </button>
        </nav>
      </div>
    </header>
  )
}
