<template>
  <div id="app">
    <router-view/>
  </div>
  
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body,html{
  width: 98%;
  height:100%;
}
#app {
  width: 99%;
  height:100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
