import { typeTextOnScroll } from '$utils/animation_scramble-text-on-scroll';
import { dropdownTabMaster_func } from '$utils/dropdown-tab-master_func';
import { profilePopups_func } from '$utils/profile-popups';
import { toc_func } from '$utils/shariah-nav-link';
import { kopytokToolCmsEasy } from '$utils/webflow_kopytok-tool-cms-easy';

window.Webflow ||= [];
window.Webflow.push(() => {
  typeTextOnScroll();
  kopytokToolCmsEasy();
  dropdownTabMaster_func();
  profilePopups_func();
  toc_func();
});
