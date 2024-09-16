export const cardHoverOnScrollRoadmap_func = () => {
  // Проверяем, есть ли необходимые элементы на странице
  const elements = document.querySelectorAll('.roadmap_item');

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
        if (element === closestElement) {
          element.style.opacity = '1';
        } else {
          element.style.opacity = '0.4';
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

    // Добавляем обработчики событий для скролла и изменения размера окна
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    // Инициализируем состояние при загрузке страницы
    updateElements();
  }
};
