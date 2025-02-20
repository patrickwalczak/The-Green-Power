import SideMenu from './sideMenu.js';
import HeroView from './heroView.js';
import EcoHomeView from './ecoHomeView.js';
import NavView from './navView.js';
import SliderSectionView from './sliderSectionView.js';
import FollowingTitleView from './followingTitleView.js';
import SolutionsView from './solutionsView.js';
import CompanyStrengths from './companyStrengths.js';

window.addEventListener('load', () => {
  document.querySelector('body').classList.remove('loading');
  document.querySelector('.loadingModal').classList.add('loaded');
});

export const fetchHandler = async (url, methodOptionsObject = {}) => {
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
