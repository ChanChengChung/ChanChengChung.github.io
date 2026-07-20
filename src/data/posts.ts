import type { Post } from '../types'

// 🧑‍🏫 导师讲解：这是「数据驱动 UI」的另一个范例（对应 EXERCISES.md L3-E9）。
// 把 Blog 内容单独拆成一个数据文件，和展示组件 Blog.tsx 解耦。
// 想加文章，只往这个数组里加一个对象，不用改任何组件 —— 这就是"内容与展示分离"。
export const posts: Post[] = [
  {
    title: 'Interning at NVIDIA: What HH-Former Taught Me',
    date: '2025-08-12',
    excerpt: 'Notes from a summer building vision models inside a real research team.',
    body: [
      'This summer I joined NVIDIA as a research assistant working on HH-Former, a hybrid architecture for efficient vision modeling.',
      'The biggest lesson was that iteration speed beats perfection in research — ship the experiment, read the result, adjust.',
    ],
    tags: ['research', 'computer-vision'],
  },
  {
    title: 'Building NovelFlow as a Co-founder',
    date: '2025-03-02',
    excerpt: 'Shipping an AI writing product from zero with a small team.',
    body: [
      'NovelFlow started as a side project and grew into a real product with paying users.',
      'Wearing both the engineering and product hats taught me prioritization: the best feature is the one that ships.',
    ],
    tags: ['startup', 'ai-product'],
  },
  {
    title: 'Reinforcement Learning at CUHK',
    date: '2024-11-20',
    excerpt: 'A short write-up of my RA work on RL agents.',
    body: [
      'Under my supervisor I explored reward shaping for sparse-reward tasks.',
      'Reproducibility turned out to be the hardest part of RL — seed management matters more than the algorithm.',
    ],
    tags: ['reinforcement-learning'],
  },
]
