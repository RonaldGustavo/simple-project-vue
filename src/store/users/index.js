import { fetchUser } from './actions';

export default{
  namespaced: true,
  state: {
    email: 'ronald',
  },
  mutations: {
    setUser(state, data) {
      state.email = data;
    },
  },
  actions: {
    fetchUser,
  },
};
