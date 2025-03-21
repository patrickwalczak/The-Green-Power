class EcoHomeView {
	activeIndex = 0;

	constructor() {
		this.selectElements();
		this.initHeaderObserver();
		this.initSectionObserver();
		this.attachEventListeners();
	}

	selectElements() {
		this.ecoHomeSection = document.getElementById('ecohome__section');
		this.headerContainer = document.querySelector('.ecoHome--heading');
		this.headerTopPart = document.getElementById('ecoHome__heading_top');
		this.headerBottomPart = document.getElementById('ecoHome__heading_bottom');
		this.ecoHomeButtons = document.querySelectorAll('.ecoHome--change_slide_btn');
		this.ecoHomeImageContainers = document.querySelectorAll('.ecoHome--img_container');
		this.ecoHomeButtonsContainer = document.querySelector('.solution__ecoHome_buttons_container');
		this.ecoHomeImages = document.querySelectorAll('.ecoHome--image');
	}

	initSectionObserver() {
		if (!this.ecoHomeSection) return;

		this.ecoHomeObserver = new IntersectionObserver(
			(entries, observer) => this.sectionObserverCallback(entries, observer),
			{ threshold: [0, 0.1, 0.3, 0.5] }
		);

		this.ecoHomeObserver.observe(this.ecoHomeSection);
	}

	initHeaderObserver() {
		if (!this.headerContainer) return;

		this.headerObserver = new IntersectionObserver(
			(entries, observer) => this.headerObserverCallback(entries, observer),
			{ threshold: [0, 0.1, 0.3, 0.5] }
		);

		this.headerObserver.observe(this.headerContainer);
	}

	attachEventListeners() {
		if (this.ecoHomeButtonsContainer) {
			this.ecoHomeButtonsContainer.addEventListener('click', (e) => this.handleEcoHomeButtonClick(e));
			this.ecoHomeButtonsContainer.addEventListener('keydown', (e) => this.handleKeyNavigation(e));
		}
	}

	handleEcoHomeButtonClick(e) {
		const clickedButton = e.target.closest('.ecoHome--change_slide_btn');
		if (!clickedButton) return;

		const newIndex = [...this.ecoHomeButtons].indexOf(clickedButton);

		if (newIndex === -1) return;

		this.updateActiveSlide(newIndex);
	}

	updateActiveSlide(newIndex) {
		if (newIndex === this.activeIndex) return;

		this.ecoHomeButtons[this.activeIndex]?.classList.remove('active');
		this.ecoHomeButtons[this.activeIndex]?.setAttribute('aria-selected', 'false');
		this.ecoHomeImageContainers[this.activeIndex]?.setAttribute('hidden', 'true');

		this.ecoHomeButtons[newIndex]?.classList.add('active');
		this.ecoHomeButtons[newIndex]?.setAttribute('aria-selected', 'true');
		this.ecoHomeImageContainers[newIndex]?.removeAttribute('hidden');

		this.ecoHomeButtons[newIndex]?.focus();

		this.activeIndex = newIndex;
	}

	handleKeyNavigation(e) {
		if (!['ArrowLeft', 'ArrowRight'].includes(e.key)) return;

		let newIndex = this.activeIndex;

		if (e.key === 'ArrowRight') {
			newIndex = (this.activeIndex + 1) % this.ecoHomeButtons.length;
		} else if (e.key === 'ArrowLeft') {
			newIndex = (this.activeIndex - 1 + this.ecoHomeButtons.length) % this.ecoHomeButtons.length;
		}

		this.updateActiveSlide(newIndex);
	}

	sectionObserverCallback(entries, observer) {
		const entry = entries.find((e) => e.isIntersecting);
		if (!entry) return;

		this.ecoHomeImages.forEach((img) => {
			const imgName = img.getAttribute('data-name');
			const imgSrc = new URL(`../assets/${imgName}`, import.meta.url).href;

			img.setAttribute('src', imgSrc);
			img.removeAttribute('data-name');
		});

		observer.unobserve(entry.target);
		this.ecoHomeObserver = null;
	}

	headerObserverCallback(entries, observer) {
		const entry = entries.find((e) => e.isIntersecting);
		if (!entry) return;

		this.headerTopPart?.classList.add('heading--top_section');
		this.headerBottomPart?.classList.add('heading--bottom_section');

		observer.unobserve(entry.target);
		this.headerObserver = null;
	}
}

export default new EcoHomeView();
