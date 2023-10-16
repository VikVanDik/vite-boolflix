<script>
import { store } from '../data/store'

export default {
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
      <li> {{ movie.original_language}}</li>
    </ul>
  </div>
</template>


<style>

</style>