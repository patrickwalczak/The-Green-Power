class EcoHomeView {
  headerContainer = document.querySelector(".ecoHome__header__container");
  headerTopPart = document.querySelector("#ecoHome__textTop");
  headerBottomPart = document.querySelector("#ecoHome__textBottom");
  ecoHomeButtons = document.querySelectorAll(".ecoHome__button");
  ecoHomeImages = document.querySelectorAll(".ecoHome__image");
  ecoHomeButtonsContainer = document.querySelector(
    ".ecoHome__buttonsContainer"
  );
  headerObserver;

  constructor() {
    this.headerObserver = new IntersectionObserver(
      this.displayHeader.bind(this),
      {
        root: null,
        threshold: 0.6,
      }
    );

    this.headerObserver.observe(this.headerContainer);

    this.ecoHomeButtonsContainer.addEventListener(
      "click",
      this.onClickHandler.bind(this)
    );
  }

  onClickHandler(e) {
    const clicked = e.target.closest(".ecoHome__button");
    if (!clicked) return;
    this.ecoHomeButtons.forEach((btn) =>
      btn.classList.remove("button--active")
    );
    this.ecoHomeImages.forEach((btn) => btn.classList.add("hidden"));
    clicked.classList.add("button--active");
    this.ecoHomeImages[clicked.dataset.tab].classList.remove("hidden");
  }

  displayHeader(entries) {
    const [entry] = entries;

    if (entry.isIntersecting) {
      this.headerContainer.classList.add("visible");
      this.headerTopPart.classList.add("text-top");
      this.headerBottomPart.classList.add("text-bottom");
    }
  }
}

export default new EcoHomeView();
