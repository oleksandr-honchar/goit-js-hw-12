import{a as S,S as E,i as p}from"./assets/vendor-C9vNCoLC.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const P="https://pixabay.com/api/",v="50800814-f0ce8c424259a5db94c3e389b",M=15;async function u(e,n=1){try{const{data:t}=await S.get(P,{params:{key:v,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:n,per_page:M}});return t}catch(t){throw new Error(`Error fetching images: ${t.message}`)}}const q=[{id:"sndWveBr",html:'<span class="loader"></span>',css:`.loader {
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
`}],g=document.querySelector(".gallery");let c;function m(e){const n=e.map(({webformatURL:r,largeImageURL:o,tags:s,likes:b,views:L,comments:w,downloads:k})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${o}">
          <img class="gallery-image" src="${r}" alt="${s}" loading="lazy" />
          <div class="info">
          <p><b>Likes</b> ${b}</p>
          <p><b>Views</b> ${L}</p>
          <p><b>Comments</b> ${w}</p>
          <p><b>Downloads</b> ${k}</p>
        </div>
        </a>
      </li>`).join("");g.insertAdjacentHTML("beforeend",n),c?c.refresh():c=new E(".gallery a");const t=document.querySelectorAll(".gallery-image"),a=Array.from(t).map(r=>r.complete?Promise.resolve():new Promise(o=>{r.onload=o,r.onerror=o}));return Promise.all(a)}function z(){g.innerHTML=""}function y(){const e=document.querySelector(".loader-wrapper"),{html:n,css:t}=q[0];e.innerHTML=n;const a=document.createElement("style");a.id="loader-style",a.textContent=t,document.head.appendChild(a),e.style.display="block"}function f(){const e=document.querySelector(".loader-wrapper");e.innerHTML="",e.style.display="none"}function d(){const e=document.querySelector(".load-more");e.style.display="block"}function h(){const e=document.querySelector(".load-more");e.style.display="none"}const B=document.querySelector(".form"),R=document.querySelector(".load-more");let i=1,l="",x=0;const A=15;function $(){const e=document.querySelector(".gallery-item");if(e){const{height:n}=e.getBoundingClientRect();window.scrollBy({top:n*2,behavior:"smooth"})}}async function O(e){var n;if(e.preventDefault(),i=1,l=e.target.elements["search-text"].value.trim(),!l){p.warning({title:"Empty field",message:"Please enter a search term.",position:"topRight"});return}z(),y(),h();try{const t=await u(l,i);if(!((n=t==null?void 0:t.hits)!=null&&n.length)){p.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(t.hits),x=Math.ceil(t.totalHits/A),i<x&&d()}catch(t){console.error("Error in handleSubmit:",t),p.error({title:"Error",message:"Failed to load images. Please try again.",position:"topRight"})}finally{f()}}async function H(){h(),y();try{i+=1;const e=await u(l,i);if(!e||!Array.isArray(e.hits))throw new Error("Invalid data received from server");m(e.hits),$(),i<x?d():p.info({title:"End of results",message:"You've reached the end of search results.",position:"topRight"})}catch(e){console.error("Error in handleLoadMore:",e),i-=1,p.error({title:"Error",message:"Failed to load more images. Please try again.",position:"topRight"}),d()}finally{f()}}B.addEventListener("submit",O);R.addEventListener("click",H);
//# sourceMappingURL=index.js.map
