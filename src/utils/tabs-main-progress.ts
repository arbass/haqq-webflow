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
      if (state.innerObserver) {
        state.innerObserver.disconnect();
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
        const clickHandler = () => {
          const state = tabPaneStates.get(tabPane);
          if (state && state.timer) {
            clearTimeout(state.timer);
          }

          logosItemsArray.forEach((it) => {
            it.classList.remove('w--current');
          });
          item.classList.add('w--current');

          startProgressBar(tabPane, innerTabProgress, logosItemsArray, index);
        };

        item.addEventListener('click', clickHandler);
        eventListeners.push({ element: item, handler: clickHandler });
      });

      const innerObserver = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            const { target } = mutation;
            if (target.classList.contains('w--current')) {
              const newIndex = logosItemsArray.indexOf(target);

              const state = tabPaneStates.get(tabPane);
              if (state && state.timer) {
                clearTimeout(state.timer);
              }

              startProgressBar(tabPane, innerTabProgress, logosItemsArray, newIndex);
            }
          }
        });
      });

      logosItemsArray.forEach((item) => {
        innerObserver.observe(item, { attributes: true });
      });

      tabPaneStates.set(tabPane, { innerObserver, eventListeners });

      if (logosItemsArray.length > 0) {
        logosItemsArray[0].click();
      }
    }
  }

  function onTabPaneDeactivated(tabPane) {
    const state = tabPaneStates.get(tabPane);
    if (state) {
      if (state.timer) {
        clearTimeout(state.timer);
      }
      if (state.innerObserver) {
        state.innerObserver.disconnect();
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

        logosItemsArray[nextIndex].click();
      }, 5000);

      const state = tabPaneStates.get(tabPane) || {};
      state.timer = timer;
      tabPaneStates.set(tabPane, state);
    }
  }
};
