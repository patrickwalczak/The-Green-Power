console.log("test");

import SideNav from "./sideNav.js";
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

////////////////////

function mouseenterHeroImgHandler(
  oppositeImg,
  btn,
  linesContainer,
  contentWrapper,
  contentWords
) {
  leftHeroImage.style.clipPath = "var(--left--normal)";
  rightHeroImage.style.clipPath = "var(--right--normal)";

  heroHeader.classList.remove("hideVisibility");

  linesContainer.style.bottom = "-15%";
  linesContainer.style.left = "-8%";

  btn.classList.remove("isHovered");

  oppositeImg.classList.remove("imageIsHovered");

  contentWrapper.classList.remove("displayContent");

  contentWords.forEach((word) => {
    word.classList.remove("wordHeroRight");
  });
}

function mouseenterHeroBtnHandler(
  leftState,
  rightState,
  linesContainer,
  contentWrapper,
  contentWords
) {
  // ============
  // Adding/removing classes associate with adjusting 'clip: polygon' property for left and right hero images
  leftHeroImage.style.clipPath = `var(--left--${leftState})`;

  rightHeroImage.style.clipPath = `var(--right--${rightState})`;

  // Hide header text
  heroHeader.classList.add("hideVisibility");

  // Change the position of the button's white lines
  linesContainer.style.bottom = "0%";
  linesContainer.style.left = "0%";

  // Change entire button element position
  this.classList.add("isHovered");

  // ===============
  //  Change a background-image position
  if (leftState === "active") {
    leftHeroImage.classList.add("imageIsHovered");
  } else {
    rightHeroImage.classList.add("imageIsHovered");
  }
  // =============
  // For entire content wrapper is added animation which add opacity and visibility
  contentWrapper.classList.add("displayContent");

  // Add animation for each content word
  contentWords.forEach((word) => {
    word.classList.add("wordHeroRight");
  });
}

function mouseoutHeroHandler() {
  // Reset left side
  mouseenterHeroImgHandler(
    leftHeroImage,
    leftHeroButton,
    hero__leftButtonLinesContainer,
    hero__leftContentWrapper,
    hero__leftContentWords
  );
  // Reset right side
  mouseenterHeroImgHandler(
    rightHeroImage,
    rightHeroButton,
    hero__rightButtonLinesContainer,
    hero__rightContentWrapper,
    hero__rightContentWords
  );
}

window.addEventListener("load", () => {
  leftHeroImage.classList.remove("afterLoading");
  rightHeroImage.classList.remove("afterLoading");
});

leftHeroButton.addEventListener(
  "mouseenter",
  mouseenterHeroBtnHandler.bind(
    leftHeroButton,
    "active",
    "unactive",
    hero__leftButtonLinesContainer,
    hero__leftContentWrapper,
    hero__leftContentWords
  )
);

rightHeroButton.addEventListener(
  "mouseenter",
  mouseenterHeroBtnHandler.bind(
    rightHeroButton,
    "unactive",
    "active",
    hero__rightButtonLinesContainer,
    hero__rightContentWrapper,
    hero__rightContentWords
  )
);

rightHeroImage.addEventListener(
  "mouseenter",
  mouseenterHeroImgHandler.bind(
    rightHeroImage,
    leftHeroImage,
    leftHeroButton,
    hero__leftButtonLinesContainer,
    hero__leftContentWrapper,
    hero__leftContentWords
  )
);

leftHeroImage.addEventListener(
  "mouseenter",
  mouseenterHeroImgHandler.bind(
    leftHeroImage,
    rightHeroImage,
    rightHeroButton,
    hero__rightButtonLinesContainer,
    hero__rightContentWrapper,
    hero__rightContentWords
  )
);

leftHeroImage.addEventListener("mouseleave", mouseoutHeroHandler);

rightHeroImage.addEventListener("mouseleave", mouseoutHeroHandler);

const donateBtn = document.querySelector(".button__newsletter");

const navBottom = document.querySelector(".nav__bottom");

const hoverNavLinkHandler = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const hoveredLink = e.target;
    const links = hoveredLink
      .closest(".nav__bottom")
      .querySelectorAll(".nav__link");

    links.forEach((el) => {
      if (el !== hoveredLink) el.style.opacity = this;
    });
    donateBtn.style.opacity = this;
  }
  if (e.target === donateBtn) {
    donateBtn
      .closest(".nav__bottom")
      .querySelectorAll(".nav__link")
      .forEach((el) => (el.style.opacity = this));
  }
};

navBottom.addEventListener("mouseover", hoverNavLinkHandler.bind(0.5));

navBottom.addEventListener("mouseout", hoverNavLinkHandler.bind(1));

const navTop = document.querySelector(".nav__top");

function transformNavActions(entries) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0.8 && entry.isIntersecting) {
      navTop.classList.remove("transform__nav");
    } else {
      navTop.classList.add("transform__nav");
    }
  });
}

const navBottomObserver = new IntersectionObserver(transformNavActions, {
  root: null,
  threshold: [0.9, 0.2],
  rootMargin: "-40px",
});

navBottomObserver.observe(navBottom);

// ECOHOME BUTTONS

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
  }
}

slider();

//==========================

// Fun with IntersectionObserver

///////////////////////////////////////

const headerBelowheader = document.querySelector(".solutions__opening__header");

const beforeSolutionsSection = document.querySelector(".solutions__opening");

const constrastEl = document.querySelector(".solutions__opening__sidebar");

const welcomeHeader = document.querySelector(".solutions__opening__header");

function actions(entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    beforeSolutionsSection.classList.add("runAnimation");
    constrastEl.classList.add("displayBar");
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

// ===========================
// ===========================
// ===========================
// ===========================

const solutionOneImg = document.querySelector(".solution__image_1");

const solutionTwoImg = document.querySelector(".solution__image_2");
const solutionThreeImg = document.querySelector(".solution__image_3");
const solutionFourImg = document.querySelector(".solution__image_4");

const intersectionOptions = {
  root: null,
  threshold: 0.5,
};

const solutionImgObserver = new IntersectionObserver(
  rightImageActions,
  intersectionOptions
);

function rightImageActions(entries, observer) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    if (entry.target.dataset.imgside === "R") {
      entry.target.classList.add("runAnimation__rImg");
      observer.unobserve(entry.target);
    }
    if (entry.target.dataset.imgside === "L") {
      entry.target.classList.add("runAnimation__lImg");
      observer.unobserve(entry.target);
    }
  }
}

solutionImgObserver.observe(solutionOneImg);
solutionImgObserver.observe(solutionTwoImg);
solutionImgObserver.observe(solutionThreeImg);
solutionImgObserver.observe(solutionFourImg);

// ===========================
// ===========================
// ===========================
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

function strengthsActions(entries, observer) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio < 0.3 && entry.isIntersecting) {
      strengthsSection.classList.remove("section--hidden");
      observer.unobserve(strengthsSection);
    }
    if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
      strengthsCards.forEach((card) => {
        card.classList.add("fadeinAnimation");
      });
      observer.unobserve(strengthsCards[0]);
    }
  });
}

const strengthsSectionObserver = new IntersectionObserver(strengthsActions, {
  root: null,
  threshold: [0.2, 0.7],
});

strengthsSectionObserver.observe(strengthsCards[0]);
strengthsSectionObserver.observe(strengthsSection);

// ==============
// ==============
// ==============
// ==============

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
