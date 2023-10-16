<script>
import { store } from '../data/store'

export default {
  name : 'Header',

  data (){
    return {
      store
    }
  }
}
</script>

<template>

  <div>
    <input type="text" v-model="store.inputToSearch" @keyup.enter="$emit('searchShow')">
    <button class="btn btn-success" @click="$emit('searchShow')">Cerca</button>
  </div>
  
</template>


<style>

</style>