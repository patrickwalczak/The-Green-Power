class SideMenu {
  hamburgerButton = document.querySelector('.hamburger__button');
  body = document.querySelector('body');
  overlay = document.querySelector('.overlay');
  sideMenuContainer = document.querySelector('#side__menu');
  closeSideMenuBtn = document.querySelector('.close__menu_btn');
  sideMenuSolutionsButton = document.querySelector('#sideMenuSolutions');
  links = document.querySelectorAll('a.side__menu_link');

  constructor() {
    [
      this.hamburgerButton,
      this.overlay,
      this.closeSideMenuBtn,
      ...this.links,
    ].forEach((el) =>
      el.addEventListener('click', this.toogleHiddenMenuVisibility.bind(this))
    );

    this.sideMenuSolutionsButton.addEventListener(
      'click',
      this.toggleHiddenClassHandler.bind(null, 'solutions')
    );

    this.generateSubMenu('solutions', [
      { text: 'See All', id: 'solutions' },
      { text: 'EcoHome', id: 'solutions' },
      { text: 'Solar Panels', id: 'solution_solarpanels' },
      { text: 'Wind Turbines', id: 'solution_windturbines' },
      { text: 'Hydropower Technology', id: 'solution_hydropower' },
    ]);
  }

  toggleHiddenClassHandler(subMenuName) {
    document
      .querySelector(`#subMenu__${subMenuName}`)
      .classList.toggle('hiddenAnimation');
  }

  generateSubMenu(subMenuName, linksArr) {
    const rest = subMenuName.slice(1);
    const newName = subMenuName[0].toUpperCase() + rest;

    const markup = `
    <div class="side__menu" id="subMenu__${subMenuName}">
    <div
      class="side__menu_header"
      id="subMenu__header_${subMenuName}"
    >
      <div class="close_side_menu_layer_btn">
        <span class="indicator__back"></span>
      </div>
      <h3 class="side__menu_heading">${newName}</h3>
    </div>
    <ul class="side__menu_links_list">
      ${this.generateSubmenuLinks(linksArr)}
    </ul>
  </div>
    `;

    this.sideMenuContainer.insertAdjacentHTML('beforeend', markup);

    document
      .querySelector(`.close_side_menu_layer_btn`)
      .addEventListener(
        'click',
        this.toggleHiddenClassHandler.bind(null, subMenuName)
      );
  }

  toogleHiddenMenuVisibility() {
    this.body.classList.toggle('overflowClass');
    this.overlay.classList.toggle('displayOverlay');
    this.sideMenuContainer.classList.toggle('hiddenAnimation');
  }

  generateSubmenuLinks(links) {
    return links
      .map(
        (link) => `
    <li>
        <a class="side__menu_link" href="#${link.id}"
      >${link.text}</a
    >
  </li>`
      )
      .join('');
  }
}

export default new SideMenu();
