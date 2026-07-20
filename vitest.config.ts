import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// 🧑‍🏫 导师讲解：Vitest 复用 Vite 的配置，所以能直接识别 .tsx 和 JSX。
// environment: 'jsdom' 用 jsdom 模拟浏览器（localStorage / matchMedia 都可用），
// 否则 useTheme 里的 localStorage 会报错。
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
  },
})
