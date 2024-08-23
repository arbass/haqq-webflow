export const typeTextOnScroll = () => {
  const elements = document.querySelectorAll('[data-animate-visibility]');

  const isInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const typeText = (element) => {
    const originalText = element.textContent;
    const originalHeight = element.scrollHeight;

    element.style.height = `${originalHeight}px`;
    element.style.whiteSpace = 'pre-wrap';
    element.style.overflow = 'hidden';

    let index = 0;
    element.textContent = '';

    element.style.opacity = '1';

    const interval = setInterval(() => {
      element.textContent += originalText[index];
      index++;

      if (index >= originalText.length) {
        clearInterval(interval);
        element.style.height = '';
        element.style.overflow = '';
      }
    }, 40);
  };

  const resetAnimationsOnResize = () => {
    elements.forEach((element) => {
      if (!element.hasAttribute('data-animate-completed')) {
        const originalHeight = element.scrollHeight;
        element.style.height = `${originalHeight}px`;
      }
    });
  };

  const onScroll = () => {
    elements.forEach((element) => {
      if (isInViewport(element) && !element.hasAttribute('data-animate-completed')) {
        const delay = parseFloat(element.getAttribute('data-animate-delay')) || 0;

        setTimeout(() => {
          typeText(element);
          element.setAttribute('data-animate-completed', 'true');
        }, delay * 1000);
      }
    });
  };

  window.addEventListener('scroll', onScroll);
  window.addEventListener('load', onScroll);
  window.addEventListener('resize', resetAnimationsOnResize);
};
