import './style.css'
import { site } from './data.js'
import { icons } from './icons.js'

const root = document.querySelector('#app')
const { person, nav, socials, hero, biography, work, contact, footer } = site

const sectionAccent = {
  home: '#e7be21',
  biography: '#46b933',
  work: '#e86209',
  contact: '#75bbff',
}

function nl(text) {
  return text.replace(/\n/g, '<br>')
}

function socialList(extraClass = '') {
  return socials
    .map(
      (item) => `
      <a class="inline-flex size-8 items-center justify-center text-current ${extraClass}" href="${item.href}" target="_blank" rel="noreferrer" aria-label="${item.name}">
        ${icons[item.icon]}
      </a>
    `,
    )
    .join('')
}

root.innerHTML = `
  <div class="lg:flex lg:min-h-screen">
    <aside class="hero-panel relative flex min-h-svh flex-col justify-between overflow-hidden px-8 py-10 text-white lg:sticky lg:top-0 lg:h-screen lg:w-1/2 lg:px-10" style="--hero-image: url('${import.meta.env.BASE_URL}nikolai_khramkov.webp')">
      <div class="relative z-10 flex items-start justify-between gap-6">
        <nav class="hidden flex-col gap-1 md:flex" aria-label="Primary">
          ${nav
            .map(
              (item) => `
              <a class="nav-link" data-nav="${item.id}" href="#${item.id}">${item.label}</a>
            `,
            )
            .join('')}
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
        <h2 class="section-title font-black">${hero.roles.join('<br>')}</h2>
        <p class="mt-8 max-w-xl text-[2rem] leading-10 lg:text-[2.5rem] lg:leading-10">${hero.headline}</p>
        ${hero.about.map((p) => `<p class="mt-6 max-w-xl text-lg leading-7">${p}</p>`).join('')}
        <div class="mt-10">
          <a class="inline-block bg-ink px-7 py-3 text-lg text-white" href="${import.meta.env.BASE_URL}cv.md" target="_blank" rel="noreferrer">${hero.resumeLabel}</a>
        </div>
        <a class="mt-6 inline-flex items-center gap-2 text-lg" href="#biography">
          ${hero.scrollLabel}
          <span class="inline-flex size-5 animate-bounce">${icons.arrow}</span>
        </a>
      </section>

      <section id="biography" class="bg-lime px-8 py-14 lg:px-10">
        <h2 class="section-title">${biography.title}</h2>
        <div class="mt-10 grid gap-10 sm:grid-cols-2">
          ${biography.facts
            .map(
              (fact) => `
              <div>
                <h3 class="text-xl">${fact.title}</h3>
                <p class="mt-3 text-lg leading-7">${nl(fact.text)}</p>
              </div>
            `,
            )
            .join('')}
        </div>
        <div class="mt-16 space-y-14">
          ${biography.timeline
            .map(
              (item) => `
              <article>
                <div class="grid  gap-6 sm:grid-cols-[6.5rem_1fr]">
                  <h3 class="text-[3.25rem] font-heading font-bold leading-none">${item.year}</h3>
                  <div>
                    <p class="text-[1.65rem] leading-8">${item.title}</p>
                    <p class="mt-2 text-lg">${item.period}</p>
                    <ul class="mt-5 space-y-3 text-lg leading-7">
                      ${item.points.map((point) => `<li class="flex gap-3"><span class="inline-flex rotate-270 size-5 mt-1.25">${icons.arrow}</span></span><span>${point}</span></li>`).join('')}
                    </ul>
                  </div>
                </div>
              </article>
            `,
            )
            .join('')}
        </div>
        <div class="mt-16 grid gap-8 sm:grid-cols-2">
          ${biography.skills
            .map(
              (group) => `
              <div>
                <h3 class="text-xl font-bold">${group.title}</h3>
                <p class="mt-3 text-lg leading-7">${group.items.join(', ')}</p>
              </div>
            `,
            )
            .join('')}
        </div>
      </section>

      <section id="work" class="bg-flame px-8 py-14 lg:px-10">
        <h2 class="section-title">${work.title}</h2>
        <p class="mt-6 max-w-xl text-lg leading-7">${work.intro}</p>
        <div class="mt-12 space-y-12">
          ${work.items
            .map(
              (item) => `
              <a class="work-card mt-15 block text-inherit no-underline" href="${item.href}" target="_blank" rel="noreferrer">
                <div class="overflow-hidden bg-ink">
                  <img class="work-cover aspect-4/2 w-full object-cover" src="${import.meta.env.BASE_URL}${item.image}" alt="${item.title}">
                </div>
                <h3 class="mt-6 text-[2.4rem] font-heading font-bold text-white leading-none">${item.title}</h3>
                <p class="mt-3 font-bold text-lg">${item.category}</p>
                <p class="mt-3 max-w-xl text-lg leading-7">${item.description}</p>
              </a>
            `,
            )
            .join('')}
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
            <img class="h-10 w-auto" src="${import.meta.env.BASE_URL}${footer.logo}" alt="${footer.logoAlt}">
            <span class="text-lg underline underline-offset-4">${footer.courseLabel}</span>
          </a>
        </footer>
      </section>
    </main>
  </div>

  <div class="mobile-menu fixed inset-0 z-50 hidden bg-ink px-8 py-10 text-white md:hidden">
    <div class="flex items-start justify-between">
      <nav class="flex flex-col gap-2">
        ${nav
          .map(
            (item) => `
            <a class="nav-link" href="#${item.id}">${item.label}</a>
          `,
          )
          .join('')}
      </nav>
      <button class="mobile-close text-3xl leading-none" type="button" aria-label="Close menu">×</button>
    </div>
  </div>
`

document.title = site.meta.title
document.querySelector('meta[name="description"]')?.setAttribute('content', site.meta.description)

const navLinks = [...document.querySelectorAll('nav[aria-label="Primary"] [data-nav]')]
const sections = nav.map((item) => document.getElementById(item.id)).filter(Boolean)
const mobileMenu = document.querySelector('.mobile-menu')

function setActive(id) {
  navLinks.forEach((link) => {
    const active = link.dataset.nav === id
    link.classList.toggle('is-active', active)
    link.style.setProperty('--nav-accent', sectionAccent[id] || '#46b933')
  })
}

function syncActiveFromScroll() {
  const marker = window.innerHeight * 0.35
  let currentId = sections[0]?.id
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= marker) {
      currentId = section.id
    }
  }
  if (currentId) setActive(currentId)
}

window.addEventListener('scroll', syncActiveFromScroll, { passive: true })
window.addEventListener('resize', syncActiveFromScroll)
syncActiveFromScroll()

document.querySelector('.mobile-toggle')?.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden')
})
document.querySelector('.mobile-close')?.addEventListener('click', () => {
  mobileMenu.classList.add('hidden')
})
mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => mobileMenu.classList.add('hidden'))
})
