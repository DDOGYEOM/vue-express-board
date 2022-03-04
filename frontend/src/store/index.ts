import Vue from 'vue';
import Vuex from 'vuex';
import board from '@/service/board/module/BoardStore'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    board
  },
});
