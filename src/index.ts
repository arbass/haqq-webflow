import { academyPage_func } from '$utils/academy-page_func';
import { buttonsBrand_func } from '$utils/buttons-brand_func';
import { cardHoverOnScroll_func } from '$utils/card-hover-on-scroll';
import { cardHoverOnScrollRoadmap_func } from '$utils/card-hover-on-scroll-roadmap';
import { dropdownTabMaster_func } from '$utils/dropdown-tab-master_func';
import { ecosystemTabs_func } from '$utils/ecosystem-tabs';
import { islmPlatformsCards_func } from '$utils/islm-platforms-cards_func';
import { profilePopups_func } from '$utils/profile-popups';
import { func_removeVideoPlay } from '$utils/remove-video-play';
import { toc_func } from '$utils/shariah-nav-link';
import { tabsDebitProgress_func } from '$utils/tabs-debit-progress';
import { tabsMainProgress_func } from '$utils/tabs-main-progress';

window.Webflow ||= [];
window.Webflow.push(() => {
  dropdownTabMaster_func();
  profilePopups_func();
  toc_func();
  tabsMainProgress_func();
  cardHoverOnScroll_func();
  cardHoverOnScrollRoadmap_func();
  buttonsBrand_func();
  academyPage_func();
  islmPlatformsCards_func();
  tabsDebitProgress_func();
  ecosystemTabs_func();
  func_removeVideoPlay();
});
