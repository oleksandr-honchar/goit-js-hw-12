import{a as k,S as w,i as s}from"./assets/vendor-C9vNCoLC.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();const S="https://pixabay.com/api/",E="50800814-f0ce8c424259a5db94c3e389b",P=15;async function x(t,e=1){try{const{data:o}=await k.get(S,{params:{key:E,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:P}});return o}catch(o){throw new Error(`Error fetching images: ${o.message}`)}}const q=[{id:"sndWveBr",html:'<span class="loader"></span>',css:`.loader {
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
`}],u=document.querySelector(".gallery");let c;function m(t){const e=t.map(({webformatURL:r,largeImageURL:n,tags:i,likes:f,views:h,comments:b,downloads:L})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img class="gallery-image" src="${r}" alt="${i}" loading="lazy" />
          <div class="info">
          <p><b>Likes</b> ${f}</p>
          <p><b>Views</b> ${h}</p>
          <p><b>Comments</b> ${b}</p>
          <p><b>Downloads</b> ${L}</p>
        </div>
        </a>
      </li>`).join("");u.innerHTML=e,c?c.refresh():c=new w(".gallery a");const o=document.querySelectorAll(".gallery-image"),a=Array.from(o).map(r=>r.complete?Promise.resolve():new Promise(n=>{r.onload=n,r.onerror=n}));return Promise.all(a)}function v(){u.innerHTML=""}function g(){const t=document.querySelector(".loader-wrapper"),{html:e,css:o}=q[0];t.innerHTML=e;const a=document.createElement("style");a.id="loader-style",a.textContent=o,document.head.appendChild(a),t.style.display="block"}function y(){const t=document.querySelector(".loader-wrapper");t.innerHTML="",t.style.display="none"}function M(){const t=document.querySelector(".load-more");t.style.display="block"}function d(){const t=document.querySelector(".load-more");t.style.display="none"}const z=document.querySelector(".form"),R=document.querySelector(".load-more");let p=1,l="";async function B(t){var e;if(t.preventDefault(),p=1,l=t.target.elements["search-text"].value.trim(),!l){s.warning({title:"Empty field",message:"Please enter a search term.",position:"topRight"});return}v(),g(),d();try{const o=await x(l,p);if(!((e=o==null?void 0:o.hits)!=null&&e.length)){s.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}await m(o.hits),o.totalHits>o.hits.length&&M()}catch(o){s.error({title:"Error",message:o.message,position:"topRight"})}finally{y()}}async function $(){var t;g();try{p+=1;const e=await x(l,p);if(!((t=e==null?void 0:e.hits)!=null&&t.length)){d(),s.error({title:"End of results",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}await m(e.hits),p*e.hits.length>=e.totalHits&&d()}catch(e){s.error({title:"Error",message:e.message,position:"topRight"})}finally{y()}}z.addEventListener("submit",B);R.addEventListener("click",$);
//# sourceMappingURL=index.js.map
