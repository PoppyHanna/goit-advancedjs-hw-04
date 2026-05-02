import axios from 'axios';


export async function searchFoto(userValue, page = 1, perPage = 15) {
  const BASE_URL = 'https://pixabay.com/api/';

    const params = new URLSearchParams({
        key: "42342437-5c4c341e915bce4954251eee0",
        q: userValue,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: page,
        per_page: perPage
    });
  const response = await axios.get(BASE_URL, { params });
  return response.data;
}
