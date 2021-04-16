import {createRouter,createWebHistory} from 'vue-router';
import Login from '../components/Auth/Login.vue';
import Register from '../components/Auth/Register.vue';
import Home from '../components/Home.vue';
import Admin from '../components/Admin.vue';
import Error from '../components/Error.vue';

const routes = [
    {path: '/',component:Login},
    {path: '/register',component:Register},
    {path: '/home',component:Home},
    {path: '/admin',component:Admin},
    {path: "/:pathMatch(.*)*",component:Error}
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;