
export default {
  setTimeItems ({ commit }) {
    fetch('./data.json')
      .then(response => response.json())
      .then(response => {
        commit('SET_TIME_ITEMS', response);
      });
  }
}
