const API_KEY = "f0817e52182ab1b04d68c3b1c624d6f0"
const BASE_URL = "https://api.themoviedb.org"

const basicFetch = async (endpoint) => {
  const req = await fetch(`${BASE_URL}/${endpoint}`);
  return await req.json();
}

export default {
  getImgPath: () => {
    return "https://image.tmdb.org/t/p/w185";
  },
  getPopular: async (page) => {
    return await basicFetch(`3/movie/popular?page=${page}&language=pt-BR&api_key=${API_KEY}`);
  }
}