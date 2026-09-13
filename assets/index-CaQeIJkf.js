(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const m of a.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();const h={meta:{title:"Николай Храмков — Full-Stack Developer / Product Engineer",description:"Full-Stack разработчик и product engineer. Python, TypeScript, Vue, Nuxt, PostgreSQL, AI. Москва."},person:{name:"Николай Храмков",role:"Full-Stack Developer / Product Engineer",location:"Москва, Россия",email:"nikolai.khramkov@gmail.com",telegram:"nikolai_khramkov",telegramUrl:"https://t.me/nikolai_khramkov",github:"https://github.com/nikolai-khramkov",githubLabel:"github.com/nikolai-khramkov",english:"B2"},nav:[{id:"home",label:"Home"},{id:"biography",label:"Biography"},{id:"work",label:"Work"},{id:"contact",label:"Contact"}],socials:[{name:"GitHub",href:"https://github.com/nikolai-khramkov",icon:"github"},{name:"Telegram",href:"https://t.me/nikolai_khramkov",icon:"telegram"},{name:"Email",href:"mailto:nikolai.khramkov@gmail.com",icon:"email"}],hero:{roles:["Developer","Engineer","Founder"],headline:"Full-stack разработчик с продуктовым и стратегическим бэкграундом",about:["Проектирую цифровые продукты целиком: от бизнес-задачи, сценариев и структуры данных до стека, frontend, backend и выкладки.","Основной стек — Python, TypeScript, Vue, Nuxt, PostgreSQL, Linux и Docker. Параллельно получаю MSc в компьютерном зрении и работаю с LLM, генеративными моделями и AI-агентами."],resumeLabel:"Открыть резюме",scrollLabel:"Scroll down"},biography:{title:"My Biography",facts:[{title:"Location",text:`Москва, Россия.
Живёт и работает удалённо и в городе.`},{title:"Education",text:`MSc — компьютерное зрение и нейронные сети, ТГУ.
MBA — стратегический менеджмент, МГУ.`}],timeline:[{year:"Сейчас",title:"Full-Stack Developer / Product Engineer",period:"Продуктовая разработка",points:["Пишу современный, поддерживаемый код для web-приложений, headless CMS, серверной инфраструктуры и AI-инструментов.","Самостоятельно закрываю цикл: анализ задачи, архитектура данных, frontend, интеграции и деплой."]},{year:"16 лет",title:"Стратегический маркетолог",period:"Консультационная практика",points:["Работал с предпринимателями, руководителями и экспертами: позиционирование, рынок, конкуренты, JTBD, value proposition и go-to-market.","Этот опыт использую в разработке, чтобы видеть продукт, пользователя и бизнес-ограничения, а не только код."]},{year:"20+ лет",title:"Предпринимательство и управление",period:"Операции, финансы, продукт",points:["Профессиональный опыт в операционном управлении, финансах, продуктовой работе и стратегическом маркетинге.","Могу работать как разработчик и одновременно держать продуктовый и бизнес-контекст задачи."]}],skills:[{title:"Languages",items:["Python","TypeScript","SQL","HTML","CSS"]},{title:"Frontend",items:["Vue.js","Nuxt 4","SSR / CSR","Tailwind CSS","DaisyUI","Nuxt UI","GSAP","Motion-v","Figma"]},{title:"Backend & CMS",items:["FastAPI","Payload CMS","PostgreSQL"]},{title:"AI / ML",items:["AI Agents","Computer Vision","Generative AI","RAG","Fine-tuning","ComfyUI","InvokeAI"]},{title:"DevOps",items:["Linux","Docker","Git","CI/CD","VPS / Proxmox","Dokploy","S3","DNS / SSL"]},{title:"Product",items:["Product Ownership","MVP","Roadmap","Jobs-to-be-Done","Value Proposition"]}]},work:{title:"My Work",intro:"Недавние проекты, которые я проектировал и собирал целиком — от структуры и интерфейса до запуска.",items:[{title:"ВернадсКий",category:"Nuxt / Product Site",description:"Сайт бильярдного клуба в Москве: атмосфера, тарифы, залы, ресторан и события. Современный frontend с акцентом на вайб и конверсию в запись.",href:"https://vernadski.ru/",image:"work-vernadski.svg"},{title:"Max Tuguchev",category:"Personal Brand / Vue",description:"Персональный сайт советника по недвижимости в Дубае. Строгая типографика, двуязычность и ясная упаковка экспертизы для капитальных решений.",href:"https://maxtuguchev.com/",image:"work-tuguchev.svg"}],moreLabel:"Все проекты на GitHub",moreHref:"https://github.com/nikolai-khramkov"},contact:{title:"Let's Work Together",questions:"Have Questions?",available:"I am Available at"}},v={github:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.33-1.75-1.33-1.75-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 12 .5Z"/></svg>',telegram:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M21.5 3.5 2.6 11.1c-1.3.5-1.29 1.16-.24 1.46l4.84 1.51 11.2-7.07c.53-.32 1.02-.15.62.23l-9.06 8.18-.35 3.96c.5 0 .72-.23.99-.5l2.39-2.32 4.96 3.67c.91.5 1.56.24 1.79-.85L22.9 4.9c.27-1.26-.46-1.83-1.4-1.4Z"/></svg>',email:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.7" d="M3.5 6.5h17v11h-17z"/><path fill="none" stroke="currentColor" stroke-width="1.7" d="m3.8 7 8.2 6.2L20.2 7"/></svg>',arrow:'<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.6" d="M12 4v16m0 0-6-6m6 6 6-6"/></svg>'},b=document.querySelector("#app"),{person:l,nav:g,socials:x,hero:s,biography:c,work:o,contact:p}=h,k={home:"#e7be21",biography:"#46b933",work:"#e86209",contact:"#75bbff"};function y(e){return e.replace(/\n/g,"<br>")}function u(e=""){return x.map(t=>`
      <a class="inline-flex size-8 items-center justify-center text-current ${e}" href="${t.href}" target="_blank" rel="noreferrer" aria-label="${t.name}">
        ${v[t.icon]}
      </a>
    `).join("")}b.innerHTML=`
  <div class="lg:flex lg:min-h-screen">
    <aside class="hero-panel relative flex min-h-[100svh] flex-col justify-between overflow-hidden px-8 py-10 text-white lg:sticky lg:top-0 lg:h-screen lg:w-1/2 lg:px-10" style="--hero-image: url('/rsschool-cv/nikolai_khramkov.webp')">
      <div class="relative z-10 flex items-start justify-between gap-6">
        <nav class="hidden flex-col gap-1 md:flex" aria-label="Primary">
          ${g.map(e=>`
              <a class="nav-link" data-nav="${e.id}" href="#${e.id}">${e.label}</a>
            `).join("")}
        </nav>
        <button class="mobile-toggle md:hidden" type="button" aria-label="Open menu">
          <span class="block h-0.5 w-7 bg-white"></span>
          <span class="mt-1.5 block h-0.5 w-7 bg-white"></span>
          <span class="mt-1.5 block h-0.5 w-7 bg-white"></span>
        </button>
        <div class="hidden flex-col items-center gap-4 pt-2 md:flex">
          ${u()}
        </div>
      </div>

      <div class="relative z-10">
        <h1 class="display-title max-w-[11ch]">${l.name}</h1>
      </div>

      <div class="relative z-10 space-y-3 text-[1.05rem] leading-7">
        <a class="underline decoration-white/40 underline-offset-4 hover:decoration-white" href="mailto:${l.email}">${l.email}</a>
        <p class="text-white/80">${l.role}<br>${l.location}</p>
        <div class="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/70">
          <a class="hover:text-white" href="${l.github}" target="_blank" rel="noreferrer">GitHub</a>
          <a class="hover:text-white" href="${l.telegramUrl}" target="_blank" rel="noreferrer">Telegram</a>
          <span>English ${l.english}</span>
        </div>
      </div>
    </aside>

    <main class="lg:w-1/2">
      <section id="home" class="bg-gold px-8 py-12 lg:min-h-screen lg:px-10 lg:py-10">
        <h2 class="section-title">${s.roles.join("<br>")}</h2>
        <p class="mt-8 max-w-xl text-[2rem] leading-10 lg:text-[2.5rem] lg:leading-[3.25rem]">${s.headline}</p>
        ${s.about.map(e=>`<p class="mt-6 max-w-xl text-lg leading-7">${e}</p>`).join("")}
        <div class="mt-10">
          <a class="inline-block bg-ink px-7 py-3 text-lg text-white" href="/rsschool-cv/cv.md" target="_blank" rel="noreferrer">${s.resumeLabel}</a>
        </div>
        <a class="mt-6 inline-flex items-center gap-2 text-lg" href="#biography">
          ${s.scrollLabel}
          <span class="inline-flex size-5">${v.arrow}</span>
        </a>
      </section>

      <section id="biography" class="bg-lime px-8 py-14 lg:px-10">
        <h2 class="section-title">${c.title}</h2>
        <div class="mt-10 grid gap-10 sm:grid-cols-2">
          ${c.facts.map(e=>`
              <div>
                <h3 class="text-xl">${e.title}</h3>
                <p class="mt-3 text-lg leading-7">${y(e.text)}</p>
              </div>
            `).join("")}
        </div>
        <div class="mt-16 space-y-14">
          ${c.timeline.map(e=>`
              <article>
                <div class="grid gap-6 sm:grid-cols-[7.5rem_1fr]">
                  <h3 class="text-[3.25rem] leading-none">${e.year}</h3>
                  <div>
                    <p class="text-[1.65rem] leading-8">${e.title}</p>
                    <p class="mt-2 text-lg">${e.period}</p>
                    <ul class="mt-5 space-y-3 text-lg leading-7">
                      ${e.points.map(t=>`<li class="flex gap-3"><span class="mt-2 size-1.5 shrink-0 rounded-full bg-ink"></span><span>${t}</span></li>`).join("")}
                    </ul>
                  </div>
                </div>
              </article>
            `).join("")}
        </div>
        <div class="mt-16 grid gap-8 sm:grid-cols-2">
          ${c.skills.map(e=>`
              <div>
                <h3 class="text-xl">${e.title}</h3>
                <p class="mt-3 text-lg leading-7">${e.items.join(", ")}</p>
              </div>
            `).join("")}
        </div>
      </section>

      <section id="work" class="bg-flame px-8 py-14 lg:px-10">
        <h2 class="section-title">${o.title}</h2>
        <p class="mt-6 max-w-xl text-lg leading-7">${o.intro}</p>
        <div class="mt-12 space-y-12">
          ${o.items.map(e=>`
              <a class="work-card block text-inherit no-underline" href="${e.href}" target="_blank" rel="noreferrer">
                <div class="overflow-hidden bg-ink">
                  <img class="work-cover aspect-[4/3] w-full object-cover" src="/rsschool-cv/${e.image}" alt="${e.title}">
                </div>
                <h3 class="mt-6 text-[2.4rem] leading-none">${e.title}</h3>
                <p class="mt-3 text-lg">${e.category}</p>
                <p class="mt-3 max-w-xl text-lg leading-7">${e.description}</p>
              </a>
            `).join("")}
        </div>
        <a class="mt-12 inline-block bg-ink px-7 py-3 text-lg text-white" href="${o.moreHref}" target="_blank" rel="noreferrer">${o.moreLabel}</a>
      </section>

      <section id="contact" class="bg-sky px-8 py-14 lg:min-h-screen lg:px-10">
        <h2 class="section-title">${p.title}</h2>
        <h3 class="mt-10 text-[2.5rem] leading-none">${p.questions}</h3>
        <div class="mt-6 space-y-1 text-lg">
          <a class="block underline underline-offset-4" href="mailto:${l.email}">${l.email}</a>
          <a class="block underline underline-offset-4" href="${l.telegramUrl}">@${l.telegram}</a>
          <a class="block underline underline-offset-4" href="${l.github}" target="_blank" rel="noreferrer">${l.githubLabel}</a>
        </div>
        <p class="mt-14 text-xl">${p.available}</p>
        <div class="mt-5 flex gap-4">
          ${u("size-6")}
        </div>
      </section>
    </main>
  </div>

  <div class="mobile-menu fixed inset-0 z-50 hidden bg-ink px-8 py-10 text-white md:hidden">
    <div class="flex items-start justify-between">
      <nav class="flex flex-col gap-2">
        ${g.map(e=>`
            <a class="nav-link" href="#${e.id}">${e.label}</a>
          `).join("")}
      </nav>
      <button class="mobile-close text-3xl leading-none" type="button" aria-label="Close menu">×</button>
    </div>
  </div>
`;document.title=h.meta.title;document.querySelector('meta[name="description"]')?.setAttribute("content",h.meta.description);const $=[...document.querySelectorAll('nav[aria-label="Primary"] [data-nav]')],w=g.map(e=>document.getElementById(e.id)).filter(Boolean),d=document.querySelector(".mobile-menu");function f(e){$.forEach(t=>{const r=t.dataset.nav===e;t.classList.toggle("is-active",r),t.style.setProperty("--nav-accent",k[e]||"#46b933")})}const L=new IntersectionObserver(e=>{const t=e.filter(r=>r.isIntersecting).sort((r,n)=>n.intersectionRatio-r.intersectionRatio)[0];t?.target?.id&&f(t.target.id)},{rootMargin:"-35% 0px -45% 0px",threshold:[.1,.25,.5]});w.forEach(e=>L.observe(e));f("home");document.querySelector(".mobile-toggle")?.addEventListener("click",()=>{d.classList.remove("hidden")});document.querySelector(".mobile-close")?.addEventListener("click",()=>{d.classList.add("hidden")});d.querySelectorAll("a").forEach(e=>{e.addEventListener("click",()=>d.classList.add("hidden"))});
