import { BoardModel } from './BoardModel';

export interface BoardListAPIModel {
  data: {
    message: string;
    body: BoardModel[];
  } | null;
}

export interface BoardAPIModel {
  data: {
    message: string;
    body: BoardModel;
  } | null;
}

export interface BoardListInfoModel {
  offset: number;
  limit: number;
  title?: string;
}

// export interface ErrorModel {
//     data: {
//         message:string
//     }
// }
