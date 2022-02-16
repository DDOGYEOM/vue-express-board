/**
 * @description: BoardModel
 */
export interface BoardModel {
  idx: number;
  title: string;
  writer: string;
  contents: string | null;
  writeDate: Date | null;
  updateDate: Date | null;
}
