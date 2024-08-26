export const kopytokToolCmsEasy = () => {
  setTimeout(function () {
    const links = document.querySelectorAll('a');
    const emptyLinks = [];

    links.forEach((link) => {
      const href = link.getAttribute('href');

      if (!href || href === '#') {
        link.style.position = 'relative';
        link.style.display = 'inline-block';

        const emojiContainer = document.createElement('span');
        emojiContainer.style.position = 'absolute';
        emojiContainer.style.top = '-12px';
        emojiContainer.style.left = '-12px';
        emojiContainer.style.width = '32px';
        emojiContainer.style.height = '32px';
        emojiContainer.style.borderRadius = '100%';
        emojiContainer.style.border = '2px solid gray';
        emojiContainer.style.display = 'flex';
        emojiContainer.style.alignItems = 'center';
        emojiContainer.style.justifyContent = 'center'; // Центрирование эмодзи по горизонтали и вертикали
        emojiContainer.style.fontSize = '16px';
        emojiContainer.style.animation = 'pulse 1s infinite';

        const emoji = document.createElement('span');
        emoji.textContent = '🔗';

        const styleSheet = document.createElement('style');
        styleSheet.type = 'text/css';
        styleSheet.innerText = `
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.5;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `;
        document.head.appendChild(styleSheet);

        emojiContainer.appendChild(emoji);
        link.appendChild(emojiContainer);
        emptyLinks.push(link);
      }
    });

    if (emptyLinks.length > 0) {
      const counter = document.createElement('div');
      counter.style.position = 'fixed';
      counter.style.bottom = '20px';
      counter.style.right = '20px';
      counter.style.width = '50px';
      counter.style.height = '50px';
      counter.style.borderRadius = '50%';
      counter.style.backgroundColor = 'white';
      counter.style.border = '2px solid black';
      counter.style.display = 'flex';
      counter.style.alignItems = 'center';
      counter.style.justifyContent = 'center';
      counter.style.fontSize = '16px';
      counter.style.fontWeight = 'bold';
      counter.style.cursor = 'pointer';
      counter.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.3)';
      counter.style.overflow = 'hidden';
      counter.style.zIndex = '99999';

      const emojiCounter = document.createElement('span');
      emojiCounter.textContent = '🔗';
      emojiCounter.style.fontSize = '24px';

      const counterText = document.createElement('span');
      counterText.textContent = emptyLinks.length;
      counterText.style.position = 'absolute';
      counterText.style.bottom = '5px';
      counterText.style.right = '5px';
      counterText.style.background = 'black';
      counterText.style.color = 'white';
      counterText.style.borderRadius = '50%';
      counterText.style.padding = '4px';
      counterText.style.fontSize = '12px';

      counter.appendChild(emojiCounter);
      counter.appendChild(counterText);
      document.body.appendChild(counter);

      counter.addEventListener('click', () => {
        const nextLink = emptyLinks.shift();
        if (nextLink) {
          nextLink.scrollIntoView({ behavior: 'smooth' });
          emptyLinks.push(nextLink);
          counterText.textContent = emptyLinks.length;
        }
      });
    }
  }, 4000);
};
