export const tabsDebitProgress_func = () => {
  const tabButtons = document.querySelectorAll('.time-tab-button');
  if (tabButtons.length === 0) {
    // Если на странице нет элементов .time-tab-button, скрипт не выполняется
    return;
  }

  const tabButtonsArray = Array.from(tabButtons);
  let currentIndex = tabButtonsArray.findIndex((btn) => btn.classList.contains('w--current'));
  if (currentIndex === -1) {
    currentIndex = 0;
  }

  let timer;

  function switchToTab(index) {
    // Убираем класс 'w--current' со всех кнопок вкладок
    tabButtonsArray.forEach((button) => {
      button.classList.remove('w--current');
    });

    // Добавляем класс 'w--current' к выбранной кнопке вкладки
    const currentButton = tabButtonsArray[index];
    currentButton.classList.add('w--current');

    // Скрываем все панели контента вкладок
    const tabPanes = document.querySelectorAll('.time-tab-pane');
    tabPanes.forEach((pane) => {
      pane.classList.remove('w--tab-active');
    });

    // Показываем выбранную панель контента вкладки
    const currentPane = tabPanes[index];
    if (currentPane) {
      currentPane.classList.add('w--tab-active');
    }

    // Запускаем прогресс-бар для выбранной вкладки
    startProgressBar(index);
  }

  function startProgressBar(index) {
    // Останавливаем текущий таймер, если он есть
    if (timer) {
      clearTimeout(timer);
    }

    // Проверяем, есть ли элемент по данному индексу
    const currentButton = tabButtonsArray[index];
    if (!currentButton) {
      return;
    }

    // Сбрасываем все прогресс-бары
    tabButtonsArray.forEach((button) => {
      const progressBar = button.querySelector('[debit-page-progress-bar-line]');
      if (progressBar) {
        progressBar.style.width = '0%';
        progressBar.style.transition = 'none';
      }
    });

    const progressBar = currentButton.querySelector('[debit-page-progress-bar-line]');

    if (progressBar) {
      // Запускаем анимацию прогресс-бара
      progressBar.style.transition = 'width 5s linear';
      // Форсируем рефлоу
      progressBar.offsetWidth;
      progressBar.style.width = '100%';

      timer = setTimeout(() => {
        // По завершении анимации переходим к следующей вкладке
        let nextIndex = index + 1;
        if (nextIndex >= tabButtonsArray.length) {
          nextIndex = 0;
        }

        // Переключаемся на следующую вкладку
        switchToTab(nextIndex);
      }, 5000);
    }
  }

  // Добавляем обработчики клика для обновления прогресс-бара при взаимодействии пользователя
  tabButtonsArray.forEach((button, index) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();

      // Останавливаем текущий таймер
      if (timer) {
        clearTimeout(timer);
      }

      // Обновляем текущий индекс
      currentIndex = index;

      // Переключаемся на выбранную вкладку
      switchToTab(currentIndex);
    });
  });

  // Инициализируем вкладки, переключаясь на текущую или первую вкладку
  switchToTab(currentIndex);
};
