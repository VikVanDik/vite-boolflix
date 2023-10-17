<script>
import { store } from '../data/store'


export default {
  name : 'Card',

  props : {
    itemObj : Object
  },

  data (){
    return {
      store
    }
  },
}
</script>


<template>
  <div 
  class="card" 
  style="width: 18rem;"
  >
    <img v-if="!itemObj.poster_path" src="notFound.png" alt="Not found">
    <img v-else :src="`https://image.tmdb.org/t/p/w342/${itemObj.poster_path}`" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Titolo Originale {{ itemObj.original_title }}</h5>
      <p class="card-text">Titolo {{ itemObj.title }}</p>
      <p class="card-text" v-if="itemObj.original_language === 'en'"><img src="/en.png" alt=""></p>
      <p class="card-text" v-else-if="itemObj.original_language === 'it'"><img src="/it.png" alt=""></p>
      <p class="card-text" v-else>{{ itemObj.original_language}}</p>
      <p class="card-text">{{ itemObj.vote_average }}</p>
    </div>
  </div>

</template>


<style>

</style>