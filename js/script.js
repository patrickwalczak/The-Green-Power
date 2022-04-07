import HiddenMenu from "./hiddenMenu.js";
import HeroView from "./heroView.js";
import EcoHomeView from "./ecoHomeView.js";
import NavView from "./navView.js";
import SliderSectionView from "./sliderSectionView.js";
import FollowingTitleView from "./followingTitleView.js";
import SolutionsView from "./solutionsView.js";
import CompanyStrengths from "./companyStrengths.js";

window.addEventListener("load", () => {
  document.querySelector("body").classList.remove("loading");
  document.querySelector(".loadingModal").classList.add("loaded");
});

// // Lazy loading images
// const imgTargets = document.querySelectorAll("img[data-src]");

// const loadImg = function (entries, observer) {
//   const [entry] = entries;

//   if (!entry.isIntersecting) return;

//   // Replace src with data-src
//   entry.target.src = entry.target.dataset.src;

//   entry.target.addEventListener("load", function () {
//     entry.target.classList.remove("lazy-img");
//   });

//   observer.unobserve(entry.target);
// };

// const imgObserver = new IntersectionObserver(loadImg, {
//   root: null,
//   threshold: 0,
//   rootMargin: "200px",
// });

// imgTargets.forEach((img) => imgObserver.observe(img));
