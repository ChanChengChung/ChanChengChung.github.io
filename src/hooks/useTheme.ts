import { useEffect, useState } from 'react'

/**
 * 🧑‍🏫 导师讲解：useTheme —— 把「暗色模式」逻辑抽成自定义 Hook
 * ───────────────────────────────────────────────────────────────
 * 这个文件是「自定义 Hook」的第一个范例。之前这段逻辑直接写在 App.tsx 里，
 * 作为练习，导师建议你把它单独抽出来，原因有三：
 *
 * ① 关注点分离
 *    App.tsx 只该关心「页面布局」；主题的细节（读存储、切 <html> 属性、
 *    写回 localStorage）交给这个 Hook，App 看起来更干净，也更好维护。
 *
 * ② 可复用
 *    以后任意组件想读/切换主题，直接 `import { useTheme }` 就能用，
 *    不用把一整套 useState + useEffect 复制粘贴到每个文件。
 *
 * ③ 知识点：useState 的「惰性初始化」（传入函数）
 *    下面 `useState(() => ...)` 里的函数只在【首次渲染】执行一次，用来读
 *    localStorage。如果写成 `useState(localStorage.getItem('theme'))`，则每次
 *    渲染都会读一次 localStorage —— 完全没必要，惰性初始化更省。
 *
 * ④ useEffect 的依赖数组 `[theme]`
 *    只有 theme 变化时才把值同步到 <html data-theme> 和 localStorage，
 *    避免无意义的重复写入。
 */
export function useTheme() {
  const [theme, setTheme] = useState<string>(() => {
    const saved = localStorage.getItem('theme')
    // 防御：localStorage 可能被手动改成脏值，只接受 'light' | 'dark'
    if (saved === 'light' || saved === 'dark') return saved
    // 没有记录 → 跟随操作系统的深色模式偏好（macOS / Windows）
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    // data-theme 挂在 <html> 上，CSS 里用 [data-theme="dark"] 切换整站变量
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  // 切换函数：用「函数式更新」(t) => 拿到最新值再翻转，避免闭包拿到旧值
  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  return { theme, toggleTheme }
}
