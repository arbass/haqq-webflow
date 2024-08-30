import { animationGlitchOnHover } from '$utils/animation_glitch-on-hover';
import { typeTextOnScroll } from '$utils/animation_scramble-text-on-scroll';
import { dropdownTabMaster_func } from '$utils/dropdown-tab-master_func';
import { kopytokToolCmsEasy } from '$utils/webflow_kopytok-tool-cms-easy';

window.Webflow ||= [];
window.Webflow.push(() => {
  animationGlitchOnHover();
  typeTextOnScroll();
  // kopytokToolCmsEasy();
  dropdownTabMaster_func();
});
