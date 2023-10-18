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
  <main>
    <div>
      <h1 class="m-3">{{ title }}</h1>
    </div>
    
    <div class="d-flex flex-wrap container-cards">
      <Card 
      v-for="item in store[type]" 
      :key="item.id"
      :itemObj="item"
      class=""/>
    </div>
  </main>
</template>


<style scoped>
main {
  padding-top: 120px;
  background-color: #434343;

}

h1 {
  color: black;
  padding-left: 50px;
}

.container-cards {
  width: 90%;
  margin: 0 auto;
  justify-content: center;
}
</style>