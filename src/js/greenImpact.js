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
	startX = 0;

	constructor() {
		this.elements = {
			section: document.querySelector('.green_impact__section'),
			rArrow: document.querySelector('.green_impact--arrow_right'),
			lArrow: document.querySelector('.green_impact--arrow_left'),
			navigation: document.querySelector('.green_impact--navigation'),
			dots: document.querySelectorAll('.green_impact--navigation_dot'),
			imageWrappers: document.querySelectorAll('.green_impact--slide'),
			images: document.querySelectorAll('.green_impact--image'),
			descriptionContainer: document.querySelector('.green_impact--slide_text_container'),
			slider: document.querySelector('.green_impact--slides__container'),
		};

		this.elements.slider.addEventListener('touchstart', (e) => {
			this.startX = e.touches[0].clientX;
		});

		this.elements.slider.addEventListener('touchend', (e) => {
			const endX = e.changedTouches[0].clientX;
			const diff = endX - this.startX;

			if (diff > 50) {
				this.prevSlide();
			} else if (diff < -50) {
				this.nextSlide();
			}
		});

		this.initObserver();
		this.initEventListeners();
	}

	initObserver() {
		this.sliderSectionObserver = new IntersectionObserver(
			(entries, observer) => this.initTypingClass(entries, observer),
			{
				threshold: [0, 0.1, 0.2, 0.3, 0.4],
			}
		).observe(this.elements.section);
	}

	initEventListeners() {
		this.elements.rArrow.addEventListener('click', this.nextSlide.bind(this));
		this.elements.lArrow.addEventListener('click', this.prevSlide.bind(this));
		this.elements.navigation.addEventListener('keydown', (e) => this.handleKeyNavigation(e));
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
		this.elements.section.classList.remove('section--hidden');
		this.elements.images.forEach((img) => {
			const imgName = img.getAttribute('data-name');
			const imgSrc = new URL(`../assets/${imgName}`, import.meta.url).href;

			img.setAttribute('src', imgSrc);
			img.removeAttribute('data-name');
		});

		observer.unobserve(entries[0].target);
	}

	nextSlide() {
		this.clickedIndex = (this.activeIndex + 1) % this.elements.imageWrappers.length;
		this.updateSlideContent();
	}

	prevSlide() {
		this.clickedIndex =
			(this.activeIndex - 1 + this.elements.imageWrappers.length) % this.elements.imageWrappers.length;
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
		const currentActiveImage = this.elements.imageWrappers[this.activeIndex];
		const newActiveImage = this.elements.imageWrappers[this.clickedIndex];
		currentActiveImage.hidden = true;
		currentActiveImage.setAttribute('tabindex', '-1');
		newActiveImage.hidden = false;
		newActiveImage.setAttribute('tabindex', '0');
		this.elements.section.setAttribute('data-slide', this.clickedIndex);
	}
}

export default new GreenImpactView();
