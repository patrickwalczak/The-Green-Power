import HiddenMenu from "./hiddenMenu.js";
import HeroView from "./heroView.js";
import EcoHomeView from "./ecoHomeView.js";
import NavView from "./navView.js";
import SliderSectionView from "./sliderSectionView.js";

const beforeSolutionsSection = document.querySelector(".solutions__opening");

const constrastEl = document.querySelector(".solutions__opening__sidebar");

const welcomeHeader = document.querySelector(".solutions__opening__header");

function actions(entries, observer) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    beforeSolutionsSection.classList.add("runAnimation");
    constrastEl.classList.add("displayBar");
    observer.unobserve(beforeSolutionsSection);
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

window.addEventListener("scroll", function () {
  if (window.scrollY > 770 && window.scrollY < 1450) {
    wholeTextEl.style.transform = `matrix(1, 0, 0, 1, 0, ${
      (1200 - window.scrollY) / 12
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
