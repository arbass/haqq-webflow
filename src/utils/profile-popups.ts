export const profilePopups_func = () => {
  const elements = document.querySelectorAll('.cl-i_profiles_module-grid');

  if (elements.length) {
    elements.forEach((element) => {
      const trigger = element.querySelector('.profile-abs-trigger');
      const popup = element.querySelector('.prfile-popup');
      const closeBtn = element.querySelector('.prfile-popup-close');

      if (trigger && popup && closeBtn) {
        let scrollPosition = 0;

        trigger.addEventListener('click', () => {
          // Store the current scroll position
          scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

          // Add class to body to fix position and prevent scrolling
          document.body.classList.add('body-scroll-lock');
          document.body.style.top = `-${scrollPosition}px`;

          popup.style.display = 'flex';
        });

        closeBtn.addEventListener('click', () => {
          // Remove the class and restore scroll position
          document.body.classList.remove('body-scroll-lock');
          document.body.style.top = '';

          window.scrollTo(0, scrollPosition);

          popup.style.display = 'none';
        });
      }
    });
  }
};
