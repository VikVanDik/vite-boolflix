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
      Card
    }
  }
}
</script>


<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
  
  <Card 
  v-for="item in store[type]" 
  :key="item.id"/>
</template>


<style>

</style>