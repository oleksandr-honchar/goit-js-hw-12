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
let totalPages = 0;
const per_page = 15;

function scrollPage() {
  const galleryItem = document.querySelector('.gallery-item');
  if (galleryItem) {
    const { height: cardHeight } = galleryItem.getBoundingClientRect();
    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });
  }
}

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

    createGallery(data.hits);
    totalPages = Math.ceil(data.totalHits / per_page);

    if (currentPage < totalPages) {
      showLoadMoreButton();
    }
  } catch (error) {
    console.error('Error in handleSubmit:', error);
    iziToast.error({
      title: 'Error',
      message: 'Failed to load images. Please try again.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}

async function handleLoadMore() {
  hideLoadMoreButton();
  showLoader();

  try {
    currentPage += 1;
    const data = await getImagesByQuery(searchQuery, currentPage);

    if (!data || !Array.isArray(data.hits)) {
      throw new Error('Invalid data received from server');
    }

    createGallery(data.hits);
    scrollPage();

    // Show button if there are more pages to load
    if (currentPage < totalPages) {
      showLoadMoreButton();
    } else {
      // Only show end of results message on the actual last page
      iziToast.info({
        title: 'End of results',
        message: "You've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (error) {
    console.error('Error in handleLoadMore:', error);
    currentPage -= 1; // Revert page increment on error
    iziToast.error({
      title: 'Error',
      message: 'Failed to load more images. Please try again.',
      position: 'topRight',
    });
    showLoadMoreButton(); // Show button again to allow retry
  } finally {
    hideLoader();
  }
}

form.addEventListener('submit', handleSubmit);
loadMoreBtn.addEventListener('click', handleLoadMore);
