import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' 让构建出的资源用相对路径，直接拖到 GitHub Pages / 任意静态托管都能跑
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    host: '127.0.0.1',
    port: 5173,
  },
})
