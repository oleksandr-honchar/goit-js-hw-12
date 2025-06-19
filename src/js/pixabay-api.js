import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '50800814-f0ce8c424259a5db94c3e389b';
let page = 1;

export function getImagesByQuery(query, page) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
      },
    })
    .then(response => response.data)
    .catch(error => {
      throw new Error(`Error fetching images: ${error.message}`);
    });
}
