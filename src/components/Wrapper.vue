<script>
import { store } from '../data/store'

export default {
  name : 'Wrapper',
  
  data() {
    return {
      store
    }
  }
}
</script>


<template>
  <div v-for="movie in store.movieList" :key="movie.id">
    <ul>
      <li>Titolo Originale {{ movie.original_title }}</li>
      <li>Titolo {{ movie.title }}</li>
      <li> {{ movie.vote_average }}</li>
      <li v-if="movie.original_language === 'en'"><img src="/public/en.png" alt=""></li>
      <li v-else-if="movie.original_language === 'it'"><img src="/public/it.png" alt=""></li>
      <li v-else> {{ movie.original_language}}</li>
    </ul>
  </div>
</template>


<style>

</style>