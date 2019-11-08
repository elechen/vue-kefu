// profile/actions.ts
import { ActionTree } from 'vuex';
// import axios from 'axios';
import { ProfileState, User } from './types';
import { RootState } from '@/store/types';

const actions: ActionTree<ProfileState, RootState> = {
  loginSucc: ({ commit }, payload) => commit('LOGIN_SUCC', payload),
  reset: ({ commit }, payload) => commit('RESET', payload),
};

export default actions;
