export const site = {
  meta: {
    title: 'Николай Храмков — Full-Stack Developer / Product Engineer',
    description:
      'Full-Stack разработчик и product engineer. Python, TypeScript, Vue, Nuxt, PostgreSQL, AI. Москва.',
  },
  person: {
    name: 'Nikolai Khramkov',
    role: 'Full-Stack Developer / Product Engineer',
    stack: 'Python • TypeScript • Vue • Nuxt • PostgreSQL • AI',
    location: 'Moscow, Russia',
    email: 'nikolai.khramkov@gmail.com',
    telegram: 'nikolai_khramkov',
    telegramUrl: 'https://t.me/nikolai_khramkov',
    github: 'https://github.com/nikolai-khramkov',
    githubLabel: 'github.com/nikolai-khramkov',
    english: 'B2',
  },
  nav: [
    { id: 'home', label: 'Home' },
    { id: 'biography', label: 'Biography' },
    { id: 'work', label: 'Work' },
    { id: 'contact', label: 'Contact' },
  ],
  socials: [
    { name: 'GitHub', href: 'https://github.com/nikolai-khramkov', icon: 'github' },
    { name: 'Telegram', href: 'https://t.me/nikolai_khramkov', icon: 'telegram' },
    { name: 'Email', href: 'mailto:nikolai.khramkov@gmail.com', icon: 'email' },
  ],
  hero: {
    roles: ['Developer', 'Engineer', 'Founder'],
    headline:
      'Full-stack разработчик с продуктовым и стратегическим бэкграундом',
    about: [
      'Проектирую цифровые продукты с полным циклом ответственности: от бизнес-задачи и стратегии до запуска на рынке.',
      'Основной стек — Python, TypeScript, Vue, Nuxt, PostgreSQL, Linux и Docker. Параллельно получаю MSc в компьютерном зрении и ML.',
    ],
    resumeLabel: 'Открыть резюме',
    scrollLabel: 'Scroll down',
  },
  biography: {
    title: 'My Biography',
    facts: [
      {
        title: 'Location',
        text: 'Москва, Россия.\nУдалённо или в городе.',
      },
      {
        title: 'Education',
        text: 'MBA — стратегический менеджмент, МГУ.\nMSc — компьютерное зрение и нейронные сети, ТГУ.',
      },
    ],
    timeline: [
      {
        year: '2+',
        title: 'Full-Stack Developer / Product Engineer',
        period: 'Продуктовая разработка',
        points: [
          'Пишу современный, поддерживаемый код для web-приложений, headless CMS, серверной инфраструктуры и AI-инструментов.',
          'Самостоятельно закрываю цикл: анализ задачи, архитектура данных, frontend, интеграции и деплой.',
        ],
      },
      {
        year: '16+',
        title: 'Стратегический маркетолог',
        period: 'Консультационная практика',
        points: [
          'Работаю с предпринимателями, руководителями и экспертами: позиционирование, рынок, конкуренты, JTBD, value proposition и go-to-market.',
          'Этот опыт использую в разработке, чтобы видеть продукт, пользователя и бизнес-ограничения, а не только код.',
        ],
      },
      {
        year: '20+',
        title: 'Предпринимательство и управление',
        period: 'Операции, финансы, продукт',
        points: [
          'Профессиональный опыт в операционном управлении, финансах, продуктовой работе и стратегическом маркетинге.',
          'Могу работать как разработчик и одновременно держать продуктовый и бизнес-контекст задачи.',
        ],
      },
    ],
    skills: [
      {
        title: 'Languages',
        items: ['Python', 'TypeScript', 'SQL', 'HTML', 'CSS'],
      },
      {
        title: 'Frontend',
        items: [
          'Vue.js',
          'Nuxt 4',
          'SSR / CSR',
          'Tailwind CSS',
          'GSAP',
          'Motion-v',
          'Figma',
        ],
      },
      {
        title: 'Backend & CMS',
        items: ['FastAPI', 'Payload CMS', 'PostgreSQL'],
      },
      {
        title: 'AI / ML',
        items: [
          'AI Agents',
          'Spec Dev',
          'CV',
          'Gen AI',
          'RAG',
          'Fine-tuning',
          'ComfyUI',
          'InvokeAI',
        ],
      },
      {
        title: 'DevOps',
        items: [
          'Linux',
          'Docker',
          'Git',
          'CI/CD',
          'VPS',
          'Proxmox',
          'Dokploy',
          'S3'
        ],
      },
      {
        title: 'Product',
        items: [
          'Product Ownership',
          'MVP',
          'Roadmap',
          'Jobs-to-be-Done',
          'Value Proposition',
        ],
      },
    ],
  },
  work: {
    title: 'Projects',
    intro:
      'Последние проекты, в которых я проектировал маркетинг, создавал архитектуру, занимался full-stack разработкой и выводил на рынок.',
    items: [
      {
        title: 'ВернадсКий',
        category: 'Product Site / Nuxt 4 / Tailwind CSS',
        description:
          'Сайт бильярдного клуба Вернадский. Современный frontend с акцентом на вайб и конверсию.',
        href: 'https://vernadski.ru/',
        image: 'vernadski.webp',
      },
      {
        title: 'Max Tuguchev',
        category: 'Personal Brand / Nuxt 4 / Tailwind CSS',
        description:
          'Персональный сайт советника по недвижимости в Дубае. Строгая типографика, двуязычность и ясная упаковка экспертизы.',
        href: 'https://maxtuguchev.com/',
        image: 'maxtuguchev.webp',
      },
    ],
    moreLabel: 'Все проекты на GitHub',
    moreHref: 'https://github.com/nikolai-khramkov',
  },
  contact: {
    title: "Let's Work Together",
    questions: 'Have Questions?',
    available: 'I am Available at',
  },
  footer: {
    courseLabel: 'RS School · Fullstack Engineering',
    courseHref:
      'https://github.com/rolling-scopes-school/tasks/tree/master/fullstack-engineering',
    logo: 'rs-school-logo.svg',
    logoAlt: 'RS School',
  },
}
