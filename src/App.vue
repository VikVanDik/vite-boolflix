<script>

import axios from 'axios';
import { store } from './data/store'

export default {
  name: 'App',

  data (){
    return {
      store
    }
  },

  methods : {
    getApi (){
      
      axios.get(store.apiUrl)

      .then (res => {
        movieList = res.data
        console.log(this.movieList);
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
    
  </div>
  
</template>

<style >

</style>
