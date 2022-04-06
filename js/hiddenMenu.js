class HiddenMenu {
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

    this.generateSubMenu("solutions", [
      "EcoHome",
      "Solar Panels",
      "Wind Turbines",
      "Hydropower Technology",
    ]);

    this.generateSubMenu("investors", [
      "Presentations",
      "Selected Financial Data",
      "Dividend",
      "Periodical Reports",
      "Annual Reports",
    ]);

    this.generateSubMenu("about", [
      "Worldwide Offices",
      "Headquarters",
      "Management Board",
      "Research & Development",
      "Personal Data & Privacy Policy",
    ]);
  }

  toggleHiddenClassHandler(subMenuName) {
    document
      .querySelector(`#subMenu__${subMenuName}`)
      .classList.toggle("hiddenAnimation");
  }

  generateSubMenu(subMenuName, linksArr) {
    const rest = subMenuName.slice(1);
    const newName = subMenuName[0].toUpperCase() + rest;

    const markup = `
    <div class="hidden__menu" id="subMenu__${subMenuName}">
    <div
      class="hidden__menu__closedMenu_header_container"
      id="subMenu__header_${subMenuName}"
    >
      <div class="indicator__container_back">
        <span class="indicator__back"></span>
      </div>
      <h3 class="hidden__menu__header">${newName}</h3>
    </div>
    <ul class="hidden__menu__linksContainer">
      ${this.generateSubmenuLinks(...linksArr)}
    </ul>
  </div>
    `;

    this.hiddenMenuCon.insertAdjacentHTML("beforeend", markup);

    document
      .querySelector(`#subMenu__header_${subMenuName}`)
      .addEventListener(
        "click",
        this.toggleHiddenClassHandler.bind(null, subMenuName)
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

export default new HiddenMenu();
