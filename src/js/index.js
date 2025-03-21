import SideMenu from './sideMenu.js';
import HeroView from './heroView.js';
import EcoHomeView from './ecoHomeView.js';
import NavView from './navView.js';
import GreenImpactView from './greenImpact.js';
import HighlightsView from './highlightsView.js';
import SolutionsView from './solutionsView.js';
import Strengths from './strengths.js';

window.addEventListener('load', () => {
	document.querySelector('body').classList.remove('loading');
	document.querySelector('.loadingModal').classList.add('loaded');
});
