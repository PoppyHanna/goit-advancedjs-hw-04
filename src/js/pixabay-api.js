// // Імпортуємо необхідний плагін
import axios from 'axios';


export async function searchFoto(userValue, page = 1, perPage = 15) {
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const PARAMS = new URLSearchParams({
        key: "42342437-5c4c341e915bce4954251eee0",
        q: userValue,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: page,
        per_page: perPage
    });
    const url = BASE_URL + END_POINT + "?" + PARAMS;

    try {
        const response = await axios.get(url);
        if (!response.data.hits) {
            throw new Error('Error fetching data: No hits');
        }
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}
