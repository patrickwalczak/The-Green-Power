class SideNav {
  ham_menu = document.querySelector(".hamburger__menu");
  body = document.querySelector("body");
  overlay = document.querySelector(".overlay");
  hiddenMenuCon = document.querySelector("#main__menu");
  closeHiddenMenuBtn = document.querySelector(".closedMenu");
  btnSolutionsSubMenu = document.querySelector("#mainMenu__solutions");
  btnInvestorsSubMenu = document.querySelector("#mainMenu__investors");
  btnAboutSubMenu = document.querySelector("#mainMenu__about");

  constructor() {
    // Add click listener to three elements simultaneously
    [this.ham_menu, this.overlay, this.closeHiddenMenuBtn].forEach((el) =>
      el.addEventListener("click", this.toogleHiddenMenuVisibility.bind(this))
    );

    [
      [this.btnSolutionsSubMenu, "solutions"],
      [this.btnInvestorsSubMenu, "investors"],
      [this.btnAboutSubMenu, "about"],
    ].forEach((el) =>
      el[0].addEventListener(
        "click",
        this.toggleHiddenClassHandler.bind(null, el[1])
      )
    );

    this.generateSubMenuSolutions();

    this.generateSubMenuInvestors();

    this.generateSubMenuAbout();
  }

  toggleHiddenClassHandler(subMenuName) {
    document
      .querySelector(`#subMenu__${subMenuName}`)
      .classList.toggle("hiddenAnimation");
  }

  generateSubMenuSolutions() {
    const markup = `
    <div class="hidden__menu" id="subMenu__solutions">
    <div
      class="hidden__menu__closedMenu_header_container"
      id="subMenu__header_solutions"
    >
      <div class="indicator__container_back">
        <span class="indicator__back"></span>
      </div>
      <h3 class="hidden__menu__header">Solutions</h3>
    </div>
    <ul class="hidden__menu__linksContainer">
      ${this.generateSubmenuLinks(
        "EcoHome",
        "Solar Panels",
        "Wind Turbines",
        "Hydropower Technology"
      )}
    </ul>
  </div>
    `;

    this.hiddenMenuCon.insertAdjacentHTML("beforeend", markup);

    document
      .querySelector("#subMenu__header_solutions")
      .addEventListener(
        "click",
        this.toggleHiddenClassHandler.bind(null, "solutions")
      );
  }

  generateSubMenuInvestors() {
    const markup = `
    <div class="hidden__menu" id="subMenu__investors">
            <div
              class="hidden__menu__closedMenu_header_container"
              id="subMenu__header_investors"
            >
              <div class="indicator__container_back">
                <span class="indicator__back"></span>
              </div>
              <h3 class="hidden__menu__header">Investors</h3>
            </div>
            <ul class="hidden__menu__linksContainer">
              ${this.generateSubmenuLinks(
                "Presentations",
                "Selected Financial Data",
                "Dividend",
                "Periodical Reports",
                "Annual Reports"
              )}
            </ul>
          </div>
    `;

    this.hiddenMenuCon.insertAdjacentHTML("beforeend", markup);

    document
      .querySelector("#subMenu__header_investors")
      .addEventListener(
        "click",
        this.toggleHiddenClassHandler.bind(null, "investors")
      );
  }

  generateSubMenuAbout() {
    const markup = `
    <div class="hidden__menu" id="subMenu__about">
    <div
      class="hidden__menu__closedMenu_header_container"
      id="subMenu__header_about"
    >
      <div class="indicator__container_back">
        <span class="indicator__back"></span>
      </div>
      <h3 class="hidden__menu__header">About Company</h3>
    </div>
    <ul class="hidden__menu__linksContainer">
      ${this.generateSubmenuLinks(
        "Worldwide Offices",
        "Headquarters",
        "Management Board",
        "Research & Development",
        "Personal Data & Privacy Policy"
      )}
    </ul>
  </div>
    `;

    this.hiddenMenuCon.insertAdjacentHTML("beforeend", markup);

    document
      .querySelector("#subMenu__header_about")
      .addEventListener(
        "click",
        this.toggleHiddenClassHandler.bind(null, "about")
      );
  }

  toogleHiddenMenuVisibility() {
    this.ham_menu.classList.toggle("open");
    this.body.classList.toggle("overflowClass");
    this.overlay.classList.toggle("displayOverlay");
    this.hiddenMenuCon.classList.toggle("hiddenAnimation");
  }

  generateSubmenuLinks(...links) {
    const linksArr = [...links];

    const markup = linksArr
      .map(
        (link) => `
    <li class="hidden__menu__linkContainer">
        <a class="hidden__menu__link" href="#"
      >${link}</a
    >
  </li>`
      )
      .join("");
    return markup;
  }
}

export default new SideNav();
