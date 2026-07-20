import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // 🧑‍🏫 @vitejs/plugin-react：让 Vite 支持 React（JSX 转换 + 快速刷新 HMR）。
  //    没有它，写 .tsx 会报 "React is not defined" 之类的错。
  plugins: [react()],

  // 🧑‍🏫 base: './' 是部署到 GitHub Pages 的关键！
  //    默认 base 是 '/'，构建出的 index.html 会写成 /assets/xxx.js（绝对路径）。
  //    但 GitHub Pages 把仓库放在子路径下（如 /ChanChengChung.github.io/），
  //    绝对路径会 404。改成 './' 用相对路径，丢到任何静态托管都能跑。
  base: './',

  server: {
    // 🧑‍🏫 显式绑 127.0.0.1（IPv4）。本机 localhost 有时会先解析到 ::1（IPv6），
    //    导致 curl 连不上、浏览器却正常 —— 这种"一半能一半不能"的坑很迷惑。
    host: '127.0.0.1',
    port: 5173,
  },
})
