class SideMenu {
  constructor() {
    this.hamburgerButton = document.querySelector('.hamburger__button');
    this.overlay = document.querySelector('.overlay');
    this.sideMenuContainer = document.querySelector('#side__menu');
    this.closeSideMenuBtn = document.querySelector('.close__menu_btn');
    this.links = document.querySelectorAll('.side__menu_link');

    this.#setupEventListeners();
  }

  #setupEventListeners() {
    this.hamburgerButton.addEventListener('click', () => this.#openDrawer());
    this.closeSideMenuBtn.addEventListener('click', () => this.#closeDrawer());
    this.overlay.addEventListener('click', () => this.#closeDrawer());
    this.links.forEach((link) => {
      link.addEventListener('click', () => this.#closeDrawer());
    });

    document.addEventListener('keydown', (event) => {
      if (
        event.key === 'Escape' &&
        this.sideMenuContainer.getAttribute('aria-hidden') === 'false'
      ) {
        this.#closeDrawer();
      }
    });
  }

  #toggleClasses() {
    this.sideMenuContainer.classList.toggle('hiddenAnimation');
    this.overlay.classList.toggle('hidden');
  }

  #adjustAriaAttributes() {
    const isExpanded =
      this.hamburgerButton.getAttribute('aria-expanded') === 'true';
    this.hamburgerButton.setAttribute('aria-expanded', !isExpanded);
    this.closeSideMenuBtn.setAttribute('aria-expanded', !isExpanded);
    this.sideMenuContainer.setAttribute('aria-hidden', isExpanded);
  }

  #openDrawer() {
    this.#toggleClasses();
    this.#adjustAriaAttributes();
    this.#toggleTabIndexAttr();
    this.closeSideMenuBtn.focus();
  }

  #closeDrawer() {
    this.#toggleClasses();
    this.#adjustAriaAttributes();
    this.#toggleTabIndexAttr();
    this.hamburgerButton.focus();
  }

  #toggleTabIndexAttr() {
    this.links.forEach((anchor) => {
      const tabIndexValue = anchor.getAttribute('tabindex');
      tabIndexValue === '-1'
        ? anchor.setAttribute('tabindex', '0')
        : anchor.setAttribute('tabindex', '-1');
    });
  }
}

export default new SideMenu();
