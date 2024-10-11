/* https://chatgpt.com/c/6708efc3-d480-8002-ba27-84c8bde2fadf */

export const dropdownTabMaster_func = () => {
  const dropdownTabMaster_el = document.querySelectorAll('[dropdown-from-a-list_component]');
  if (dropdownTabMaster_el.length) {
    dropdownTabMaster_el.forEach((component) => {
      const dropdown = component.querySelector('[dropdown-from-a-list="dropdown"]');
      const tabsContainer = component.querySelector('[dropdown-from-a-list_src="list"]');

      if (dropdown && tabsContainer) {
        // Перемещаем dropdown внутрь tabsContainer
        tabsContainer.appendChild(dropdown);

        const tabsLinks = component.querySelectorAll('[dropdown-from-a-list_src="tab-button"]');
        const dropdownList = dropdown.querySelector('nav');
        const toggleText = component.querySelector('[dropdown-from-a-list_target="toggl-text"]');
        const dropdownToggle = component.querySelector('[dropdown-from-a-list_target="toggle"]');
        const dropdownHighlighter = component.querySelector('.dropdown_highlighter');
        const dropdownMenu = component.querySelector('.dropdown-list.w-dropdown-list');
        const dropdownIcon = dropdownToggle.querySelector('.dropdown-toggle_icon');

        if (
          !tabsLinks.length ||
          !dropdownList ||
          !toggleText ||
          !dropdownToggle ||
          !dropdownHighlighter ||
          !dropdownMenu ||
          !dropdownIcon
        ) {
          return;
        }

        dropdownList.innerHTML = '';

        tabsLinks.forEach((tabLink, index) => {
          const tabText =
            tabLink.querySelector('[dropdown-from-a-list_src="tab-text"]')?.textContent ||
            `Tab ${index + 1}`;

          const listItem = document.createElement('a');
          listItem.href = '#';
          listItem.classList.add('dropdown-list_link', 'heading-style-h6', 'w-dropdown-link');
          listItem.textContent = tabText;

          listItem.addEventListener('click', (e) => {
            e.preventDefault();
            tabsLinks[index]?.click();
            toggleText.textContent = tabText;

            // Закрываем дропдаун, генерируя событие 'w-close'
            const closeEvent = new Event('w-close', { bubbles: true });
            dropdown.dispatchEvent(closeEvent);

            // Обновляем визуальное состояние иконки и highlighter
            dropdownIcon.style.transform = 'rotate(0deg)';
            dropdownHighlighter.classList.remove('is-active');
          });

          dropdownList.appendChild(listItem);
        });

        const updateHighlighterState = () => {
          if (dropdownMenu.classList.contains('w--open')) {
            dropdownHighlighter.classList.add('is-active');
            dropdownIcon.style.transform = 'rotate(180deg)';
          } else {
            dropdownHighlighter.classList.remove('is-active');
            dropdownIcon.style.transform = 'rotate(0deg)';
          }
        };

        dropdownToggle.addEventListener('click', () => {
          updateHighlighterState();
        });

        dropdownToggle.addEventListener('mouseover', () => {
          if (!dropdownMenu.classList.contains('w--open')) {
            dropdownHighlighter.classList.add('is-active');
          }
        });

        dropdownToggle.addEventListener('mouseout', () => {
          if (!dropdownMenu.classList.contains('w--open')) {
            dropdownHighlighter.classList.remove('is-active');
          }
        });

        const observer = new MutationObserver(updateHighlighterState);
        observer.observe(dropdownMenu, { attributes: true, attributeFilter: ['class'] });

        const activeTab = component.querySelector('.w-tab-link.w--current');
        if (activeTab) {
          const activeTabText =
            activeTab.querySelector('[dropdown-from-a-list_src="tab-text"]')?.textContent ||
            'Active Tab';
          toggleText.textContent = activeTabText;
        }
      }
    });
  }
};
