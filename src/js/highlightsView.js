class HighlightsView {
	threshold = [0.1, 0.3, 0.5, 0.7, 0.9, 1];

	constructor() {
		this.images = document.querySelectorAll('.artImg');
		this.highlightsSection = document.querySelector('.articles__section');
		this.greenImpactSection = document.querySelector('.green_impact__section');

		if (!this.highlightsSection || !this.greenImpactSection) return;

		this.greenImpactSectionObserver = this.attachObserver(this.greenImpactSection);
		this.highlightsSectionObserver = this.attachObserver(this.highlightsSection);
	}

	attachObserver(target) {
		const observer = new IntersectionObserver((entries) => this.handleIntersect(entries), {
			threshold: this.threshold,
		});
		observer.observe(target);

		return observer;
	}

	handleIntersect(entries) {
		const [entry] = entries;

		if (!entry.isIntersecting) return;

		this.images.forEach((img) => img.classList.add('loaded'));
		this.clearObservers();
	}

	clearObservers() {
		this.greenImpactSectionObserver.unobserve(this.greenImpactSection);
		this.highlightsSectionObserver.unobserve(this.highlightsSection);
		this.greenImpactSectionObserver = null;
		this.highlightsSectionObserver = null;
	}
}

export default new HighlightsView();
