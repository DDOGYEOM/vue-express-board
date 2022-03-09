import Vue from "vue";
import Vuex from "vuex";
import { BoardModuleState, BoardModule } from "@/service/board/module/BoardStore";
import { UserModuleState, UserModule } from "@/service/user/module/UserStore";


Vue.use(Vuex);
export interface RootState {
  BoardModule: BoardModuleState;
  UserModule: UserModuleState;
}

export default new Vuex.Store({
  modules: {
    BoardModule,
    UserModule
  },
});
