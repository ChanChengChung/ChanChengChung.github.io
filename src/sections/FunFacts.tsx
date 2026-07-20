import { Section } from '../components/ui'
import { chiikawas } from '../data/chiikawas'
import { useLanguage } from '../i18n/LanguageContext'

// 🧑‍🏫 Fun Facts 栏目：展示「我收藏的 30+ 只 chiikawa」，每张照片下方中英名对照。
// 语言切换只影响栏目标题 / 简介（走 t()）；照片墙里的中英名是内容本身，始终对照显示。
export default function FunFacts() {
  const { t } = useLanguage()
  return (
    <Section id="funfacts" title={t('section_funfacts')}>
      <div className="funfacts__hero">
        <h3 className="funfacts__title">{t('funfacts_title')}</h3>
        <p className="funfacts__intro">{t('funfacts_intro')}</p>
      </div>

      <div className="chiikawa-grid">
        {chiikawas.map((c, i) =>
          c.img ? (
            <figure className="chiikawa-card" key={i}>
              <img src={c.img} alt={`${c.zh} / ${c.en}`} loading="lazy" />
              <figcaption>
                <span className="chiikawa-card__zh">{c.zh}</span>
                <span className="chiikawa-card__en">{c.en}</span>
              </figcaption>
            </figure>
          ) : (
            // 空位占位卡：虚线框 + 相机图标，提示「待添加」
            <div className="chiikawa-card chiikawa-card--empty" key={i} aria-hidden>
              <i className="fa-solid fa-camera" />
              <span>{t('funfacts_empty')}</span>
            </div>
          )
        )}
      </div>
    </Section>
  )
}
