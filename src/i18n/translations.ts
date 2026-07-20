// =====================================================================
// 全站 UI 文案三语言字典（导航 / 板块标题 / Fun Facts / Contact 表单）
// 🧑‍🏫 i18n 核心思路：把「界面文字」集中在这里，组件只写 t('key')；
//    切换语言 = 换一本字典。简历正文内容仍在 src/data/profile.ts。
// =====================================================================

export type Lang = 'en' | 'zhCN' | 'zhTW'

// 语言切换按钮上显示的文字
export const LANG_LABELS: Record<Lang, string> = {
  en: 'EN',
  zhCN: '简',
  zhTW: '繁',
}

export const translations: Record<Lang, Record<string, string>> = {
  // ───────────── 英文（默认） ─────────────
  en: {
    nav_about: 'About',
    nav_news: 'News',
    nav_projects: 'Projects',
    nav_experience: 'Experience',
    nav_education: 'Education',
    nav_honors: 'Honors',
    nav_skills: 'Skills',
    nav_leadership: 'Leadership',
    nav_blog: 'Blog',
    nav_funfacts: 'Fun Facts',
    nav_contact: 'Contact',

    section_about: 'About Me',
    section_news: 'News',
    section_projects: 'Projects',
    section_experience: 'Experience & Work',
    section_education: 'Education',
    section_honors: 'Honors & Awards',
    section_skills: 'Skills',
    section_leadership: 'Leadership & Service',
    section_blog: 'Blog',
    section_funfacts: 'Fun Facts',
    section_contact: 'Contact',

    funfacts_title: 'have 30+ chiikawas, everyone has its unique Chinese & English Names',
    funfacts_intro: 'chiikawa lover, aficionado',
    funfacts_empty: 'More on the way',

    contact_name: 'Name',
    contact_email: 'Email',
    contact_message: 'Message',
    contact_send: 'Send',
    contact_ok: '✅ Printed to console (practice mode, not actually sent). Wire up onSubmit to connect a backend.',
    contact_hint: 'Or just email me directly:',

    theme_toggle: 'Toggle dark / light theme',
  },

  // ───────────── 简体中文 ─────────────
  zhCN: {
    nav_about: '关于',
    nav_news: '动态',
    nav_projects: '项目',
    nav_experience: '经历',
    nav_education: '教育',
    nav_honors: '荣誉',
    nav_skills: '技能',
    nav_leadership: '领导与服务',
    nav_blog: '博客',
    nav_funfacts: '趣闻',
    nav_contact: '联系',

    section_about: '关于我',
    section_news: '动态',
    section_projects: '项目',
    section_experience: '经历与工作',
    section_education: '教育',
    section_honors: '荣誉与奖项',
    section_skills: '技能',
    section_leadership: '领导与服务',
    section_blog: '博客',
    section_funfacts: '趣闻',
    section_contact: '联系',

    funfacts_title: '拥有 30+ 只 chiikawa，每一只都有独特的中英文名字',
    funfacts_intro: 'chiikawa 爱好者，资深玩家',
    funfacts_empty: '更多敬请期待',

    contact_name: '姓名',
    contact_email: '邮箱',
    contact_message: '留言',
    contact_send: '发送',
    contact_ok: '✅ 已打印到控制台（练习模式，未真正发送）。接后端时改 onSubmit 即可。',
    contact_hint: '也可以直接发邮件给我：',

    theme_toggle: '切换深色 / 浅色',
  },

  // ───────────── 繁体中文 ─────────────
  zhTW: {
    nav_about: '關於',
    nav_news: '動態',
    nav_projects: '專案',
    nav_experience: '經歷',
    nav_education: '教育',
    nav_honors: '榮譽',
    nav_skills: '技能',
    nav_leadership: '領導與服務',
    nav_blog: '部落格',
    nav_funfacts: '趣聞',
    nav_contact: '聯絡',

    section_about: '關於我',
    section_news: '動態',
    section_projects: '專案',
    section_experience: '經歷與工作',
    section_education: '教育',
    section_honors: '榮譽與獎項',
    section_skills: '技能',
    section_leadership: '領導與服務',
    section_blog: '部落格',
    section_funfacts: '趣聞',
    section_contact: '聯絡',

    funfacts_title: '擁有 30+ 隻 chiikawa，每一隻都有獨特的中英文名稱',
    funfacts_intro: 'chiikawa 愛好者，資深玩家',
    funfacts_empty: '更多敬請期待',

    contact_name: '姓名',
    contact_email: 'Email',
    contact_message: '留言',
    contact_send: '傳送',
    contact_ok: '✅ 已列印到主控台（練習模式，未真正傳送）。接後端時改 onSubmit 即可。',
    contact_hint: '也可以直接寄信給我：',

    theme_toggle: '切換深色 / 淺色',
  },
}
