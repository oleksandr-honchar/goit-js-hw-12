import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const loadMoreBtn = document.querySelector('.load-more');
let currentPage = 1;
let searchQuery = '';

async function handleSubmit(e) {
  e.preventDefault();
  currentPage = 1;
  searchQuery = e.target.elements['search-text'].value.trim();

  if (!searchQuery) {
    iziToast.warning({
      title: 'Empty field',
      message: 'Please enter a search term.',
      position: 'topRight',
    });
    return;
  }

  clearGallery();
  showLoader();
  hideLoadMoreButton();

  try {
    const data = await getImagesByQuery(searchQuery, currentPage);

    if (!data?.hits?.length) {
      iziToast.error({
        title: 'No results',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    await createGallery(data.hits);

    if (data.totalHits > data.hits.length) {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: error.message,
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}

async function handleLoadMore() {
  showLoader();

  try {
    currentPage += 1;
    const data = await getImagesByQuery(searchQuery, currentPage);

    if (!data?.hits?.length) {
      hideLoadMoreButton();
      iziToast.error({
        title: 'End of results',
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
      return;
    }

    await createGallery(data.hits);

    if (currentPage * data.hits.length >= data.totalHits) {
      hideLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: error.message,
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}

form.addEventListener('submit', handleSubmit);
loadMoreBtn.addEventListener('click', handleLoadMore);
