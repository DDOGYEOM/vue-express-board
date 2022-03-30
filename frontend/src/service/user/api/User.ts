import axios from 'axios';
import { LoginSuccessModel, UserAPIModel } from '../model/UserAPIModel';
import { LoginModel } from '../model/UserModel';
// const apiUrl = "http://localhost:3000";

export const getUser = (userId: string): Promise<UserAPIModel> => {
  return axios.get('/api/users?user_id=' + userId);
};

export const login = (loginData: LoginModel): Promise<LoginSuccessModel> => {
  return axios.post('/api/users/login', loginData);
};

export const logout = (): Promise<void> => {
  return axios.get('/api/users/logout');
};
