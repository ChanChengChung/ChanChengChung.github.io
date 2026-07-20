import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// 🧑‍🏫 这是整个 React 应用的「入口文件」，由 index.html 里的
//    <script type="module" src="/src/main.tsx"> 加载。
//
// 几个关键点：
// ① createRoot 是 React 18 的新 API，取代旧版 ReactDOM.render。
// ② document.getElementById('root') 对应 index.html 里那个空 <div id="root">，
//   React 会把整棵组件树渲染进这个节点（这就是 SPA 单页应用的由来）。
// ③ <React.StrictMode>：开发环境下故意「双调用」部分函数，帮你提前暴露
//   副作用 bug（如忘记清理的定时器 / 监听器）。生产构建不会双调用，可放心保留。
// ④ import './index.css' 在这里一次性引入，全局样式即可生效。
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
