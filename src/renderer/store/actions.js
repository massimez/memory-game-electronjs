export default {
  initialResults({ commit }) {
    commit('addInitialResults');
  },
  setResult({ commit }, payload) {
    commit('setResult', payload);
  },
  setUserName({ commit }, payload) {
    commit('setUserName', payload);
  },
};
