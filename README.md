# Personal Website — Zeon Chen Zhengzhong (陳政中)

基于 **React 18 + TypeScript + Vite + CSS** 的自建个人网站 / personal portfolio：

- 顶部 **sticky 导航**（锚点跳转 + 暗色模式切换 + 移动端汉堡菜单）
- 左侧 **sticky 个人栏**（头像 / 姓名 / 简介 / 社交链接）
- 右侧 **分栏内容**：About / News / Projects / Experience / Education / Honors / Skills / Leadership
- **明暗双主题**，自动跟随系统偏好并可一键切换（记忆到 localStorage）
- 响应式：窄屏下左栏移到顶部、导航折叠

所有文字内容集中在 `src/data/profile.ts`，改内容不用碰组件。

---

## 1. 本地运行

```bash
# 进入项目
cd PersonalWebsite

# 安装依赖（首次）
npm install

# 启动开发服务器（热更新，默认 http://127.0.0.1:5173）
npm run dev

# 构建生产版本到 dist/
npm run build

# 本地预览构建结果
npm run preview
```

> 若 `npm run` 报 "Missing script"，说明 npm 把根目录解析到了别处（常见于 Home 目录有 package.json）。
> 直接用本地二进制即可：`./node_modules/.bin/vite build`

---

## 2. 怎么改成你自己的内容

| 你想改什么 | 改哪个文件 |
|---|---|
| 姓名 / 简介 / 邮箱 / GitHub / LinkedIn | `src/data/profile.ts` → `profile` 对象顶部 |
| 各板块文字（News / Projects / Experience …） | `src/data/profile.ts` 对应数组 |
| 板块顺序 | `src/App.tsx` 里 `<About/> <News/> …` 的排列 |
| **换成真实头像** | `src/components/Sidebar.tsx`：把 `<div className="avatar-placeholder">` 整行换成 `<img className="avatar-img" src="/images/avatar.jpg" alt="..." />`，再把照片放到 `public/images/` |
| **项目配图** | `src/components/ui.tsx` 里的 `pub-image__placeholder`，同理换成 `<img>` 并放进 `public/images/` |
| **CV 文件** | 已放好 `public/files/CV.pdf`，点导航 CV 即可下载；换文件直接覆盖 |
| 主题配色 | `src/index.css` 顶部 `:root` 与 `[data-theme='dark']` 的 CSS 变量（`--accent` 主色等） |
| 导航项目 | `src/components/Navbar.tsx` 里的 `NAV` 数组 |

> `src/data/profile.ts` 顶部的注释也写了同样的操作指引。

---

## 3. 部署到 GitHub Pages（免费）

> 🔒 **隐私建议（先 Private，确认无误再转 Public）**
> 创建 GitHub 仓库时，**Visibility 先选 `Private`**。这样在你本地预览、确认内容/排版
> 都没问题之前，外人搜不到也看不到。等你核对 OK，再进仓库
> **Settings → General → 拉到最底 → Change visibility → 选 Public** 即可，无需改任何代码。
> （本仓库目前只在你本机，尚未推到 GitHub；首次 push 时按上面的 Private 方式建仓库即可。）

### 先把仓库推上去（首次，选 Private）

本仓库目前只在本机（尚未关联 GitHub）。按下面顺序推，**建仓库时 Visibility 选 Private**：

1. GitHub 网页点 **New repository**，仓库名填 `ChanChengChung.github.io`（用户站点，URL 最干净），
   **Visibility 选 `Private`**，不要勾选 README / .gitignore（本地已包含）。
2. 本地关联并首次推送：
   ```bash
   cd /Users/chenzhengzhong/Desktop/PersonalWebsite
   git remote add origin https://github.com/ChanChengChung/ChanChengChung.github.io.git
   git push -u origin main
   ```
   > ⚠️ GitHub 已不支持密码：提示输入密码时请填 **Personal Access Token**
   > （GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)，勾 `repo` 权限）。
   > 或配置 SSH key 一劳永逸。
3. 开启 Pages：仓库 → **Settings → Pages → Source 选 GitHub Actions**，等 1–2 分钟，访问 `https://ChanChengChung.github.io/`。
4. **本地 `npm run dev` 核对内容/排版无误后**，再进 **Settings → General → Change visibility → Public**。

之后每次更新只需：`git add -A && git commit -m "..." && git push`。

项目 `vite.config.ts` 已设 `base: './'`，产物用相对路径，直接传任意静态托管即可。

**方式 A：手动上传**
1. `npm run build` → 得到 `dist/`
2. 把 `dist/` 里所有文件推到你的 GitHub 仓库（例如 `username.github.io` 的 `main` 分支根目录，或任意仓库的 `gh-pages` 分支）
3. 在仓库 Settings → Pages 选择对应分支/目录，等几分钟即可访问

**方式 B：GitHub Actions 自动部署（推荐）**
项目里已经建好 `.github/workflows/deploy.yml`（内容如下，无需手打）。Push 到 `main` 会自动构建并发布：

```yaml
name: Deploy
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm install && npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

并在仓库 Settings → Pages 选择 **GitHub Actions** 作为 source。

---

## 4. 让搜索引擎收录（重点：别人"搜得到"你）

光部署上去 ≠ 能被搜到。新网站 Google/Bing **不会自动发现**，要主动提交。下面按性价比排序：

### 4.1 先确认 SEO 文件已在产物里（已帮你备好）
- `public/robots.txt` → 告诉爬虫"允许抓取"，并指向 sitemap
- `public/sitemap.xml` → 站点地图（单页站只列首页）
- `index.html` 里的 `<meta>` + JSON-LD `Person` 结构化数据 → 让 Google 知道这是"一个真人"

> ✅ 已按你的 GitHub 用户名 `ChanChengChung` 替换 `index.html` / `robots.txt` / `sitemap.xml` 里的域名；`og-image.jpg` 已用你上传的照片占位，`email` 仍需替换为你真实邮箱。

### 4.2 提交 sitemap（最关键的一步，5 分钟搞定）
1. **Google Search Console**：<https://search.google.com/search-console>
   - 添加属性 → 选 "URL 前缀" → 填 `https://ChanChengChung.github.io/`
   - 验证方式选 **"HTML 标记"**：把 Google 给的 `<meta name="google-site-verification" ...>` 贴到 `index.html` 的 `<head>` 里，重新部署即可通过
   - 左侧 **站点地图** → 填 `sitemap.xml` → 提交
2. **Bing Webmaster Tools**：<https://www.bing.com/webmasters> → 同样提交 sitemap（Bing 会同步给 DuckDuckGo，一举两得）

### 4.3 主动"ping"搜索引擎（可选，加速收录）
部署后访问这两个 URL（把用户名换掉），立刻通知爬虫：
```
https://www.google.com/ping?sitemap=https://ChanChengChung.github.io/sitemap.xml
https://www.bing.com/ping?sitemap=https://ChanChengChung.github.io/sitemap.xml
```
返回 `Sitemap Notification: Success` 即成功。

### 4.4 怎么验证"被搜到了"
- 等 1–7 天，在 Google 搜 `site:ChanChengChung.github.io` 或你的名字 `Zeon Chen Zhengzhong`
- 在 Search Console 看"已编入索引的网页"数量
- 想更快：多从其他网站/社交媒体链向你的站（外链越多，排名越高）

### 4.5 提升搜索排名的后续动作（可选）
- 加一篇 **Blog/Posts**（动态内容更受爬虫青睐）
- 换**真实头像 + `og-image.jpg`**（1200×630），社交分享带预览
- 在 LinkedIn / GitHub bio / 学校主页 放你网站的链接（外链加权）

---

## 5. 目录结构

```
PersonalWebsite/
├── index.html              # 入口 HTML（SPA 外壳 + SEO/OG/JSON-LD）
├── package.json
├── vite.config.ts          # base:'./' 便于静态托管
├── LEARNING.md             # 🧑‍🏫 导师版学习指南（怎么拿本项目练 React）
├── EXERCISES.md            # 🧑‍🏫 分阶练习（L1–L3，配套 LEARNING.md）
├── public/
│   ├── images/             # avatar.jpg / og-image.jpg
│   └── files/CV.pdf         # 你的简历（CV 链接）
└── src/
    ├── main.tsx            # 应用入口
    ├── App.tsx             # 组合所有版块（主题逻辑下沉到 Hook）
    ├── index.css           # 全部样式（含明暗双主题）
    ├── types.ts            # 内容数据结构定义
    ├── data/profile.ts     # ★ 所有文字内容都在这里
    ├── hooks/              # 🧑‍🏫 自定义 Hook（学习重点）
    │   ├── useTheme.ts          # 暗色模式（useState 惰性初始化 + useEffect）
    │   └── useActiveSection.ts  # 滚动高亮（IntersectionObserver + 清理函数）
    ├── components/
    │   ├── Navbar.tsx        # 顶部导航 + 主题切换 + 滚动高亮 + 移动端菜单
    │   ├── Sidebar.tsx       # 左侧个人栏
    │   └── ui.tsx            # Section / Timeline / ProjectCard 复用组件
    └── sections/            # About / News / Projects / Experience /
                             # Education / Honors / Skills / Leadership / Footer
```

---

## 6. 技术说明

- 图标用 [Font Awesome 6 Free](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css) CDN（导航、社交、主题按钮）。若需完全离线，可 `npm i @fortawesome/fontawesome-free` 后改成本地引入。
- 头像 / 项目图当前是**占位**（姓名首字母 / 标题首字母），换成真实图片只需替换对应 `<div>` 为 `<img>`（见第 2 节）。
- 暗色模式：首次读 `localStorage`，没有则跟随系统 `prefers-color-scheme`，切换后写入 `localStorage`。
