import { reactive } from 'vue';

export const store = reactive ({
  apiUrl : 'https://api.themoviedb.org/3/search/movie',
  apiParams : {
    apiKey : '8228056d285201c46ef0f716d28d6059',
    language : 'it-IT',
    query : ''
  },
  movieList : [],
  tvList : [],
  
})