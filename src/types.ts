// 网站所有内容的数据结构定义。
// 想加板块/改字段，先看这里，再去 src/data/profile.ts 填真实内容。

export interface SocialLink {
  label: string
  /** Font Awesome 类名，例如 "fa-brands fa-github" / "fa-solid fa-envelope" */
  icon: string
  url: string
}

export interface NewsItem {
  date: string
  /** 允许内嵌 <a> 链接（仅用于你自己信任的静态内容） */
  html: string
}

export interface ProjectLink {
  label: string
  url: string
}

export interface Project {
  title: string
  subtitle?: string
  desc: string
  links?: ProjectLink[]
}

export interface ExperienceItem {
  role: string
  org: string
  period: string
  points: string[]
}

export interface EducationItem {
  period: string
  degree: string
  school: string
  points: string[]
}

export interface HonorItem {
  text: string
}

export interface SkillGroup {
  category: string
  items: string[]
}

export interface LeadershipItem {
  role: string
  org: string
  period: string
  points: string[]
}

export interface Profile {
  name: string
  nameZh?: string
  location: string
  bio: string
  email: string
  phone?: string
  social: SocialLink[]
  about: string[]
  news: NewsItem[]
  projects: Project[]
  experience: ExperienceItem[]
  education: EducationItem[]
  honors: HonorItem[]
  skills: SkillGroup[]
  leadership: LeadershipItem[]
  /** 你的 CV 文件：把 PDF 放到 public/files/CV.pdf 后改成 "./files/CV.pdf" */
  cvUrl: string
}
