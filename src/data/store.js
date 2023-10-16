import { reactive } from 'vue';

export const store = reactive ({
  apiUrl : 'https://api.themoviedb.org/3/search/movie?query=8228056d285201c46ef0f716d28d6059&include_adult=false&language=it-IT&page=1',
  movieList : []
})