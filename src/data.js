export const site = {
  meta: {
    title: 'Николай Храмков — Full-Stack Developer / Product Engineer',
    description:
      'Full-Stack разработчик и product engineer. Python, TypeScript, Vue, Nuxt, PostgreSQL, AI. Москва.',
  },
  person: {
    name: 'Николай Храмков',
    role: 'Full-Stack Developer / Product Engineer',
    stack: 'Python • TypeScript • Vue • Nuxt • PostgreSQL • AI',
    location: 'Москва, Россия',
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
      'Проектирую цифровые продукты целиком: от бизнес-задачи, сценариев и структуры данных до стека, frontend, backend и выкладки.',
      'Основной стек — Python, TypeScript, Vue, Nuxt, PostgreSQL, Linux и Docker. Параллельно получаю MSc в компьютерном зрении и работаю с LLM, генеративными моделями и AI-агентами.',
    ],
    resumeLabel: 'Открыть резюме',
    scrollLabel: 'Scroll down',
  },
  biography: {
    title: 'My Biography',
    facts: [
      {
        title: 'Location',
        text: 'Москва, Россия.\nЖивёт и работает удалённо и в городе.',
      },
      {
        title: 'Education',
        text: 'MSc — компьютерное зрение и нейронные сети, ТГУ.\nMBA — стратегический менеджмент, МГУ.',
      },
    ],
    timeline: [
      {
        year: 'Сейчас',
        title: 'Full-Stack Developer / Product Engineer',
        period: 'Продуктовая разработка',
        points: [
          'Пишу современный, поддерживаемый код для web-приложений, headless CMS, серверной инфраструктуры и AI-инструментов.',
          'Самостоятельно закрываю цикл: анализ задачи, архитектура данных, frontend, интеграции и деплой.',
        ],
      },
      {
        year: '16 лет',
        title: 'Стратегический маркетолог',
        period: 'Консультационная практика',
        points: [
          'Работал с предпринимателями, руководителями и экспертами: позиционирование, рынок, конкуренты, JTBD, value proposition и go-to-market.',
          'Этот опыт использую в разработке, чтобы видеть продукт, пользователя и бизнес-ограничения, а не только код.',
        ],
      },
      {
        year: '20+ лет',
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
          'DaisyUI',
          'Nuxt UI',
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
          'Computer Vision',
          'Generative AI',
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
          'VPS / Proxmox',
          'Dokploy',
          'S3',
          'DNS / SSL',
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
    title: 'My Work',
    intro:
      'Недавние проекты, которые я проектировал и собирал целиком — от структуры и интерфейса до запуска.',
    items: [
      {
        title: 'ВернадсКий',
        category: 'Nuxt / Product Site',
        description:
          'Сайт бильярдного клуба в Москве: атмосфера, тарифы, залы, ресторан и события. Современный frontend с акцентом на вайб и конверсию в запись.',
        href: 'https://vernadski.ru/',
        image: 'work-vernadski.svg',
      },
      {
        title: 'Max Tuguchev',
        category: 'Personal Brand / Vue',
        description:
          'Персональный сайт советника по недвижимости в Дубае. Строгая типографика, двуязычность и ясная упаковка экспертизы для капитальных решений.',
        href: 'https://maxtuguchev.com/',
        image: 'work-tuguchev.svg',
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
}
