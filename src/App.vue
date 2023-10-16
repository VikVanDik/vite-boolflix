<script>

import axios from 'axios';
import { store } from './data/store'
import Wrapper from './components/Wrapper.vue';

export default {
  name: 'App',

  components : {
    Wrapper
  },

  data (){
    return {
      store,
      Wrapper
    }
  },

  methods : {
    getApi (){
      
      axios.get(store.apiUrl)

      .then (res => {
        store.movieList = res.data.results
        console.log(store.movieList);
      })
    }
  },

  mounted () {
    this.getApi()
  }
}

</script>


<template>

  <div>
    <Wrapper />
  </div>
  
</template>

<style >

</style>
