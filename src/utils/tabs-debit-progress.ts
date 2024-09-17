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
      progressBar.offsetWidth; // Перерисовка для применения transition
      progressBar.style.width = '100%';

      timer = setTimeout(() => {
        // По завершении анимации переходим к следующему табу
        let nextIndex = index + 1;
        if (nextIndex >= tabButtonsArray.length) {
          nextIndex = 0;
        }

        tabButtonsArray[nextIndex].click();
        startProgressBar(nextIndex);
      }, 5000);
    }
  }

  // Добавляем обработчики клика для обновления прогресс-бара при взаимодействии пользователя
  tabButtonsArray.forEach((button, index) => {
    button.addEventListener('click', () => {
      // Останавливаем текущий таймер
      if (timer) {
        clearTimeout(timer);
      }

      // Обновляем текущий индекс
      currentIndex = index;

      // Запускаем прогресс-бар для выбранного таба
      startProgressBar(currentIndex);
    });
  });

  // Инициализируем прогресс-бар для текущего или первого таба
  startProgressBar(currentIndex);
};
