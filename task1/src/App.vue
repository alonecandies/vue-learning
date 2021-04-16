<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/* reset css */
*{ 
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    scroll-behavior: smooth;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
}

:root{
    --primary-color:#38d39f;
}

::selection {
    color: white;
    background-color: var(--primary-color);
}

li{
    list-style-type: none;
}


</style>
