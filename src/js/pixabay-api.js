import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '50800814-f0ce8c424259a5db94c3e389b';
const per_page = 15;

export async function getImagesByQuery(searchQuery, pageNum = 1) {
  try {
    const { data } = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: pageNum,
        per_page,
      },
    });
    return data;
  } catch (error) {
    throw new Error(`Error fetching images: ${error.message}`);
  }
}
