# 🏋️ EXERCISES.md — 分阶练习（导师布置）

> 用法：从 L1 做起，每题先**自己尝试**，卡住超过 20 分钟再看提示。
> 做完一题 `npm run dev` 验证，再 `npm run build` 确认不报错。
> 所有答案都能在 `LEARNING.md` 和现有代码里找到线索。

---

## L1 · 入门（建立手感，1–2 小时）

**E1. 改内容不改代码**
- 目标：把 `src/data/profile.ts` 里 About 的简介改成你自己的话。
- 涉及：`src/data/profile.ts`
- 提示：直接改字符串即可，不用碰任何 `.tsx`。

**E2. 加一个 News 条目**
- 目标：在 `profile.news` 数组顶部加一条带日期的近况。
- 涉及：`src/data/profile.ts` → `news` 数组
- 提示：照着已有对象的字段（`date` / `text`）抄一个。

**E3. 换一张项目配图**
- 目标：给某个 Project 加 `image` 字段，并在 `src/components/ui.tsx` 的
  `ProjectCard` 里把 `pub-image__placeholder` 换成 `<img>`。
- 涉及：`profile.ts`、`src/components/ui.tsx`、`public/images/`
- 提示：图片放 `public/images/xxx.jpg`，`src` 写 `/images/xxx.jpg`（相对 base）。

**E4. 调主题色**
- 目标：把主色 `--accent` 从蓝改成你喜欢的颜色（浅色 + 深色两套都改）。
- 涉及：`src/index.css` 顶部 `:root` 与 `[data-theme='dark']`
- 提示：只改 CSS 变量，组件样式一行都不用动——这就是变量的威力。

---

## L2 · 进阶（理解 React 机制，2–4 小时）

**E5. 手写一个 Hook（模仿 useTheme）**
- 目标：新建 `src/hooks/useWindowWidth.ts`，返回当前窗口宽度，并在某个组件里
  用它显示"当前宽度：NNN px"。resize 窗口时数字实时变。
- 涉及：`src/hooks/`（新建）、一个 section 组件
- 提示：骨架照搬 `useTheme`：`useState` 初始值 + `useEffect` 里 `addEventListener('resize')`
  **并 `return () => removeEventListener(...)` 做清理**（参考 `useActiveSection`）。

**E6. 用 props 做受控组件**
- 目标：在 `Sidebar` 下方加一个简单的"搜索框"，输入时实时过滤 Projects 列表
  （只包含标题含关键词的项目）。
- 涉及：`Navbar` 或新组件、`Projects.tsx`、`profile.projects`
- 提示：用 `useState` 存关键词，`profile.projects.filter(p => p.title.includes(kw))`。

**E7. 给导航加"回到顶部"按钮**
- 目标：滚动超过一屏时出现按钮，点击 `window.scrollTo({top:0})` 平滑回顶。
- 涉及：新建或复用 Hook（练 `useEffect` + scroll 监听 / 或 `IntersectionObserver`）
- 提示：参考 `useActiveSection` 的监听写法，只是观察的不是 section 而是滚动位置。

---

## L3 · 实战（贴近真实岗位，半天～1 天每项）

**E8. 加一个 Contact 表单**
- 目标：新建 `sections/Contact.tsx`（含姓名/邮箱/留言三个受控 input + 提交按钮），
  提交时 `console.log` 出表单值（不接后端）。
- 涉及：受控组件、`useState` 对象、`onSubmit` 阻止默认刷新
- 提示：`onSubmit={(e)=>{e.preventDefault(); ...}}`。

**E9. 加 Blog 列表（多数据文件）**
- 目标：新建 `src/data/posts.ts`（博客数组）+ `sections/Blog.tsx`，并在 `App.tsx`
  加入 `<Blog/>`、在 `Navbar` 的 `NAV` 加上 `blog` 项。
- 涉及：数据文件拆分、组件组合、NAV 与 section `id` 一致性
- 提示：E9 同时验证了"数据驱动 + 锚点 id 必须匹配"这件易错事。

**E10. 给 Hook 写单元测试**
- 目标：装 `vitest`，给 `useTheme` 写测试（初始值跟随系统 / toggle 后翻转）。
- 涉及：`vitest`、`@testing-library/react`、`src/hooks/useTheme.test.ts`
- 提示：Hook 测试需用 `renderHook` + `act`，这是前端工程化的硬技能。

**E11.（综合）自己做一次部署**
- 目标：把站点部署到 GitHub Pages，并在 Google Search Console 提交 sitemap。
- 涉及：`README.md` 第 3、4 节、`deploy.yml`
- 提示：做完这一步，你才完整走完"写代码 → 上线 → 被搜到"的全链路。

---

## 提交习惯（导师强制要求）
每做完一题，养成：
```bash
git add -A
git commit -m "L2-E5: add useWindowWidth hook"
```
**小步提交、写好 message** —— 这是面试和团队协作里一眼能看出水平的习惯。
