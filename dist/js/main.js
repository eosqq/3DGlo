(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds");let c;const r=e=>(e<10&&(e="0"+e),e),l=()=>{const e=(()=>{let e=(new Date("20 january 2022").getTime()-(new Date).getTime())/1e3,c=Math.floor(e/60/60),r=Math.floor(e/60%60),l=Math.floor(e%60);return t.textContent=c,n.textContent=r,o.textContent=l,{hours:c,minutes:r,seconds:l,timeRemaining:e}})();t.textContent=r(e.hours),n.textContent=r(e.minutes),o.textContent=r(e.seconds),e.timeRemaining<0&&(clearInterval(c),t.textContent="00",n.textContent="00",o.textContent="00")};l(),c=setInterval(l,1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),o=t.querySelectorAll("ul>li>a"),c=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",c),n.addEventListener("click",c),o.forEach((e=>e.addEventListener("click",c)))})(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup"),n=t.querySelector(".popup-close"),o=screen.width;console.log(screen);let c,r=0;window.addEventListener("resize",(()=>{o=screen.width}));const l=()=>{o>=768?(r++,c=requestAnimationFrame(l),.06*r<=1?t.style.opacity=.06*r:(cancelAnimationFrame(c),r=0)):r=0};e.forEach((e=>{e.addEventListener("click",(()=>{l(),t.style.display="block"}))})),n.addEventListener("click",(()=>{t.style.display="none"}))})()})();