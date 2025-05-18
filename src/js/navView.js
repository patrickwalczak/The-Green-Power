class NavView {
	navTop = null;
	navBottom = null;
	navObserver = null;
	nav = null;

	constructor() {
		this.selectElements();
		this.attachEventListeners();
		this.observeNavBottom();
	}

	selectElements() {
		this.navTop = document.querySelector('.nav__top');
		this.navBottom = document.querySelector('.nav__bottom');
		this.nav = document.querySelector('nav');
	}

	attachEventListeners() {
		this.navBottom.addEventListener('mouseover', (e) => this.handleHover(e, 0.5));
		this.navBottom.addEventListener('mouseout', (e) => this.handleHover(e, 1));
	}

	observeNavBottom() {
		this.navObserver = new IntersectionObserver((entries) => this.handleNavIntersection(entries), {
			threshold: [0, 1],
		});
		this.navObserver.observe(this.nav);
	}

	handleHover(e, opacity) {
		const isNavLink = e.target.classList.contains('nav__link');

		if (isNavLink) {
			const links = this.navBottom.querySelectorAll('.nav__link');
			links.forEach((el) => {
				if (el !== e.target) el.style.opacity = opacity;
			});
		}
	}

	handleNavIntersection(entries) {
		entries.forEach((entry) => {
			this.navTop.classList.toggle('fixed__nav', !(entry.intersectionRatio > 0.8 && entry.isIntersecting));
		});
	}
}

export default new NavView();
