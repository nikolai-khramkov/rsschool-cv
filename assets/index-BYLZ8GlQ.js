//#region \0vite/modulepreload-polyfill.js
(function polyfill() {
	const relList = document.createElement("link").relList;
	if (relList && relList.supports && relList.supports("modulepreload")) return;
	for (const link of document.querySelectorAll("link[rel=\"modulepreload\"]")) processPreload(link);
	new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type !== "childList") continue;
			for (const node of mutation.addedNodes) if (node.tagName === "LINK" && node.rel === "modulepreload") processPreload(node);
		}
	}).observe(document, {
		childList: true,
		subtree: true
	});
	function getFetchOpts(link) {
		const fetchOpts = {};
		if (link.integrity) fetchOpts.integrity = link.integrity;
		if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
		if (link.crossOrigin === "use-credentials") fetchOpts.credentials = "include";
		else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
		else fetchOpts.credentials = "same-origin";
		return fetchOpts;
	}
	function processPreload(link) {
		if (link.ep) return;
		link.ep = true;
		const fetchOpts = getFetchOpts(link);
		fetch(link.href, fetchOpts);
	}
})();
//#endregion
//#region src/data.js
var site = {
	meta: {
		title: "Nikolai Khramkov — Full-Stack Developer / Product Engineer",
		description: "Full-Stack разработчик и product engineer. Python, TypeScript, Vue, Nuxt, PostgreSQL, AI. Москва."
	},
	person: {
		name: "Nikolai Khramkov",
		role: "Full-Stack Developer / Product Engineer",
		stack: "Python • TypeScript • Vue • Nuxt • PostgreSQL • AI",
		location: "Moscow, Russia",
		email: "nikolai.khramkov@gmail.com",
		telegram: "nikolai_khramkov",
		telegramUrl: "https://t.me/nikolai_khramkov",
		github: "https://github.com/nikolai-khramkov",
		githubLabel: "github.com/nikolai-khramkov",
		english: "B2"
	},
	nav: [
		{
			id: "home",
			label: "Home"
		},
		{
			id: "biography",
			label: "Biography"
		},
		{
			id: "work",
			label: "Work"
		},
		{
			id: "contact",
			label: "Contact"
		}
	],
	socials: [
		{
			name: "GitHub",
			href: "https://github.com/nikolai-khramkov",
			icon: "github"
		},
		{
			name: "Telegram",
			href: "https://t.me/nikolai_khramkov",
			icon: "telegram"
		},
		{
			name: "Email",
			href: "mailto:nikolai.khramkov@gmail.com",
			icon: "email"
		}
	],
	hero: {
		roles: [
			"Developer",
			"Engineer",
			"Founder"
		],
		headline: "Full-stack разработчик с продуктовым и стратегическим бэкграундом",
		about: ["Проектирую цифровые продукты с полным циклом ответственности: от бизнес-задачи и стратегии до запуска на рынке.", "Основной стек — Python, TypeScript, Vue, Nuxt, PostgreSQL, Linux и Docker. Параллельно получаю MSc в компьютерном зрении и ML."],
		resumeHref: "https://nikolai-khramkov.github.io/rsschool-cv/cv",
		resumeLabel: "Открыть резюме",
		scrollLabel: "Scroll down"
	},
	biography: {
		title: "My Biography",
		facts: [{
			title: "Location",
			text: "Москва, Россия.\nУдалённо или в городе."
		}, {
			title: "Education",
			text: "MBA — стратегический менеджмент, МГУ.\nMSc — компьютерное зрение и нейронные сети, ТГУ."
		}],
		timeline: [
			{
				year: "2+",
				title: "Full-Stack Developer / Product Engineer",
				period: "Продуктовая разработка",
				points: ["Пишу современный, поддерживаемый код для web-приложений, headless CMS, серверной инфраструктуры и AI-инструментов.", "Самостоятельно закрываю цикл: анализ задачи, архитектура данных, frontend, интеграции и деплой."]
			},
			{
				year: "16+",
				title: "Стратегический маркетолог",
				period: "Консультационная практика",
				points: ["Работаю с предпринимателями, руководителями и экспертами: позиционирование, рынок, конкуренты, JTBD, value proposition и go-to-market.", "Этот опыт использую в разработке, чтобы видеть продукт, пользователя и бизнес-ограничения, а не только код."]
			},
			{
				year: "20+",
				title: "Предпринимательство и управление",
				period: "Операции, финансы, продукт",
				points: ["Профессиональный опыт в операционном управлении, финансах, продуктовой работе и стратегическом маркетинге.", "Могу работать как разработчик и одновременно держать продуктовый и бизнес-контекст задачи."]
			}
		],
		skills: [
			{
				title: "Languages",
				items: [
					"Python",
					"TypeScript",
					"SQL",
					"HTML",
					"CSS"
				]
			},
			{
				title: "Frontend",
				items: [
					"Vue.js",
					"Nuxt 4",
					"SSR / CSR",
					"Tailwind CSS",
					"GSAP",
					"Motion-v",
					"Figma"
				]
			},
			{
				title: "Backend & CMS",
				items: [
					"FastAPI",
					"Payload CMS",
					"PostgreSQL"
				]
			},
			{
				title: "AI / ML",
				items: [
					"AI Agents",
					"Spec Dev",
					"CV",
					"Gen AI",
					"RAG",
					"Fine-tuning",
					"ComfyUI",
					"InvokeAI"
				]
			},
			{
				title: "DevOps",
				items: [
					"Linux",
					"Docker",
					"Git",
					"CI/CD",
					"VPS",
					"Proxmox",
					"Dokploy",
					"S3"
				]
			},
			{
				title: "Product",
				items: [
					"Product Ownership",
					"MVP",
					"Roadmap",
					"Jobs-to-be-Done",
					"Value Proposition"
				]
			}
		]
	},
	work: {
		title: "Projects",
		intro: "Последние проекты, в которых я проектировал маркетинг, создавал архитектуру, занимался full-stack разработкой и выводил на рынок.",
		items: [{
			title: "ВернадсКий",
			category: "Product Site / Nuxt 4 / Tailwind CSS",
			description: "Сайт бильярдного клуба Вернадский. Современный frontend с акцентом на вайб и конверсию.",
			href: "https://vernadski.ru/",
			image: "vernadski.webp"
		}, {
			title: "Max Tuguchev",
			category: "Personal Brand / Nuxt 4 / Tailwind CSS",
			description: "Персональный сайт советника по недвижимости в Дубае. Строгая типографика, двуязычность и ясная упаковка экспертизы.",
			href: "https://maxtuguchev.com/",
			image: "maxtuguchev.webp"
		}],
		moreLabel: "Все проекты на GitHub",
		moreHref: "https://github.com/nikolai-khramkov"
	},
	contact: {
		title: "Let's Work Together",
		questions: "Have Questions?",
		available: "I am Available at"
	},
	footer: {
		courseLabel: "RS School · Fullstack Engineering",
		courseHref: "https://github.com/rolling-scopes-school/tasks/tree/master/fullstack-engineering",
		logo: "rs-school-logo.svg",
		logoAlt: "RS School"
	}
};
//#endregion
//#region src/icons.js
var icons = {
	github: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Logos free icons by Streamline - https://creativecommons.org/licenses/by/4.0/ --><path fill="currentColor" d="M11.996 1.284a10.986 10.986 0 0 0-3.472 21.412c.548.095.722-.227.722-.517c0-.263.006-.991 0-1.91c-3.057.662-3.688-1.448-3.688-1.448a2.9 2.9 0 0 0-1.22-1.607c-.997-.682.075-.669.075-.669a2.3 2.3 0 0 1 1.683 1.131a2.34 2.34 0 0 0 3.197.914a2.34 2.34 0 0 1 .697-1.464c-2.439-.279-5.004-1.22-5.004-5.432a4.25 4.25 0 0 1 1.132-2.948a3.94 3.94 0 0 1 .107-2.907s.924-.295 3.02 1.128a10.4 10.4 0 0 1 5.503 0c2.102-1.422 3.018-1.128 3.018-1.128c.405.92.444 1.96.109 2.907a4.24 4.24 0 0 1 1.13 2.95c0 4.223-2.569 5.15-5.016 5.42a2.6 2.6 0 0 1 .752 2.026v3.041c0 .294.177.619.735.512a10.986 10.986 0 0 0-3.48-21.411"/></svg>`,
	telegram: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Logos free icons by Streamline - https://creativecommons.org/licenses/by/4.0/ --><path fill="currentColor" fill-rule="evenodd" d="M5 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4zm15 11a8 8 0 1 1-16 0a8 8 0 0 1 16 0m-12.986-.77a.19.19 0 0 0-.118.17c0 .074.049.144.118.17l1.929.704l.584 2.872v.004a.56.56 0 0 0 .147.286a.52.52 0 0 0 .525.12a2 2 0 0 0 .159-.076a7 7 0 0 0 .256-.151c.196-.12.444-.28.685-.436a86 86 0 0 0 .87-.573l.073-.048l1.905 1.378a.19.19 0 0 0 .17.023c.056-.02.1-.07.114-.128l1.787-7.519a.19.19 0 0 0-.056-.179a.19.19 0 0 0-.185-.033zm3.169 3.493l-.53-2.6l4.009-2.07a.11.11 0 0 1 .138.035a.11.11 0 0 1-.016.142l-3.012 2.702z" clip-rule="evenodd"/></svg>`,
	email: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><!-- Icon from Logos free icons by Streamline - https://creativecommons.org/licenses/by/4.0/ --><path fill="currentColor" fill-rule="evenodd" d="M3.688 4H2a1 1 0 0 0-1 1v.04l11 8.031l11-8.03V5a1 1 0 0 0-1-1h-1.688L12 9.92zm14.039 0L12 8.08L6.273 4zM23 6.898l-2.75 2.007V20H22a1 1 0 0 0 1-1zM18.75 20V10L12 14.928l-6.75-4.927V20zm-15 0V8.905L1 6.898V19a1 1 0 0 0 1 1z" clip-rule="evenodd"/></svg>`,
	arrow: `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.6" d="M12 4v16m0 0-6-6m6 6 6-6"/></svg>`
};
//#endregion
//#region src/main.js
var root = document.querySelector("#app");
var { person, nav, socials, hero, biography, work, contact, footer } = site;
var sectionAccent = {
	home: "#e7be21",
	biography: "#46b933",
	work: "#e86209",
	contact: "#75bbff"
};
function nl(text) {
	return text.replace(/\n/g, "<br>");
}
function socialList(extraClass = "") {
	return socials.map((item) => `
      <a class="inline-flex size-8 items-center justify-center text-current ${extraClass}" href="${item.href}" target="_blank" rel="noreferrer" aria-label="${item.name}">
        ${icons[item.icon]}
      </a>
    `).join("");
}
root.innerHTML = `
  <div class="lg:flex lg:min-h-screen">
    <aside class="hero-panel relative flex min-h-svh flex-col justify-between overflow-hidden px-8 py-10 text-white lg:sticky lg:top-0 lg:h-screen lg:w-1/2 lg:px-10" style="--hero-image: url('/rsschool-cv/nikolai_khramkov.webp')">
      <div class="relative z-10 flex items-start justify-between gap-6">
        <nav class="hidden flex-col gap-1 md:flex" aria-label="Primary">
          ${nav.map((item) => `
              <a class="nav-link" data-nav="${item.id}" href="#${item.id}">${item.label}</a>
            `).join("")}
        </nav>
        <button class="mobile-toggle md:hidden" type="button" aria-label="Open menu">
          <span class="block h-0.5 w-7 bg-white"></span>
          <span class="mt-1.5 block h-0.5 w-7 bg-white"></span>
          <span class="mt-1.5 block h-0.5 w-7 bg-white"></span>
        </button>
        <div class="hidden flex-col items-center gap-4 pt-2 md:flex">
          ${socialList()}
        </div>
      </div>


      <div class="relative z-10 space-y-3 text-[1.05rem] leading-7">
      <div class="relative z-10">
        <h1 class="display-title max-w-[19ch]">${person.name}</h1>
      </div>
        <a class="underline decoration-white/40 underline-offset-4 hover:decoration-white" href="mailto:${person.email}">${person.email}</a>
        <p class="text-white/80">${person.role}<br>${person.location}</p>
        <div class="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/70">
          <a class="hover:text-white" href="${person.github}" target="_blank" rel="noreferrer">GitHub</a>
          <a class="hover:text-white" href="${person.telegramUrl}" target="_blank" rel="noreferrer">Telegram</a>
          <span>English ${person.english}</span>
        </div>
      </div>
    </aside>

    <main class="lg:w-1/2">
      <section id="home" class="bg-gold px-8 py-12 lg:min-h-screen lg:px-10 lg:py-10">
        <h2 class="section-title font-black">${hero.roles.join("<br>")}</h2>
        <p class="mt-8 max-w-xl text-[2rem] leading-10 lg:text-[2.5rem] lg:leading-10">${hero.headline}</p>
        ${hero.about.map((p) => `<p class="mt-6 max-w-xl text-lg leading-7">${p}</p>`).join("")}
        <div class="mt-10">
          <a class="inline-block bg-ink px-7 py-3 text-lg text-white" href="${hero.resumeHref}" target="_blank" rel="noreferrer">${hero.resumeLabel}</a>
        </div>
        <a class="mt-6 inline-flex items-center gap-2 text-lg" href="#biography">
          ${hero.scrollLabel}
          <span class="inline-flex size-5 animate-bounce">${icons.arrow}</span>
        </a>
      </section>

      <section id="biography" class="bg-lime px-8 py-14 lg:px-10">
        <h2 class="section-title">${biography.title}</h2>
        <div class="mt-10 grid gap-10 sm:grid-cols-2">
          ${biography.facts.map((fact) => `
              <div>
                <h3 class="text-xl">${fact.title}</h3>
                <p class="mt-3 text-lg leading-7">${nl(fact.text)}</p>
              </div>
            `).join("")}
        </div>
        <div class="mt-16 space-y-14">
          ${biography.timeline.map((item) => `
              <article>
                <div class="grid  gap-6 sm:grid-cols-[6.5rem_1fr]">
                  <h3 class="text-[3.25rem] font-heading font-bold leading-none">${item.year}</h3>
                  <div>
                    <p class="text-[1.65rem] leading-8">${item.title}</p>
                    <p class="mt-2 text-lg">${item.period}</p>
                    <ul class="mt-5 space-y-3 text-lg leading-7">
                      ${item.points.map((point) => `<li class="flex gap-3"><span class="inline-flex rotate-270 size-5 mt-1.25">${icons.arrow}</span></span><span>${point}</span></li>`).join("")}
                    </ul>
                  </div>
                </div>
              </article>
            `).join("")}
        </div>
        <div class="mt-16 grid gap-8 sm:grid-cols-2">
          ${biography.skills.map((group) => `
              <div>
                <h3 class="text-xl font-bold">${group.title}</h3>
                <p class="mt-3 text-lg leading-7">${group.items.join(", ")}</p>
              </div>
            `).join("")}
        </div>
      </section>

      <section id="work" class="bg-flame px-8 py-14 lg:px-10">
        <h2 class="section-title">${work.title}</h2>
        <p class="mt-6 max-w-xl text-lg leading-7">${work.intro}</p>
        <div class="mt-12 space-y-12">
          ${work.items.map((item) => `
              <a class="work-card mt-15 block text-inherit no-underline" href="${item.href}" target="_blank" rel="noreferrer">
                <div class="overflow-hidden bg-ink">
                  <img class="work-cover aspect-4/2 w-full object-cover" src="/rsschool-cv/${item.image}" alt="${item.title}">
                </div>
                <h3 class="mt-6 text-[2.4rem] font-heading font-bold text-white leading-none">${item.title}</h3>
                <p class="mt-3 font-bold text-lg">${item.category}</p>
                <p class="mt-3 max-w-xl text-lg leading-7">${item.description}</p>
              </a>
            `).join("")}
        </div>
        <a class="mt-12 inline-block bg-ink px-7 py-3 text-lg text-white" href="${work.moreHref}" target="_blank" rel="noreferrer">${work.moreLabel}</a>
      </section>

      <section id="contact" class="flex min-h-svh flex-col bg-sky px-8 py-14 lg:min-h-screen lg:px-10">
        <h2 class="section-title">${contact.title}</h2>
        <h3 class="mt-10 text-[2.5rem] leading-none">${contact.questions}</h3>
        <div class="mt-6 space-y-3 text-lg">
          <a class="flex items-center gap-3 underline underline-offset-4" href="mailto:${person.email}">
            <span class="inline-flex mt-1.5 size-6 shrink-0 [&_svg]:size-full" aria-hidden="true">${icons.email}</span>
            ${person.email}
          </a>
          <a class="flex items-center gap-3 underline underline-offset-4" href="${person.telegramUrl}">
            <span class="inline-flex mt-1 size-6 shrink-0 [&_svg]:size-full" aria-hidden="true">${icons.telegram}</span>
            @${person.telegram}
          </a>
          <a class="flex items-center gap-3 underline underline-offset-4" href="${person.github}" target="_blank" rel="noreferrer">
            <span class="inline-flex mt-1 size-6 shrink-0 [&_svg]:size-full" aria-hidden="true">${icons.github}</span>
            ${person.githubLabel}
          </a>
        </div>

        <footer class="mt-16 lg:mt-auto">
          <a class="inline-flex items-center gap-4 text-inherit no-underline" href="${footer.courseHref}" target="_blank" rel="noreferrer">
            <img class="h-10 w-auto" src="/rsschool-cv/${footer.logo}" alt="${footer.logoAlt}">
            <span class="text-lg underline underline-offset-4">${footer.courseLabel}</span>
          </a>
        </footer>
      </section>
    </main>
  </div>

  <div class="mobile-menu fixed inset-0 z-50 hidden bg-ink px-8 py-10 text-white md:hidden">
    <div class="flex items-start justify-between">
      <nav class="flex flex-col gap-2">
        ${nav.map((item) => `
            <a class="nav-link" href="#${item.id}">${item.label}</a>
          `).join("")}
      </nav>
      <button class="mobile-close text-3xl leading-none" type="button" aria-label="Close menu">×</button>
    </div>
  </div>
`;
document.title = site.meta.title;
document.querySelector("meta[name=\"description\"]")?.setAttribute("content", site.meta.description);
var navLinks = [...document.querySelectorAll("nav[aria-label=\"Primary\"] [data-nav]")];
var sections = nav.map((item) => document.getElementById(item.id)).filter(Boolean);
var mobileMenu = document.querySelector(".mobile-menu");
function setActive(id) {
	navLinks.forEach((link) => {
		const active = link.dataset.nav === id;
		link.classList.toggle("is-active", active);
		link.style.setProperty("--nav-accent", sectionAccent[id] || "#46b933");
	});
}
function syncActiveFromScroll() {
	const marker = window.innerHeight * .35;
	let currentId = sections[0]?.id;
	for (const section of sections) if (section.getBoundingClientRect().top <= marker) currentId = section.id;
	if (currentId) setActive(currentId);
}
window.addEventListener("scroll", syncActiveFromScroll, { passive: true });
window.addEventListener("resize", syncActiveFromScroll);
syncActiveFromScroll();
document.querySelector(".mobile-toggle")?.addEventListener("click", () => {
	mobileMenu.classList.remove("hidden");
});
document.querySelector(".mobile-close")?.addEventListener("click", () => {
	mobileMenu.classList.add("hidden");
});
mobileMenu.querySelectorAll("a").forEach((link) => {
	link.addEventListener("click", () => mobileMenu.classList.add("hidden"));
});
//#endregion
