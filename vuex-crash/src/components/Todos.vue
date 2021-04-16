<template>
  <div class="todo-list">
      <Form></Form>
      <ul v-if="isAuthenticated">
          <li v-for="todo in todos" :key="todo.id" :class="todo.completed?'completed':''">
              {{todo.title}}
              <input type="checkbox" name="" id="" :checked="todo.completed" @change="TOGGLE_DONE(todo.id)">
              <button @click="deleteTodo(todo.id)">Delete</button>
          </li>
      </ul>
      <p v-else>Not authorized</p>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
import Form from './Form';

export default {
    name:"Todos",
    created(){
        this.getTodos();
    },
    computed:{...mapState(['todos','auth']),...mapGetters(['isAuthenticated','todos'])},
    methods:{...mapMutations(['TOGGLE_DONE','DELETE_TASK']),...mapActions(['deleteTodo','getTodos'])},
    components:{
        Form
    }
}
</script>

<style>
    .todo-list ul{
        padding: 0 10px 10px 10px;
        list-style-type: none;
    }

    .todo-list ul li{
        padding: 10px;
        cursor: pointer;
        margin: 10px 0;
        border-radius: 4px;
        background: #d3d3d3;
        color:black;
    }
    .todo-list li.completed {
        background: rgb(119, 218, 243);
    }
</style>