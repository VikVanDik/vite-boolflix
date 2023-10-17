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
    getApiMovie (type){
      
      axios.get(store.apiUrl + type, {
        params : store.apiParams
      })

      .then (res => {
        store[type] = res.data.results
        console.log(store.movie);
        console.log(store.tv);
      })

      .catch (err => {
        console.log(err);
      })
    },

    searchShow (){
      this.getApiMovie ('movie'),
      this.getApiMovie ('tv')
    }

  },

  mounted () {
  }
}

</script>


<template>

  <Header @searchShow="searchShow"/>
  <Wrapper title="Film" type="movie"/>
  <Wrapper title="Serie TV" type="tv"/>
  
  
</template>

<style lang="scss">

@use './scss/main.scss';

</style>
