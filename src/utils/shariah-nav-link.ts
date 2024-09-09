export const toc_func = () => {
  const triggers = document.querySelectorAll('[shariah-nav-link="trigger"]');
  const listParent = document.querySelector('[shariah-nav-link="list"]');
  const template = document.querySelector('[shariah-nav-link="item"]');

  let clickedLink = null;
  let lastActiveIndex = -1;
  let isAutoScrolling = false;
  let scrollTimeout;

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
      if (isAutoScrolling) return;

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
        if (index === lastActiveIndex && clickedLink === null) {
          link.classList.add('is-active');
        } else if (clickedLink === null) {
          link.classList.remove('is-active');
        }
      });
    };

    const stopAutoScrolling = () => {
      clearTimeout(scrollTimeout);
      isAutoScrolling = false;
      clickedLink = null;
      updateActiveLink();
    };

    window.addEventListener('scroll', () => {
      if (!clickedLink && !isAutoScrolling) {
        updateActiveLink();
      }
    });

    window.addEventListener('wheel', () => {
      if (isAutoScrolling) {
        clearTimeout(scrollTimeout);
        stopAutoScrolling();
      }
    });

    window.addEventListener('touchstart', () => {
      if (isAutoScrolling) {
        clearTimeout(scrollTimeout);
        stopAutoScrolling();
      }
    });

    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        links.forEach((l) => l.classList.remove('is-active'));
        link.classList.add('is-active');
        clickedLink = link;

        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          isAutoScrolling = true;
          targetElement.scrollIntoView({ behavior: 'smooth' });

          scrollTimeout = setTimeout(() => {
            stopAutoScrolling();
            clickedLink.classList.add('is-active');
          }, 2000);
        }
      });
    });

    updateActiveLink();
  }
};
