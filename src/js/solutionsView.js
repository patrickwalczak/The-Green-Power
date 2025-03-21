class SolutionsView {
	sectionHeader = document.querySelector('.solutions__header_content');

	headerSidebar = document.querySelector('.solutions__heading_sidebar');

	sectionHeading = document.querySelector('.solutions__heading');

	solutionOne = document.querySelector('#solution__content_1');

	solutionTwo = document.querySelector('#solution__content_2');

	solutionThree = document.querySelector('#solution__content_3');

	solutionFour = document.querySelector('#solution__content_4');

	solutionOneImg = document.querySelector('.solution__image_1');
	solutionTwoImg = document.querySelector('.solution__image_2');
	solutionThreeImg = document.querySelector('.solution__image_3');
	solutionFourImg = document.querySelector('.solution__image_4');

	threshold = [0, 0.1, 0.2, 0.4, 0.6, 1];

	sectionHeaderObserver;

	constructor() {
		this.sectionHeaderObserver = new IntersectionObserver(this.handleHeaderObserver.bind(this), {
			threshold: [0.2, 1],
		}).observe(this.sectionHeading);

		window.addEventListener('scroll', this.transformOnScrollHandler.bind(this));

		[this.solutionOneImg, this.solutionTwoImg, this.solutionThreeImg, this.solutionFourImg].forEach((img) =>
			this.attachObserver(img)
		);
	}

	attachObserver(target) {
		const observer = new IntersectionObserver((entries, observer) => this.handleImageObserver(entries, observer), {
			threshold: this.threshold,
		});
		observer.observe(target);
	}

	handleImageObserver(entries, observer) {
		const [entry] = entries;

		if (!entry.isIntersecting) return;

		const imgName = entry.target.getAttribute('data-name');
		const imgSide = entry.target.getAttribute('data-side');

		const imgSrc = new URL(`../assets/${imgName}`, import.meta.url).href;

		entry.target.setAttribute('src', imgSrc);
		entry.target.removeAttribute('data-name');

		if (imgSide === 'right') entry.target.classList.add('right__side__animation');
		else entry.target.classList.add('left__side__animation');

		observer.unobserve(entry.target);
	}

	handleHeaderObserver(entries, observer) {
		const [entry] = entries;

		if (!entry.isIntersecting) return;

		this.sectionHeader.classList.add('introduce__heading');
		this.headerSidebar.classList.add('introduce__sidebar');

		observer.unobserve(this.sectionHeading);
		this.sectionHeaderObserver = null;
	}

	transformOnScrollHandler() {
		// if (window.scrollY > 770 && window.scrollY < 1450) {
		// 	this.solutionOne.style.transform = `matrix(1, 0, 0, 1, 0, ${(1200 - window.scrollY) / 12})`;
		// }
		// if (window.scrollY > 1250 && window.scrollY < 2150) {
		// 	this.solutionTwo.style.transform = `matrix(1, 0, 0, 1, 0, ${(1800 - window.scrollY) / 12})`;
		// }
		// if (window.scrollY > 1750 && window.scrollY < 2750) {
		// 	this.solutionThree.style.transform = `matrix(1, 0, 0, 1, 0, ${(2200 - window.scrollY) / 12})`;
		// }
		// if (window.scrollY > 2200 && window.scrollY < 3200) {
		// 	this.solutionFour.style.transform = `matrix(1, 0, 0, 1, 0, ${(2800 - window.scrollY) / 12})`;
		// }
		// if (window.scrollY > 200 && window.scrollY < 850) {
		// 	this.sectionHeading.style.transform = `matrix(1, 0, 0, 1, 0, ${(500 - window.scrollY) / 10})`;
		// }
	}
}
export default new SolutionsView();
