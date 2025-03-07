class NavView {
  donateBtn = null;
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
    this.donateBtn = document.querySelector('.button__newsletter');
    this.navTop = document.querySelector('.nav__top');
    this.navBottom = document.querySelector('.nav__bottom');
    this.nav = document.querySelector('nav');
  }

  attachEventListeners() {
    this.navBottom.addEventListener('mouseover', (e) =>
      this.handleHover(e, 0.5)
    );
    this.navBottom.addEventListener('mouseout', (e) => this.handleHover(e, 1));
  }

  observeNavBottom() {
    this.navObserver = new IntersectionObserver(
      (entries) => this.handleNavIntersection(entries),
      { threshold: [0, 1] }
    );
    this.navObserver.observe(this.nav);
  }

  handleHover(e, opacity) {
    const isNavLink = e.target.classList.contains('nav__link');
    const isDonateBtn = e.target === this.donateBtn;

    if (isNavLink || isDonateBtn) {
      const links = this.navBottom.querySelectorAll('.nav__link');
      links.forEach((el) => {
        if (el !== e.target || isDonateBtn) el.style.opacity = opacity;
      });
      this.donateBtn.style.opacity = opacity;
    }
  }

  handleNavIntersection(entries) {
    entries.forEach((entry) => {
      this.navTop.classList.toggle(
        'fixed__nav',
        !(entry.intersectionRatio > 0.8 && entry.isIntersecting)
      );
    });
  }
}

export default new NavView();
