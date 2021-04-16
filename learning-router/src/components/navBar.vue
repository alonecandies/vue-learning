<template>
  <nav>
      <h1>My Vue Router</h1>
      <ul class="nav-link">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/product">Product</router-link></li>
          <li><router-link to="/about">About</router-link></li>
      </ul>
  </nav>
</template>

<script>
export default {
    name:"navBar",
}
</script>

<style scoped>
    nav{
        background-color: #333;
        color:#fff;
        text-align: center;
        padding: 10px;
    }

    nav ul.nav-link{
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;
        padding:0;
    }

    nav ul.nav-link li a{
        text-decoration: none;
        color:white;
    }

    nav ul.nav-link li a:hover{
        color:aquamarine;
    }
</style>