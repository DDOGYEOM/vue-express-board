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
  mutations: {
    setBoardList(state, data) {
      state.boardList = data;
    },
  },
  actions: {
    async setAndLoadBoardListData({ commit }): Promise<BoardModel[]> {
      try {
        const response = await getBoardList();
        console.log(response);

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
