class NavView {
  donateBtn = document.querySelector('.button__newsletter');
  navTop = document.querySelector('.nav__top');
  navBottom = document.querySelector('.nav__bottom');
  navBottomObserver;

  constructor() {
    this.navBottom.addEventListener(
      'mouseover',
      this.hoverNavLinkHandler.bind(this, 0.5)
    );
    this.navBottom.addEventListener(
      'mouseout',
      this.hoverNavLinkHandler.bind(this, 1)
    );
    // this.navBottomObserver = new IntersectionObserver(
    //   this.transformNavActions.bind(this),
    //   {
    //     threshold: [0.9, 0.2],
    //   }
    // );
    // this.navBottomObserver.observe(this.navBottom);
    document.addEventListener('scroll', () => {
      if (window.scrollY > 80) {
        this.navTop.classList.add('fixed__nav');
      } else {
        this.navTop.classList.remove('fixed__nav');
      }
    });
  }

  hoverNavLinkHandler(opacity, e) {
    if (e.target.classList.contains('nav__link')) {
      const hoveredLink = e.target;
      const links = hoveredLink
        .closest('.nav__bottom')
        .querySelectorAll('.nav__link');
      links.forEach((el) => {
        if (el !== hoveredLink) el.style.opacity = opacity;
      });
      this.donateBtn.style.opacity = opacity;
    }
    if (e.target === this.donateBtn) {
      this.donateBtn
        .closest('.nav__bottom')
        .querySelectorAll('.nav__link')
        .forEach((el) => (el.style.opacity = opacity));
    }
  }

  transformNavActions(entries) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0.8 && entry.isIntersecting) {
        this.navTop.classList.remove('transform__nav');
      } else {
        this.navTop.classList.add('transform__nav');
      }
    });
  }
}

export default new NavView();
