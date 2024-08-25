import { animationGlitchOnHover } from '$utils/animation_glitch-on-hover';
import { typeTextOnScroll } from '$utils/animation_scramble-text-on-scroll';
import { webflow_checkerQa } from '$utils/webflow_checker-qa';

window.Webflow ||= [];
window.Webflow.push(() => {
  animationGlitchOnHover();
  typeTextOnScroll();
  webflow_checkerQa();
});
