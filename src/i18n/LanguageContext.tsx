import { createContext, useContext, useState, type ReactNode } from 'react'
import { translations, type Lang } from './translations'

// 🧑‍🏫 语言状态用 React Context 下沉到顶层（和 useTheme 一个套路）：
//    - Provider 包住整个 App，任何组件都能 useLanguage() 取到当前语言
//    - t(key) 是一行取值函数，找不到就回退英文，再找不到就返回 key（方便排查漏翻）
interface LanguageCtx {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string) => string
}

const Ctx = createContext<LanguageCtx | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  // 用户要求默认英文
  const [lang, setLang] = useState<Lang>('en')
  const t = (key: string) => translations[lang][key] ?? translations.en[key] ?? key
  return <Ctx.Provider value={{ lang, setLang, t }}>{children}</Ctx.Provider>
}

export function useLanguage(): LanguageCtx {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>')
  return ctx
}
