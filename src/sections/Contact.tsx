import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Section } from '../components/ui'
import { profile } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'

// 🧑‍🏫 导师讲解：Contact 是「受控组件(controlled component)」的范例（对应 EXERCISES.md L3-E8）。
// 每个 input 的 value 都来自 state，每次按键通过 onChange 更新 state ——
// React（而不是 DOM）才是"单一数据源"。提交时 e.preventDefault() 阻止整页刷新。
// 文案（Name/Email/...）走 t()，切换语言即变。
interface FormState {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const { t } = useLanguage()

  // 统一的更新函数：根据字段名(key)更新对应 state，避免写三个几乎一样的 onChange
  const update =
    (key: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [key]: e.target.value }))

  const onSubmit = (e: FormEvent) => {
    e.preventDefault() // 阻止浏览器默认的整页刷新
    // 真实项目里这里会 fetch('/api/contact', { method: 'POST', body: ... }) 发到后端；
    // 练习阶段只打印表单值 + 显示提示，证明受控数据流是通的。
    console.log('Contact form submitted:', form)
    setSent(true)
  }

  return (
    <Section id="contact" title={t('section_contact')}>
      <form className="contact-form" onSubmit={onSubmit}>
        <label>
          {t('contact_name')}
          <input type="text" value={form.name} onChange={update('name')} required />
        </label>
        <label>
          {t('contact_email')}
          <input type="email" value={form.email} onChange={update('email')} required />
        </label>
        <label>
          {t('contact_message')}
          <textarea rows={4} value={form.message} onChange={update('message')} required />
        </label>
        <button type="submit">{t('contact_send')}</button>
        {sent && <p className="contact-form__ok">{t('contact_ok')}</p>}
      </form>
      <p className="contact-form__hint">
        {t('contact_hint')}
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </p>
    </Section>
  )
}
