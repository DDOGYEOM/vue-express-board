import { getBoardById, getBoardList, addBoard, updateBoard, deleteBoardById } from '../api/Board';
import { BoardListAPIModel, BoardAPIModel } from '../model/BoardAPIModel';
import { BoardModel } from '../model/BoardModel';

const state = {}
const getters = {}
const mutations = {}
const actions = {
  async loadBoardList(): Promise<BoardListAPIModel> {
    const res = await getBoardList();
    return res;
  },

  async loadBoardById (context:any, payload: {idx: number}): Promise<BoardAPIModel> {
    const res = await getBoardById(payload.idx);
    return res;
  },

  async addBoardById (context:any, payload: {data: BoardModel}): Promise<void> {
    await addBoard(payload.data);
  },

  async updateBoardById (context:any, payload: {idx: number, data: BoardModel}): Promise<void> {
    await updateBoard(payload.idx, payload.data);
  },

  async removeBoardById (context:any, payload: {idx: number}): Promise<BoardAPIModel> {
    const res = await deleteBoardById(payload.idx);
    return res;
    
  },

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};