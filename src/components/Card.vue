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
  class="card movie-card" 
  style="width: 18rem;"
  >
    
    <img v-if="!itemObj.poster_path" src="notFound2.jpg" alt="Not found" class="not-found-img">
    <img v-else :src="`https://image.tmdb.org/t/p/w342/${itemObj.poster_path}`" class="card-img-top image" alt="...">
    <h5 v-if ="!itemObj.poster_path" class="title-no-image"> {{ itemObj.original_title || itemObj.original_name }}</h5>
    
    <div class="card-body w-100 h-100">
      <h5 class="card-title">{{ itemObj.original_title || itemObj.original_name }}</h5>
      <p class="">Titolo: <br> {{ itemObj.title || itemObj.name}}</p>
      <p class="" v-if="flags.includes(itemObj.original_language)"><img class="flag" :src="getFlag(itemObj.original_language)" alt="language"></p>
      <p class="card-text not-found" v-else>{{ itemObj.original_language}}</p>
      <p class="card-text">{{ getVote }}</p>
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

.image {
  height: 430px;
  position: absolute;
  object-fit: fill;
}
.not-found-img {
  height: 430px;
  position: absolute;
  width: 100%;
}

.title-no-image {
  position: absolute;
  top: 10px;
  left: 0;
}

.card:hover .title-no-image {
  display: none;
}

.movie-card {
  height: 430px;
  overflow: hidden;
}

.overview {
  overflow-y: auto;
  height: 200px;
}

.flag {
  width: 25px;
}

.card:hover .card-body {
  background-color:  rgba(20, 20, 20, .8);
  position: absolute;
  color: white;
}

</style>