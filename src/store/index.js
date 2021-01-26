import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tabbarIndex: "",
    userAgent: "",
  },
  mutations: {
    setTabbarIndex(state, data) {
      state.tabbarIndex = data;
    },
    userAgent(state, data){
      state.userAgent = data;
    }
  },
  actions: {},
  modules: {}
});
