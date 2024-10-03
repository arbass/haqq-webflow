export const func_removeVideoPlay = () => {
  const all_newAlements = document.querySelectorAll('video');
  if (all_newAlements.length) {
    (function () {
      // Функция для скрытия кнопки "Play" на iOS
      function hideIOSPlayButton() {
        const css = `
            video::-webkit-media-controls-start-playback-button {
                display: none !important;
                -webkit-appearance: none;
            }
            video::-webkit-media-controls {
                display: none !important;
            }
        `;

        // Создаем стиль и добавляем его в head
        const style = document.createElement('style');
        style.type = 'text/css';

        if (style.styleSheet) {
          // Это для IE8 и ниже
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(document.createTextNode(css));
        }

        document.head.appendChild(style);
      }

      // Функция для создания оверлея над видео
      function createVideoOverlay(video) {
        const overlay = document.createElement('div');
        overlay.className = 'video-overlay';

        // Устанавливаем стили для оверлея
        const rect = video.getBoundingClientRect();
        overlay.style.position = 'absolute';
        overlay.style.top = video.offsetTop + 'px';
        overlay.style.left = video.offsetLeft + 'px';
        overlay.style.width = video.offsetWidth + 'px';
        overlay.style.height = video.offsetHeight + 'px';
        overlay.style.backgroundImage = 'url(' + (video.getAttribute('poster') || '') + ')';
        overlay.style.backgroundSize = 'cover';
        overlay.style.backgroundPosition = 'center';
        overlay.style.pointerEvents = 'none'; // Чтобы оверлей не перехватывал события

        // Добавляем оверлей в DOM
        video.parentNode.insertBefore(overlay, video.nextSibling);
      }

      // Функция для удаления оверлея
      function removeVideoOverlay(video) {
        const overlay = video.parentNode.querySelector('.video-overlay');
        if (overlay) {
          overlay.parentNode.removeChild(overlay);
        }
      }

      // Основная функция
      function init() {
        hideIOSPlayButton();

        const videos = document.querySelectorAll('video');

        videos.forEach(function (video) {
          // Добавляем обработчики событий
          video.addEventListener('pause', function () {
            createVideoOverlay(video);
          });

          video.addEventListener('playing', function () {
            removeVideoOverlay(video);
          });

          // Проверяем, воспроизводится ли видео при загрузке страницы
          if (video.paused) {
            createVideoOverlay(video);
          } else {
            removeVideoOverlay(video);
          }
        });
      }

      // Запускаем скрипт после загрузки страницы
      if (document.readyState === 'complete' || document.readyState === 'interactive') {
        init();
      } else {
        document.addEventListener('DOMContentLoaded', init);
      }
    })();
  }
};
