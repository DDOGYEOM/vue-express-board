import axios from 'axios';
import { BoardAddModel, BoardModel } from '@/service/board/model/BoardModel';
import {
  BoardListAPIModel,
  BoardAPIModel,
} from '@/service/board/model/BoardAPIModel';
// const apiUrl = "http://localhost:3000";

export const getBoardList = (
  offset: number,
  limit: number,
  title?: string | undefined
): Promise<BoardListAPIModel> => {
  if (title === undefined) {
    return axios.get('/api/board?offset=' + offset + '&limit=' + limit);
  } else {
    return axios.get(
      '/api/board?offset=' + offset + '&limit=' + limit + '&title=' + title
    );
  }
};

export const getBoardById = (idx: number): Promise<BoardAPIModel> => {
  return axios.get('/api/board/detail?idx=' + idx);
};

export const addBoard = (data: BoardAddModel): Promise<BoardAPIModel> => {
  return axios.post('/api/board/write', data);
};

export const updateBoard = (
  idx: number,
  data: BoardModel
): Promise<BoardAPIModel> => {
  return axios.put('/api/board/update?idx=' + idx, data);
};

export const deleteBoardById = (idx: number): Promise<BoardAPIModel> => {
  return axios.delete('/api/board/delete?idx=' + idx);
};
