import axios from 'axios';
import { BoardModel } from '@/service/board/model/BoardModel';

const apiUrl = 'http://localhost:3000';

export const getBoardList = (): Promise<BoardModel[]> => {
  return axios.get(apiUrl + '/board');
};