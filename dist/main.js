!function(t){var e={};function n(o){if(e[o])return e[o].exports;var s=e[o]={i:o,l:!1,exports:{}};return t[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(o,s,function(e){return t[e]}.bind(null,s));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var o=()=>{const t=document.querySelector(".add-sentence-btn"),e=document.querySelectorAll(".product");t.addEventListener("click",()=>{for(let t=3;t<e.length;t++)e[t].classList.remove("hidden");t.style.display="none"})};var s=()=>{const t=document.querySelector(".slideInDown"),e=t.querySelectorAll(".panel-heading"),n=t.querySelectorAll(".panel-collapse");t.addEventListener("click",t=>{t.preventDefault();let o=t.target;o=o.closest(".panel-heading"),o&&e.forEach((t,e)=>{t===o&&(t=>{for(let e=0;e<n.length;e++)t===e?n[e].classList.add("in"):n[e].classList.remove("in")})(e)})})};const c={};var l=()=>{const t=document.querySelectorAll("form"),e=document.querySelector("body"),n=document.querySelector('input[name="user_quest"]'),o=document.createElement("div");o.classList.add("status-message"),o.style.cssText="font-size: 2rem; color: #000";const s=()=>{const t=document.querySelector(".status-message");t&&setTimeout(()=>{t.remove()},5e3)};t.forEach(t=>{t.addEventListener("input",t=>{const e=t.target;"user_phone"===e.name&&(e.value=e.value.replace(/[^+\d]/g,"")),"user_name"===e.name&&(e.value=e.value.replace(/[^а-я ]/gi,""))}),t.addEventListener("submit",l=>{if(l.preventDefault(),!t.classList.contains("director-form")){t.insertAdjacentElement("beforeend",o),o.textContent="Загрузка...",e.insertAdjacentHTML("beforeend",'\n\t\t<style>\n\t\t.preloader__container {\n\t\t\tposition: fixed;\n\t\t\tbackground-color: rgba(0, 0, 0, .8);\n\t\t\theight: 100%;\n\t\t\twidth: 100%;\n\t\t\tz-index: 10;\n\t\t\tdisplay: flex;\n\t\t\tflex-wrap: wrap;\n\t\t\tjustify-content: space-around;\n\t\t\talign-content: space-around;\n\t\t\ttop: 0;\n\t\t}\n\t\t.sk-rotating-plane {\n\t\t\twidth: 4em;\n\t\t\theight: 4em;\n\t\t\tmargin: auto;\n\t\t\tbackground-color: #f28c07;\n\t\t\tanimation: sk-rotating-plane 1.2s infinite ease-in-out;\n\t\t}\n\t\t@keyframes sk-rotating-plane {\n\t\t\t0% {\n\t\t\t\ttransform: perspective(120px) rotateX(0deg) rotateY(0deg);\n\t\t\t}\n\t\t\t50% {\n\t\t\t\ttransform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n\t\t\t}\n\t\t\t100% {\n\t\t\t\ttransform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n\t\t\t}\n\t\t}\t\t \n\t\t</style>\n\t\t<section></section>\n\t\t<div class="preloader">\n\t\t\t<div class="preloader__container">\n\t\t\t\t<div class=\'sk-rotating-plane\'></div>\n\t\t\t</div>\n\t\t</div>\n\t');const l=document.querySelector(".preloader"),a=new FormData(t);let r={};for(const t of a.entries())r[t[0]]=t[1];t.classList.contains("consultation-form")?r.quest=n.value:t.classList.contains("discount-form")&&(r=Object.assign(r,c));const i=e=>{if(200!==e.status)throw new Error("status network not 200");s(),o.textContent="Спасибо! Мы скоро с вами свяжемся!",t.reset(),l.remove()},d=t=>{s(),o.textContent="Что-то пошло не так...",console.error(t),l.remove()};(t=>fetch("./server.php",{method:"POST",mode:"cors",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}))(r).then(i).catch(d),console.log(r)}})})};(()=>{const t=document.querySelector(".popup-call"),e=document.querySelector(".popup-discount"),n=document.querySelector(".popup-check"),o=document.querySelector(".popup-consultation"),s=document.querySelector(".popup-content");document.body.addEventListener("click",c=>{const l=c.target;l.classList.contains("call-btn")&&!l.classList.contains("construct-btn")?(t.style.display="block",s.style.top="20%"):(l.classList.contains("popup-close")||l.classList.contains("popup-call"))&&(t.style.display="none"),l.classList.contains("discount-btn")||l.classList.contains("discount-btn")?(e.style.display="block",s.style.top="20%"):(l.classList.contains("popup-close")||l.classList.contains("popup-discount"))&&(e.style.display="none"),l.classList.contains("check-btn")?(n.style.display="block",s.style.top="20%"):(l.classList.contains("popup-close")||l.classList.contains("popup-check"))&&(n.style.display="none"),l.classList.contains("director-btn")?(o.style.display="block",s.style.top="20%"):(l.classList.contains("popup-close")||l.classList.contains("popup-consultation"))&&(o.style.display="none")})})(),o(),s(),(()=>{const t=document.getElementById("accordion"),e=document.querySelectorAll(".onoffswitch"),n=document.querySelectorAll(".onoffswitch-checkbox"),o=document.querySelectorAll(".panel-collapse"),s=document.querySelectorAll(".panel-heading"),l=document.querySelectorAll(".title-text")[1],a=document.querySelectorAll(".select-box"),r=document.getElementById("calc-result"),i=()=>{const t=document.querySelectorAll(".form-control"),e=document.getElementById("distance"),o=[];for(let e=0;e<4;e++)o.push(parseFloat(t[e].options[t[e].selectedIndex].value));const s=()=>{switch(2===o[0]&&(c.total*=1.2),c.diameter1=o[0],!0){case 2===o[1]:c.total*=1.3;break;case 3===o[1]:c.total*=1.5}c.numberRings1=o[1]};if(n[0].checked)l.style.display="none",a[2].style.display="none",a[3].style.display="none",c.total=1e4,s(),n[1].checked&&(c.total+=1e3,c.bottom="yes, +1000");else if(!n[0].checked){switch(l.style.display="",a[2].style.display="",a[3].style.display="",c.total=15e3,s(),2===o[2]&&(c.total*=1.2),c.diameter2=o[2],!0){case 2===o[3]:c.total*=1.3;break;case 3===o[3]:c.total*=1.5}c.numberRings2=o[3],n[1].checked&&(c.total+=2e3,c.bottom="yes, 2000")}c.distance=+e.value,r.placeholder=`Примерная стоимость: ${c.total} руб.`};for(let t=0;t<e.length;t++)e[t].addEventListener("click",()=>{n[t].checked?n[t].removeAttribute("checked"):n[t].setAttribute("checked","checked")});t.addEventListener("click",t=>{t.preventDefault();let e=t.target;if(e.classList.contains("construct-btn")&&!e.classList.contains("discount-btn"))switch(i(),!0){case"#collapseTwo"===e.getAttribute("href"):o[0].classList.remove("in"),o[1].classList.add("in");break;case"#collapseThree"===e.getAttribute("href"):o[1].classList.remove("in"),o[2].classList.add("in");break;case"#collapseFour"===e.getAttribute("href"):o[2].classList.remove("in"),o[3].classList.add("in")}e=e.closest(".panel-heading"),e&&s.forEach((t,n)=>{t===e&&(t=>{i();for(let e=0;e<o.length;e++)t===e?o[e].classList.add("in"):o[e].classList.remove("in")})(n)})}),t.addEventListener("change",t=>{t.target.matches("select")&&i()})})(),l()}]);