const STAGGER_MS = 80;
const MAX_STAGGER_STEPS = 5;

let observer: IntersectionObserver | undefined;

// One shared observer, so elements that enter the viewport together are staggered as a group.
function getObserver() {
	observer ??= new IntersectionObserver(
		(entries, obs) => {
			entries
				.filter((entry) => entry.isIntersecting)
				.forEach((entry, i) => {
					const el = entry.target as HTMLElement;
					el.style.setProperty('--reveal-delay', `${Math.min(i, MAX_STAGGER_STEPS) * STAGGER_MS}ms`);
					el.classList.replace('reveal-pending', 'is-revealed');
					obs.unobserve(el);
				});
		},
		{ rootMargin: '0px 0px -40px 0px', threshold: 0.1 }
	);
	return observer;
}

/** Fades an element up into place the first time it is scrolled into view. */
export function reveal(node: HTMLElement) {
	const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	// Content already on screen at hydration stays put; only content below the fold waits to animate in.
	if (reduceMotion || node.getBoundingClientRect().top < window.innerHeight) return;

	node.classList.add('reveal-pending');
	getObserver().observe(node);

	return {
		destroy() {
			observer?.unobserve(node);
		}
	};
}
