(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds");let r;const c=e=>(e<10&&(e="0"+e),e),a=()=>{const e=(()=>{let e=(new Date("20 january 2022").getTime()-(new Date).getTime())/1e3,r=Math.floor(e/60/60),c=Math.floor(e/60%60),a=Math.floor(e%60);return t.textContent=r,n.textContent=c,o.textContent=a,{hours:r,minutes:c,seconds:a,timeRemaining:e}})();t.textContent=c(e.hours),n.textContent=c(e.minutes),o.textContent=c(e.seconds),e.timeRemaining<0&&(clearInterval(r),t.textContent="00",n.textContent="00",o.textContent="00")};a(),r=setInterval(a,1e3)})(),(()=>{const e=document.querySelector("menu"),t=(e.querySelectorAll("ul>li>a"),document.querySelector(".container")),n=()=>{e.classList.toggle("active-menu")};t.addEventListener("click",(e=>{e.target.closest(".menu")&&n()})),e.addEventListener("click",(e=>{(e.target.classList.contains("close-btn")||e.target.closest("ul>li>a"))&&n()}))})(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup");let n,o=screen.width,r=0;window.addEventListener("resize",(()=>{o=screen.width}));const c=()=>{o>=768?(r++,n=requestAnimationFrame(c),.06*r<=1?t.style.opacity=.06*r:(cancelAnimationFrame(n),r=0)):r=0};e.forEach((e=>{e.addEventListener("click",(()=>{c(),t.style.display="block"}))})),t.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||(t.style.display="none")}))})(),(()=>{const e=[document.querySelector(".calc-square"),document.querySelector(".calc-count"),document.querySelector(".calc-day")],t=document.querySelectorAll(".form-name"),n=document.querySelector(".top-form"),o=[],r=document.querySelectorAll(".form-email"),c=document.querySelectorAll(".form-phone"),a=document.querySelector(".mess");t.forEach((e=>{o.push(e,n),o.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я\s\-]/gi,"")}))}))})),r.forEach((e=>{console.log(e),e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\w\-\.\!\~\*\'\"\@]+/gi,"")}))})),c.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9\(\)\-]/,"")}))})),a.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-я\-\ ]/,"")})),e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")}))}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),n=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const o=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===o?(e.classList.add("active"),n[t].classList.remove("d-none")):(e.classList.remove("active"),n[t].classList.add("d-none"))}))}}))})(),document.querySelector(".portfolio-content"),document.querySelector(".portfolio-content")})();