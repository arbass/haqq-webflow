"use strict";(()=>{var b=()=>{let d=Array.from(document.querySelectorAll("[academy-modules_item-grid-slug]")),n=Array.from(document.querySelectorAll("[cli_academy-modules_item-grid-slug]")),l={};n.forEach(s=>{let t=s.getAttribute("cli_academy-modules_item-grid-slug");l[t]||(l[t]=[]),l[t].push(s)}),d.forEach(s=>{let t=s.getAttribute("academy-modules_item-grid-slug"),o=l[t];o&&o.forEach(i=>{s.appendChild(i)})});let u=document.querySelector("[count-of-lesson-cards]");u&&(u.textContent=n.length);let r=Array.from(document.querySelectorAll("[current-duration]")).reduce((s,t)=>{let o=parseFloat(t.getAttribute("current-duration"));return s+(isNaN(o)?0:o)},0),e=document.querySelector("[summary-of-durations]");e&&(e.textContent=r)};var v=()=>{document.querySelectorAll("[copy-to-clipboard]").forEach(n=>{n.addEventListener("click",()=>{let l=n.getAttribute("copy-to-clipboard"),u=n.textContent;navigator.clipboard.writeText(l).then(()=>{n.textContent="copied",setTimeout(()=>{n.textContent=u},2e3)}).catch(c=>{console.error("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0442\u0435\u043A\u0441\u0442: ",c)})})})};var E=()=>{if(window.innerWidth<=767){let d=document.querySelectorAll(".card-hover-on-scroll");if(d.length){let n=!1,l=()=>{let r=window.innerHeight/2,e=1/0,s=null;d.forEach(t=>{let o=t.getBoundingClientRect(),i=o.top+o.height/2,a=Math.abs(i-r);a<e&&(e=a,s=t)}),d.forEach(t=>{let o=t.querySelector(".card-hover-on-scroll_item");o&&(t===s?o.style.opacity="1":o.style.opacity="0")})},u=()=>{n||(window.requestAnimationFrame(()=>{l(),n=!1}),n=!0)};window.addEventListener("scroll",u),l()}}};var S=()=>{let d=document.querySelectorAll(".roadmap_item");if(d.length){let n=!1,l=()=>{let r=window.innerHeight/2,e=1/0,s=null;d.forEach(t=>{let o=t.getBoundingClientRect(),i=o.top+o.height/2,a=Math.abs(i-r);a<e&&(e=a,s=t)}),d.forEach(t=>{t===s?t.style.opacity="1":t.style.opacity="0.4"})},u=()=>{n||(window.requestAnimationFrame(()=>{l(),n=!1}),n=!0)};window.addEventListener("scroll",u),window.addEventListener("resize",u),l()}};var L=()=>{let d=document.querySelectorAll("[dropdown-from-a-list_component]");d.length&&d.forEach(n=>{let l=n.querySelector('[dropdown-from-a-list="dropdown"]'),u=n.querySelector('[dropdown-from-a-list_src="list"]');if(l&&u){u.appendChild(l);let c=n.querySelectorAll('[dropdown-from-a-list_src="tab-button"]'),r=l.querySelector("nav"),e=n.querySelector('[dropdown-from-a-list_target="toggl-text"]'),s=n.querySelector('[dropdown-from-a-list_target="toggle"]'),t=n.querySelector(".dropdown_highlighter"),o=n.querySelector(".dropdown-list.w-dropdown-list"),i=s.querySelector(".dropdown-toggle_icon");if(!c.length||!r||!e||!s||!t||!o||!i)return;r.innerHTML="",c.forEach((f,y)=>{let h=f.querySelector('[dropdown-from-a-list_src="tab-text"]')?.textContent||`Tab ${y+1}`,g=document.createElement("a");g.href="#",g.classList.add("dropdown-list_link","heading-style-h6","w-dropdown-link"),g.textContent=h,g.addEventListener("click",w=>{w.preventDefault(),c[y]?.click(),e.textContent=h;let B=new Event("w-close",{bubbles:!0});l.dispatchEvent(B),i.style.transform="rotate(0deg)",t.classList.remove("is-active")}),r.appendChild(g)});let a=()=>{o.classList.contains("w--open")?(t.classList.add("is-active"),i.style.transform="rotate(180deg)"):(t.classList.remove("is-active"),i.style.transform="rotate(0deg)")};s.addEventListener("click",()=>{a()}),s.addEventListener("mouseover",()=>{o.classList.contains("w--open")||t.classList.add("is-active")}),s.addEventListener("mouseout",()=>{o.classList.contains("w--open")||t.classList.remove("is-active")}),new MutationObserver(a).observe(o,{attributes:!0,attributeFilter:["class"]});let p=n.querySelector(".w-tab-link.w--current");if(p){let f=p.querySelector('[dropdown-from-a-list_src="tab-text"]')?.textContent||"Active Tab";e.textContent=f}}})};var x=()=>{let d=document.querySelector("[ecosystem-catalog]");if(!d)return;let n=d.querySelectorAll("[ecosystem-tab-link-category]"),l=d.querySelectorAll("[ecosystem-drop-link-category]"),u=d.querySelector('[dropdown-from-a-list_target="toggl-text"]'),c=d.querySelectorAll("[ecosystem-card]");function r(s){s.preventDefault();let t=s.currentTarget,o;if(t.hasAttribute("ecosystem-tab-link-category"))o=t.getAttribute("ecosystem-tab-link-category"),n.forEach(a=>{a.classList.remove("w--current")}),t.classList.add("w--current");else if(t.hasAttribute("ecosystem-drop-link-category"))o=t.getAttribute("ecosystem-drop-link-category");else return;let i=t.textContent.trim();u.textContent=i,c.forEach(a=>{let m=a.querySelectorAll("[ecosystem-card-category]"),p=!1;m.forEach(f=>{let y=f.getAttribute("ecosystem-card-category").toLowerCase();(o==="all"||y===o)&&(p=!0)}),p?a.classList.remove("hide"):a.classList.add("hide")})}n.forEach(s=>{s.addEventListener("click",r)}),l.forEach(s=>{s.addEventListener("click",r)});let e=n[0];e&&(e.classList.add("w--current"),setTimeout(()=>{e.click()},0))};var q=()=>{let d=document.querySelectorAll("[platform-waiter-category]"),n={};d.forEach(c=>{let r=c.getAttribute("platform-waiter-category");n[r]||(n[r]=[]),n[r].push(c)});let l=document.querySelectorAll("[platform-waiter-category-src]"),u={};if(l.forEach(c=>{let r=c.getAttribute("platform-waiter-category-src");u[r]||(u[r]=[]),u[r].push(c)}),Object.keys(n).forEach(c=>{let r=n[c],e=u[c];e&&(r.forEach(s=>{e.forEach(t=>{let o=t.cloneNode(!0);s.appendChild(o)})}),e.forEach(s=>{s.parentNode.removeChild(s)}))}),window.Webflow&&window.Webflow.require){let c=window.Webflow.require("ix2");c&&c.init&&c.init()}setTimeout(()=>{let c=document.querySelector(".clw_dex .platforms-item_header");c&&c.click()},2e3)};var _=()=>{let d=document.querySelectorAll(".cl-i_profiles_module-grid");d.length&&d.forEach(n=>{let l=n.querySelector(".profile-abs-trigger"),u=n.querySelector(".prfile-popup"),c=n.querySelector(".prfile-popup-close");l&&u&&c&&(l.addEventListener("click",()=>{u.style.display="flex"}),c.addEventListener("click",()=>{u.style.display="none"}))})};var C=()=>{document.querySelectorAll("video").length&&function(){function n(){let r=`
            video::-webkit-media-controls-start-playback-button {
                display: none !important;
                -webkit-appearance: none;
            }
            video::-webkit-media-controls {
                display: none !important;
            }
        `,e=document.createElement("style");e.type="text/css",e.styleSheet?e.styleSheet.cssText=r:e.appendChild(document.createTextNode(r)),document.head.appendChild(e)}function l(r){let e=document.createElement("div");e.className="video-overlay";let s=r.getBoundingClientRect();e.style.position="absolute",e.style.top=r.offsetTop+"px",e.style.left=r.offsetLeft+"px",e.style.width=r.offsetWidth+"px",e.style.height=r.offsetHeight+"px",e.style.backgroundImage="url("+(r.getAttribute("poster")||"")+")",e.style.backgroundSize="cover",e.style.backgroundPosition="center",e.style.pointerEvents="none",r.parentNode.insertBefore(e,r.nextSibling)}function u(r){let e=r.parentNode.querySelector(".video-overlay");e&&e.parentNode.removeChild(e)}function c(){n(),document.querySelectorAll("video").forEach(function(e){e.addEventListener("pause",function(){l(e)}),e.addEventListener("playing",function(){u(e)}),e.paused?l(e):u(e)})}document.readyState==="complete"||document.readyState==="interactive"?c():document.addEventListener("DOMContentLoaded",c)}()};var A=()=>{let d=document.querySelectorAll('[shariah-nav-link="trigger"]'),n=document.querySelector('[shariah-nav-link="list"]'),l=document.querySelector('[shariah-nav-link="item"]'),u=document.querySelector('[shariah-nav-link="dropdown-title"]'),c=null,r=-1,e=!1,s,t=10*parseFloat(getComputedStyle(document.documentElement).fontSize);if(n&&l){l.remove();let o=[];d.forEach(m=>{let p=document.createElement("div");p.style.position="absolute",p.style.height="1px",p.style.width="1px",p.style.top=`${m.offsetTop-t}px`,p.setAttribute("id",`anchor-${m.textContent.trim().toLowerCase().replace(/\s+/g,"-")}`),document.body.appendChild(p);let f=l.cloneNode(!0);f.classList.remove("is-active");let y=f.querySelector(".shariah-nav-link_text");if(y){y.textContent=m.textContent;let h=m.textContent.trim().toLowerCase().replace(/\s+/g,"-");f.setAttribute("href",`#anchor-${h}`),m.setAttribute("id",h)}n.appendChild(f),o.push(f)});let i=()=>{if(e)return;let m=-1,p=1/0;d.forEach((f,y)=>{let h=f.getBoundingClientRect().top;if(h>=0&&h<window.innerHeight){let g=Math.abs(h);g<p&&(p=g,m=y)}}),m!==-1&&(r=m),o.forEach((f,y)=>{y===r&&c===null?(f.classList.add("is-active"),u&&(u.textContent=f.querySelector(".shariah-nav-link_text").textContent)):c===null&&f.classList.remove("is-active")})},a=()=>{clearTimeout(s),e=!1,c=null,i()};window.addEventListener("scroll",()=>{!c&&!e&&i()}),window.addEventListener("wheel",()=>{e&&(clearTimeout(s),a())}),window.addEventListener("touchstart",()=>{e&&(clearTimeout(s),a())}),o.forEach(m=>{m.addEventListener("click",p=>{p.preventDefault(),o.forEach(h=>h.classList.remove("is-active")),m.classList.add("is-active"),c=m,u&&(u.textContent=m.querySelector(".shariah-nav-link_text").textContent);let f=m.getAttribute("href").substring(1),y=document.getElementById(f);y&&(e=!0,y.scrollIntoView({behavior:"smooth"}),s=setTimeout(()=>{a(),c.classList.add("is-active")},3e3))})}),i()}};var T=()=>{let d=document.querySelectorAll(".time-tab-button");if(d.length===0)return;let n=Array.from(d),l=n.findIndex(e=>e.classList.contains("w--current"));l===-1&&(l=0);let u;function c(e){n.forEach(i=>{i.classList.remove("w--current")}),n[e].classList.add("w--current");let t=document.querySelectorAll(".time-tab-pane");t.forEach(i=>{i.classList.remove("w--tab-active")});let o=t[e];o&&o.classList.add("w--tab-active"),r(e)}function r(e){u&&clearTimeout(u);let s=n[e];if(!s)return;n.forEach(o=>{let i=o.querySelector("[debit-page-progress-bar-line]");i&&(i.style.width="0%",i.style.transition="none")});let t=s.querySelector("[debit-page-progress-bar-line]");t&&(t.style.transition="width 5s linear",t.offsetWidth,t.style.width="100%",u=setTimeout(()=>{let o=e+1;o>=n.length&&(o=0),c(o)},5e3))}n.forEach((e,s)=>{e.addEventListener("click",t=>{t.preventDefault(),u&&clearTimeout(u),l=s,c(l)})}),c(l)};var k=()=>{let d=new Map;document.querySelectorAll(".tabs_pane.w-tab-pane").forEach(t=>{new MutationObserver(i=>{i.forEach(a=>{a.attributeName==="class"&&(t.classList.contains("w--tab-active")?l(t):u(t))})}).observe(t,{attributes:!0}),t.classList.contains("w--tab-active")&&l(t)});function l(t){let o=d.get(t);o&&(o.timer&&clearTimeout(o.timer),o.eventListeners&&o.eventListeners.forEach(({element:a,handler:m})=>{a.removeEventListener("click",m)}));let i=t.querySelector(".tabs_pane-content-1-logos-wrapper.w-tab-menu");if(i){let a=i.querySelectorAll(".tabs_pane-content-1-logos-item"),m=Array.from(a),p=[];m.forEach((f,y)=>{let h=g=>{g&&g.preventDefault();let w=d.get(t);w&&w.timer&&clearTimeout(w.timer),r(t,i,m,y)};f.addEventListener("click",h),p.push({element:f,handler:h})}),d.set(t,{eventListeners:p}),m.length>0&&r(t,i,m,0)}}function u(t){let o=d.get(t);o&&(o.timer&&clearTimeout(o.timer),o.eventListeners&&o.eventListeners.forEach(({element:a,handler:m})=>{a.removeEventListener("click",m)}),d.delete(t)),t.querySelectorAll(".tabs_pane-content-1-logos-item-pregressbar-line").forEach(a=>{a.style.width="0%",a.style.transition="none"})}function c(t,o,i,a){o.querySelectorAll(".tabs_pane-content-1-logos-item-pregressbar-line").forEach(f=>{f.style.width="0%",f.style.transition="none"});let p=i[a].querySelector(".tabs_pane-content-1-logos-item-pregressbar-line");if(p){p.style.transition="width 5s linear",p.offsetWidth,p.style.width="100%";let f=setTimeout(()=>{p.style.width="0%",p.style.transition="none";let h=a+1;h>=i.length&&(h=0),r(t,o,i,h)},5e3),y=d.get(t)||{};y.timer=f,d.set(t,y)}}function r(t,o,i,a){i.forEach(h=>{h.classList.remove("w--current")}),i[a].classList.add("w--current");let f=t.querySelector(".tabs-content-4.w-tab-content").querySelectorAll(".w-tab-pane");f.forEach(h=>{h.classList.remove("w--tab-active"),h.style.opacity="",h.style.transition=""});let y=f[a];y&&(y.classList.add("w--tab-active"),y.style.opacity="1",y.style.transition="opacity 300ms"),c(t,o,i,a)}document.querySelectorAll('[dropdown-from-a-list_src="tab-button"]').forEach(t=>{let o=t.querySelector('[dropdown-from-a-list_src="tab-text"]');if(o){let i=o.textContent.trim().toLowerCase();t.setAttribute("current-tab-name",i)}t.addEventListener("click",i=>{let a=t.getAttribute("current-tab-name");a&&history.replaceState(null,null,"#"+a)})});function s(){let t=window.location.hash.substring(1);if(t){let o=document.querySelector(`[current-tab-name="${t}"]`);if(o){let i=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});o.dispatchEvent(i);let a=document.getElementById("haqq-network");a&&a.scrollIntoView({behavior:"instant"})}}}s(),window.addEventListener("hashchange",s)};window.Webflow||(window.Webflow=[]);window.Webflow.push(()=>{L(),_(),A(),k(),E(),S(),v(),b(),q(),T(),x(),C()});})();
