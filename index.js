import{a as w,S,i as s}from"./assets/vendor-C9vNCoLC.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();const E="https://pixabay.com/api/",P="50800814-f0ce8c424259a5db94c3e389b",q=15;async function u(e,t=1){try{const{data:o}=await w.get(E,{params:{key:P,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:q}});return o}catch(o){throw new Error(`Error fetching images: ${o.message}`)}}const v=[{id:"sndWveBr",html:'<span class="loader"></span>',css:`.loader {
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
`}],x=document.querySelector(".gallery");let c;function g(e){const t=e.map(({webformatURL:r,largeImageURL:n,tags:i,likes:h,views:b,comments:L,downloads:k})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img class="gallery-image" src="${r}" alt="${i}" loading="lazy" />
          <div class="info">
          <p><b>Likes</b> ${h}</p>
          <p><b>Views</b> ${b}</p>
          <p><b>Comments</b> ${L}</p>
          <p><b>Downloads</b> ${k}</p>
        </div>
        </a>
      </li>`).join("");x.insertAdjacentHTML("beforeend",t),c?c.refresh():c=new S(".gallery a");const o=document.querySelectorAll(".gallery-image"),a=Array.from(o).map(r=>r.complete?Promise.resolve():new Promise(n=>{r.onload=n,r.onerror=n}));return Promise.all(a)}function M(){x.innerHTML=""}function m(){const e=document.querySelector(".loader-wrapper"),{html:t,css:o}=v[0];e.innerHTML=t;const a=document.createElement("style");a.id="loader-style",a.textContent=o,document.head.appendChild(a),e.style.display="block"}function y(){const e=document.querySelector(".loader-wrapper");e.innerHTML="",e.style.display="none"}function f(){const e=document.querySelector(".load-more");e.style.display="block"}function d(){const e=document.querySelector(".load-more");e.style.display="none"}function z(){const e=document.querySelector(".gallery-item");if(e){const{height:t}=e.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}}const B=document.querySelector(".form"),R=document.querySelector(".load-more");let p=1,l="";async function $(e){var t;if(e.preventDefault(),p=1,l=e.target.elements["search-text"].value.trim(),!l){s.warning({title:"Empty field",message:"Please enter a search term.",position:"topRight"});return}M(),m(),d();try{const o=await u(l,p);if(!((t=o==null?void 0:o.hits)!=null&&t.length)){s.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(o.hits),o.totalHits>o.hits.length&&f()}catch(o){s.error({title:"Error",message:o.message,position:"topRight"})}finally{y()}}async function A(){var e;d(),m();try{p+=1;const t=await u(l,p);if(!((e=t==null?void 0:t.hits)!=null&&e.length)){d(),s.error({title:"End of results",message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}g(t.hits),z(),p*t.hits.length<t.totalHits&&f()}catch(t){s.error({title:"Error",message:t.message,position:"topRight"})}finally{y()}}B.addEventListener("submit",$);R.addEventListener("click",A);
//# sourceMappingURL=index.js.map
