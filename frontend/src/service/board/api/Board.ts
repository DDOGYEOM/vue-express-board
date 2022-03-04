import axios from 'axios';
import { BoardModel } from '@/service/board/model/BoardModel';
import { BoardListAPIModel, BoardAPIModel } from '../model/BoardAPIModel';
const apiUrl = 'http://localhost:3000';

export const getBoardList = (): Promise<BoardListAPIModel> => {
  return axios.get(apiUrl + '/board');
};

export const getBoardById = (idx: number): Promise<BoardAPIModel> => {
  return axios.get(apiUrl + '/board/detail?idx=' + idx);
};


export const addBoard = (data: BoardModel): Promise<any> => {
  return axios.post(apiUrl + '/board/write', data);
};

export const updateBoard = (idx:number, data: BoardModel): Promise<any>=> {
  return axios.put(apiUrl + '/board/update?idx=' + idx, data);
};

export const deleteBoardById = (idx: number): Promise<BoardAPIModel> => {
  return axios.delete(apiUrl + '/board/delete?idx=' + idx);
};

