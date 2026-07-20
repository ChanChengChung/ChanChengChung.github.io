import type { ReactNode } from 'react'
import type { Project, ProjectLink } from '../types'

// 通用版块容器：统一标题下划线风格
export function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="section">
      <h2 className="section__title">{title}</h2>
      <div className="section__body">{children}</div>
    </section>
  )
}

// 时间线条目（用于 Experience / Education / Leadership）
export interface TimelineEntry {
  head: string
  sub?: string
  meta?: string
  points?: string[]
}

export function Timeline({ items }: { items: TimelineEntry[] }) {
  return (
    <div className="timeline">
      {items.map((it, i) => (
        <div className="timeline__item" key={i}>
          <div className="timeline__head">{it.head}</div>
          {it.sub && <div className="timeline__sub">{it.sub}</div>}
          {it.meta && <div className="timeline__meta">{it.meta}</div>}
          {it.points && it.points.length > 0 && (
            <ul className="timeline__points">
              {it.points.map((p, j) => (
                <li key={j}>{p}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  )
}

// 项目卡片（参考站 pub-item：左图右文，移动端自动竖排）
export function ProjectCard({ project }: { project: Project }) {
  const links: ProjectLink[] = project.links ?? []
  return (
    <div className="pub-item">
      <div className="pub-image">
        {/* 占位图：取标题首字母。换真实截图：把下面 div 换成
            <img src="/images/项目名.png" alt={project.title} /> */}
        <div className="pub-image__placeholder">{project.title.charAt(0)}</div>
      </div>
      <div className="pub-details">
        <p>
          <strong>{project.title}</strong>
          {project.subtitle && (
            <>
              <br />
              <em>{project.subtitle}</em>
            </>
          )}
        </p>
        <p>{project.desc}</p>
        {links.length > 0 && (
          <p className="pub-links">
            {links.map((l, i) => (
              <span key={i}>
                [ <a href={l.url} target="_blank" rel="noreferrer">{l.label}</a> ]
                {i < links.length - 1 ? ' ' : ''}
              </span>
            ))}
          </p>
        )}
      </div>
    </div>
  )
}
