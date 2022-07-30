import Vue from "vue";

export default {
  state: {
    CMS: {
      show: true
    },
    Product: {
      show: false
    }
  },
  mutations: {
    closeAll(state) {
      for (let key in state) {
        state[key].show = false;
      }
    },
    open(state, {modal_name, additional_fields = {}}) {
      for (let key in state) {
        console.log("the key is:", state[key])
        state[key].show = false;
      }
      console.log("Open another")
      state[modal_name].show = true;
      for (let key in additional_fields) {
        console.log("set it")
        Vue.set(state[modal_name], key, additional_fields[key]);
      }
    }
  }
}
