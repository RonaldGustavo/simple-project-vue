import { createStore } from 'vuex';
import user from './users';

const store = createStore({
  modules: {
    user,
  }
});

export default store;
