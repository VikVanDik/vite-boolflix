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
      Header
    }
  },

  methods : {
    getApiMovie (){
      
      axios.get(store.apiUrlMovie, {
        params : store.apiParams
      })

      .then (res => {
        store.movieList = res.data.results
        console.log(store.movieList);
      })

      
    },

  },

  mounted () {
  }
}

</script>


<template>

  <Header @searchShow="getApiMovie"/>
  <Wrapper />
  
  
</template>

<style lang="scss">

@use './scss/main.scss';

</style>
