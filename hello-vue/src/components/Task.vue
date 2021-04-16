<template>
  <div class="task">
    <span>{{taskData.name}}</span>
  </div>
</template>

<script>
export default {
    name: 'Menu',
    props:{
      taskData:{
        type:Object,
        default: function() {
          return {}
        }
      }
    },
    data(){
        return{

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
