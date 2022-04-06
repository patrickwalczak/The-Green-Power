class HeroView {
  leftHeroImage = document.querySelector(".header--leftImage");

  rightHeroImage = document.querySelector(".header--rightImage");

  leftHeroButton = document.querySelector(".header__leftSide_btn");

  rightHeroButton = document.querySelector(".header__rightSide_btn");

  heroHeader = document.querySelector(".hero__header__wrapper");

  hero__leftButtonLinesContainer = document.querySelector("#leftHero");

  hero__rightButtonLinesContainer = document.querySelector("#rightHero");

  hero__leftContentWrapper = document.querySelector(
    "#hero__left__image__content"
  );

  hero__rightContentWrapper = document.querySelector(
    "#hero__right__image__content"
  );

  hero__rightContentWords = document.querySelectorAll(".word__H");

  hero__leftContentWords = document.querySelectorAll(".word__L");

  constructor() {
    window.addEventListener("load", () => {
      this.leftHeroImage.classList.remove("afterLoading");
      this.rightHeroImage.classList.remove("afterLoading");
    });

    this.leftHeroButton.addEventListener(
      "mouseenter",
      this.mouseenterHeroBtnHandler.bind(
        this,
        this.leftHeroButton,
        "active",
        "unactive",
        this.hero__leftButtonLinesContainer,
        this.hero__leftContentWrapper,
        this.hero__leftContentWords
      )
    );

    this.rightHeroButton.addEventListener(
      "mouseenter",
      this.mouseenterHeroBtnHandler.bind(
        this,
        this.rightHeroButton,
        "unactive",
        "active",
        this.hero__rightButtonLinesContainer,
        this.hero__rightContentWrapper,
        this.hero__rightContentWords
      )
    );

    this.rightHeroImage.addEventListener(
      "mouseenter",
      this.mouseenterHeroImgHandler.bind(
        this,
        this.leftHeroImage,
        this.leftHeroButton,
        this.hero__leftButtonLinesContainer,
        this.hero__leftContentWrapper,
        this.hero__leftContentWords
      )
    );

    this.leftHeroImage.addEventListener(
      "mouseenter",
      this.mouseenterHeroImgHandler.bind(
        this,
        this.rightHeroImage,
        this.rightHeroButton,
        this.hero__rightButtonLinesContainer,
        this.hero__rightContentWrapper,
        this.hero__rightContentWords
      )
    );

    this.leftHeroImage.addEventListener(
      "mouseleave",
      this.mouseoutHeroHandler.bind(this)
    );

    this.rightHeroImage.addEventListener(
      "mouseleave",
      this.mouseoutHeroHandler.bind(this)
    );
  }

  mouseoutHeroHandler() {
    // Reset left side
    this.mouseenterHeroImgHandler(
      this.leftHeroImage,
      this.leftHeroButton,
      this.hero__leftButtonLinesContainer,
      this.hero__leftContentWrapper,
      this.hero__leftContentWords
    );
    // Reset right side
    this.mouseenterHeroImgHandler(
      this.rightHeroImage,
      this.rightHeroButton,
      this.hero__rightButtonLinesContainer,
      this.hero__rightContentWrapper,
      this.hero__rightContentWords
    );
  }

  mouseenterHeroImgHandler(
    oppositeImg,
    btn,
    linesContainer,
    contentWrapper,
    contentWords
  ) {
    this.leftHeroImage.style.clipPath = "var(--left--normal)";
    this.rightHeroImage.style.clipPath = "var(--right--normal)";

    this.heroHeader.classList.remove("hideVisibility");

    linesContainer.style.bottom = "-15%";
    linesContainer.style.left = "-8%";

    btn.classList.remove("isHovered");

    oppositeImg.classList.remove("imageIsHovered");

    contentWrapper.classList.remove("displayContent");

    contentWords.forEach((word) => {
      word.classList.remove("wordHeroRight");
    });
  }

  mouseenterHeroBtnHandler(
    btn,
    leftState,
    rightState,
    linesContainer,
    contentWrapper,
    contentWords
  ) {
    // ============
    // Adding/removing classes associate with adjusting 'clip: polygon' property for left and right hero images
    this.leftHeroImage.style.clipPath = `var(--left--${leftState})`;

    this.rightHeroImage.style.clipPath = `var(--right--${rightState})`;

    // Hide header text
    this.heroHeader.classList.add("hideVisibility");

    // Change the position of the button's white lines
    linesContainer.style.bottom = "0%";
    linesContainer.style.left = "0%";

    // Change entire button element position
    btn.classList.add("isHovered");

    // ===============
    //  Change a background-image position
    if (leftState === "active") {
      this.leftHeroImage.classList.add("imageIsHovered");
    } else {
      this.rightHeroImage.classList.add("imageIsHovered");
    }
    // =============
    // For entire content wrapper is added animation which add opacity and visibility
    contentWrapper.classList.add("displayContent");

    // Add animation for each content word
    contentWords.forEach((word) => {
      word.classList.add("wordHeroRight");
    });
  }
}

export default new HeroView();
