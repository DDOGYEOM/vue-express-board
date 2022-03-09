import { UserModel } from "./UserModel";

export interface UserAPIModel {
  data: {
    success: number;
    message: string;
    body: string;
  } | null;
}

export interface LoginSuccessModel {
  data: {
    success: number;
    message: string;
    token: string;
  } | null;
}

