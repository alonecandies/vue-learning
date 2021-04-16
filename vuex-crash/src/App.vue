<template>
  <div id="app">
    <Navbar></Navbar>
    <Todos></Todos>
    <StatusBar></StatusBar>
  </div>
</template>

<script>
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import StatusBar from './components/StatusBar'

export default {
  name: 'App',
  components: {
    Todos,
    Navbar,
    StatusBar
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #e5e5e5;
  margin: 20px auto;
  width: 90%;
  max-width: 800px;
}
</style>
