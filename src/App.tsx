import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import About from './sections/About'
import News from './sections/News'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Honors from './sections/Honors'
import Skills from './sections/Skills'
import Leadership from './sections/Leadership'
import Footer from './sections/Footer'

export default function App() {
  // 暗色模式：初始读 localStorage，没有就跟随系统偏好
  const [theme, setTheme] = useState<string>(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  // 把主题写到 <html data-theme> 并持久化
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <>
      <Navbar theme={theme} onToggle={toggleTheme} />
      <div className="layout">
        <Sidebar />
        <main className="content">
          {/* 想调整板块顺序，改这里的排列即可 */}
          <About />
          <News />
          <Projects />
          <Experience />
          <Education />
          <Honors />
          <Skills />
          <Leadership />
        </main>
      </div>
      <Footer />
    </>
  )
}
