// Fun Facts 栏目的 chiikawa 照片墙数据。
// 🧑‍🏫 数据 / 展示分离：加照片 = 改这个文件，不动 FunFacts.tsx 组件。
// 规则：
//   - img   : 照片路径（放 public/images/chiikawas/ 下）。留空 = 占位空位卡片。
//   - zh/en : 照片下方显示的中文名 + 英文名（中英文对照是栏目本身的内容，不随语言切换）。
export interface Chiikawa {
  img?: string
  zh: string
  en: string
}

// 前 3 只是用户提供的真实照片；后面 30 个空位（img 留空）预留给用户继续添加。
export const chiikawas: Chiikawa[] = [
  { img: '/images/chiikawas/01-watermelon-taro.jpg', zh: '西瓜太郎', en: 'Watermelon Taro' },
  { img: '/images/chiikawas/02-gold-coin-chocolate.jpg', zh: '金币巧克力', en: 'Gold Coin Chocolate' },
  { img: '/images/chiikawas/03-grumpy-popsicle.jpg', zh: '暴躁雪糕', en: 'Grumpy Popsicle' },
  // —— 预留空位（至少 30 个），用户发来新照片后填上 img 与名字即可 ——
  ...Array.from({ length: 30 }, () => ({ zh: '', en: '' }) as Chiikawa),
]
