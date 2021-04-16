import {createRouter,createWebHistory} from 'vue-router';

import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Product from '../components/Product.vue';
import Error from '../components/Error.vue';

const routes = [
    {path: '/',component:Home},
    {path: '/product',component:Product},
    {path: '/about',component:About},
    {path: "/:pathMatch(.*)*",component:Error}
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;