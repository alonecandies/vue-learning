<template>
  <div id="app">
    <Task v-for="(task,index) in tasks" :key="index"/>
  </div>
</template>

<script>
  import Task from "./components/Task";

  export default {
    name: 'App',
    props:{
      taskData:{
        type:Object,
        default: function() {
          return {}
        }
      }
    },
    data(){
      return {
        newTask:"",
        tasks:[
          {
            name:"A",
            id:"0",
            status:false
          },
          {
            name:"B",
            id:"1",
            status:false
          },
          {
            name:"C",
            id:"2",
            status:false
          },
          {
            name:"D",
            id:"3",
            status:false
          },
        ]
      }
    },
    components:{
      Task
    }
  }
</script>

<style>

</style>
