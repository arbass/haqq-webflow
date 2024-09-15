"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/utils/animation_scramble-text-on-scroll.ts
  var typeTextOnScroll = () => {
    const elements = document.querySelectorAll("[data-animate-visibility]");
    const isInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    };
    const typeText = (element) => {
      const originalText = element.textContent;
      const originalHeight = element.scrollHeight;
      element.style.height = `${originalHeight}px`;
      element.style.whiteSpace = "pre-wrap";
      element.style.overflow = "hidden";
      let index = 0;
      element.textContent = "";
      element.style.opacity = "1";
      const interval = setInterval(() => {
        element.textContent += originalText[index];
        index++;
        if (index >= originalText.length) {
          clearInterval(interval);
          element.style.height = "";
          element.style.overflow = "";
        }
      }, 40);
    };
    const resetAnimationsOnResize = () => {
      elements.forEach((element) => {
        if (!element.hasAttribute("data-animate-completed")) {
          const originalHeight = element.scrollHeight;
          element.style.height = `${originalHeight}px`;
        }
      });
    };
    const onScroll = () => {
      elements.forEach((element) => {
        if (isInViewport(element) && !element.hasAttribute("data-animate-completed")) {
          const delay = parseFloat(element.getAttribute("data-animate-delay")) || 0;
          setTimeout(() => {
            typeText(element);
            element.setAttribute("data-animate-completed", "true");
          }, delay * 1e3);
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    window.addEventListener("load", onScroll);
    window.addEventListener("resize", resetAnimationsOnResize);
  };

  // src/utils/dropdown-tab-master_func.ts
  var dropdownTabMaster_func = () => {
    const dropdownTabMaster_el = document.querySelectorAll("[dropdown-from-a-list_component]");
    if (dropdownTabMaster_el.length) {
      document.querySelectorAll("[dropdown-from-a-list_component]").forEach((component) => {
        const dropdown = component.querySelector('[dropdown-from-a-list="dropdown"]');
        const tabsContainer = component.querySelector('[dropdown-from-a-list_src="list"]');
        if (dropdown && tabsContainer) {
          tabsContainer.appendChild(dropdown);
          const tabsLinks = component.querySelectorAll('[dropdown-from-a-list_src="tab-button"]');
          const dropdownList = component.querySelector('[dropdown-from-a-list="dropdown"] nav');
          const toggleText = component.querySelector('[dropdown-from-a-list_target="toggl-text"]');
          const dropdownToggle = component.querySelector('[dropdown-from-a-list_target="toggle"]');
          const dropdownHighlighter = component.querySelector(".dropdown_highlighter");
          const dropdownMenu = component.querySelector(".dropdown-list.w-dropdown-list");
          if (!tabsLinks.length || !dropdownList || !toggleText || !dropdownToggle || !dropdownHighlighter || !dropdownMenu) {
            console.warn(
              "\u041E\u0434\u043D\u043E\u0433\u043E \u0438\u043B\u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u0441\u0435\u043B\u0435\u043A\u0442\u043E\u0440\u043E\u0432 \u043D\u0435 \u0445\u0432\u0430\u0442\u0430\u0435\u0442 \u0434\u043B\u044F \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u0441\u043A\u0440\u0438\u043F\u0442\u0430."
            );
            return;
          }
          dropdownList.innerHTML = "";
          tabsLinks.forEach((tabLink, index) => {
            const tabText = tabLink.querySelector('[dropdown-from-a-list_src="tab-text"]')?.textContent || `Tab ${index + 1}`;
            const listItem = document.createElement("a");
            listItem.href = "#";
            listItem.classList.add("dropdown-list_link", "heading-style-h6", "w-dropdown-link");
            listItem.textContent = tabText;
            listItem.addEventListener("click", (e) => {
              e.preventDefault();
              tabsLinks[index]?.click();
              toggleText.textContent = tabText;
            });
            dropdownList.appendChild(listItem);
          });
          const updateHighlighterState = () => {
            if (dropdownMenu.classList.contains("w--open")) {
              dropdownHighlighter.classList.add("is-active");
            } else {
              dropdownHighlighter.classList.remove("is-active");
            }
          };
          dropdownToggle.addEventListener("click", updateHighlighterState);
          dropdownToggle.addEventListener("mouseover", () => {
            if (!dropdownMenu.classList.contains("w--open")) {
              dropdownHighlighter.classList.add("is-active");
            }
          });
          dropdownToggle.addEventListener("mouseout", () => {
            if (!dropdownMenu.classList.contains("w--open")) {
              dropdownHighlighter.classList.remove("is-active");
            }
          });
          const observer = new MutationObserver(updateHighlighterState);
          observer.observe(dropdownMenu, { attributes: true, attributeFilter: ["class"] });
          const activeTab = component.querySelector(".w-tab-link.w--current");
          if (activeTab) {
            const activeTabText = activeTab.querySelector('[dropdown-from-a-list_src="tab-text"]')?.textContent || "Active Tab";
            toggleText.textContent = activeTabText;
          }
        } else {
          console.warn("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043D\u0430\u0439\u0442\u0438 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u044B \u0434\u043B\u044F dropdown \u0438\u043B\u0438 \u0442\u0430\u0431\u043E\u0432.");
        }
      });
    }
  };

  // src/utils/profile-popups.ts
  var profilePopups_func = () => {
    const elements = document.querySelectorAll(".cl-i_profiles_module-grid");
    if (elements.length) {
      elements.forEach((element) => {
        const trigger = element.querySelector(".profile-abs-trigger");
        const popup = element.querySelector(".prfile-popup");
        const closeBtn = element.querySelector(".prfile-popup-close");
        if (trigger && popup && closeBtn) {
          trigger.addEventListener("click", () => {
            popup.style.display = "flex";
          });
          closeBtn.addEventListener("click", () => {
            popup.style.display = "none";
          });
        }
      });
    }
  };

  // src/utils/shariah-nav-link.ts
  var toc_func = () => {
    const triggers = document.querySelectorAll('[shariah-nav-link="trigger"]');
    const listParent = document.querySelector('[shariah-nav-link="list"]');
    const template = document.querySelector('[shariah-nav-link="item"]');
    const dropdownTitle = document.querySelector('[shariah-nav-link="dropdown-title"]');
    let clickedLink = null;
    let lastActiveIndex = -1;
    let isAutoScrolling = false;
    let scrollTimeout;
    const offset = 10 * parseFloat(getComputedStyle(document.documentElement).fontSize);
    if (listParent && template) {
      template.remove();
      const links = [];
      triggers.forEach((trigger) => {
        const anchor = document.createElement("div");
        anchor.style.position = "absolute";
        anchor.style.height = "1px";
        anchor.style.width = "1px";
        anchor.style.top = `${trigger.offsetTop - offset}px`;
        anchor.setAttribute(
          "id",
          `anchor-${trigger.textContent.trim().toLowerCase().replace(/\s+/g, "-")}`
        );
        document.body.appendChild(anchor);
        const newLink = template.cloneNode(true);
        newLink.classList.remove("is-active");
        const linkText = newLink.querySelector(".shariah-nav-link_text");
        if (linkText) {
          linkText.textContent = trigger.textContent;
          const formattedText = trigger.textContent.trim().toLowerCase().replace(/\s+/g, "-");
          newLink.setAttribute("href", `#anchor-${formattedText}`);
          trigger.setAttribute("id", formattedText);
        }
        listParent.appendChild(newLink);
        links.push(newLink);
      });
      const updateActiveLink = () => {
        if (isAutoScrolling)
          return;
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
            link.classList.add("is-active");
            if (dropdownTitle) {
              dropdownTitle.textContent = link.querySelector(".shariah-nav-link_text").textContent;
            }
          } else if (clickedLink === null) {
            link.classList.remove("is-active");
          }
        });
      };
      const stopAutoScrolling = () => {
        clearTimeout(scrollTimeout);
        isAutoScrolling = false;
        clickedLink = null;
        updateActiveLink();
      };
      window.addEventListener("scroll", () => {
        if (!clickedLink && !isAutoScrolling) {
          updateActiveLink();
        }
      });
      window.addEventListener("wheel", () => {
        if (isAutoScrolling) {
          clearTimeout(scrollTimeout);
          stopAutoScrolling();
        }
      });
      window.addEventListener("touchstart", () => {
        if (isAutoScrolling) {
          clearTimeout(scrollTimeout);
          stopAutoScrolling();
        }
      });
      links.forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          links.forEach((l) => l.classList.remove("is-active"));
          link.classList.add("is-active");
          clickedLink = link;
          if (dropdownTitle) {
            dropdownTitle.textContent = link.querySelector(".shariah-nav-link_text").textContent;
          }
          const targetId = link.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            isAutoScrolling = true;
            targetElement.scrollIntoView({ behavior: "smooth" });
            scrollTimeout = setTimeout(() => {
              stopAutoScrolling();
              clickedLink.classList.add("is-active");
            }, 3e3);
          }
        });
      });
      updateActiveLink();
    }
  };

  // src/utils/tabs-main-progress.ts
  var tabsMainProgress_func = () => {
    const tabPaneStates = /* @__PURE__ */ new Map();
    const tabPanes = document.querySelectorAll(".tabs_pane.w-tab-pane");
    tabPanes.forEach((tabPane) => {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === "class") {
            if (tabPane.classList.contains("w--tab-active")) {
              onTabPaneActivated(tabPane);
            } else {
              onTabPaneDeactivated(tabPane);
            }
          }
        });
      });
      observer.observe(tabPane, { attributes: true });
      if (tabPane.classList.contains("w--tab-active")) {
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
            element.removeEventListener("click", handler);
          });
        }
      }
      const innerTabProgress = tabPane.querySelector(".tabs_pane-content-1-logos-wrapper.w-tab-menu");
      if (innerTabProgress) {
        const logosItems = innerTabProgress.querySelectorAll(".tabs_pane-content-1-logos-item");
        const logosItemsArray = Array.from(logosItems);
        const eventListeners = [];
        logosItemsArray.forEach((item, index) => {
          const clickHandler = () => {
            const state2 = tabPaneStates.get(tabPane);
            if (state2 && state2.timer) {
              clearTimeout(state2.timer);
            }
            logosItemsArray.forEach((it) => {
              it.classList.remove("w--current");
            });
            item.classList.add("w--current");
            startProgressBar(tabPane, innerTabProgress, logosItemsArray, index);
          };
          item.addEventListener("click", clickHandler);
          eventListeners.push({ element: item, handler: clickHandler });
        });
        const innerObserver = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.type === "attributes" && mutation.attributeName === "class") {
              const { target } = mutation;
              if (target.classList.contains("w--current")) {
                const newIndex = logosItemsArray.indexOf(target);
                const state2 = tabPaneStates.get(tabPane);
                if (state2 && state2.timer) {
                  clearTimeout(state2.timer);
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
            element.removeEventListener("click", handler);
          });
        }
        tabPaneStates.delete(tabPane);
      }
      const progressBarLines = tabPane.querySelectorAll(
        ".tabs_pane-content-1-logos-item-pregressbar-line"
      );
      progressBarLines.forEach((line) => {
        line.style.width = "0%";
        line.style.transition = "none";
      });
    }
    function startProgressBar(tabPane, innerTabProgress, logosItemsArray, currentIndex) {
      innerTabProgress.querySelectorAll(".tabs_pane-content-1-logos-item-pregressbar-line").forEach((line) => {
        line.style.width = "0%";
        line.style.transition = "none";
      });
      const currentItem = logosItemsArray[currentIndex];
      const progressBarLine = currentItem.querySelector(
        ".tabs_pane-content-1-logos-item-pregressbar-line"
      );
      if (progressBarLine) {
        progressBarLine.style.transition = "width 5s linear";
        progressBarLine.offsetWidth;
        progressBarLine.style.width = "100%";
        const timer = setTimeout(() => {
          progressBarLine.style.width = "0%";
          progressBarLine.style.transition = "none";
          let nextIndex = currentIndex + 1;
          if (nextIndex >= logosItemsArray.length) {
            nextIndex = 0;
          }
          logosItemsArray[nextIndex].click();
        }, 5e3);
        const state = tabPaneStates.get(tabPane) || {};
        state.timer = timer;
        tabPaneStates.set(tabPane, state);
      }
    }
  };

  // src/index.ts
  window.Webflow ||= [];
  window.Webflow.push(() => {
    typeTextOnScroll();
    dropdownTabMaster_func();
    profilePopups_func();
    toc_func();
    tabsMainProgress_func();
  });
})();
//# sourceMappingURL=index.js.map
