<script>
import { store } from '../data/store'

export default {
  name : 'Wrapper',

  props : {
    title : String,
    type : String
  },
  
  data() {
    return {
      store
    }
  }
}
</script>


<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
  
  <div v-for="item in store[type]" :key="item.id">
    <ul>
      <li>Titolo Originale {{ item.original_title }}</li>
      <li>Titolo {{ item.title }}</li>
      <li> {{ item.vote_average }}</li>
      <li v-if="item.original_language === 'en'"><img src="/public/en.png" alt=""></li>
      <li v-else-if="item.original_language === 'it'"><img src="/public/it.png" alt=""></li>
      <li v-else> {{ item.original_language}}</li>
    </ul>
  </div>
</template>


<style>

</style>