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

  <header>
    <a href="#" onclick="window.location.reload()">
      <img src="../assets/img/logo-boolflix.png" alt="Logo" class="m-3">
    </a> 
    <div class="selection">
      <input class="m-3" type="text" v-model.trim="store.apiParams.query" @keyup.enter="$emit('searchShow')">
      <button class="btn btn-danger m-3" @click="$emit('searchShow')">Cerca</button>
    </div>
  </header>
  
</template>


<style scoped>

.btn {
  color: black;
}

header {
  height: 100px;
  width: 100%;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 999;
  box-shadow: 0px 3px 10px black
}

img {
  height: 60px;
}

</style>