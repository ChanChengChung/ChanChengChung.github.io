import type { Profile } from '../types'

// =====================================================================
// 个人网站内容（全部来自你的简历，直接改这里的文字即可，无需动组件）
// 想改板块顺序：去 src/App.tsx 调整 <About/> <News/> ... 的排列
// 想换头像：把 src/components/Sidebar.tsx 里的占位 div 换成 <img>
// =====================================================================

export const profile: Profile = {
  name: 'Zeon Chen Zhengzhong',
  nameZh: '陳政中',
  location: 'Hong Kong SAR, China',
  bio: 'BSc Mathematics (Minor in AI) · CUHK · Co-founder & AI Developer at NovelFlow · Researcher (NVIDIA HH-Former, CUHK RL) · Quant enthusiast',
  email: 'zhengzhongchen2@gmail.com',
  phone: '(+852) 64061561',
  social: [
    { label: 'Email', icon: 'fa-solid fa-envelope', url: 'mailto:zhengzhongchen2@gmail.com' },
    { label: 'GitHub', icon: 'fa-brands fa-github', url: 'https://github.com/ChanChengChung' },
    { label: 'LinkedIn', icon: 'fa-brands fa-linkedin', url: 'https://www.linkedin.com/in/zhengzhong-chen-bbb764309/' },
  ],

  about: [
    "Hi, I'm Zeon Chen Zhengzhong (陳政中), a BSc Mathematics student (Minor in Artificial Intelligence) at the Chinese University of Hong Kong, expected to graduate in 2028.",
    'My work sits at the intersection of AI and product: I am the co-founder and AI developer of NovelFlow, an AI startup building a structured content-generation engine for long-form narratives such as game storytelling and scriptwriting. I also do research on novel Transformer architectures (HH-Former at NVIDIA) and reinforcement learning (CUHK), and I am passionate about quantitative trading.',
    'I care about building things that work end-to-end — from React frontends and FastAPI backends to PyTorch model implementations and data-driven performance analysis.',
  ],

  news: [
    {
      date: '2026',
      html: 'NovelFlow was <a href="https://www.novelflow.co/zh-cn/" target="_blank" rel="noreferrer">featured in the NVIDIA Startup Showcase (Guangzhou)</a> and selected for the HKSTP Ideation Program, CUHK PI-Centre (PILOTS Lite) Incubation, and CUHK VCCE Mentorship Program.',
    },
    {
      date: '2026',
      html: 'Won <strong>Second Prize</strong> at the RongPiao Cup High-Level Talent Innovation &amp; Entrepreneurship Competition (Greater Bay Area Division) and advanced to the Finals.',
    },
    {
      date: '2026',
      html: 'Secured <strong>130,000+ HKD</strong> in seed funding for NovelFlow (with further funding rounds in progress).',
    },
    {
      date: '2026',
      html: 'Selected as <strong>1 of 30 elite students</strong> for the Optiver FutureFocus Program (Shanghai, Tech Track) and invited to the QRT Live Trading Lab (Hong Kong).',
    },
    {
      date: '2026',
      html: 'Joined <strong>NVIDIA Hong Kong</strong> as a Student Researcher on HH-Former, and <strong>CUHK</strong> as a Research Assistant on Reinforcement Learning.',
    },
    {
      date: '2026',
      html: 'Served as Teaching Assistant for CUHK MATH0001 and won the <strong>S Prize</strong> at the MCM/ICM Mathematical Modelling Competition.',
    },
  ],

  projects: [
    {
      title: 'NovelFlow — AI Writing Platform',
      subtitle: 'Core Product · Co-founder & AI Developer',
      desc: 'A task-driven generation workflow that transforms abstract ideas into long-form, production-ready narratives. Led frontend development in React.js (10+ modular components), integrated multimodal image input, and connected the frontend to a PostgreSQL + FastAPI backend for scalable content storage.',
      links: [{ label: 'Website', url: 'https://www.novelflow.co/zh-cn/' }],
    },
    {
      title: 'HH-Former',
      subtitle: 'Student Researcher · NVIDIA Hong Kong',
      desc: 'A novel Transformer architecture integrating Hodgkin-Huxley dynamics to counteract token collapse and ensure representational diversity. Implemented dual-mode (Continuous/Discrete) ODE-based modules in PyTorch, optimizing inference latency via fixed-step Euler unrolling and torch.compile.',
    },
    {
      title: 'Reinforcement Learning Algorithms',
      subtitle: 'Research Assistant · CUHK (Sup. Dr. Wong Chak Fu Jeff)',
      desc: 'Research on the mathematical foundations of reinforcement learning, with hands-on implementations of Q-learning and Policy Gradient algorithms demonstrating core theoretical concepts.',
    },
    {
      title: 'Quantitative Trading Bots',
      subtitle: 'Optiver FutureFocus Program · Shanghai',
      desc: 'Engineered risk-control engines and implemented active arbitrage & passive market-making algorithms for a trading bot; programmed the circuit breaker and exchange order-book system. Ranked 7th in the Day-5 Optibook Showdown.',
    },
    {
      title: 'MCM/ICM 2026',
      subtitle: 'COMAP ICM Problem E',
      desc: 'Performed solar geometry and climate data analysis demonstrating 25–30% cooling-load reduction in retrofit scenarios; awarded the S Prize.',
    },
  ],

  experience: [
    {
      role: 'Co-founder | AI Developer & Data Analyst',
      org: 'NovelFlow (Zhu Liu Information Technology Co., Limited)',
      period: '11/2024 – present',
      points: [
        'Built a task-driven generation workflow integrating interactive outlining and model orchestration',
        'Led frontend development in React.js (10+ modular components), added multimodal image upload',
        'Integrated PostgreSQL + FastAPI backend for scalable, lightweight content storage',
        'Analyzed user interaction data (Python / Pandas / NumPy / SciPy); cut page load by 0.5s → +8% conversion',
      ],
    },
    {
      role: 'Student Researcher',
      org: 'NVIDIA Hong Kong (Sup. Dr. Ivan Au Yeung)',
      period: '05/2026 – 07/2026',
      points: [
        'Developed HH-Former, a Transformer with Hodgkin-Huxley dynamics to counteract token collapse',
        'Implemented dual-mode (Continuous/Discrete) ODE-based modules in PyTorch; optimized with torch.compile',
      ],
    },
    {
      role: 'Research Assistant',
      org: 'CUHK (Sup. Dr. Wong Chak Fu Jeff)',
      period: '03/2026 – 06/2026',
      points: [
        'Researched the mathematical foundations of reinforcement learning',
        'Implemented Q-learning & Policy Gradient algorithms',
      ],
    },
    {
      role: 'Optiver FutureFocus Program (Tech Track)',
      org: 'Optiver · Shanghai',
      period: '06/2026',
      points: [
        'Selected as 1 of 30 elite students for the intensive Tech Track',
        'Programmed the circuit breaker and exchange order-book receiving system',
      ],
    },
    {
      role: 'QRT Live Trading Lab',
      org: 'QRT · Hong Kong',
      period: '05/2026',
      points: [
        'Simulated macro trading strategies and priced complex instruments using real-time data',
      ],
    },
    {
      role: 'Teaching Assistant',
      org: 'CUHK MATH0001',
      period: '07/2026',
      points: [
        'Designed interactive Python Google Colab exercises (data preprocessing, regression, naive Bayes)',
      ],
    },
  ],

  education: [
    {
      period: '09/2023 – 06/2028 (Expected)',
      degree: 'BSc in Mathematics (Minor in Artificial Intelligence)',
      school: 'The Chinese University of Hong Kong',
      points: [
        'GPA: 3.686 / 4.0',
        'Stream: Mathematics and Multidisciplinary (Engineering & Computer Science Concentration)',
        'Honors: Dean’s List (2024, 2025); Chung Chi College Head List (2025); University Mathematics Scholarship (2025); Dr. Chao Yong Chi-hsing Scholarship in Mathematics (2025)',
        'Led 5+ cross-cultural programs and student events (50–500+ participants)',
      ],
    },
  ],

  honors: [
    { text: 'Second Prize, 2026 RongPiao Cup High-Level Talent Innovation & Entrepreneurship Competition (Greater Bay Area Division, advanced to Finals)' },
    { text: 'Featured in NVIDIA Startup Showcase (Guangzhou)' },
    { text: 'Selected for HKSTP Ideation Program' },
    { text: 'Selected for CUHK PI-Centre (PILOTS Lite) Incubation Program' },
    { text: 'Selected for CUHK VCCE Mentorship Program' },
    { text: 'Secured 130,000+ HKD seed funding for NovelFlow' },
    { text: 'Optiver FutureFocus Program — 1 of 30 elite students (Shanghai)' },
    { text: 'QRT Live Trading Lab 2026 invitee (Hong Kong)' },
    { text: 'Dean’s List, CUHK (2024, 2025)' },
    { text: 'Chung Chi College Head List (2025)' },
    { text: 'University Mathematics Scholarship (2025)' },
    { text: 'Dr. Chao Yong Chi-hsing Scholarship in Mathematics (2025)' },
    { text: 'S Prize, 2026 MCM/ICM Mathematical Modelling Competition' },
  ],

  skills: [
    { category: 'Programming', items: ['Python', 'SQL', 'TypeScript', 'C++'] },
    { category: 'AI / ML', items: ['Machine Learning', 'Deep Learning (PyTorch)', 'RNN', 'Transformer'] },
    { category: 'Data Analysis & Viz', items: ['Pandas', 'NumPy', 'SciPy', 'statsmodels', 'Matplotlib'] },
    { category: 'Tools', items: ['PostgreSQL', 'Docker', 'GitHub', 'Google Colab'] },
    { category: 'Certificates', items: ['Google Data Analytics', 'DeepLearning.AI Data Analytics'] },
    { category: 'Languages', items: ['Mandarin (Native)', 'Cantonese (Native)', 'English (Proficient)'] },
  ],

  leadership: [
    {
      role: 'Teaching Assistant',
      org: 'CUHK MATH0001',
      period: '07/2026',
      points: [
        'Designed interactive Python Colab exercises covering data preprocessing, linear/polynomial regressions, and naive Bayes classification',
      ],
    },
    {
      role: 'MCM/ICM Team Member',
      org: 'COMAP ICM 2026',
      period: '01/2026 – 02/2026',
      points: [
        'Solar geometry & climate data analysis for Problem E; awarded the S Prize',
      ],
    },
    {
      role: 'Student Leader',
      org: 'CUHK Extracurricular',
      period: '2023 – 2026',
      points: [
        'Led & organized 5+ cross-cultural programs and student events (50–500+ participants)',
      ],
    },
  ],

  // 把你的 CV 放到 public/files/CV.pdf 后，改成 "./files/CV.pdf"
  cvUrl: './files/CV.pdf',
}
