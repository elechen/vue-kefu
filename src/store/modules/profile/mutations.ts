import { MutationTree } from 'vuex';
import { ProfileState } from './types';

const mutations: MutationTree<ProfileState> = {
  LOGIN_SUCC(state, payload) {
    state.user = payload;
  },
  RESET(state) {
    state.user = { pid: 0, sName: '未登录', sGameFlag: 'sx4', iFlag: 0 };
    state.login = false;
  },
};

export default mutations;
