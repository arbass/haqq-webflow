export const ecosystemTabs_func = () => {
  // Получаем обёртку компонента
  const wrapper = document.querySelector('[ecosystem-catalog]');
  if (!wrapper) return; // Проверяем, что обёртка существует

  // Получаем кнопки табов и элементы дропдауна
  const tabButtons = wrapper.querySelectorAll('[ecosystem-tab-link-category]');
  const dropdownItems = wrapper.querySelectorAll('[ecosystem-drop-link-category]');

  // Получаем текстовый элемент для обновления текста
  const toggleTextElement = wrapper.querySelector('[dropdown-from-a-list_target="toggl-text"]');

  // Получаем все карточки
  const cards = wrapper.querySelectorAll('[ecosystem-card]');

  // Функция для обработки клика по кнопкам табов и элементам дропдауна
  function handleFilterClick(event) {
    event.preventDefault();

    const clickedElement = event.currentTarget;
    let category;

    // Определяем категорию на основе атрибутов
    if (clickedElement.hasAttribute('ecosystem-tab-link-category')) {
      category = clickedElement.getAttribute('ecosystem-tab-link-category');

      // Управление классом .w--current для кнопок табов
      tabButtons.forEach((button) => {
        button.classList.remove('w--current');
      });
      clickedElement.classList.add('w--current');
    } else if (clickedElement.hasAttribute('ecosystem-drop-link-category')) {
      category = clickedElement.getAttribute('ecosystem-drop-link-category');
    } else {
      return;
    }

    // Обновляем текст в элементе дропдауна
    const newText = clickedElement.textContent.trim();
    toggleTextElement.textContent = newText;

    // Фильтруем карточки
    cards.forEach((card) => {
      const cardCategories = card.querySelectorAll('[ecosystem-card-category]');
      let matchesCategory = false;

      cardCategories.forEach((cardCategory) => {
        const cardCategoryValue = cardCategory
          .getAttribute('ecosystem-card-category')
          .toLowerCase();

        // Проверяем соответствие категории
        if (category === 'all' || cardCategoryValue === category) {
          matchesCategory = true;
        }
      });

      // Добавляем или убираем класс .hide
      if (matchesCategory) {
        card.classList.remove('hide');
      } else {
        card.classList.add('hide');
      }
    });

    // Обновляем параметр 'tag' в URL
    const url = new URL(window.location);
    if (category === 'all') {
      url.searchParams.delete('tag');
    } else {
      url.searchParams.set('tag', category);
    }
    window.history.replaceState({}, '', url);
  }

  // Добавляем обработчики событий на кнопки табов
  tabButtons.forEach((button) => {
    button.addEventListener('click', handleFilterClick);
  });

  // Добавляем обработчики событий на элементы дропдауна
  dropdownItems.forEach((item) => {
    item.addEventListener('click', handleFilterClick);
  });

  // Устанавливаем класс .w--current на первую кнопку таба
  const firstTabButton = tabButtons[0];
  if (firstTabButton) {
    firstTabButton.classList.add('w--current');

    // Симулируем клик по первой кнопке таба после всех основных функций
    setTimeout(() => {
      firstTabButton.click();
    }, 0);
  }

  // Добавляем проверку параметра 'tag' в URL
  (() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tagParam = urlParams.get('tag');

    if (tagParam) {
      setTimeout(() => {
        const wrapper = document.querySelector('[ecosystem-catalog]');
        if (!wrapper) return;

        const tabButtons = wrapper.querySelectorAll('[ecosystem-tab-link-category]');

        const matchingTabButton = Array.from(tabButtons).find((button) => {
          const category = button.getAttribute('ecosystem-tab-link-category');
          return category === tagParam;
        });

        if (matchingTabButton) {
          matchingTabButton.click();
        }
      }, 100);
    }
  })();
};
