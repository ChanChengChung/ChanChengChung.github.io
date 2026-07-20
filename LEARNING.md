# 🧑‍🏫 LEARNING.md — 把你这个个人网站当「React 学习项目」怎么学

> 这份文档是**导师视角**写的：不堆术语，直接告诉你每个文件能学到什么、按什么顺序学、
> 以及想再往前走可以加哪些代码/注释。配合 `EXERCISES.md`（分阶练习）一起用效果最好。

---

## 0. 先建立一句话心智模型

这个网站是一个 **SPA（单页应用）**：

```
index.html  ──加载──▶  main.tsx  ──渲染──▶  <App/>  ──组合──▶  Navbar + Sidebar + 各 Section
                          │                         │
                          └── 引入 index.css  ──────┘（样式）
                内容数据全部来自 src/data/profile.ts（数据驱动 UI）
```

记住三件事就够了：
1. **HTML 是空壳**，内容是 React 运行时塞进去的（所以右键"查看源代码"看不到正文）。
2. **`profile.ts` 是「数据」，组件是「模板」**——改内容不动组件，这是现代前端的核心理念。
3. **一切交互 = state 变化 → 重新渲染**，没有"手动改 DOM"。

---

## 1. 文件导览：每个文件对应学什么

| 文件 | 你能学到的核心概念 | 导师评语 |
|---|---|---|
| `index.html` | SPA 外壳、`<meta>`/OG/JSON-LD 的作用 | 别觉得 meta 啰嗦，它决定了"别人能不能搜到你" |
| `src/main.tsx` | 应用入口、`createRoot`、StrictMode | 理解"React 把这棵组件树挂到哪个 DOM 节点" |
| `src/App.tsx` | 组件组合、关注点分离 | 现在很干净，因为主题逻辑已下沉到 Hook |
| `src/hooks/useTheme.ts` | **自定义 Hook**、`useState` 惰性初始化、`useEffect` | ⭐ 第一个必学范例 |
| `src/hooks/useActiveSection.ts` | **自定义 Hook** + `IntersectionObserver` | ⭐ 第二个范例，带"清理函数"这一易漏点 |
| `src/components/Navbar.tsx` | 接收 props、`useState`(菜单开合)、调用 Hook | 看 `activeId` 怎么让导航高亮 |
| `src/components/Sidebar.tsx` | 数据映射 `.map()`、纯展示组件 | 没有 state，最简单的一类组件 |
| `src/components/ui.tsx` | **复用组件**（Section/Timeline/ProjectCard） | 学会"把重复结构抽成组件" |
| `src/sections/*.tsx` | 各板块如何消费 `profile` 数据 | 看 `profile.ts` 的数组怎么变成列表 |
| `src/data/profile.ts` | **数据驱动 UI**、TypeScript 接口 | ★ 全站最该读懂的一个文件 |
| `src/types.ts` | TypeScript 类型定义、`interface`/`type` | 类型不是负担，是文档 |
| `src/index.css` | CSS 变量主题、sticky 布局、响应式 `@media` | 主题切换全靠 `[data-theme]` 切变量 |
| `vite.config.ts` | 构建工具配置、`base` 路径坑 | `base:'./'` 是 GitHub Pages 救命设置 |
| `.github/workflows/deploy.yml` | CI/CD、GitHub Actions 自动部署 | 看懂"push 就上线"是怎么发生的 |

---

## 2. 五个关键概念拆解（按重要性）

### ① 数据驱动 UI（最重要，先吃透）
打开 `src/data/profile.ts`，里面是一个 `profile` 对象 + 一堆数组（projects、experience…）。
再看 `src/sections/Projects.tsx`，它用 `profile.projects.map(...)` 把数组变成卡片。
**练习直觉**：你想加一个项目，只要在 `profile.ts` 的数组里加一项，页面自动多一张卡——
你完全不用碰 `.tsx`。这就是"内容与视图分离"。

### ② 自定义 Hook（React 进阶的分水岭）
`useTheme` 和 `useActiveSection` 都是 `function useXxx() { const [x,setX]=useState(); ...; return x }` 的形态。
**关键认知**：Hook 就是"带状态的逻辑函数"，把可复用的状态逻辑从组件里抽出来。
- 不懂 `useState` → 看 `useTheme` 开头（惰性初始化）。
- 不懂 `useEffect` → 看两个 Hook 里"副作用 + 清理函数"的写法。
- 不懂 `IntersectionObserver` → 看 `useActiveSection` 的注释（做滚动高亮/懒加载的标配）。

### ③ Props（组件间传数据）
`Navbar` 接收 `{ theme, onToggle }`。`App` 把 `useTheme()` 的返回值作为 props 传下去。
**口诀**：父组件管状态，子组件通过 props 接收"数据"和"回调函数"。

### ④ CSS 变量做主题
`index.css` 顶部 `:root { --accent: ... }` 和 `[data-theme='dark'] { --accent: ... }` 定义了两套变量。
`useTheme` 切换 `<html data-theme>`，全站颜色就跟着变——**无需改任何组件样式**。
这是业界做明暗主题的标准做法，务必掌握。

### ⑤ 构建与部署（工程师 vs 学生的分水岭）
`vite.config.ts` 的 `base:'./'`、`dist/` 产物、`deploy.yml` 自动部署——这三样让你从
"本地能跑"跨越到"全世界能访问"。**踩过一次 GitHub Pages 的 404，你才会真正理解相对路径。**

---

## 3. 推荐学习顺序（别跳）

1. 读 `src/data/profile.ts` → 改几个字，`npm run dev` 看变化（建立"数据驱动"直觉）。
2. 读 `main.tsx` + `App.tsx` → 搞懂组件树怎么拼起来。
3. 精读 `useTheme.ts` → 抄一遍，理解 Hook 的 `useState`/`useEffect`。
4. 精读 `useActiveSection.ts` → 理解 `IntersectionObserver` 和"清理函数"。
5. 读 `vite.config.ts` 注释 → 理解 `base` 路径为什么重要。
6. 最后读 `index.html` 的 meta 块 → 理解 SEO（搜得到你 = 另一门学问）。

---

## 4. 想再往前走，可以加这些（代码/注释清单）

导师建议你**按这个清单挑着加**，每加一个都是一次刻意练习：

- [ ] **`EXERCISES.md` 里的 L1–L3 练习**（从"换图"到"写单测"，循序渐进）。
- [ ] `src/hooks/useScrollToTop.ts`：路由切换/锚点后让"回到顶部"按钮出现（练 Hook）。
- [ ] `src/components/ContactForm.tsx` + 一个 `sections/Contact.tsx`：加联系表单（练受控组件 `value/onChange` + 表单态）。
- [ ] `src/data/posts.ts` + `sections/Blog.tsx`：加一个 Blog 列表（练"多数据文件 + 动态列表"，也利于 SEO）。
- [ ] 给 `ProjectCard` 加 `loading="lazy"` 的图片懒加载（练性能优化 + `IntersectionObserver` 进阶）。
- [ ] 在 `useTheme` 里加 CSS 过渡动画（`.layout, .card { transition: background .2s }`），体验更顺。
- [ ] `vitest` + `src/hooks/useTheme.test.ts`：给 Hook 写单元测试（练"前端也要测"的工程素养）。
- [ ] `.github/ISSUE_TEMPLATE/` 或 `CONTRIBUTING.md`：假装这是个开源项目，练协作规范。

> 每一项都不难，但每一项都对应一个真实岗位能力。挑 2–3 个做深，比全做一遍更有用。

---

## 5. 避坑清单（导师踩过的，你别踩）

- ❌ 在 `index.html` 里找 About 文字 → 找不到，因为 SPA 内容是 React 注入的。
- ❌ 改了 `profile.ts` 页面没变 → 多半是没存盘 / dev server 挂了，刷新或重开 `npm run dev`。
- ❌ GitHub Pages 打开空白 → 99% 是 `base` 没设 `./`，或 deploy.yml 的 source 没选 GitHub Actions。
- ❌ 部署后还是旧版 → Actions 可能还在跑，或你忘了 `git push`；看仓库 Actions 标签页。
- ❌ `npm run` 报 Missing script → npm 把根目录解析到了 Home；用 `./node_modules/.bin/vite`。
- ✅ 改样式先改 CSS 变量，别满世界改颜色值。
- ✅ 任何"复用的状态逻辑"都该考虑抽成 Hook。
