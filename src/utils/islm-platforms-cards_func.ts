export const islmPlatformsCards_func = () => {
  // Находим все элементы с атрибутом [platform-waiter-category]
  const targetElements = document.querySelectorAll('[platform-waiter-category]');

  // Создаем объект для хранения элементов по категориям
  const targetsByCategory = {};

  // Группируем целевые элементы по значению категории
  targetElements.forEach((target) => {
    const categoryValue = target.getAttribute('platform-waiter-category');
    if (!targetsByCategory[categoryValue]) {
      targetsByCategory[categoryValue] = [];
    }
    targetsByCategory[categoryValue].push(target);
  });

  // Находим все элементы с атрибутом [platform-waiter-category-src]
  const sourceElements = document.querySelectorAll('[platform-waiter-category-src]');

  // Создаем объект для хранения источников по категориям
  const sourcesByCategory = {};

  // Группируем исходные элементы по значению категории
  sourceElements.forEach((source) => {
    const categoryValue = source.getAttribute('platform-waiter-category-src');
    if (!sourcesByCategory[categoryValue]) {
      sourcesByCategory[categoryValue] = [];
    }
    sourcesByCategory[categoryValue].push(source);
  });

  // Для каждой категории перемещаем или клонируем элементы
  Object.keys(targetsByCategory).forEach((categoryValue) => {
    const targets = targetsByCategory[categoryValue];
    const sources = sourcesByCategory[categoryValue];

    if (sources) {
      targets.forEach((target) => {
        sources.forEach((source) => {
          // Клонируем элемент, чтобы избежать удаления из исходного места
          const clone = source.cloneNode(true);
          target.appendChild(clone);
        });
      });

      // Удаляем оригинальные элементы из их исходного родителя
      sources.forEach((source) => {
        source.parentNode.removeChild(source);
      });
    }
  });

  // Перезагружаем все Webflow Interactions на странице
  if (window.Webflow && window.Webflow.require) {
    const ix2 = window.Webflow.require('ix2');
    if (ix2 && ix2.init) {
      ix2.init();
    }
  }

  // Задержка перед кликом по первому элементу с классом .platforms-item_header
  setTimeout(() => {
    const firstHeader = document.querySelector('.clw_dex .platforms-item_header');
    if (firstHeader) {
      firstHeader.click();
    }
  }, 2000); // Задержка в 2000 миллисекунд (2 секунды)
};
