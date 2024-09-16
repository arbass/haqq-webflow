import { academyPage_func } from '$utils/academy-page_func';
import { typeTextOnScroll } from '$utils/animation_scramble-text-on-scroll';
import { buttonsBrand_func } from '$utils/buttons-brand_func';
import { cardHoverOnScroll_func } from '$utils/card-hover-on-scroll';
import { cardHoverOnScrollRoadmap_func } from '$utils/card-hover-on-scroll-roadmap';
import { dropdownTabMaster_func } from '$utils/dropdown-tab-master_func';
import { profilePopups_func } from '$utils/profile-popups';
import { toc_func } from '$utils/shariah-nav-link';
import { tabsMainProgress_func } from '$utils/tabs-main-progress';

window.Webflow ||= [];
window.Webflow.push(() => {
  typeTextOnScroll();
  dropdownTabMaster_func();
  profilePopups_func();
  toc_func();
  tabsMainProgress_func();
  cardHoverOnScroll_func();
  cardHoverOnScrollRoadmap_func();
  buttonsBrand_func();
  academyPage_func();
});
