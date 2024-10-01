export const profilePopups_func = () => {
  const elements = document.querySelectorAll('.cl-i_profiles_module-grid');

  if (elements.length) {
    elements.forEach((element) => {
      const trigger = element.querySelector('.profile-abs-trigger');
      const popup = element.querySelector('.prfile-popup');
      const closeBtn = element.querySelector('.prfile-popup-close');

      if (trigger && popup && closeBtn) {
        trigger.addEventListener('click', () => {
          popup.style.display = 'flex';
        });

        closeBtn.addEventListener('click', () => {
          popup.style.display = 'none';
        });
      }
    });
  }
};
