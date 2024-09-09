export const toc_func = () => {
  const triggers = document.querySelectorAll('[shariah-nav-link="trigger"]');
  const listParent = document.querySelector('[shariah-nav-link="list"]');
  const template = document.querySelector('[shariah-nav-link="item"]');

  let clickedLink = null;
  let isScrolling = false;
  let lastActiveIndex = -1;

  if (listParent && template) {
    template.remove();

    const links = [];

    triggers.forEach((trigger) => {
      const newLink = template.cloneNode(true);
      newLink.classList.remove('is-active');
      const linkText = newLink.querySelector('.shariah-nav-link_text');

      if (linkText) {
        linkText.textContent = trigger.textContent;
        const formattedText = trigger.textContent.trim().toLowerCase().replace(/\s+/g, '-');
        newLink.setAttribute('href', `#${formattedText}`);
        trigger.setAttribute('id', formattedText);
      }

      listParent.appendChild(newLink);
      links.push(newLink);
    });

    const updateActiveLink = () => {
      if (isScrolling || clickedLink) return;

      let closestIndex = -1;
      let closestDistance = Infinity;

      triggers.forEach((trigger, index) => {
        const triggerTop = trigger.getBoundingClientRect().top;

        if (triggerTop >= 0 && triggerTop < window.innerHeight) {
          const distance = Math.abs(triggerTop);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        }
      });

      if (closestIndex !== -1) {
        lastActiveIndex = closestIndex;
      }

      links.forEach((link, index) => {
        if (index === lastActiveIndex) {
          link.classList.add('is-active');
        } else {
          link.classList.remove('is-active');
        }
      });
    };

    let scrollTimeout;

    window.addEventListener('scroll', () => {
      if (clickedLink) return;

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      isScrolling = true;
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
        updateActiveLink();
      }, 50);
    });

    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        links.forEach((l) => l.classList.remove('is-active'));
        link.classList.add('is-active');
        clickedLink = link;

        setTimeout(() => {
          clickedLink = null;
        }, 25);
      });
    });

    updateActiveLink();
  }
};
