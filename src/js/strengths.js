class Strengths {
	strengthsSection = null;
	strengthsCards = null;
	observer = null;

	constructor() {
		this.strengthsSection = document.querySelector('.strengths__section');
		this.strengthsCards = document.querySelectorAll('.strength__card');

		if (!this.strengthsSection || !this.strengthsCards.length) return;

		this.attachObserver();
	}

	attachObserver() {
		this.observer = new IntersectionObserver((entries, observer) => this.observerCallback(entries, observer), {
			threshold: [0, 0.2],
		});

		this.observer.observe(this.strengthsSection);
	}

	observerCallback(entries, observer) {
		const [entry] = entries;

		if (!entry.isIntersecting) return;

		this.strengthsSection.classList.remove('section--hidden');

		this.strengthsCards.forEach((card, index) => {
			requestAnimationFrame(() => {
				setTimeout(() => {
					card.classList.add('fadeinAnimation');
				}, index * 200);
			});
		});

		observer.unobserve(entry.target);
		this.observer = null;
	}
}

export default new Strengths();
