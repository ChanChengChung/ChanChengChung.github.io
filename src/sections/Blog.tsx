import { Section } from '../components/ui'
import { posts } from '../data/posts'

// 🧑‍🏫 导师讲解：Blog 是「数据驱动 UI」的范例（对应 EXERCISES.md L3-E9）。
// 数据在 src/data/posts.ts，本组件只负责「怎么把数据画出来」。
// 加文章 = 改数据文件，不动这里。这就是 React 项目里最常见的「数据 / 展示分离」。
export default function Blog() {
  return (
    <Section id="blog" title="Blog">
      <div className="post-list">
        {posts.map((p, i) => (
          <article className="post-item" key={i}>
            <div className="post-item__meta">
              {p.date}
              {p.tags?.length ? ' · ' + p.tags.join(' / ') : ''}
            </div>
            <h3 className="post-item__title">{p.title}</h3>
            <p className="post-item__excerpt">{p.excerpt}</p>
            {p.body.map((para, j) => (
              <p key={j}>{para}</p>
            ))}
          </article>
        ))}
      </div>
    </Section>
  )
}
