import { useState } from 'react'
import { profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'

// 顶部导航：站点名 + 锚点链接 + CV + 暗色模式切换 + 移动端汉堡菜单
// 🧑‍🏫 注意 NAV 里的 id 必须和各 section 组件最外层 <section id="..."> 一致，
//    否则锚点跳转和滚动高亮都会失效。这是「数据驱动 UI」的典型约定。
const NAV = [
  { id: 'about', label: 'About' },
  { id: 'news', label: 'News' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'honors', label: 'Honors' },
  { id: 'skills', label: 'Skills' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
]

interface Props {
  theme: string
  onToggle: () => void
}

export default function Navbar({ theme, onToggle }: Props) {
  const [open, setOpen] = useState(false)
  // 🧑‍🏫 用自定义 Hook 算出当前滚到哪个板块，给对应导航项加高亮
  const activeId = useActiveSection(NAV.map((n) => n.id))

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
              {n.label}
            </a>
          ))}
          <a href={profile.cvUrl} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
            CV
          </a>
          <button
            className="theme-toggle"
            onClick={onToggle}
            aria-label="toggle dark / light theme"
            title="切换深色 / 浅色"
          >
            <i className={theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'} />
          </button>
        </nav>
      </div>
    </header>
  )
}
