export const tabsMainProgress_func = () => {
  const tabPaneStates = new Map();

  const tabPanes = document.querySelectorAll('.tabs_pane.w-tab-pane');

  tabPanes.forEach((tabPane) => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          if (tabPane.classList.contains('w--tab-active')) {
            onTabPaneActivated(tabPane);
          } else {
            onTabPaneDeactivated(tabPane);
          }
        }
      });
    });

    observer.observe(tabPane, { attributes: true });

    if (tabPane.classList.contains('w--tab-active')) {
      onTabPaneActivated(tabPane);
    }
  });

  function onTabPaneActivated(tabPane) {
    const state = tabPaneStates.get(tabPane);
    if (state) {
      if (state.timer) {
        clearTimeout(state.timer);
      }
      if (state.eventListeners) {
        state.eventListeners.forEach(({ element, handler }) => {
          element.removeEventListener('click', handler);
        });
      }
    }

    const innerTabProgress = tabPane.querySelector('.tabs_pane-content-1-logos-wrapper.w-tab-menu');

    if (innerTabProgress) {
      const logosItems = innerTabProgress.querySelectorAll('.tabs_pane-content-1-logos-item');
      const logosItemsArray = Array.from(logosItems);

      const eventListeners = [];
      logosItemsArray.forEach((item, index) => {
        const clickHandler = (event) => {
          if (event) event.preventDefault();

          const state = tabPaneStates.get(tabPane);
          if (state && state.timer) {
            clearTimeout(state.timer);
          }

          switchToTab(tabPane, innerTabProgress, logosItemsArray, index);
        };

        item.addEventListener('click', clickHandler);
        eventListeners.push({ element: item, handler: clickHandler });
      });

      tabPaneStates.set(tabPane, { eventListeners });

      if (logosItemsArray.length > 0) {
        switchToTab(tabPane, innerTabProgress, logosItemsArray, 0);
      }
    }
  }

  function onTabPaneDeactivated(tabPane) {
    const state = tabPaneStates.get(tabPane);
    if (state) {
      if (state.timer) {
        clearTimeout(state.timer);
      }
      if (state.eventListeners) {
        state.eventListeners.forEach(({ element, handler }) => {
          element.removeEventListener('click', handler);
        });
      }
      tabPaneStates.delete(tabPane);
    }

    const progressBarLines = tabPane.querySelectorAll(
      '.tabs_pane-content-1-logos-item-pregressbar-line'
    );
    progressBarLines.forEach((line) => {
      line.style.width = '0%';
      line.style.transition = 'none';
    });
  }

  function startProgressBar(tabPane, innerTabProgress, logosItemsArray, currentIndex) {
    innerTabProgress
      .querySelectorAll('.tabs_pane-content-1-logos-item-pregressbar-line')
      .forEach((line) => {
        line.style.width = '0%';
        line.style.transition = 'none';
      });

    const currentItem = logosItemsArray[currentIndex];
    const progressBarLine = currentItem.querySelector(
      '.tabs_pane-content-1-logos-item-pregressbar-line'
    );

    if (progressBarLine) {
      progressBarLine.style.transition = 'width 5s linear';
      progressBarLine.offsetWidth;
      progressBarLine.style.width = '100%';

      const timer = setTimeout(() => {
        progressBarLine.style.width = '0%';
        progressBarLine.style.transition = 'none';

        let nextIndex = currentIndex + 1;
        if (nextIndex >= logosItemsArray.length) {
          nextIndex = 0;
        }

        // Переходим к следующей вкладке программно
        switchToTab(tabPane, innerTabProgress, logosItemsArray, nextIndex);
      }, 5000);

      const state = tabPaneStates.get(tabPane) || {};
      state.timer = timer;
      tabPaneStates.set(tabPane, state);
    }
  }

  function switchToTab(tabPane, innerTabProgress, logosItemsArray, index) {
    // Убираем 'w--current' со всех вкладок
    logosItemsArray.forEach((item) => {
      item.classList.remove('w--current');
    });
    // Добавляем 'w--current' к текущей вкладке
    const currentItem = logosItemsArray[index];
    currentItem.classList.add('w--current');

    // Переключаем содержимое вкладки
    const tabContent = tabPane.querySelector('.tabs-content-4.w-tab-content');
    const tabPanes = tabContent.querySelectorAll('.w-tab-pane');

    tabPanes.forEach((pane) => {
      pane.classList.remove('w--tab-active');
      pane.style.opacity = '';
      pane.style.transition = '';
    });

    const targetTabPane = tabPanes[index];
    if (targetTabPane) {
      targetTabPane.classList.add('w--tab-active');
      targetTabPane.style.opacity = '1';
      targetTabPane.style.transition = 'opacity 300ms';
    }

    // Запускаем прогресс-бар для новой вкладки
    startProgressBar(tabPane, innerTabProgress, logosItemsArray, index);
  }
};
