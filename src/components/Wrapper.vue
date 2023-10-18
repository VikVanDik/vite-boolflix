<script>
import { store } from '../data/store';
import Card from './Card.vue';

export default {
  name : 'Wrapper',

  props : {
    title : String,
    type : String
  },

  components : {
    Card
  },
  
  data() {
    return {
      store,
      Card,
    }
  },
}
</script>


<template>
  <main >
    <div>
      <h1>{{ title }}</h1>
    </div>
    
    <div class="d-flex flex-wrap">
      <Card 
      v-for="item in store[type]" 
      :key="item.id"
      :itemObj="item"/>
    </div>
  </main>
</template>


<style scoped>
main {
  padding-top: 100px;
  background-color: #434343;
}
</style>