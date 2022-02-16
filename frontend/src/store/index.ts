import BoardStore from '@/service/board/module/boardStore';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    boardStore: BoardStore,
  },
});
