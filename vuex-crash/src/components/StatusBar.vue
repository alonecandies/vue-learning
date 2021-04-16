<template>
  <div>
      <ul v-if="isAuthenticated">
          <h1>Done</h1>
          <li v-for="todo in doneTodos" :key="todo.id">{{todo.title}}</li>
      </ul>
  </div>
</template>

<script>
import {mapGetters, mapState} from "vuex";

export default {
    name:"StatusBar",
    computed:{...mapGetters(['doneTodos','isAuthenticated']),...mapState(['auth'])}
}
</script>

<style>

</style>