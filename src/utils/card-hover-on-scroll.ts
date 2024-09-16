export const cardHoverOnScroll_func = () => {
  // Проверяем ширину экрана
  if (window.innerWidth <= 767) {
    const elements = document.querySelectorAll('.card-hover-on-scroll');

    if (elements.length) {
      let ticking = false;

      const updateElements = () => {
        const viewportHeight = window.innerHeight;
        const viewportCenter = viewportHeight / 2;

        let minDistance = Infinity;
        let closestElement = null;

        elements.forEach((element) => {
          const rect = element.getBoundingClientRect();
          const elementCenter = rect.top + rect.height / 2;
          const distance = Math.abs(elementCenter - viewportCenter);

          if (distance < minDistance) {
            minDistance = distance;
            closestElement = element;
          }
        });

        // Устанавливаем opacity для элементов
        elements.forEach((element) => {
          const item = element.querySelector('.card-hover-on-scroll_item');
          if (item) {
            if (element === closestElement) {
              item.style.opacity = '1';
            } else {
              item.style.opacity = '0';
            }
          }
        });
      };

      const handleScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            updateElements();
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', handleScroll);

      // Инициализируем состояние при загрузке
      updateElements();
    }
  }
};
