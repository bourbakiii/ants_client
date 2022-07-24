import Vue from 'vue';

export default {
  state: null,
  mutations: {
    set(state, user) {
      console.log('this state is');
      console.log(this.state);
      Vue.set(this.state,'user',user);
    }
  },
  actions: {},
  getters: {},
  setters: {},
}
