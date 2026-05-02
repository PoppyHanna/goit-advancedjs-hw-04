import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector('.js-container');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.getElementById('load-more-btn');


const lightbox = new SimpleLightbox('.js-container .image-card a', {
      captionsData: 'alt',
      captionDelay: 250,
});

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.style.display = 'block';
}

export function hideLoader() {
  loader.style.display = 'none';
}

export function showLoadMoreButton() {
  loadMoreBtn.style.display = 'block';
}

export function hideLoadMoreButton() {
  loadMoreBtn.style.display = 'none';
}

// рендер (і для першого, і для load more)
export function renderFoto(data) {
  const markup = data.hits.map(image => `
    <li class="image-card">
      <div class="li-cont">
        <a href="${image.largeImageURL}" class="link-a">
          <img class="pic-card" src="${image.webformatURL}" alt="${image.tags}" />
        </a>
        <div class="item-text">
          <ul class="image-info">
            <li>Likes: ${image.likes}</li>
            <li>Views: ${image.views}</li>
            <li>Comments: ${image.comments}</li>
            <li>Downloads: ${image.downloads}</li>
          </ul>
        </div>
      </div>
    </li>
  `).join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}
