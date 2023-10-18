<script>

import axios from 'axios';
import { store } from './data/store'
import Wrapper from './components/Wrapper.vue';
import Header from './components/Header.vue';

export default {
  name: 'App',

  components : {
    Wrapper,
    Header
  },

  data (){
    return {
      store,
      Wrapper,
      Header,
      message : "Cerca un film o una serie TV"
    }
  },

  methods : {
    getApi (type){
      
      axios.get(store.apiUrl + type, {
        params : store.apiParams
      })

      .then (res => {
        store[type] = res.data.results
        console.log(store.movie);
        console.log(store.tv);
        if(store[type].length === 0) {
          this.message = "Nessun risultato trovato"
        }
      })

      .catch (err => {
        console.log(err);
      })
    },

    searchShow (){
      this.getApi ('movie'),
      this.getApi ('tv')
      store.apiParams.query = ""
    },

   

  },

  mounted () {

  }
}

</script>


<template class="background">

  <Header @searchShow="searchShow"/>

  <Wrapper v-if="store.movie.length > 0" title="Film" type="movie"/>
  <Wrapper v-if="store.tv.length > 0" title="Serie TV" type="tv"/>

  <div class="message p-5" v-if="store.movie.length === 0 & store.tv.length === 0">{{ this.message }}</div>
  
  
</template>

<style lang="scss">

@use './scss/main.scss';

 .message {
    margin-top: 100px;
    background-color: #434343;
    height: calc(100vh - 100px);
    font-size: 40px;
    color: black;
 }
</style>
