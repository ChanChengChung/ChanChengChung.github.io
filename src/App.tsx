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
import Blog from './sections/Blog'
import FunFacts from './sections/FunFacts'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import { useTheme } from './hooks/useTheme'
import { LanguageProvider } from './i18n/LanguageContext'

/**
 * 🧑‍🏫 顶层组件 App
 * ──────────────────
 * 这里只做「组装」：把语言 Provider、导航、侧栏、各板块按顺序拼起来。
 * - 主题状态 → useTheme Hook
 * - 语言状态 → LanguageProvider（包住整棵组件树，任意组件 useLanguage() 可取）
 * 关注点分离，所以 App 看起来很干净。
 */
export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <LanguageProvider>
      <Navbar theme={theme} onToggle={toggleTheme} />
      <div className="layout">
        <Sidebar />
        <main className="content">
          {/* 想调整板块顺序，改这里的排列即可（注意 Navbar 的 NAV 顺序也要一致） */}
          <About />
          <News />
          <Projects />
          <Experience />
          <Education />
          <Honors />
          <Skills />
          <Leadership />
          <Blog />
          <FunFacts />
          <Contact />
        </main>
      </div>
      <Footer />
    </LanguageProvider>
  )
}
