<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <router-link to="/Card">Card</router-link> 
    <router-link to="/Css">Css</router-link> 
    <hello></hello>
    {{test}}
  </div>
</template>

<script>
import hello from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: { hello },
  data() {
    return {
      test:'ok  good'
    }
  },
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
