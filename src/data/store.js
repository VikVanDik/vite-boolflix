import { reactive } from 'vue';

export const store = reactive ({
  apiUrl : 'https://api.themoviedb.org/3/search/movie?api_key=8228056d285201c46ef0f716d28d6059&query=ritorno al futuro&language=it-IT',
  movieList : [],
})