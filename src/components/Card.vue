<script>
import { store } from '../data/store'


export default {
  name : 'Card',

  props : {
    itemObj : Object
  },

  data (){
    return {
      store,
      flags : ['en', 'it']
    }
  },
  methods : {
    getFlag(img){
      return new URL(`../assets/img/${img}.png`, import.meta.url).href
    }
  },
  computed : {
    getVote (){
      return Math.ceil(this.itemObj.vote_average / 2)
    }
  }
}
</script>


<template>
  <div 
  class="card movie-card " 
  style="width: 18rem;"
  >
    <img v-if="!itemObj.poster_path" src="notFound.png" alt="Not found">
    <img v-else :src="`https://image.tmdb.org/t/p/w342/${itemObj.poster_path}`" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ itemObj.original_title || itemObj.original_name }}</h5>
      <p class="card-text">Titolo: <br> {{ itemObj.title || itemObj.name}}</p>
      <p class="card-text" v-if="flags.includes(itemObj.original_language)"><img class="flag" :src="getFlag(itemObj.original_language)" alt="language"></p>
      <p class="card-text" v-else>{{ itemObj.original_language}}</p>
      <p class="card-text">{{ getVote() }}</p>
      <div class="stars">
        <i 
        v-for="i in 5" 
        :key="i" 
        class="fa-star"
        :class="(i <= getVote) ? 'fa-solid' : 'fa-regular'"></i>
      </div> 
      <div class="overview">
        <p class="card-text"> {{ itemObj.overview }}</p>
      </div>
    </div>
  </div>

</template>


<style scoped>

.movie-card {
  height: 800px;
  overflow: hidden;
}

.overview {
  overflow-y: auto;
  height: 200px;
}

.flag {
  width: 25px;
}

</style>