import { reactive } from 'vue';

export const store = reactive ({
  apiUrl : 'https://api.themoviedb.org/3/search/',
  apiParams : {
    api_key : '8228056d285201c46ef0f716d28d6059',
    language : 'it-IT',
    query : ''
  },
  movie : [],
  tv : [],
  message : ''
  
})