import{a as S,S as P,i as p}from"./assets/vendor-C9vNCoLC.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=o(t);fetch(t.href,n)}})();const E="https://pixabay.com/api/",q="50800814-f0ce8c424259a5db94c3e389b",v=15;async function x(e,r=1){try{const{data:o}=await S.get(E,{params:{key:q,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:v}});return o}catch(o){throw new Error(`Error fetching images: ${o.message}`)}}const M=[{id:"sndWveBr",html:'<span class="loader"></span>',css:`.loader {
    display: block;
    margin: 0 auto;
    position: relative;
  width: 80px;
  height: 40px;
  background-repeat: no-repeat;
  background-image: linear-gradient(#333333 50px, transparent 0),
                    linear-gradient(#333333 50px, transparent 0),
                    linear-gradient(#333333 50px, transparent 0),
                    linear-gradient(#333333 50px, transparent 0),
                    linear-gradient(#333333 50px, transparent 0),
                    linear-gradient(#333333 50px, transparent 0);
  background-position: 0px center, 15px center, 30px center, 45px center, 60px center, 75px center, 90px center;
  animation: rikSpikeRoll 0.65s linear infinite alternate;
}
@keyframes rikSpikeRoll {
0% { background-size: 10px 3px;}
16% { background-size: 10px 50px, 10px 3px, 10px 3px, 10px 3px, 10px 3px, 10px 3px}
33% { background-size: 10px 30px, 10px 50px, 10px 3px, 10px 3px, 10px 3px, 10px 3px}
50% { background-size: 10px 10px, 10px 30px, 10px 50px, 10px 3px, 10px 3px, 10px 3px}
66% { background-size: 10px 3px, 10px 10px, 10px 30px, 10px 50px, 10px 3px, 10px 3px}
83% { background-size: 10px 3px, 10px 3px,  10px 10px, 10px 30px, 10px 50px, 10px 3px}
100% { background-size: 10px 3px, 10px 3px, 10px 3px,  10px 10px, 10px 30px, 10px 50px}
}
`}],g=document.querySelector(".gallery");let d;function m(e){const r=e.map(({webformatURL:t,largeImageURL:n,tags:s,likes:b,views:L,comments:k,downloads:w})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img class="gallery-image" src="${t}" alt="${s}" loading="lazy" />
          <div class="info">
          <p><b>Likes</b> ${b}</p>
          <p><b>Views</b> ${L}</p>
          <p><b>Comments</b> ${k}</p>
          <p><b>Downloads</b> ${w}</p>
        </div>
        </a>
      </li>`).join("");g.insertAdjacentHTML("beforeend",r),d?d.refresh():d=new P(".gallery a");const o=document.querySelectorAll(".gallery-image"),a=Array.from(o).map(t=>t.complete?Promise.resolve():new Promise(n=>{t.onload=n,t.onerror=n}));return Promise.all(a)}function z(){g.innerHTML=""}function y(){const e=document.querySelector(".loader-wrapper"),{html:r,css:o}=M[0];e.innerHTML=r;const a=document.createElement("style");a.id="loader-style",a.textContent=o,document.head.appendChild(a),e.style.display="block"}function f(){const e=document.querySelector(".loader-wrapper");e.innerHTML="",e.style.display="none"}function h(){const e=document.querySelector(".load-more");e.style.display="block"}function l(){const e=document.querySelector(".load-more");e.style.display="none"}const B=document.querySelector(".form"),R=document.querySelector(".load-more");let i=1,c="",u=0;const $=15;function A(){const e=document.querySelector(".gallery-item");if(e){const{height:r}=e.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}}async function O(e){var r;if(e.preventDefault(),i=1,c=e.target.elements["search-text"].value.trim(),!c){p.warning({title:"Empty field",message:"Please enter a search term.",position:"topRight"});return}z(),y(),l();try{const o=await x(c,i);if(!((r=o==null?void 0:o.hits)!=null&&r.length)){p.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(o.hits),u=Math.ceil(o.totalHits/$),i<u&&h()}catch(o){p.error({title:"Error",message:o.message,position:"topRight"})}finally{f()}}async function H(){var e;l(),y();try{i+=1;const r=await x(c,i);if(!((e=r==null?void 0:r.hits)!=null&&e.length)){l(),p.error({title:"End of results",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}m(r.hits),A(),i<u?h():l()}catch(r){p.error({title:"Error",message:r.message,position:"topRight"})}finally{f()}}B.addEventListener("submit",O);R.addEventListener("click",H);
//# sourceMappingURL=index.js.map
