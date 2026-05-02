import{r as e}from"./assets/rolldown-runtime-DMWpINJ5.js";import{n as t,t as n}from"./assets/vendor-CkO994zD.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();async function r(e,n=1,r=15){let i=new URLSearchParams({key:`42342437-5c4c341e915bce4954251eee0`,q:e,image_type:`photo`,orientation:`horizontal`,safesearch:!0,page:n,per_page:r});return(await t.get(`https://pixabay.com/api/`,{params:i})).data}var i=document.querySelector(`.js-container`),a=document.querySelector(`.loader`),o=document.getElementById(`load-more-btn`),s=new SimpleLightbox(`.js-container .image-card a`,{captionsData:`alt`,captionDelay:250});function c(){i.innerHTML=``}function l(){a.style.display=`block`}function u(){a.style.display=`none`}function d(){o.style.display=`block`}function f(){o.style.display=`none`}function p(e){let t=e.hits.map(e=>`
    <li class="image-card">
      <div class="li-cont">
        <a href="${e.largeImageURL}" class="link-a">
          <img class="pic-card" src="${e.webformatURL}" alt="${e.tags}" />
        </a>
        <div class="item-text">
          <ul class="image-info">
            <li>Likes: ${e.likes}</li>
            <li>Views: ${e.views}</li>
            <li>Comments: ${e.comments}</li>
            <li>Downloads: ${e.downloads}</li>
          </ul>
        </div>
      </div>
    </li>
  `).join(``);i.insertAdjacentHTML(`beforeend`,t),s.refresh()}var m=e(n(),1),h=document.getElementById(`search-form`),g=document.getElementById(`load-more-btn`),_=1,v=``,y=0;h.addEventListener(`submit`,async e=>{e.preventDefault();let t=e.target.elements.query.value.trim();if(!t){m.default.warning({title:`Warning`,message:`Please enter a search images`});return}_=1,v=t,c(),f(),l();try{let e=await r(t,_);if(e.hits.length===0){m.default.error({title:`Error`,message:`Sorry, there are no images matching your search query. Please try again!`});return}y=e.totalHits,p(e),_*15<y&&d()}catch{m.default.error({title:`Error`,message:`An error occurred while searching for images`})}finally{u()}}),g.addEventListener(`click`,async()=>{_++,l();try{p(await r(v,_));let e=document.querySelector(`.image-card`).getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:`smooth`}),_*15>=y&&(f(),m.default.info({title:`Info`,message:`We're sorry, but you've reached the end of search results.`}))}catch{m.default.warning({title:`Warning`,message:`No more images to load`})}finally{u()}});
//# sourceMappingURL=index.js.map