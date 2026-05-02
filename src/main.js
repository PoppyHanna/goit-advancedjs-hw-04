import { searchFoto } from './js/pixabay-api.js';
import { renderFoto, clearGallery, showLoader, hideLoader, showLoadMoreButton,
  hideLoadMoreButton  } from './js/render-functions.js';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.getElementById('search-form');

const loadMoreBtn = document.getElementById('load-more-btn');

let currentPage = 1;
let currentQuery = '';
let totalHits = 0;


form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const query = e.target.elements.query.value.trim();

  if (!query) {
      iziToast.warning({
          title: 'Warning',
          message: 'Please enter a search images',
      });
      return;
  }

  currentPage = 1;
  currentQuery = query;

  clearGallery();
  hideLoadMoreButton();
  showLoader();


  try {
    const data = await searchFoto(query, currentPage);

    if (data.hits.length === 0) {
        iziToast.error({
            title: 'Error',
            message: 'Sorry, there are no images matching your search query. Please try again!',
        });
      return
      }

      totalHits = data.totalHits;

      renderFoto(data);

      if (currentPage * 15 < totalHits) {
        showLoadMoreButton();
      }

  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'An error occurred while searching for images',
    });
  } finally {
    hideLoader();
  }
});


loadMoreBtn.addEventListener('click', async () => {

  currentPage++;
  showLoader();

  try {

    const data = await searchFoto(currentQuery, currentPage);

    renderFoto(data);

    const cardHeight = document
      .querySelector('.image-card')
      .getBoundingClientRect().height;

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth'
    });

    if (currentPage * 15 >= totalHits) {
      hideLoadMoreButton();

      iziToast.info({
        title: 'Info',
        message: "We're sorry, but you've reached the end of search results.",
      });

    }
  } catch (error) {
      iziToast.warning({
          title: 'Warning',
          message: 'No more images to load',
      });
  } finally {
      hideLoader();
  }
});


