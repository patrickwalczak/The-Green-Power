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
  updateWebCounter();
});

const loadingTimeLimitHandler = (milliseconds = 3000) => {
  if (!isFinite(milliseconds)) milliseconds = 3000;

  return new Promise((_, reject) =>
    setTimeout(() => {
      reject("Problem with internet connection");
    }, milliseconds)
  );
};

export const fetchHandler = (url, methodOptionsObject = {}) => {
  return async () => {
    try {
      const response = await fetch(url, methodOptionsObject);

      if (!response.ok) {
        throw new Error([response.status, response.statusText, response.url]);
      }
      return response.json();
    } catch (err) {
      throw err;
    }
  };
};

const updateWebCounter = async () => {
  try {
    const webCounter = await Promise.race([
      loadingTimeLimitHandler(),

      fetchHandler(
        "https://trading-platform-dabf0-default-rtdb.europe-west1.firebasedatabase.app/application/greenPowerCounter.json"
      ),
    ]);

    await Promise.race([
      loadingTimeLimitHandler(),

      fetchHandler(
        "https://trading-platform-dabf0-default-rtdb.europe-west1.firebasedatabase.app/application/greenPowerCounter.json",
        {
          method: "PATCH",
          body: JSON.stringify(webCounter + 1),
        }
      ),
    ]);
  } catch (err) {
    console.log(err);
  }
};
