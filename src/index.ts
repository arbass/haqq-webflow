import { animationGlitchOnHover } from '$utils/animation_glitch-on-hover';
import { typeTextOnScroll } from '$utils/animation_scramble-text-on-scroll';
import { kopytokToolCmsEasy } from '$utils/webflow_kopytok-tool-cms-easy';

window.Webflow ||= [];
window.Webflow.push(() => {
  animationGlitchOnHover();
  typeTextOnScroll();
  // kopytokToolCmsEasy();
});
