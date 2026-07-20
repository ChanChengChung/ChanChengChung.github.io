import { useEffect, useState } from 'react'

/**
 * 🧑‍🏫 导师讲解：useActiveSection —— 滚动时高亮当前所在板块
 * ───────────────────────────────────────────────────────────────
 * 这是「自定义 Hook」的第二个范例，比 useTheme 多了一个重要的浏览器 API。
 *
 * ① IntersectionObserver（交叉观察器）—— 本 Hook 的核心
 *    浏览器原生 API，用来「监听元素是否进入视口」。
 *    比起监听 scroll 事件再手动算 offsetTop，它不阻塞主线程、性能更好，
 *    是现代前端做「滚动高亮 / 图片懒加载 / 无限滚动」的首选工具。
 *
 * ② rootMargin 技巧
 *    '-45% 0px -50% 0px' 把「判定区」压缩到视口正中央一条线，
 *    这样只有真正滚到中间的 section 才会被高亮，体验比"露头就高亮"更准。
 *
 * ③ 清理函数（重点！也是新手最常漏的一步）
 *    useEffect 返回 `() => observer.disconnect()`。
 *    组件卸载或依赖变化时必须断开观察，否则会重复绑定、造成内存泄漏。
 *
 * 💡 练习：试着把 rootMargin 改成 '0px' 再滚动，体会高亮时机的变化。
 */
export function useActiveSection(ids: string[], rootMargin = '-45% 0px -50% 0px'): string {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin, threshold: 0 },
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ids, rootMargin])

  return activeId
}
