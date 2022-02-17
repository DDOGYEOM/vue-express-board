import { Module } from 'vuex';
import { getBoardList } from '../api/Board';
import { BoardModel } from '../model/boardModel';

export interface BoardModuleState {
  boardList: Array<BoardModel>;
}

const BoardStore: Module<BoardModuleState, BoardModuleState> = {
  namespaced: true,
  state: {
    boardList: [],
  },
  getters: {
    getTest: state => state.boardList,
  },
  mutations: {
    setBoardList(state, response) {
      state.boardList = response.data;
    },
  },
  actions: {
    setAndLoadBoardListData: async ({ commit }): Promise<BoardModel[]> => {
      try {
        const response = await getBoardList();
        commit('setBoardList', response);

        return response;
      } catch (e) {
        console.log(e);
        return Promise.reject(e);
      }
    },
  },
};

export default BoardStore;
