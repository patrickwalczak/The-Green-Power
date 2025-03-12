class GreenImpactView {
	constructor() {
		this.elements = {
			sectionSlider: document.querySelector('.slider'),
			rArrow: document.querySelector('.rightArrow'),
			lArrow: document.querySelector('.leftArrow'),
			dots: document.querySelectorAll('.dot'),
			images: document.querySelectorAll('.slide__image'),
			descriptionContainer: document.querySelector('.img__descrip__container'),
		};

		this.currSlide = 1;
		this.maxSlide = this.elements.images.length;

		this.descriptions = [
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

		this.initObserver();
		this.initEventListeners();
	}

	initObserver() {
		this.sliderSectionObserver = new IntersectionObserver(this.initTypingClass.bind(this), {
			threshold: [0, 0.1, 0.2, 0.4],
		}).observe(this.elements.sectionSlider);
	}

	initEventListeners() {
		this.elements.rArrow.addEventListener('click', this.nextSlide.bind(this));
		this.elements.lArrow.addEventListener('click', this.prevSlide.bind(this));
		this.elements.dots.forEach((dot) =>
			dot.addEventListener('click', () => this.gotoSlide(Number(dot.getAttribute('data-id'))))
		);
	}

	initTypingClass(entries) {
		if (!entries[0].isIntersecting) return;
		this.updateSlideContent();
		this.elements.sectionSlider.classList.remove('section--hidden');
	}

	nextSlide() {
		this.currSlide = this.currSlide === this.maxSlide ? 1 : this.currSlide + 1;
		this.updateSlideContent();
	}

	prevSlide() {
		this.currSlide = this.currSlide === 1 ? this.maxSlide : this.currSlide - 1;
		this.updateSlideContent();
	}

	gotoSlide(slideNumber) {
		this.currSlide = slideNumber;
		this.updateSlideContent();
	}

	updateSlideContent() {
		this.elements.descriptionContainer.innerHTML = this.descriptions[this.currSlide - 1];
		this.setActiveDot();
		this.updateAriaAttributes();
		this.updateBackground();
	}

	setActiveDot() {
		this.elements.dots.forEach((dot) => {
			dot.classList.remove('dot__active');
			dot.setAttribute('aria-selected', 'false');
		});
		const activeDot = this.elements.dots[this.currSlide - 1];
		activeDot.classList.add('dot__active');
		activeDot.setAttribute('aria-selected', 'true');
	}

	updateAriaAttributes() {
		this.elements.images.forEach((img, index) => {
			img.setAttribute('aria-hidden', index !== this.currSlide - 1);
		});
	}

	updateBackground() {
		this.elements.images.forEach((img) => img.classList.add('hidden'));
		this.elements.images[this.currSlide - 1].classList.remove('hidden');

		const currentClass = [...this.elements.sectionSlider.classList].find((cls) => cls.startsWith('slider__BG__'));
		if (currentClass) this.elements.sectionSlider.classList.remove(currentClass);

		this.elements.sectionSlider.classList.add(`slider__BG__${this.currSlide}`);
	}
}

export default new GreenImpactView();
