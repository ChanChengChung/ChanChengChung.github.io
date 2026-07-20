import { profile } from '../data/profile'

// 左侧个人栏：头像 / 姓名 / 简介 / 位置 / 社交链接
// 换头像：把下面 <div className="avatar-placeholder"> 整行替换成
//   <img className="avatar-img" src="/images/avatar.jpg" alt={profile.name} />
function initials(name: string): string {
  const parts = name.trim().split(/\s+/)
  const first = parts[0]?.[0] ?? ''
  const last = parts.length > 1 ? parts[parts.length - 1][0] : ''
  return (first + last).toUpperCase()
}

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="author">
        <div className="author__avatar">
          {/* 👇 占位头像（姓名首字母）。想用真实照片，见上方注释替换 <img> */}
          <div className="avatar-placeholder">{initials(profile.name)}</div>
        </div>

        <h3 className="author__name">{profile.name}</h3>
        {profile.nameZh && <p className="author__name-zh">{profile.nameZh}</p>}
        <p className="author__bio">{profile.bio}</p>

        <ul className="author__urls">
          <li>
            <i className="fa-solid fa-location-dot" />
            {profile.location}
          </li>
          {profile.social.map((s) => (
            <li key={s.label}>
              <a href={s.url} target="_blank" rel="noreferrer">
                <i className={s.icon} />
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
