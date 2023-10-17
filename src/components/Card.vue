<script>
import { store } from '../data/store'


export default {
  name : 'Card',

  data (){
    return {
      store
    }
  }
}
</script>


<template>
  <div 
  class="card" 
  style="width: 18rem;"
  >
    <div class="card-body">
      <h5 class="card-title">Titolo Originale {{ item.original_title }}</h5>
      <p class="card-text">Titolo {{ item.title }}</p>
      <p class="card-text" v-if="item.original_language === 'en'"><img src="/public/en.png" alt=""></p>
      <p class="card-text" v-else-if="item.original_language === 'it'"><img src="/public/it.png" alt=""></p>
      <p class="card-text" v-else>{{ item.original_language}}</p>
    </div>
  </div>

</template>


<style>

</style>