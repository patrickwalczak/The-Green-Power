class SolutionsView {
  solutionsSectionIntro = document.querySelector('.solutions__opening');

  constrastEl = document.querySelector('.solutions__opening__sidebar');

  welcomeHeader = document.querySelector('.solutions__opening__header');

  solutionOne = document.querySelector('#solution__info--1');

  solutionTwo = document.querySelector('#solution__info--2');

  solutionThree = document.querySelector('#solution__info--3');

  solutionFour = document.querySelector('#solution__info--4');

  solutionsSectionIntroObserver;

  solutionOneImg = document.querySelector('.solution__image_1');
  solutionTwoImg = document.querySelector('.solution__image_2');
  solutionThreeImg = document.querySelector('.solution__image_3');
  solutionFourImg = document.querySelector('.solution__image_4');

  solutionImgObserver;

  constructor() {
    this.solutionsSectionIntroObserver = new IntersectionObserver(
      this.actions.bind(this),
      {
        threshold: 0.2,
      }
    ).observe(this.solutionsSectionIntro);

    window.addEventListener('scroll', this.transformOnScrollHandler.bind(this));

    this.solutionImgObserver = new IntersectionObserver(
      this.solutionImageActions,
      {
        threshold: [0, 1],
      }
    );

    this.solutionImgObserver.observe(this.solutionOne);
    this.solutionImgObserver.observe(this.solutionTwo);
    this.solutionImgObserver.observe(this.solutionThree);
    this.solutionImgObserver.observe(this.solutionFour);
  }

  solutionImageActions(entries, observer) {
    const [entry] = entries;

    if (entry.isIntersecting) {
      const imgPath = entry.target.getAttribute('data-image-path');
      const imgId = entry.target.getAttribute('data-image-container-id');

      const bgImg = document.querySelector(`.${imgId}`);

      bgImg.style.backgroundImage = `url('${imgPath}')`;

      if (bgImg.dataset.imgside === 'R') {
        bgImg.classList.add('runAnimation__rImg');
      }
      if (bgImg.dataset.imgside === 'L') {
        bgImg.classList.add('runAnimation__lImg');
      }
      observer.unobserve(entry.target);
    }
  }

  actions(entries, observer) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      this.solutionsSectionIntro.classList.add('runAnimation');
      this.constrastEl.classList.add('displayBar');
      observer.unobserve(this.solutionsSectionIntro);
    }
  }

  transformOnScrollHandler() {
    if (window.scrollY > 770 && window.scrollY < 1450) {
      this.solutionOne.style.transform = `matrix(1, 0, 0, 1, 0, ${
        (1200 - window.scrollY) / 12
      })`;
    }
    if (window.scrollY > 1250 && window.scrollY < 2150) {
      this.solutionTwo.style.transform = `matrix(1, 0, 0, 1, 0, ${
        (1800 - window.scrollY) / 12
      })`;
    }
    if (window.scrollY > 1750 && window.scrollY < 2750) {
      this.solutionThree.style.transform = `matrix(1, 0, 0, 1, 0, ${
        (2200 - window.scrollY) / 12
      })`;
    }
    if (window.scrollY > 2200 && window.scrollY < 3200) {
      this.solutionFour.style.transform = `matrix(1, 0, 0, 1, 0, ${
        (2800 - window.scrollY) / 12
      })`;
    }
    if (window.scrollY > 200 && window.scrollY < 850) {
      this.welcomeHeader.style.transform = `matrix(1, 0, 0, 1, 0, ${
        (500 - window.scrollY) / 10
      })`;
    }
  }
}
export default new SolutionsView();
