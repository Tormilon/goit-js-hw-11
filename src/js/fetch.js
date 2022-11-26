import axios from 'axios';
import { PER_PAGE } from '../index';

function fetchImages(query, page) {
  const BASE_URL = 'https://pixabay.com/api';
  const OPTIONS = `key=31612484-3202b48e0c1e89b75be8b4f88=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${PER_PAGE}&page=${page}`;

  return axios.get(`${BASE_URL}/?${OPTIONS}`);
}

export { fetchImages };
