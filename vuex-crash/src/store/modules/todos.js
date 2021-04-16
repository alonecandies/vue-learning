import axios from 'axios';

const todos ={
    state:{
        todos:[],
    },
    getters:{
        doneTodos: state => {
            return state.todos.filter(todo => todo.completed);
        },
        todos:state=>state.todos
    },
    mutations:{
        TOGGLE_DONE(state,todoID){
            state.todos.map(todo=>{
                if(todo.id == todoID) {
                    todo.completed=!todo.completed;
                }
            })
        },
        DELETE_TASK(state,todoID){
            state.todos=state.todos.filter(todo =>todo.id!==todoID)
        },
        ADD_TASK(state,task){
            state.todos.unshift(task);
        },
        SET_TODOS(state,tasks){
            state.todos=tasks;
        }
    },
    actions:{
        async deleteTodo({commit},todoID){
            try{
                await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoID}`);
                commit('DELETE_TASK',todoID);    
            }
            catch(err){
                console.log(err);
            }
        },
        async addTask({commit},task){
            try{
                await axios.post(`https://jsonplaceholder.typicode.com/todos`,task)
                commit('ADD_TASK',task)
            }
            catch(err){
                console.log(err);
            }
        },
        async getTodos({commit}){
            try{
                const res = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5");
                commit('SET_TODOS',res.data)
            }
            catch(err){
                console.log(err);
            }
        }
    }
}

export default todos;