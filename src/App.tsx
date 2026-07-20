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
import { useTheme } from './hooks/useTheme'

/**
 * 🧑‍🏫 顶层组件 App
 * ──────────────────
 * 这里只做「组装」：把导航、侧栏、各板块按顺序拼起来。
 * 主题相关的 state 已下沉到 useTheme Hook（见 src/hooks/useTheme.ts），
 * 所以 App 看起来很干净 —— 这正是「关注点分离」带来的可读性收益。
 */
export default function App() {
  const { theme, toggleTheme } = useTheme()

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
