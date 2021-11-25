// Hero section elements
const leftHeroImage = document.querySelector(".header--leftImage");

const rightHeroImage = document.querySelector(".header--rightImage");

const leftHeroButton = document.querySelector(".header__leftSide_btn");

const rightHeroButton = document.querySelector(".header__rightSide_btn");

const heroHeader = document.querySelector(".hero__header__wrapper");

const hero__leftButtonLinesContainer = document.querySelector("#leftHero");

const hero__rightButtonLinesContainer = document.querySelector("#rightHero");

const hero__leftContentWrapper = document.querySelector(
  "#hero__left__image__content"
);

const hero__rightContentWrapper = document.querySelector(
  "#hero__right__image__content"
);

const hero__rightContentWords = document.querySelectorAll(".word__H");

const hero__leftContentWords = document.querySelectorAll(".word__L");

leftHeroImage.addEventListener("load", () => {
  console.log("test");
  heroHeader.style.visibility = "visible";
});

leftHeroButton.addEventListener("mouseenter", function () {
  // ============
  // Adding/removing classes associate with adjusting 'clip: polygon' property for left and right hero images

  leftHeroImage.classList.remove("leftImage__normal");

  leftHeroImage.classList.add("leftImage__active");

  rightHeroImage.classList.remove("rightImage__normal");

  rightHeroImage.classList.add("rightImage__unactive");
  // =============

  // ===========
  // After hovevring left or right hero button main header dissapears
  heroHeader.classList.add("hideVisibility");

  // =============

  // ============
  // Hero button

  // Change a position of the lines container
  hero__leftButtonLinesContainer.style.bottom = "0%";
  hero__leftButtonLinesContainer.style.left = "0%";
  // Change entire button element position
  leftHeroButton.classList.add("isHovered");

  // ============

  // ===============
  //  Change a background-image position
  leftHeroImage.classList.add("imageLeftIsHovered");

  // =============
  // For entire content wrapper is added animation which add opacity and visibility
  hero__leftContentWrapper.classList.add("removeOpacity__animation");

  // Add animation for each content word
  hero__leftContentWords.forEach((word) => {
    word.classList.add("wordHeroRight");
  });
});

rightHeroButton.addEventListener("mouseenter", function () {
  // ============
  // Adding/removing classes associate with adjusting 'clip: polygon' property for left and right hero images
  leftHeroImage.classList.remove("leftImage__normal");

  leftHeroImage.classList.add("leftImage__unactive");

  rightHeroImage.classList.remove("rightImage__normal");
  rightHeroImage.classList.add("rightImage__active");
  // ======================

  // ===========
  // After hovevring left or right hero button main header dissapears
  heroHeader.classList.add("hideVisibility");

  // =============

  // ============
  // Hero button

  // Change a position of the lines container

  hero__rightButtonLinesContainer.style.bottom = "0%";
  hero__rightButtonLinesContainer.style.left = "0%";
  // Change entire button element position
  rightHeroButton.classList.add("isHovered");

  // ===============
  //  Change a background-image position
  rightHeroImage.classList.add("imageRightIsHovered");

  // =============
  // For entire content wrapper is added animation which add opacity and visibility
  hero__rightContentWrapper.classList.add("removeOpacity__animation");

  // Add animation for each content word
  hero__rightContentWords.forEach((word) => {
    word.classList.add("wordHeroRight");
  });
});

rightHeroImage.addEventListener("mouseenter", function () {
  rightHeroImage.classList.remove("rightImage__unactive");
  rightHeroImage.classList.add("rightImage__normal");

  leftHeroImage.classList.remove("leftImage__active");

  leftHeroImage.classList.add("leftImage__normal");

  if (!rightHeroImage.classList.contains("rightImage__active")) {
    heroHeader.classList.remove("hideVisibility");
  }

  hero__leftButtonLinesContainer.style.bottom = "-15%";
  hero__leftButtonLinesContainer.style.left = "-8%";

  leftHeroButton.classList.remove("isHovered");

  leftHeroImage.classList.remove("imageLeftIsHovered");

  document
    .querySelector("#hero__left__image__content")
    .classList.remove("removeOpacity__animation");

  hero__leftContentWords.forEach((word) => {
    word.classList.remove("wordHeroRight");
  });
});

leftHeroImage.addEventListener("mouseenter", function () {
  rightHeroImage.classList.remove("rightImage__active");
  rightHeroImage.classList.add("rightImage__normal");

  leftHeroImage.classList.add("leftImage__normal");

  leftHeroImage.classList.remove("leftImage__unactive");

  if (!leftHeroImage.classList.contains("leftImage__active")) {
    heroHeader.classList.remove("hideVisibility");
  }
  hero__rightButtonLinesContainer.style.bottom = "-15%";
  hero__rightButtonLinesContainer.style.left = "-8%";

  rightHeroButton.classList.remove("isHovered");

  rightHeroImage.classList.remove("imageRightIsHovered");

  document
    .querySelector("#hero__right__image__content")
    .classList.remove("removeOpacity__animation");

  hero__rightContentWords.forEach((word) => {
    word.classList.remove("wordHeroRight");
  });
});

window.addEventListener("load", function () {
  leftHeroImage.style.transform = "translateX(0rem)";
  rightHeroImage.style.transform = "translateX(0rem)";
});

// Tabbed component

const ecoHomeButtonsContainer = document.querySelector(
  ".ecoHome__buttonsContainer"
);

const ecoHomeButtons = document.querySelectorAll(".ecoHome__button");

const ecoHomeImages = document.querySelectorAll(".ecoHome__image");

ecoHomeButtonsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".ecoHome__button");

  if (!clicked) return;

  ecoHomeButtons.forEach((btn) => btn.classList.remove("button--active"));

  ecoHomeImages.forEach((btn) => btn.classList.add("hidden"));

  clicked.classList.add("button--active");

  ecoHomeImages[clicked.dataset.tab].classList.remove("hidden");
});

document
  .querySelector(".nav__bottom")
  .addEventListener("mouseenter", function (e) {
    leftHeroImage.classList.remove("leftImage__active");

    leftHeroImage.classList.add("leftImage__normal");

    leftHeroImage.classList.remove("leftImage__unactive");

    rightHeroImage.classList.remove("rightImage__unactive");
    rightHeroImage.classList.add("rightImage__normal");

    rightHeroImage.classList.remove("rightImage__active");

    heroHeader.classList.remove("hideVisibility");

    hero__leftButtonLinesContainer.style.bottom = "-15%";
    hero__leftButtonLinesContainer.style.left = "-8%";

    leftHeroButton.classList.remove("isHovered");

    hero__rightButtonLinesContainer.style.bottom = "-15%";
    hero__rightButtonLinesContainer.style.left = "-8%";

    rightHeroButton.classList.remove("isHovered");

    leftHeroImage.classList.remove("imageLeftIsHovered");

    rightHeroImage.classList.remove("imageRightIsHovered");

    document
      .querySelector("#hero__left__image__content")
      .classList.remove("removeOpacity__animation");

    hero__leftContentWords.forEach((word) => {
      word.classList.remove("wordHeroRight");
    });

    document
      .querySelector("#hero__right__image__content")
      .classList.remove("removeOpacity__animation");

    hero__rightContentWords.forEach((word) => {
      word.classList.remove("wordHeroRight");
    });
  });

const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link
      .closest(".nav__bottom")
      .querySelectorAll(".nav__link");
    const buttonNewsLetter = link
      .closest(".nav__bottom")
      .querySelector(".button__newsletter");

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    buttonNewsLetter.style.opacity = this;
  }
};

// Passing "argument" into handler
document
  .querySelector(".nav__bottom")
  .addEventListener("mouseover", handleHover.bind(0.5));
document
  .querySelector(".nav__bottom")
  .addEventListener("mouseout", handleHover.bind(1));

const ham_menu = document.querySelector(".hamburger__menu");

ham_menu.addEventListener("click", function () {
  ham_menu.classList.toggle("open");
  document.querySelector("body").classList.toggle("overflowClass");
  document.querySelector(".overlay").classList.toggle("hidden");
  document.querySelector("#main__menu").classList.toggle("hiddenAnimation");
});

document.querySelector(".closedMenu").addEventListener("click", function () {
  document.querySelector("body").classList.toggle("overflowClass");
  document.querySelector(".overlay").classList.toggle("hidden");
  ham_menu.classList.toggle("open");
  document.querySelector("#main__menu").classList.toggle("hiddenAnimation");
});

document
  .querySelector("#mainMenu__investors")
  .addEventListener("click", function () {
    document
      .querySelector("#subMenu__investors")
      .classList.toggle("hiddenAnimation");
  });

document
  .querySelector("#subMenu__header_investors")
  .addEventListener("click", function () {
    document
      .querySelector("#subMenu__investors")
      .classList.toggle("hiddenAnimation");
  });

document
  .querySelector("#mainMenu__solutions")
  .addEventListener("click", function () {
    document
      .querySelector("#subMenu__solutions")
      .classList.toggle("hiddenAnimation");
  });

document
  .querySelector("#subMenu__header_solutions")
  .addEventListener("click", function () {
    document
      .querySelector("#subMenu__solutions")
      .classList.toggle("hiddenAnimation");
  });

document
  .querySelector("#mainMenu__about")
  .addEventListener("click", function () {
    document
      .querySelector("#subMenu__about")
      .classList.toggle("hiddenAnimation");
  });

document
  .querySelector("#subMenu__header_about")
  .addEventListener("click", function () {
    document
      .querySelector("#subMenu__about")
      .classList.toggle("hiddenAnimation");
  });

document.querySelector(".overlay").addEventListener("click", function () {
  document.querySelector("body").classList.toggle("overflowClass");
  document.querySelector(".overlay").classList.toggle("hidden");
  ham_menu.classList.toggle("open");
  document.querySelector("#main__menu").classList.toggle("hiddenAnimation");
});

const headerBelowheader = document.querySelector(".solutions__opening__header");

//   transform: matrix(1, 0, 0, 1, 0, -50.2217);

// ==========================================

// Slider section

const section = document.querySelector(".slider");
const sliderHeader = document.querySelector(".slider__header");
const sectionButton = document.querySelector(".section__button");
const lineBelowHeader = document.querySelector(".line");
const arrows = document.querySelectorAll(".arrow");
const rArrow = document.querySelector(".rightArrow");
const lArrow = document.querySelector(".leftArrow");
const dots = document.querySelectorAll(".dot");
const dotsContainer = document.querySelector(".dots");
const images = document.querySelectorAll(".slide__image");
const descriptionContainer = document.querySelector(".img__descrip__container");
const descriptionText = document.querySelector(".img__descrip__text");
const emNum = document.querySelector(".emphasize__num");

function slider() {
  let currSlide = 1;
  const maxSlide = images.length;

  rArrow.addEventListener("click", function () {
    if (currSlide === maxSlide) currSlide = 1;
    else {
      currSlide++;
    }

    controlDots(currSlide);

    controlDescription(currSlide);
  });

  lArrow.addEventListener("click", function () {
    if (currSlide === 1) currSlide = 3;
    else {
      currSlide--;
    }

    controlDots(currSlide);

    controlDescription(currSlide);
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", function () {
      currSlide = Number(dot.dataset.id);

      controlDots(currSlide);

      controlDescription(currSlide);
    });
  });

  function controlDescription(currSlide) {
    if (currSlide === 1) {
      descriptionContainer.innerHTML = `


        <h3 class="img__descrip__text">
          <span class="first_part typing-class"> With You we planted </span>
          <br />
          <span class="emphasize__num second_part typing-class">5</span>
          <span class="third_part typing-class"> million </span>

          <br />
          <span class="fourth_part typing-class">trees around the world </span>
        </h3>
      
      `;
    }

    if (currSlide === 2) {
      descriptionContainer.innerHTML = `

    
    <h3 class="img__descrip__text">
          <span class="first_part_2 typing-class"> The Ocean Clean-Up </span>
          <br />
          <span class="second_part_2 typing-class">Project allows to remove</span>
          <br />
          <span class="third_part_2 typing-class emphasize__num">100</span>
          <span class="fourth_part_2 typing-class">tons of plastic </span>
        </h3>
      
      `;
    }

    if (currSlide === 3) {
      descriptionContainer.innerHTML = `
    

    <h3 class="img__descrip__text">
          <span class="first_part_3 typing-class">We collected about</span> <span class="second_part_3 typing-class emphasize__num">50</span>
          <br />
          <span class="third_part_3 typing-class">million dollars for different</span>
          <br />
          <span class="fourth_part_3 typing-class">Animal Charities</span>
        </h3>
      `;
    }
  }

  function controlDots(currSlide) {
    dots.forEach((dot) => {
      dot.classList.remove("dot__active");
    });

    images.forEach((img) => {
      img.classList.add("hidden");
    });

    dots[currSlide - 1].classList.add("dot__active");
    images[currSlide - 1].classList.remove("hidden");

    const classArr = new Array(...section.classList);
    section.classList.remove(classArr[1]);
    section.classList.add(`slider__BG__${currSlide}`);
    console.log(currSlide);
  }
}

slider();

//==========================

// Fun with IntersectionObserver

///////////////////////////////////////

const beforeSolutionsSection = document.querySelector(".solutions__opening");

const constrastEl = document.querySelector(".solutions__opening__sidebar");

const welcomeHeader = document.querySelector(".solutions__opening__header");

function actions(entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    beforeSolutionsSection.classList.add("runAnimation");
    constrastEl.classList.add("runAnimation__2");
  }
}

const beforeSolutionsSectionObserver = new IntersectionObserver(actions, {
  root: null,
  threshold: 0.7,
});

beforeSolutionsSectionObserver.observe(beforeSolutionsSection);

const wholeTextEl = document.querySelector("#solution__info--1");

const wholeSecondTextEl = document.querySelector("#solution__info--2");

const wholeThirdTextEl = document.querySelector("#solution__info--3");

const wholeFourthTextEl = document.querySelector("#solution__info--4");

const advantagesHeader = document.querySelector(".intro__header");

const advantageBoxes = document.querySelectorAll(".advantage__box");

window.addEventListener("scroll", function () {
  if (window.scrollY > 80) {
    document.querySelector(".nav__top").classList.add("transform__nav");
  }

  if (window.scrollY < 80) {
    document.querySelector(".nav__top").classList.remove("transform__nav");
  }

  if (window.scrollY > 770 && window.scrollY < 1450) {
    wholeTextEl.style.transform = `matrix(1, 0, 0, 1, 0, ${
      (1200 - window.scrollY) / 10
    })`;
  }

  if (window.scrollY > 1250 && window.scrollY < 2150) {
    wholeSecondTextEl.style.transform = `matrix(1, 0, 0, 1, 0, ${
      (1800 - window.scrollY) / 12
    })`;
  }

  if (window.scrollY > 1750 && window.scrollY < 2750) {
    wholeThirdTextEl.style.transform = `matrix(1, 0, 0, 1, 0, ${
      (2200 - window.scrollY) / 12
    })`;
  }

  if (window.scrollY > 2200 && window.scrollY < 3200) {
    wholeFourthTextEl.style.transform = `matrix(1, 0, 0, 1, 0, ${
      (2800 - window.scrollY) / 12
    })`;
  }

  if (window.scrollY > 200 && window.scrollY < 850) {
    welcomeHeader.style.transform = `matrix(1, 0, 0, 1, 0, ${
      (500 - window.scrollY) / 10
    })`;
  }
});

const solutionOneImg = document.querySelector(".solution__image_1");

const solutionTwoImg = document.querySelector(".solution__image_2");
const solutionThreeImg = document.querySelector(".solution__image_3");
const solutionFourImg = document.querySelector(".solution__image_4");

const rightImagesObserver = new IntersectionObserver(rightImageActions, {
  root: null,
  threshold: 0.5,
});

function rightImageActions(entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    solutionOneImg.classList.add("runAnimation__rImg");
  }
}

rightImagesObserver.observe(solutionOneImg);

const rightThirdImgObserver = new IntersectionObserver(rightThirdImageActions, {
  root: null,
  threshold: 0.5,
});

function rightThirdImageActions(entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    solutionThreeImg.classList.add("runAnimation__rImg");
  }
}
rightThirdImgObserver.observe(solutionThreeImg);

// ====================

const leftFirstImgObserver = new IntersectionObserver(leftFirstImageActions, {
  root: null,
  threshold: 0.5,
});

function leftFirstImageActions(entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    solutionTwoImg.classList.add("runAnimation__lImg");
  }
}
leftFirstImgObserver.observe(solutionTwoImg);

const leftSecondImgObserver = new IntersectionObserver(leftSecondImageActions, {
  root: null,
  threshold: 0.5,
});

function leftSecondImageActions(entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    solutionFourImg.classList.add("runAnimation__lImg");
  }
}
leftSecondImgObserver.observe(solutionFourImg);

// ===========================

const contentEl = document.querySelector(".content__block");
const imageOne = document.querySelector(".article__image__2");
const imageTwo = document.querySelector(".article__image__3");
const imageThree = document.querySelector(".article__image__4");

imageOne.addEventListener("mouseenter", () => {
  contentEl.style.transform = "translateY(var(--translate-block-one))";
  contentEl.style.backgroundColor = "var(--block-one-color)";
  contentEl.innerHTML = `
  <h4 class="block__text">Biology <br/> Topics</h4>

  `;
});

imageTwo.addEventListener("mouseenter", () => {
  contentEl.style.transform = "translateY(var(--translate-block-two))";
  contentEl.style.backgroundColor = "var(--block-two-color)";
  contentEl.innerHTML = `
  <h4 class="block__text">Environmental Protection Topics</h4>

  `;
});

imageThree.addEventListener("mouseenter", () => {
  contentEl.style.transform = "translateY(var(--translate-block-three))";
  contentEl.style.backgroundColor = "var(--block-three-color)";
  contentEl.innerHTML = `
  <h4 class="block__text">Environmental technology Topics</h4>

  `;
});

// =====================================

const strengthsSection = document.querySelector(".strengths__section");
const strengthsCards = document.querySelectorAll(".strength__card");

function strengthsActions(entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    strengthsCards.forEach((card) => {
      card.classList.add("fadeinAnimation");
    });
  }
}

const strengthsSectionObserver = new IntersectionObserver(strengthsActions, {
  root: null,
  threshold: 0.7,
});

strengthsSectionObserver.observe(strengthsSection);

const leftSecondImgObserver__showStrengths = new IntersectionObserver(
  displayStrengths,
  {
    root: null,
    threshold: 0.9,
  }
);

function displayStrengths(entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    strengthsSection.classList.add("visible");
  }
}

leftSecondImgObserver__showStrengths.observe(solutionFourImg);

const ecoHomeHeaderWrapper = document.querySelector(
  ".ecoHome__header__container"
);

const ecoHomeHeaderWrapperObserver = new IntersectionObserver(
  runEcoHomeAnimation,
  {
    root: null,
    threshold: 0.6,
  }
);

function runEcoHomeAnimation(entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    ecoHomeHeaderWrapper.classList.add("visible");
    document.querySelector("#ecoHome__textTop").classList.add("text-top");
    document.querySelector("#ecoHome__textBottom").classList.add("text-bottom");
  }
}

ecoHomeHeaderWrapperObserver.observe(ecoHomeHeaderWrapper);

// ==========================

const pageContainer = document.querySelector(".container");

window.addEventListener("load", function () {
  console.log("test");
});
