import {createStore} from 'vuex';
import auth from './modules/auth';
import todos from './modules/todos';

export default createStore({
    modules:{
        auth,
        todos
    },
})
