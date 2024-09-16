export const buttonsBrand_func = () => {
  const buttons = document.querySelectorAll('[copy-to-clipboard]');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const textToCopy = button.getAttribute('copy-to-clipboard');
      const originalText = button.textContent;

      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          button.textContent = 'copied';
          setTimeout(() => {
            button.textContent = originalText;
          }, 2000);
        })
        .catch((err) => {
          console.error('Не удалось скопировать текст: ', err);
        });
    });
  });
};
