import HiddenMenu from "./hiddenMenu.js";
import HeroView from "./heroView.js";
import EcoHomeView from "./ecoHomeView.js";
import NavView from "./navView.js";
import SliderSectionView from "./sliderSectionView.js";
import FollowingTitleView from "./followingTitleView.js";

// ===========================
// ===========================
// ===========================
// ===========================

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
