class GreenImpactView {
	descriptions = [
		`<h3 class="img__descrip__text">
	<span class="first_part typing-class">With you, we planted</span>
	<br />
	<span class="emphasize__num second_part typing-class">5</span>
	<span class="third_part typing-class">million</span>
	<br />
	<span class="fourth_part typing-class">trees around the world</span>
  </h3>`,
		`<h3 class="img__descrip__text">
	<span class="first_part_2 typing-class">The Ocean Clean-Up</span>
	<br />
	<span class="second_part_2 typing-class">Project allows us to remove</span>
	<br />
	<span class="third_part_2 typing-class emphasize__num">100</span>
	<span class="fourth_part_2 typing-class">tons of plastic</span>
  </h3>`,
		`<h3 class="img__descrip__text">
	<span class="first_part_3 typing-class">We collected about</span> 
	<span class="second_part_3 typing-class emphasize__num">$50 million</span>
	<br />
	<span class="third_part_3 typing-class">for different</span>
	<br />
	<span class="fourth_part_3 typing-class">animal charities</span>
  </h3>`,
	];
	activeIndex = 0;
	clickedIndex = 0;

	constructor() {
		this.elements = {
			sectionSlider: document.querySelector('.slider'),
			rArrow: document.querySelector('.rightArrow'),
			lArrow: document.querySelector('.leftArrow'),
			dotsContainer: document.querySelector('.dots'),
			dots: document.querySelectorAll('.dot'),
			images: document.querySelectorAll('.slide__image'),
			descriptionContainer: document.querySelector('.img__descrip__container'),
		};

		this.initObserver();
		this.initEventListeners();
	}

	initObserver() {
		this.sliderSectionObserver = new IntersectionObserver(
			(entries, observer) => this.initTypingClass(entries, observer),
			{
				threshold: [0, 0.1, 0.2, 0.4],
			}
		).observe(this.elements.sectionSlider);
	}

	initEventListeners() {
		this.elements.rArrow.addEventListener('click', this.nextSlide.bind(this));
		this.elements.lArrow.addEventListener('click', this.prevSlide.bind(this));
		this.elements.dotsContainer.addEventListener('keydown', (e) => this.handleKeyNavigation(e));
		this.elements.dots.forEach((dot) =>
			dot.addEventListener('click', () => this.gotoSlide(Number(dot.getAttribute('data-index'))))
		);
	}

	handleKeyNavigation(e) {
		if (!['ArrowLeft', 'ArrowRight'].includes(e.key)) return;

		if (e.key === 'ArrowRight') this.nextSlide();
		else if (e.key === 'ArrowLeft') this.prevSlide();
	}

	initTypingClass(entries, observer) {
		if (!entries[0].isIntersecting) return;

		this.updateSlideContent();
		this.elements.sectionSlider.classList.remove('section--hidden');
		observer.unobserve(entries[0].target);
	}

	nextSlide() {
		this.clickedIndex = (this.activeIndex + 1) % this.elements.images.length;
		this.updateSlideContent();
	}

	prevSlide() {
		this.clickedIndex = (this.activeIndex - 1 + this.elements.images.length) % this.elements.images.length;
		this.updateSlideContent();
	}

	gotoSlide(newIndex) {
		if (this.activeIndex === newIndex) return;

		this.clickedIndex = newIndex;
		this.updateSlideContent();
	}

	updateSlideContent() {
		this.elements.descriptionContainer.innerHTML = this.descriptions[this.clickedIndex];
		this.updateDots();
		this.updateContent();
		this.activeIndex = this.clickedIndex;
	}

	updateDots() {
		const currentActiveDot = this.elements.dots[this.activeIndex];
		const newActiveDot = this.elements.dots[this.clickedIndex];

		this.updateDot(currentActiveDot);
		this.updateDot(newActiveDot);
	}

	updateDot(dotElement) {
		dotElement.setAttribute('aria-selected', !dotElement.classList.contains('dot__active'));
		dotElement.classList.toggle('dot__active');
	}

	updateContent() {
		const currentActiveImage = this.elements.images[this.activeIndex];
		const newActiveImage = this.elements.images[this.clickedIndex];
		currentActiveImage.hidden = true;
		currentActiveImage.setAttribute('tabindex', '-1');
		newActiveImage.hidden = false;
		newActiveImage.setAttribute('tabindex', '0');
		this.elements.sectionSlider.setAttribute('data-slide', this.clickedIndex);
	}
}

export default new GreenImpactView();
