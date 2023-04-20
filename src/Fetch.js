import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/trending/all/day';
const API_KEY = 'ff752eca5c4aa6fb3d3aed4452b80b84';

export async function getTrendingFilms() {
  const URL = `${BASE_URL}?api_key=${API_KEY}`;
  const response = await axios.get(URL);

  return response.data.results;
}

export async function getSearchFilm(search) {
  const URL = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`;
  const data = await axios.get(URL);
  return data.data.results;
}
export async function getIdFilm(movie_id) {
  const URL = `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=en-US`;
  const data = await axios.get(URL);
  return data.data;
}
export async function getIdFilmCredits(movie_id) {
  const URL = `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`;
  const data = await axios.get(URL);
  return data.data;
}
// getIdFilmCredits('640146');
export async function getIdFilmReviews(movie_id) {
  const URL = `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
  const data = await axios.get(URL);
  return data.data;
}
// getIdFilmReviews('640146');
//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
//https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
// getIdFilm('948713');
// https://api.themoviedb.org/3/movie/550?api_key=ff752eca5c4aa6fb3d3aed4452b80b84
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
// getSearchFilm('superman');

// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
