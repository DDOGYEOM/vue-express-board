import { RootState } from '@/store';
import { ActionContext, Module } from 'vuex';
import {
  getBoardById,
  getBoardList,
  addBoard,
  updateBoard,
  deleteBoardById,
} from '../api/Board';
import {
  BoardListAPIModel,
  BoardAPIModel,
  BoardListInfoModel,
} from '../model/BoardAPIModel';
import { BoardAddModel, BoardModel } from '../model/BoardModel';

export interface BoardModuleState {
  boardListData: BoardListAPIModel | null;
  boardData: BoardAPIModel | null;
}

export const BoardModule: Module<BoardModuleState, RootState> = {
  namespaced: true,
  state: () => ({
    boardListData: null,
    boardData: null,
  }),
  mutations: {},
  getters: {},
  actions: {
    async loadBoardList(
      context: ActionContext<BoardModuleState, RootState>,
      payload: BoardListInfoModel
    ): Promise<BoardListAPIModel> {
      const res = await getBoardList(
        payload.offset,
        payload.limit,
        payload.title
      );

      return res;
    },

    async loadBoardById(
      context: ActionContext<BoardModuleState, RootState>,
      payload: number
    ): Promise<BoardAPIModel> {
      const res = await getBoardById(payload);
      return res;
    },

    async addBoard(
      context: ActionContext<BoardModuleState, RootState>,
      payload: BoardAddModel
    ): Promise<void> {
      await addBoard(payload);
    },

    async updateBoardById(
      context: ActionContext<BoardModuleState, RootState>,
      payload: { idx: number; data: BoardModel }
    ): Promise<void> {
      await updateBoard(payload.idx, payload.data);
    },

    async removeBoardById(
      context: ActionContext<BoardModuleState, RootState>,
      payload: number
    ): Promise<BoardAPIModel> {
      const res = await deleteBoardById(payload);
      return res;
    },
  },
};
