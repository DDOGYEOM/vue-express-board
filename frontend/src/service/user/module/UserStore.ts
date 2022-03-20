import { RootState } from "@/store";
import { ActionContext, Module } from "vuex";

import { LoginModel } from "../model/UserModel";
import { LoginSuccessModel, UserAPIModel } from "../model/UserAPIModel";
import { login, getUser, logout } from "../api/User";

export interface UserModuleState {
  userData: UserAPIModel | null,
  loginData: LoginSuccessModel | null
}

export const UserModule: Module<UserModuleState,RootState> = {
  namespaced: true,
  state: () => ({
    userData: null,
    loginData: null
  }),
  mutations: {},
  getters: {},
  actions: {  
    async login(
      context: ActionContext<UserModuleState, RootState>,
      payload: LoginModel
    ): Promise<LoginSuccessModel> {
      const res = await login(payload);
      return res;
    },

   async getUserData(context: ActionContext<UserModuleState, RootState>, id: string): Promise<UserAPIModel> {
      const res = await getUser(id);
      return res;
   },

   async logout(): Promise<void> {
      await logout();
   }

  }

}
