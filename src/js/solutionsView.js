class SolutionsView {
  solutionsSectionIntro = document.querySelector('.solutions__opening');

  constrastEl = document.querySelector('.solutions__opening__sidebar');

  welcomeHeader = document.querySelector('.solutions__opening__header');

  wholeTextEl = document.querySelector('#solution__info--1');

  wholeSecondTextEl = document.querySelector('#solution__info--2');

  wholeThirdTextEl = document.querySelector('#solution__info--3');

  wholeFourthTextEl = document.querySelector('#solution__info--4');

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
        threshold: 0.7,
      }
    ).observe(this.solutionsSectionIntro);

    window.addEventListener('scroll', this.transformOnScrollHandler.bind(this));

    this.solutionImgObserver = new IntersectionObserver(
      this.solutionImageActions,
      {
        root: null,
        threshold: 0.5,
      }
    );

    this.solutionImgObserver.observe(this.solutionOneImg);
    this.solutionImgObserver.observe(this.solutionTwoImg);
    this.solutionImgObserver.observe(this.solutionThreeImg);
    this.solutionImgObserver.observe(this.solutionFourImg);
  }

  solutionImageActions(entries, observer) {
    const [entry] = entries;

    if (entry.isIntersecting) {
      if (entry.target.dataset.imgside === 'R') {
        entry.target.classList.add('runAnimation__rImg');
        observer.unobserve(entry.target);
      }
      if (entry.target.dataset.imgside === 'L') {
        entry.target.classList.add('runAnimation__lImg');
        observer.unobserve(entry.target);
      }
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
      this.wholeTextEl.style.transform = `matrix(1, 0, 0, 1, 0, ${
        (1200 - window.scrollY) / 12
      })`;
    }
    if (window.scrollY > 1250 && window.scrollY < 2150) {
      this.wholeSecondTextEl.style.transform = `matrix(1, 0, 0, 1, 0, ${
        (1800 - window.scrollY) / 12
      })`;
    }
    if (window.scrollY > 1750 && window.scrollY < 2750) {
      this.wholeThirdTextEl.style.transform = `matrix(1, 0, 0, 1, 0, ${
        (2200 - window.scrollY) / 12
      })`;
    }
    if (window.scrollY > 2200 && window.scrollY < 3200) {
      this.wholeFourthTextEl.style.transform = `matrix(1, 0, 0, 1, 0, ${
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
