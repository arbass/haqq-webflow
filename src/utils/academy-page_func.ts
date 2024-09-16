export const academyPage_func = () => {
  // Получаем все сетки
  const grids = Array.from(document.querySelectorAll('[academy-modules_item-grid-slug]'));

  // Получаем все карточки
  const cards = Array.from(document.querySelectorAll('[cli_academy-modules_item-grid-slug]'));

  // Создаем объект для хранения карточек по их slug
  const cardsBySlug = {};

  // Распределяем карточки по slug
  cards.forEach((card) => {
    const slug = card.getAttribute('cli_academy-modules_item-grid-slug');
    if (!cardsBySlug[slug]) {
      cardsBySlug[slug] = [];
    }
    cardsBySlug[slug].push(card);
  });

  // Для каждой сетки добавляем соответствующие карточки
  grids.forEach((grid) => {
    const slug = grid.getAttribute('academy-modules_item-grid-slug');
    const matchingCards = cardsBySlug[slug];
    if (matchingCards) {
      matchingCards.forEach((card) => {
        grid.appendChild(card);
      });
    }
  });

  // --- Новая функция 1: Подсчет количества всех карточек ---
  // Получаем элемент для отображения количества карточек
  const countElement = document.querySelector('[count-of-lesson-cards]');
  if (countElement) {
    // Устанавливаем текстовое содержимое как количество карточек
    countElement.textContent = cards.length;
  }

  // --- Новая функция 2: Суммирование значений атрибутов [current-duration] ---
  // Получаем все элементы с атрибутом [current-duration]
  const durationElements = Array.from(document.querySelectorAll('[current-duration]'));

  // Суммируем значения атрибутов
  const totalDuration = durationElements.reduce((sum, elem) => {
    const value = parseFloat(elem.getAttribute('current-duration'));
    return sum + (isNaN(value) ? 0 : value);
  }, 0);

  // Получаем элемент для отображения общей продолжительности
  const durationSumElement = document.querySelector('[summary-of-durations]');
  if (durationSumElement) {
    // Устанавливаем текстовое содержимое как общую сумму продолжительностей
    durationSumElement.textContent = totalDuration;
  }
};
