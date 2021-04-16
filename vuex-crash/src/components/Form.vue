<template>
    <div>
        <form @submit="onSubmit">
            <input type="text" v-model="title">
            <input type="submit" value="Add">
        </form>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import {v4 as uuidv4} from 'uuid';

export default {
    name:"Form",
    data(){
        return {
            title:''
        };
    },
    computed:{
        ...mapState(['todos'])
    },
    methods:{
        ...mapActions(['addTask']),
        onSubmit(e){
            e.preventDefault();
            this.addTask({
                id:uuidv4(),
                title:this.title,
                completed:false
            });
            this.title="";
        }
    }
}
</script>

<style>
    form {
        padding: 10px;
    }

    input[type='text'] {
        width: 100%;
        box-sizing: border-box;
        padding: 10px;
        margin: 6px 0;
        border: 0;
    }

    input[type='submit'] {
        margin: 10px auto;
        padding: 10px;
        border: 0;
        display: block;
    }

</style>