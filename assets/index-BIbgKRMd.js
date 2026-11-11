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
		about: ["Проектирую цифровые продукты с полным циклом ответственности — от бизнес-задачи и продуктовой стратегии до разработки и запуска.", "Основной стек: Python, TypeScript, Vue, Nuxt, PostgreSQL, Linux и Docker. Параллельно получаю MSc в CV и ML."],
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
//#region node_modules/lenis/dist/lenis.mjs
var version = "1.3.26";
/**
* Clamp a value between a minimum and maximum value
*
* @param min Minimum value
* @param input Value to clamp
* @param max Maximum value
* @returns Clamped value
*/
function clamp(min, input, max) {
	return Math.max(min, Math.min(input, max));
}
/**
*  Linearly interpolate between two values using an amount (0 <= t <= 1)
*
* @param x First value
* @param y Second value
* @param t Amount to interpolate (0 <= t <= 1)
* @returns Interpolated value
*/
function lerp(x, y, t) {
	return (1 - t) * x + t * y;
}
/**
* Damp a value over time using a damping factor
* {@link http://www.rorydriscoll.com/2016/03/07/frame-rate-independent-damping-using-lerp/}
*
* @param x Initial value
* @param y Target value
* @param lambda Damping factor
* @param dt Time elapsed since the last update
* @returns Damped value
*/
function damp(x, y, lambda, deltaTime) {
	return lerp(x, y, 1 - Math.exp(-lambda * deltaTime));
}
/**
* Calculate the modulo of the dividend and divisor while keeping the result within the same sign as the divisor
* {@link https://anguscroll.com/just/just-modulo}
*
* @param n Dividend
* @param d Divisor
* @returns Modulo
*/
function modulo(n, d) {
	return (n % d + d) % d;
}
/**
* Animate class to handle value animations with lerping or easing
*
* @example
* const animate = new Animate()
* animate.fromTo(0, 100, { duration: 1, easing: (t) => t })
* animate.advance(0.5) // 50
*/
var Animate = class {
	isRunning = false;
	value = 0;
	from = 0;
	to = 0;
	currentTime = 0;
	lerp;
	duration;
	easing;
	onUpdate;
	/**
	* Advance the animation by the given delta time
	*
	* @param deltaTime - The time in seconds to advance the animation
	*/
	advance(deltaTime) {
		if (!this.isRunning) return;
		let completed = false;
		if (this.duration && this.easing) {
			this.currentTime += deltaTime;
			const linearProgress = clamp(0, this.currentTime / this.duration, 1);
			completed = linearProgress >= 1;
			const easedProgress = completed ? 1 : this.easing(linearProgress);
			this.value = this.from + (this.to - this.from) * easedProgress;
		} else if (this.lerp) {
			this.value = damp(this.value, this.to, this.lerp * 60, deltaTime);
			if (Math.round(this.value) === Math.round(this.to)) {
				this.value = this.to;
				completed = true;
			}
		} else {
			this.value = this.to;
			completed = true;
		}
		if (completed) this.stop();
		this.onUpdate?.(this.value, completed);
	}
	/** Stop the animation */
	stop() {
		this.isRunning = false;
	}
	/**
	* Set up the animation from a starting value to an ending value
	* with optional parameters for lerping, duration, easing, and onUpdate callback
	*
	* @param from - The starting value
	* @param to - The ending value
	* @param options - Options for the animation
	*/
	fromTo(from, to, { lerp, duration, easing, onStart, onUpdate }) {
		this.from = this.value = from;
		this.to = to;
		this.lerp = lerp;
		this.duration = duration;
		this.easing = easing;
		this.currentTime = 0;
		this.isRunning = true;
		onStart?.();
		this.onUpdate = onUpdate;
	}
};
function debounce(callback, delay) {
	let timer;
	return function(...args) {
		clearTimeout(timer);
		timer = setTimeout(() => {
			timer = void 0;
			callback.apply(this, args);
		}, delay);
	};
}
/**
* Dimensions class to handle the size of the content and wrapper
*
* @example
* const dimensions = new Dimensions(wrapper, content)
* dimensions.on('resize', (e) => {
*   console.log(e.width, e.height)
* })
*/
var Dimensions = class {
	width = 0;
	height = 0;
	scrollHeight = 0;
	scrollWidth = 0;
	debouncedResize;
	wrapperResizeObserver;
	contentResizeObserver;
	constructor(wrapper, content, { autoResize = true, debounce: debounceValue = 250 } = {}) {
		this.wrapper = wrapper;
		this.content = content;
		if (autoResize) {
			this.debouncedResize = debounce(this.resize, debounceValue);
			if (this.wrapper instanceof Window) window.addEventListener("resize", this.debouncedResize);
			else {
				this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize);
				this.wrapperResizeObserver.observe(this.wrapper);
			}
			this.contentResizeObserver = new ResizeObserver(this.debouncedResize);
			this.contentResizeObserver.observe(this.content);
		}
		this.resize();
	}
	destroy() {
		this.wrapperResizeObserver?.disconnect();
		this.contentResizeObserver?.disconnect();
		if (this.wrapper === window && this.debouncedResize) window.removeEventListener("resize", this.debouncedResize);
	}
	resize = () => {
		this.onWrapperResize();
		this.onContentResize();
	};
	onWrapperResize = () => {
		if (this.wrapper instanceof Window) {
			this.width = window.innerWidth;
			this.height = window.innerHeight;
		} else {
			this.width = this.wrapper.clientWidth;
			this.height = this.wrapper.clientHeight;
		}
	};
	onContentResize = () => {
		if (this.wrapper instanceof Window) {
			this.scrollHeight = this.content.scrollHeight;
			this.scrollWidth = this.content.scrollWidth;
		} else {
			this.scrollHeight = this.wrapper.scrollHeight;
			this.scrollWidth = this.wrapper.scrollWidth;
		}
	};
	get limit() {
		return {
			x: this.scrollWidth - this.width,
			y: this.scrollHeight - this.height
		};
	}
};
/**
* Emitter class to handle events
* @example
* const emitter = new Emitter()
* emitter.on('event', (data) => {
*   console.log(data)
* })
* emitter.emit('event', 'data')
*/
var Emitter = class {
	events = {};
	/**
	* Emit an event with the given data
	* @param event Event name
	* @param args Data to pass to the event handlers
	*/
	emit(event, ...args) {
		const callbacks = this.events[event] || [];
		for (let i = 0, length = callbacks.length; i < length; i++) callbacks[i]?.(...args);
	}
	/**
	* Add a callback to the event
	* @param event Event name
	* @param cb Callback function
	* @returns Unsubscribe function
	*/
	on(event, cb) {
		if (this.events[event]) this.events[event].push(cb);
		else this.events[event] = [cb];
		return () => {
			this.events[event] = this.events[event]?.filter((i) => cb !== i);
		};
	}
	/**
	* Remove a callback from the event
	* @param event Event name
	* @param callback Callback function
	*/
	off(event, callback) {
		this.events[event] = this.events[event]?.filter((i) => callback !== i);
	}
	/**
	* Remove all event listeners and clean up
	*/
	destroy() {
		this.events = {};
	}
};
var LINE_HEIGHT = 100 / 6;
var listenerOptions = { passive: false };
function getDeltaMultiplier(deltaMode, size) {
	if (deltaMode === 1) return LINE_HEIGHT;
	if (deltaMode === 2) return size;
	return 1;
}
var VirtualScroll = class {
	touchStart = {
		x: 0,
		y: 0
	};
	lastDelta = {
		x: 0,
		y: 0
	};
	window = {
		width: 0,
		height: 0
	};
	emitter = new Emitter();
	constructor(element, options = {
		wheelMultiplier: 1,
		touchMultiplier: 1
	}) {
		this.element = element;
		this.options = options;
		window.addEventListener("resize", this.onWindowResize);
		this.onWindowResize();
		this.element.addEventListener("wheel", this.onWheel, listenerOptions);
		this.element.addEventListener("touchstart", this.onTouchStart, listenerOptions);
		this.element.addEventListener("touchmove", this.onTouchMove, listenerOptions);
		this.element.addEventListener("touchend", this.onTouchEnd, listenerOptions);
	}
	/**
	* Add an event listener for the given event and callback
	*
	* @param event Event name
	* @param callback Callback function
	*/
	on(event, callback) {
		return this.emitter.on(event, callback);
	}
	/** Remove all event listeners and clean up */
	destroy() {
		this.emitter.destroy();
		window.removeEventListener("resize", this.onWindowResize);
		this.element.removeEventListener("wheel", this.onWheel, listenerOptions);
		this.element.removeEventListener("touchstart", this.onTouchStart, listenerOptions);
		this.element.removeEventListener("touchmove", this.onTouchMove, listenerOptions);
		this.element.removeEventListener("touchend", this.onTouchEnd, listenerOptions);
	}
	/**
	* Event handler for 'touchstart' event
	*
	* @param event Touch event
	*/
	onTouchStart = (event) => {
		const { clientX, clientY } = event.targetTouches ? event.targetTouches[0] : event;
		this.touchStart.x = clientX;
		this.touchStart.y = clientY;
		this.lastDelta = {
			x: 0,
			y: 0
		};
		this.emitter.emit("scroll", {
			deltaX: 0,
			deltaY: 0,
			event
		});
	};
	/** Event handler for 'touchmove' event */
	onTouchMove = (event) => {
		const { clientX, clientY } = event.targetTouches ? event.targetTouches[0] : event;
		const deltaX = -(clientX - this.touchStart.x) * this.options.touchMultiplier;
		const deltaY = -(clientY - this.touchStart.y) * this.options.touchMultiplier;
		this.touchStart.x = clientX;
		this.touchStart.y = clientY;
		this.lastDelta = {
			x: deltaX,
			y: deltaY
		};
		this.emitter.emit("scroll", {
			deltaX,
			deltaY,
			event
		});
	};
	onTouchEnd = (event) => {
		this.emitter.emit("scroll", {
			deltaX: this.lastDelta.x,
			deltaY: this.lastDelta.y,
			event
		});
	};
	/** Event handler for 'wheel' event */
	onWheel = (event) => {
		let { deltaX, deltaY, deltaMode } = event;
		const multiplierX = getDeltaMultiplier(deltaMode, this.window.width);
		const multiplierY = getDeltaMultiplier(deltaMode, this.window.height);
		deltaX *= multiplierX;
		deltaY *= multiplierY;
		deltaX *= this.options.wheelMultiplier;
		deltaY *= this.options.wheelMultiplier;
		this.emitter.emit("scroll", {
			deltaX,
			deltaY,
			event
		});
	};
	onWindowResize = () => {
		this.window = {
			width: window.innerWidth,
			height: window.innerHeight
		};
	};
};
var defaultEasing = (t) => Math.min(1, 1.001 - 2 ** (-10 * t));
var Lenis = class {
	_isScrolling = false;
	_isStopped = false;
	_isLocked = false;
	_preventNextNativeScrollEvent = false;
	_resetVelocityTimeout = null;
	_rafId = null;
	_isDraggingSelection = false;
	reducedMotionMediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
	/**
	* Whether or not the user is touching the screen
	*/
	isTouching;
	/**
	* Whether or not the device is running iOS
	*/
	isIos;
	/**
	* The time in ms since the lenis instance was created
	*/
	time = 0;
	/**
	* User data that will be forwarded through the scroll event
	*
	* @example
	* lenis.scrollTo(100, {
	*   userData: {
	*     foo: 'bar'
	*   }
	* })
	*/
	userData = {};
	/**
	* The last velocity of the scroll
	*/
	lastVelocity = 0;
	/**
	* The current velocity of the scroll
	*/
	velocity = 0;
	/**
	* The direction of the scroll
	*/
	direction = 0;
	/**
	* The options passed to the lenis instance
	*/
	options;
	/**
	* The target scroll value
	*/
	targetScroll;
	/**
	* The animated scroll value
	*/
	animatedScroll;
	animate = new Animate();
	emitter = new Emitter();
	dimensions;
	virtualScroll;
	constructor({ wrapper = window, content = document.documentElement, eventsTarget = wrapper, smoothWheel = true, syncTouch = false, syncTouchLerp = .075, touchInertiaExponent = 1.7, duration, easing, lerp = .1, infinite = false, orientation = "vertical", gestureOrientation = orientation === "horizontal" ? "both" : "vertical", touchMultiplier = 1, wheelMultiplier = 1, autoResize = true, prevent, virtualScroll, overscroll = true, autoRaf = false, anchors = false, autoToggle = false, allowNestedScroll = false, __experimental__naiveDimensions = false, naiveDimensions = __experimental__naiveDimensions, stopInertiaOnNavigate = false, respectReducedMotion = true } = {}) {
		window.lenisVersion = version;
		if (!window.lenis) window.lenis = {};
		window.lenis.version = version;
		if (orientation === "horizontal") window.lenis.horizontal = true;
		if (syncTouch === true) window.lenis.touch = true;
		this.isIos = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
		if (!wrapper || wrapper === document.documentElement) wrapper = window;
		if (typeof duration === "number" && typeof easing !== "function") easing = defaultEasing;
		else if (typeof easing === "function" && typeof duration !== "number") duration = 1;
		this.options = {
			wrapper,
			content,
			eventsTarget,
			smoothWheel,
			syncTouch,
			syncTouchLerp,
			touchInertiaExponent,
			duration,
			easing,
			lerp,
			infinite,
			gestureOrientation,
			orientation,
			touchMultiplier,
			wheelMultiplier,
			autoResize,
			prevent,
			virtualScroll,
			overscroll,
			autoRaf,
			anchors,
			autoToggle,
			allowNestedScroll,
			naiveDimensions,
			stopInertiaOnNavigate,
			respectReducedMotion
		};
		this.dimensions = new Dimensions(wrapper, content, { autoResize });
		this.updateClassName();
		this.targetScroll = this.animatedScroll = this.actualScroll;
		this.options.wrapper.addEventListener("scroll", this.onNativeScroll);
		this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, { capture: true });
		if (this.options.anchors || this.options.stopInertiaOnNavigate) this.options.wrapper.addEventListener("click", this.onClick);
		this.options.wrapper.addEventListener("pointerdown", this.onPointerDown);
		this.virtualScroll = new VirtualScroll(eventsTarget, {
			touchMultiplier,
			wheelMultiplier
		});
		this.virtualScroll.on("scroll", this.onVirtualScroll);
		if (this.options.autoToggle) {
			this.checkOverflow();
			this.rootElement.addEventListener("transitionend", this.onTransitionEnd);
		}
		if (this.options.autoRaf) this._rafId = requestAnimationFrame(this.raf);
	}
	/**
	* Destroy the lenis instance, remove all event listeners and clean up the class name
	*/
	destroy() {
		this.emitter.destroy();
		this.options.wrapper.removeEventListener("scroll", this.onNativeScroll);
		this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, { capture: true });
		this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown);
		if (this.options.anchors || this.options.stopInertiaOnNavigate) this.options.wrapper.removeEventListener("click", this.onClick);
		this.virtualScroll.destroy();
		this.dimensions.destroy();
		this.cleanUpClassName();
		if (this._rafId) cancelAnimationFrame(this._rafId);
	}
	on(event, callback) {
		return this.emitter.on(event, callback);
	}
	off(event, callback) {
		return this.emitter.off(event, callback);
	}
	onScrollEnd = (e) => {
		if (!(e instanceof CustomEvent)) {
			if (this.isScrolling === "smooth" || this.isScrolling === false) e.stopPropagation();
		}
	};
	dispatchScrollendEvent = () => {
		this.options.wrapper.dispatchEvent(new CustomEvent("scrollend", {
			bubbles: this.options.wrapper === window,
			detail: { lenisScrollEnd: true }
		}));
	};
	get overflow() {
		const property = this.isHorizontal ? "overflow-x" : "overflow-y";
		return getComputedStyle(this.rootElement)[property];
	}
	checkOverflow() {
		if (["hidden", "clip"].includes(this.overflow)) this.internalStop();
		else this.internalStart();
	}
	onTransitionEnd = (event) => {
		if (event.propertyName?.includes("overflow") && event.target === this.rootElement) this.checkOverflow();
	};
	setScroll(scroll) {
		if (this.isHorizontal) this.options.wrapper.scrollTo({
			left: scroll,
			behavior: "instant"
		});
		else this.options.wrapper.scrollTo({
			top: scroll,
			behavior: "instant"
		});
	}
	onClick = (event) => {
		const linkElementsUrls = event.composedPath().filter((node) => node instanceof HTMLAnchorElement && node.href).map((element) => new URL(element.href));
		const currentUrl = new URL(window.location.href);
		if (this.options.anchors) {
			const anchorElementUrl = linkElementsUrls.find((targetUrl) => currentUrl.host === targetUrl.host && currentUrl.pathname === targetUrl.pathname && targetUrl.hash);
			if (anchorElementUrl) {
				const options = typeof this.options.anchors === "object" && this.options.anchors ? this.options.anchors : void 0;
				const target = decodeURIComponent(anchorElementUrl.hash);
				this.scrollTo(target, options);
				return;
			}
		}
		if (this.options.stopInertiaOnNavigate) {
			if (linkElementsUrls.some((targetUrl) => currentUrl.host === targetUrl.host && currentUrl.pathname !== targetUrl.pathname)) {
				this.reset();
				return;
			}
		}
	};
	onPointerDown = (event) => {
		if (event.button === 1) this.reset();
	};
	isTouchOnSelectionHandle(event) {
		const selection = window.getSelection();
		if (!selection || selection.isCollapsed || selection.rangeCount === 0) return false;
		const touch = event.targetTouches[0] ?? event.changedTouches[0];
		if (!touch) return false;
		const rects = selection.getRangeAt(0).getClientRects();
		if (rects.length === 0) return false;
		const first = rects[0];
		const last = rects[rects.length - 1];
		const HANDLE_RADIUS = 40;
		const nearStart = Math.hypot(touch.clientX - first.left, touch.clientY - first.top) <= HANDLE_RADIUS;
		const nearEnd = Math.hypot(touch.clientX - last.right, touch.clientY - last.bottom) <= HANDLE_RADIUS;
		return nearStart || nearEnd;
	}
	onVirtualScroll = (data) => {
		if (typeof this.options.virtualScroll === "function" && this.options.virtualScroll(data) === false) return;
		const { deltaX, deltaY, event } = data;
		this.emitter.emit("virtual-scroll", {
			deltaX,
			deltaY,
			event
		});
		if (event.ctrlKey) return;
		if (event.lenisStopPropagation) return;
		const isTouch = event.type.includes("touch");
		const isWheel = event.type.includes("wheel");
		if (isTouch && this.isIos) {
			if (event.type === "touchstart") this._isDraggingSelection = this.isTouchOnSelectionHandle(event);
			if (this._isDraggingSelection) {
				if (event.type === "touchend") this._isDraggingSelection = false;
				return;
			}
		}
		this.isTouching = event.type === "touchstart" || event.type === "touchmove";
		const isClickOrTap = deltaX === 0 && deltaY === 0;
		if (this.options.syncTouch && isTouch && event.type === "touchstart" && isClickOrTap && !this.isStopped && !this.isLocked) {
			this.reset();
			return;
		}
		const isUnknownGesture = this.options.gestureOrientation === "vertical" && deltaY === 0 || this.options.gestureOrientation === "horizontal" && deltaX === 0;
		if (isClickOrTap || isUnknownGesture) return;
		let composedPath = event.composedPath();
		composedPath = composedPath.slice(0, composedPath.indexOf(this.rootElement));
		const prevent = this.options.prevent;
		const gestureOrientation = Math.abs(deltaX) >= Math.abs(deltaY) ? "horizontal" : "vertical";
		if (composedPath.find((node) => node instanceof HTMLElement && (typeof prevent === "function" && prevent?.(node) || node.hasAttribute?.("data-lenis-prevent") || gestureOrientation === "vertical" && node.hasAttribute?.("data-lenis-prevent-vertical") || gestureOrientation === "horizontal" && node.hasAttribute?.("data-lenis-prevent-horizontal") || isTouch && node.hasAttribute?.("data-lenis-prevent-touch") || isWheel && node.hasAttribute?.("data-lenis-prevent-wheel") || this.options.allowNestedScroll && this.hasNestedScroll(node, {
			deltaX,
			deltaY
		})))) return;
		if (this.isStopped || this.isLocked) {
			if (event.cancelable) event.preventDefault();
			return;
		}
		if (!(this.options.syncTouch && isTouch || this.options.smoothWheel && isWheel)) {
			this.isScrolling = "native";
			this.animate.stop();
			event.lenisStopPropagation = true;
			return;
		}
		let delta = deltaY;
		if (this.options.gestureOrientation === "both") delta = Math.abs(deltaY) > Math.abs(deltaX) ? deltaY : deltaX;
		else if (this.options.gestureOrientation === "horizontal") delta = deltaX;
		if (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && this.limit > 0 && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && deltaY > 0 || this.animatedScroll === this.limit && deltaY < 0)) event.lenisStopPropagation = true;
		if (event.cancelable) event.preventDefault();
		const isSyncTouch = isTouch && this.options.syncTouch;
		const hasTouchInertia = isTouch && event.type === "touchend";
		if (hasTouchInertia) delta = Math.sign(delta) * Math.abs(this.velocity) ** this.options.touchInertiaExponent;
		this.scrollTo(this.targetScroll + delta, {
			programmatic: false,
			...isSyncTouch ? { lerp: hasTouchInertia ? this.options.syncTouchLerp : 1 } : {
				lerp: this.options.lerp,
				duration: this.options.duration,
				easing: this.options.easing
			}
		});
	};
	/**
	* Force lenis to recalculate the dimensions
	*/
	resize() {
		this.dimensions.resize();
		this.animatedScroll = this.targetScroll = this.actualScroll;
		this.emit();
	}
	emit() {
		this.emitter.emit("scroll", this);
	}
	onNativeScroll = () => {
		if (this._resetVelocityTimeout !== null) {
			clearTimeout(this._resetVelocityTimeout);
			this._resetVelocityTimeout = null;
		}
		if (this._preventNextNativeScrollEvent) {
			this._preventNextNativeScrollEvent = false;
			return;
		}
		if (this.isScrolling === false || this.isScrolling === "native") {
			const lastScroll = this.animatedScroll;
			this.animatedScroll = this.targetScroll = this.actualScroll;
			this.lastVelocity = this.velocity;
			this.velocity = this.animatedScroll - lastScroll;
			this.direction = Math.sign(this.animatedScroll - lastScroll);
			if (!this.isStopped) this.isScrolling = "native";
			this.emit();
			if (this.velocity !== 0) this._resetVelocityTimeout = setTimeout(() => {
				this.lastVelocity = this.velocity;
				this.velocity = 0;
				this.isScrolling = false;
				this.emit();
			}, 400);
		}
	};
	reset() {
		this.isLocked = false;
		this.isScrolling = false;
		this.animatedScroll = this.targetScroll = this.actualScroll;
		this.lastVelocity = this.velocity = 0;
		this.animate.stop();
	}
	/**
	* Start lenis scroll after it has been stopped
	*/
	start() {
		if (!this.isStopped) return;
		if (this.options.autoToggle) {
			this.rootElement.style.removeProperty("overflow");
			return;
		}
		this.internalStart();
	}
	internalStart() {
		if (!this.isStopped) return;
		this.reset();
		this.isStopped = false;
		this.emit();
	}
	/**
	* Stop lenis scroll
	*/
	stop() {
		if (this.isStopped) return;
		if (this.options.autoToggle) {
			this.rootElement.style.setProperty("overflow", "clip");
			return;
		}
		this.internalStop();
	}
	internalStop() {
		if (this.isStopped) return;
		this.reset();
		this.isStopped = true;
		this.emit();
	}
	/**
	* RequestAnimationFrame for lenis
	*
	* @param time The time in ms from an external clock like `requestAnimationFrame` or Tempus
	*/
	raf = (time) => {
		const deltaTime = time - (this.time || time);
		this.time = time;
		this.animate.advance(deltaTime * .001);
		if (this.options.autoRaf) this._rafId = requestAnimationFrame(this.raf);
	};
	/**
	* Scroll to a target value
	*
	* @param target The target value to scroll to
	* @param options The options for the scroll
	*
	* @example
	* lenis.scrollTo(100, {
	*   offset: 100,
	*   duration: 1,
	*   easing: (t) => 1 - Math.cos((t * Math.PI) / 2),
	*   lerp: 0.1,
	*   onStart: () => {
	*     console.log('onStart')
	*   },
	*   onComplete: () => {
	*     console.log('onComplete')
	*   },
	* })
	*/
	scrollTo(_target, { offset = 0, immediate = false, lock = false, programmatic = true, lerp = programmatic ? this.options.lerp : void 0, duration = programmatic ? this.options.duration : void 0, easing = programmatic ? this.options.easing : void 0, onStart, onComplete, force = false, userData } = {}) {
		if (this.prefersReducedMotion) if (programmatic) immediate = true;
		else {
			lerp = 1;
			duration = void 0;
			easing = void 0;
		}
		if ((this.isStopped || this.isLocked) && !force) return;
		let target = _target;
		let adjustedOffset = offset;
		if (typeof target === "string" && [
			"top",
			"left",
			"start",
			"#"
		].includes(target)) target = 0;
		else if (typeof target === "string" && [
			"bottom",
			"right",
			"end"
		].includes(target)) target = this.limit;
		else {
			let node = null;
			if (typeof target === "string") {
				node = target.startsWith("#") ? document.getElementById(target.slice(1)) : document.querySelector(target);
				if (!node) if (target === "#top") target = 0;
				else console.warn("Lenis: Target not found", target);
			} else if (target instanceof HTMLElement && target?.nodeType) node = target;
			if (node) {
				if (this.options.wrapper !== window) {
					const wrapperRect = this.rootElement.getBoundingClientRect();
					adjustedOffset -= this.isHorizontal ? wrapperRect.left : wrapperRect.top;
				}
				const rect = node.getBoundingClientRect();
				const targetStyle = getComputedStyle(node);
				const scrollMargin = this.isHorizontal ? Number.parseFloat(targetStyle.scrollMarginLeft) : Number.parseFloat(targetStyle.scrollMarginTop);
				const containerStyle = getComputedStyle(this.rootElement);
				const scrollPadding = this.isHorizontal ? Number.parseFloat(containerStyle.scrollPaddingLeft) : Number.parseFloat(containerStyle.scrollPaddingTop);
				target = (this.isHorizontal ? rect.left : rect.top) + this.animatedScroll - (Number.isNaN(scrollMargin) ? 0 : scrollMargin) - (Number.isNaN(scrollPadding) ? 0 : scrollPadding);
			}
		}
		if (typeof target !== "number") return;
		target += adjustedOffset;
		if (this.options.infinite) {
			if (programmatic) {
				this.targetScroll = this.animatedScroll = this.scroll;
				const distance = target - this.animatedScroll;
				if (distance > this.limit / 2) target -= this.limit;
				else if (distance < -this.limit / 2) target += this.limit;
			}
		} else target = clamp(0, target, this.limit);
		if (target === this.targetScroll) {
			onStart?.(this);
			onComplete?.(this);
			return;
		}
		this.userData = userData ?? {};
		if (immediate) {
			this.animatedScroll = this.targetScroll = target;
			this.setScroll(this.scroll);
			this.reset();
			this.preventNextNativeScrollEvent();
			this.emit();
			onComplete?.(this);
			this.userData = {};
			requestAnimationFrame(() => {
				this.dispatchScrollendEvent();
			});
			return;
		}
		if (!programmatic) this.targetScroll = target;
		if (typeof duration === "number" && typeof easing !== "function") easing = defaultEasing;
		else if (typeof easing === "function" && typeof duration !== "number") duration = 1;
		this.animate.fromTo(this.animatedScroll, target, {
			duration,
			easing,
			lerp,
			onStart: () => {
				if (lock) this.isLocked = true;
				this.isScrolling = "smooth";
				onStart?.(this);
			},
			onUpdate: (value, completed) => {
				this.isScrolling = "smooth";
				this.lastVelocity = this.velocity;
				this.velocity = value - this.animatedScroll;
				this.direction = Math.sign(this.velocity);
				this.animatedScroll = value;
				this.setScroll(this.scroll);
				if (programmatic) this.targetScroll = value;
				if (!completed) this.emit();
				if (completed) {
					this.reset();
					this.emit();
					onComplete?.(this);
					this.userData = {};
					requestAnimationFrame(() => {
						this.dispatchScrollendEvent();
					});
					this.preventNextNativeScrollEvent();
				}
			}
		});
	}
	preventNextNativeScrollEvent() {
		this._preventNextNativeScrollEvent = true;
		requestAnimationFrame(() => {
			this._preventNextNativeScrollEvent = false;
		});
	}
	hasNestedScroll(node, { deltaX, deltaY }) {
		const time = Date.now();
		if (!node._lenis) node._lenis = {};
		const cache = node._lenis;
		let hasOverflowX;
		let hasOverflowY;
		let isScrollableX;
		let isScrollableY;
		let hasOverscrollBehaviorX;
		let hasOverscrollBehaviorY;
		let scrollWidth;
		let scrollHeight;
		let clientWidth;
		let clientHeight;
		if (time - (cache.time ?? 0) > 2e3) {
			cache.time = Date.now();
			const computedStyle = window.getComputedStyle(node);
			cache.computedStyle = computedStyle;
			hasOverflowX = [
				"auto",
				"overlay",
				"scroll"
			].includes(computedStyle.overflowX);
			hasOverflowY = [
				"auto",
				"overlay",
				"scroll"
			].includes(computedStyle.overflowY);
			hasOverscrollBehaviorX = ["auto"].includes(computedStyle.overscrollBehaviorX);
			hasOverscrollBehaviorY = ["auto"].includes(computedStyle.overscrollBehaviorY);
			cache.hasOverflowX = hasOverflowX;
			cache.hasOverflowY = hasOverflowY;
			if (!(hasOverflowX || hasOverflowY)) return false;
			scrollWidth = node.scrollWidth;
			scrollHeight = node.scrollHeight;
			clientWidth = node.clientWidth;
			clientHeight = node.clientHeight;
			isScrollableX = scrollWidth > clientWidth;
			isScrollableY = scrollHeight > clientHeight;
			cache.isScrollableX = isScrollableX;
			cache.isScrollableY = isScrollableY;
			cache.scrollWidth = scrollWidth;
			cache.scrollHeight = scrollHeight;
			cache.clientWidth = clientWidth;
			cache.clientHeight = clientHeight;
			cache.hasOverscrollBehaviorX = hasOverscrollBehaviorX;
			cache.hasOverscrollBehaviorY = hasOverscrollBehaviorY;
		} else {
			isScrollableX = cache.isScrollableX;
			isScrollableY = cache.isScrollableY;
			hasOverflowX = cache.hasOverflowX;
			hasOverflowY = cache.hasOverflowY;
			scrollWidth = cache.scrollWidth;
			scrollHeight = cache.scrollHeight;
			clientWidth = cache.clientWidth;
			clientHeight = cache.clientHeight;
			hasOverscrollBehaviorX = cache.hasOverscrollBehaviorX;
			hasOverscrollBehaviorY = cache.hasOverscrollBehaviorY;
		}
		if (!(hasOverflowX && isScrollableX || hasOverflowY && isScrollableY)) return false;
		const orientation = Math.abs(deltaX) >= Math.abs(deltaY) ? "horizontal" : "vertical";
		let scroll;
		let maxScroll;
		let delta;
		let hasOverflow;
		let isScrollable;
		let hasOverscrollBehavior;
		if (orientation === "horizontal") {
			scroll = Math.round(node.scrollLeft);
			maxScroll = scrollWidth - clientWidth;
			delta = deltaX;
			hasOverflow = hasOverflowX;
			isScrollable = isScrollableX;
			hasOverscrollBehavior = hasOverscrollBehaviorX;
		} else if (orientation === "vertical") {
			scroll = Math.round(node.scrollTop);
			maxScroll = scrollHeight - clientHeight;
			delta = deltaY;
			hasOverflow = hasOverflowY;
			isScrollable = isScrollableY;
			hasOverscrollBehavior = hasOverscrollBehaviorY;
		} else return false;
		if (!hasOverscrollBehavior && (scroll >= maxScroll || scroll <= 0)) return true;
		return (delta > 0 ? scroll < maxScroll : scroll > 0) && hasOverflow && isScrollable;
	}
	/**
	* The root element on which lenis is instanced
	*/
	get rootElement() {
		return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
	}
	/**
	* The limit which is the maximum scroll value
	*/
	get limit() {
		if (this.options.naiveDimensions) {
			if (this.isHorizontal) return this.rootElement.scrollWidth - this.rootElement.clientWidth;
			return this.rootElement.scrollHeight - this.rootElement.clientHeight;
		}
		return this.dimensions.limit[this.isHorizontal ? "x" : "y"];
	}
	/**
	* Whether or not the scroll is horizontal
	*/
	get isHorizontal() {
		return this.options.orientation === "horizontal";
	}
	/**
	* The actual scroll value
	*/
	get actualScroll() {
		const wrapper = this.options.wrapper;
		return this.isHorizontal ? wrapper.scrollX ?? wrapper.scrollLeft : wrapper.scrollY ?? wrapper.scrollTop;
	}
	/**
	* The current scroll value
	*/
	get scroll() {
		return this.options.infinite ? modulo(this.animatedScroll, this.limit) : this.animatedScroll;
	}
	/**
	* The progress of the scroll relative to the limit
	*/
	get progress() {
		return this.limit === 0 ? 1 : this.scroll / this.limit;
	}
	/**
	* Current scroll state
	*/
	get isScrolling() {
		return this._isScrolling;
	}
	set isScrolling(value) {
		if (this._isScrolling !== value) {
			this._isScrolling = value;
			this.updateClassName();
		}
	}
	/**
	* Check if lenis is stopped
	*/
	get isStopped() {
		return this._isStopped;
	}
	set isStopped(value) {
		if (this._isStopped !== value) {
			this._isStopped = value;
			this.updateClassName();
		}
	}
	/**
	* Check if lenis is locked
	*/
	get isLocked() {
		return this._isLocked;
	}
	set isLocked(value) {
		if (this._isLocked !== value) {
			this._isLocked = value;
			this.updateClassName();
		}
	}
	/**
	* Check if lenis is smooth scrolling
	*/
	get isSmooth() {
		return this.isScrolling === "smooth";
	}
	/**
	* Whether the user prefers reduced motion and lenis is honoring it (see `respectReducedMotion` option)
	*/
	get prefersReducedMotion() {
		return this.options.respectReducedMotion && this.reducedMotionMediaQuery.matches;
	}
	/**
	* The class name applied to the wrapper element
	*/
	get className() {
		let className = "lenis";
		if (this.options.autoToggle) className += " lenis-autoToggle";
		if (this.isStopped) className += " lenis-stopped";
		if (this.isLocked) className += " lenis-locked";
		if (this.isScrolling) className += " lenis-scrolling";
		if (this.isScrolling === "smooth") className += " lenis-smooth";
		return className;
	}
	updateClassName() {
		this.cleanUpClassName();
		this.className.split(" ").forEach((className) => {
			this.rootElement.classList.add(className);
		});
	}
	cleanUpClassName() {
		for (const className of Array.from(this.rootElement.classList)) if (className === "lenis" || className.startsWith("lenis-")) this.rootElement.classList.remove(className);
	}
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
new Lenis({ autoRaf: true });
//#endregion
