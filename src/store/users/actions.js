export const fetchUser = ({ commit }, userData) => {
  commit('setUser', userData);
};