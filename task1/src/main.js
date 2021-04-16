import { createApp } from 'vue'
import axios from 'axios';
import App from './App.vue'
import store from './store/index';
import router from './router/index';

createApp(App)
  .use(router)
  .use(store)
  .mount("#app");

axios.defaults.baseURL="http://localhost:4000/backend/";
if (localStorage.getItem("token")){
  axios.defaults.headers.common['Authorization'] = "Bearer " + localStorage.getItem("token");
}