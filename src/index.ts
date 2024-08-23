import { animationGlitchOnHover } from '$utils/animation_glitch-on-hover';
import { typeTextOnScroll } from '$utils/animation_scramble-text-on-scroll';

window.Webflow ||= [];
window.Webflow.push(() => {
  animationGlitchOnHover();
  typeTextOnScroll();
});
