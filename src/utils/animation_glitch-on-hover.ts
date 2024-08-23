export const animationGlitchOnHover = () => {
  const all_animationGlitchOnHover = document.querySelectorAll('[data-hover]');

  if (all_animationGlitchOnHover.length) {
    all_animationGlitchOnHover.forEach((hoverElement) => {
      const glitchElement = hoverElement.querySelector('[data-glitch]');

      const clone1 = glitchElement.cloneNode(true);
      const clone2 = glitchElement.cloneNode(true);

      clone1.classList.add('glitch-clone');
      clone2.classList.add('glitch-clone');

      clone1.style.position = 'absolute';
      clone2.style.position = 'absolute';
      clone1.style.visibility = 'hidden';
      clone2.style.visibility = 'hidden';

      let isHovering = false;
      let activeInterval;

      const applyGlitchStyles = () => {
        clone1.style.transform = `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px) skew(${Math.random() * 5 - 2.5}deg)`;
        clone2.style.transform = `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px) skew(${Math.random() * 5 - 2.5}deg)`;
        clone1.style.filter = 'hue-rotate(90deg)';
        clone2.style.filter = 'hue-rotate(-90deg)';
      };

      hoverElement.appendChild(clone1);
      hoverElement.appendChild(clone2);

      const glitch = () => {
        if (!isHovering) return;

        clone1.style.visibility = 'visible';
        clone2.style.visibility = 'visible';

        const jumps = 5;
        const interval = 80;
        let jumpCount = 0;

        activeInterval = setInterval(() => {
          applyGlitchStyles();
          jumpCount++;

          if (jumpCount >= jumps) {
            clearInterval(activeInterval);
            setTimeout(() => {
              clone1.style.visibility = 'hidden';
              clone2.style.visibility = 'hidden';

              if (isHovering) {
                setTimeout(glitch, 4000); // Restart the glitch effect after 4 seconds
              }
            }, interval);
          }
        }, interval);
      };

      hoverElement.addEventListener('mouseenter', () => {
        isHovering = true;
        glitch();
      });

      hoverElement.addEventListener('mouseleave', () => {
        isHovering = false;
        clearInterval(activeInterval); // Stop any active intervals
        clone1.style.visibility = 'hidden';
        clone2.style.visibility = 'hidden';
        glitchElement.style.transform = 'translate(0, 0)';
        glitchElement.style.opacity = 1;
      });
    });
  }
};
