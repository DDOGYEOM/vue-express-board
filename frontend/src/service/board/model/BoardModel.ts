/**
 * @description: BoardModel
 */
export interface BoardModel {
  idx: number;
  title: string;
  writer: string;
  contents: string | null;
  writeDate: string;
  updateDate: string | null;
}

export interface BoardAddModel {
  title: string;
  writer: string;
  contents: string | null;
}
