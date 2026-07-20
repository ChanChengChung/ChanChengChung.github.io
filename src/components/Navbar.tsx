import { useState } from 'react'
import { profile } from '../data/profile'

// 顶部导航：站点名 + 锚点链接 + CV + 暗色模式切换 + 移动端汉堡菜单
const NAV = [
  { id: 'about', label: 'About' },
  { id: 'news', label: 'News' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'honors', label: 'Honors' },
  { id: 'skills', label: 'Skills' },
  { id: 'leadership', label: 'Leadership' },
]

interface Props {
  theme: string
  onToggle: () => void
}

export default function Navbar({ theme, onToggle }: Props) {
  const [open, setOpen] = useState(false)

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
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}>
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
