import Vue from 'vue';
import Vuex from 'vuex';
import toast from './moduleToast';
import dialog from './moduleDialog';
import vuelos from './moduleVuelos';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},

  mutations: {},

  actions: {},

  modules: {
    toast,
    dialog,
    vuelos,
  },
});
