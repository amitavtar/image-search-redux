// api.js
const API_KEY = 'AIzaSyCtA_ka-9H8cPIjj3ZbXQQ_BwcpCrEeQoA';
const BASE_URL = ' https://www.pexels.com/api/ ';

export const searchImages = async (query) => {
  const response = await fetch(`${BASE_URL}/search?query=${query}`, {
    headers: {
      Authorization: API_KEY,
    },
  });
  const data = await response.json();
  return data.photos;
};
