import { reactive } from 'vue';

export const store = reactive ({
  apiUrlMovie : 'https://api.themoviedb.org/3/search/movie?api_key=8228056d285201c46ef0f716d28d6059&language=it-IT',
  movieList : [],
  tvList : [],
  inputToSearch : null
})