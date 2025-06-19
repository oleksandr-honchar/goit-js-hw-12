import{a as d,S as u,i as o}from"./assets/vendor-C9vNCoLC.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function p(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(e){if(e.ep)return;e.ep=!0;const n=p(e);fetch(e.href,n)}})();const g="https://pixabay.com/api/",m="50800814-f0ce8c424259a5db94c3e389b";function f(t){return d.get(g,{params:{key:m,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data).catch(r=>{throw new Error(`Error fetching images: ${r.message}`)})}const y=[{id:"sndWveBr",html:'<span class="loader"></span>',css:`.loader {
    display: block;
    margin: 0 auto;
  position: relative;
  width: 85px;
  height: 50px;
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
`}],l=document.querySelector(".gallery");let s;function h(t){const r=t.map(({webformatURL:p,largeImageURL:a,tags:e,likes:n,views:i,comments:c,downloads:x})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img class="gallery-image" src="${p}" alt="${e}" loading="lazy" />
          <div class="info">
          <p><b>Likes</b> ${n}</p>
          <p><b>Views</b> ${i}</p>
          <p><b>Comments</b> ${c}</p>
          <p><b>Downloads</b> ${x}</p>
        </div>
        </a>
      </li>`).join("");l.innerHTML=r,s?s.refresh():s=new u(".gallery a")}function b(){l.innerHTML=""}function k(){const t=document.querySelector(".loader-wrapper"),{html:r,css:p}=y[0];t.innerHTML=r;const a=document.createElement("style");a.id="loader-style",a.textContent=p,document.head.appendChild(a),t.style.display="block"}function L(){const t=document.querySelector(".loader-wrapper");t.innerHTML="",t.style.display="none"}const w=document.querySelector(".form");w.addEventListener("submit",t=>{t.preventDefault();const r=t.target.elements["search-text"].value.trim();if(!r){o.warning({title:"Empty field",message:"Please enter a search term.",position:"topRight"});return}b(),k(),f(r).then(p=>{if(!p.hits.length){o.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(p.hits)}).catch(p=>{o.error({title:"Error",message:p.message,position:"topRight"})}).finally(()=>{L()})});
//# sourceMappingURL=index.js.map
