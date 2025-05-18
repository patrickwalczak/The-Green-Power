class Hero {
	businessImage = document.querySelector('.hero__business_image');
	natureImage = document.querySelector('.hero__nature_image');
}

class HeroDesktop extends Hero {
	leftHeroButton = document.querySelector('.hero__left_button');
	rightHeroButton = document.querySelector('.hero__right_button');
	heroHeader = document.querySelector('.hero__heading');

	hero__leftButtonLinesContainer = document.querySelector('#hero__left_button_lines');

	hero__rightButtonLinesContainer = document.querySelector('#hero__right_button_lines');

	hero__leftContentWrapper = document.querySelector('#hero__business_image_content');

	hero__rightContentWrapper = document.querySelector('#hero__nature_image_content');

	hero__rightContentWords = document.querySelectorAll('.word__H');

	hero__leftContentWords = document.querySelectorAll('.word__L');

	constructor() {
		super();
		this.leftHeroButton.addEventListener(
			'click',
			this.handleClickHeroButton.bind(
				this,
				this.leftHeroButton,
				'active',
				'unactive',
				this.hero__leftButtonLinesContainer,
				this.hero__leftContentWrapper,
				this.hero__leftContentWords
			)
		);
		this.rightHeroButton.addEventListener(
			'click',
			this.handleClickHeroButton.bind(
				this,
				this.rightHeroButton,
				'unactive',
				'active',
				this.hero__rightButtonLinesContainer,
				this.hero__rightContentWrapper,
				this.hero__rightContentWords
			)
		);
		this.natureImage.addEventListener(
			'mouseenter',
			this.mouseenterHeroImgHandler.bind(
				this,
				this.businessImage,
				this.leftHeroButton,
				this.hero__leftButtonLinesContainer,
				this.hero__leftContentWrapper,
				this.hero__leftContentWords
			)
		);
		this.businessImage.addEventListener(
			'mouseenter',
			this.mouseenterHeroImgHandler.bind(
				this,
				this.natureImage,
				this.rightHeroButton,
				this.hero__rightButtonLinesContainer,
				this.hero__rightContentWrapper,
				this.hero__rightContentWords
			)
		);
		this.businessImage.addEventListener('mouseleave', this.resetHero.bind(this));
		this.natureImage.addEventListener('mouseleave', this.resetHero.bind(this));
	}

	resetHero() {
		this.mouseenterHeroImgHandler(
			this.businessImage,
			this.leftHeroButton,
			this.hero__leftButtonLinesContainer,
			this.hero__leftContentWrapper,
			this.hero__leftContentWords
		);
		this.mouseenterHeroImgHandler(
			this.natureImage,
			this.rightHeroButton,
			this.hero__rightButtonLinesContainer,
			this.hero__rightContentWrapper,
			this.hero__rightContentWords
		);
	}

	mouseenterHeroImgHandler(oppositeImg, btn, linesContainer, contentWrapper, contentWords) {
		this.businessImage.style.clipPath = 'var(--left--normal)';
		this.natureImage.style.clipPath = 'var(--right--normal)';

		this.heroHeader.classList.remove('hideVisibility');

		linesContainer.style.bottom = '-15%';
		linesContainer.style.left = '-8%';

		btn.classList.remove('isHovered');

		oppositeImg.classList.remove('imageIsHovered');

		contentWrapper.classList.remove('displayContent');

		contentWords.forEach((word) => {
			word.classList.remove('wordHeroRight');
		});
	}

	handleClickHeroButton(btn, leftState, rightState, linesContainer, contentWrapper, contentWords) {
		if (btn.classList.contains('isHovered')) return this.resetHero();

		this.businessImage.style.clipPath = `var(--left--${leftState})`;

		this.natureImage.style.clipPath = `var(--right--${rightState})`;

		this.heroHeader.classList.add('hideVisibility');

		linesContainer.style.bottom = '0%';
		linesContainer.style.left = '0%';

		btn.classList.add('isHovered');

		if (leftState === 'active') {
			this.businessImage.classList.add('imageIsHovered');
		} else {
			this.natureImage.classList.add('imageIsHovered');
		}
		contentWrapper.classList.add('displayContent');

		contentWords.forEach((word) => {
			word.classList.add('wordHeroRight');
		});
	}
}

class HeroMobile extends Hero {
	threshold = [0, 0.5, 1];

	constructor() {
		super();
		this.attachObserver(this.businessImage);
		this.attachObserver(this.natureImage);
	}

	handleImageObserver = (entries, observer) => {
		const [entry] = entries;

		if (!entry.isIntersecting) return;

		entry.target.classList.add('loaded');

		observer.unobserve(entry.target);
	};

	attachObserver(target) {
		const observer = new IntersectionObserver((entries, observer) => this.handleImageObserver(entries, observer), {
			threshold: this.threshold,
		});
		observer.observe(target);
	}
}

class HeroView {
	constructor() {
		window.addEventListener('resize', this.handleBreakpointChange.bind(this));
		this.handleBreakpointChange();
	}

	removeListener() {
		window.removeEventListener('resize', this.handleBreakpointChange);
	}

	handleBreakpointChange() {
		if (window.innerWidth < 1280) new HeroMobile();
		else {
			new HeroDesktop();
			this.removeListener();
		}
	}
}

export default new HeroView();
