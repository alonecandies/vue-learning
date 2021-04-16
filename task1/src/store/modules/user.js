import axios from 'axios';
import router from '../../router/index';

export default {
    state:{
        user:{
            id:'',
            username:'',
            name:'',
            email:'',
            role:'',
        },
        auth:{
            token:'',
        },
        loginError:'abc'
    },
    getters:{
        isAuthenticated:state=>{
            if (state.auth.token){
                return true
            }
            else return false
        },
        getUserInformation:state => {state.user},
        getLoginError:state => {
            return state.loginError;
        }
    },
    actions:{
        async login({commit},payload){
            try {
                const res = await axios.post("user/signin",payload)
                commit("LOGIN",res.data);
            }
            catch (error) {
                commit("LOGIN_ERROR",error.response.data.message);
            }
        }
    },
    mutations:{
        LOGIN(state,res){
            state.user.id = res.user.id;
            state.user.username = res.user.username;
            state.user.name = res.user.name;
            state.user.email = res.user.email;
            state.user.role = res.user.roles[0];
            localStorage.setItem("token",res.accessToken)
            state.auth.token = res.accessToken;
            if (state.user.role == "admin"){
                router.push('/admin');
            }
            if (state.user.role == "user"){
                router.push('/home');
            }
        },
        LOGIN_ERROR(state,error){
            state.loginError = error;
        }
    },
    namespaced:true
}
