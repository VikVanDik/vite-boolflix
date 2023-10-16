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
        params : {
          query : store.inputToSearch
        }
      })

      .then (res => {
        store.movieList = res.data.results
        console.log(store.movieList);
      })
    },

    getApiTV (){
      
      axios.get(store.apiUrlTV, {
        params : {
          query : store.inputToSearch
        }
      })

      .then (res => {
        store.tvList = res.data.results
        console.log(store.movieList);
      })
    },

  },

  mounted () {
    this.getApiMovie()
    this.getApiTV()
  }
}

</script>


<template>

  <Header @searchShow="getApiTV"/>
  <Wrapper />
  
  
</template>

<style lang="scss">

@use './scss/main.scss';

</style>
