import { BoardModel } from "./BoardModel";

export interface BoardListAPIModel {
    data: {
        message: string,
        body: BoardModel[]
    } 
}

export interface BoardAPIModel {
    data: {
        message: string,
        body: BoardModel
    } 
}

// export interface ErrorModel {
//     data: {
//         message:string
//     }
// }

