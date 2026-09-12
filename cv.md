# Николай Храмков

**Full-Stack Developer / Product Engineer**  
**Python • TypeScript • Vue • Nuxt • PostgreSQL • AI**

📍 Москва, Россия  
📧 nikolai.khramkov@gmail.com  
📱 @nikolai_khramkov  
🔗 GitHub: https://github.com/nikolai-khramkov  

---
## О себе

Разработчик с сильным предпринимательским, продуктовым и стратегическим бэкграундом.

Основной стек: **Python, TypeScript, Vue.js, Nuxt, PostgreSQL, Linux, Docker, Git**. Работаю с современными web-приложениями, headless CMS, базами данных, серверной инфраструктурой и AI-инструментами.

Имею опыт самостоятельного проектирования цифровых продуктов: от анализа бизнес-задачи, пользовательских сценариев и структуры данных до выбора технологического стека, разработки frontend, интеграции backend-сервисов и развёртывания.

Параллельно получаю MSc в области **компьютерного зрения и нейронных сетей**. Работаю с LLM, генеративными моделями, AI-агентами и инструментами компьютерного зрения.

Более 20 лет профессионального опыта в предпринимательстве, операционном управлении, финансах, продуктовой работе и стратегическом маркетинге позволяют понимать не только код, но и задачи бизнеса, пользователей и продукта.

---
## Ключевые технические навыки

### Языки
- Python
- TypeScript
- SQL
- HTML
- CSS
### Frontend
- Vue.js 
- Nuxt 4
- SSR / CSR
- Tailwind CSS
- DaisyUI
- Nuxt UI
- GSAP
- Motion-v
- Figma
### Backend и CMS
- Python
- FastAPI
- Payload CMS
### AI / Machine Learning
- AI Agents Development
- Open spec Development
- Computer Vision
- Generative AI
- основы fine-tuning
- основы RAG
- ComfyUI
- InvokeAI
### DevOps / Infrastructure
- Linux
- Docker / Compose
- Git
- SSH
- VPS / Proxmox
- S3-compatible storage
- CI/CD 
- Dokploy
- DNS / SSL

---
## Последние проекты
[https://vernadski.ru/](https://vernadski.ru/)  
[https://maxtuguchev.com/](https://maxtuguchev.com/)  

## Пример кода
```text
<script setup lang="ts">
const slides = 6

const track = ref<HTMLDivElement | null>(null)
const active = ref(0)
let frame = 0

function syncActive() {
  const el = track.value
  if (!el) return

  const viewCenter = el.getBoundingClientRect().left + el.clientWidth / 2
  let nearest = 0
  let minDistance = Number.POSITIVE_INFINITY

  for (let i = 0; i < el.children.length; i++) {
    const rect = (el.children[i] as HTMLElement).getBoundingClientRect()
    const distance = Math.abs(rect.left + rect.width / 2 - viewCenter)
    if (distance < minDistance) {
      minDistance = distance
      nearest = i
    }
  }

  active.value = nearest
}
</script>
```

### Стратегический маркетолог 

16 лет консультационной практики с предпринимателями, руководителями и высококвалифицированными специалистами. Основные компетенции:
- стратегическое позиционирование;
- анализ рынка;   
- конкурентный анализ;  
- продуктовая стратегия;   
- Customer Research;   
- Value Proposition;   
- Go-to-Market Strategy;   
- Jobs-to-be-Done;   
- психология потребительского поведения;   
- Narrative Design;   
- разработка новых продуктов.   

Стратегический опыт использую в IT для более глубокого понимания продукта, пользователя, бизнес-ограничений и целей разработки.

---
## Образование

### MSc — Компьютерное зрение и нейронные сети
Томский государственный университет  
### MBA — Стратегический менеджмент и предпринимательство
Московский государственный университет имени М. В. Ломоносова

---
## Управленческие и продуктовые компетенции
- Product Ownership
- Product Strategy
- постановка и декомпозиция задач
- проектирование MVP
- выбор технологического стека
- разработка roadmap
- управление приоритетами
- взаимодействие бизнеса и разработки
- анализ требований
- управление проектами
- работа с командами

Способен работать как разработчик и одновременно понимать продуктовый и бизнес-контекст задачи.

---
## Английский язык
**Уровень: B2**
