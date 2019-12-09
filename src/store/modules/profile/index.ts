import { Module } from 'vuex';
import actions from './actions';
import mutations from './mutations';
import { ProfileState } from './types';
import { RootState } from '@/store/types';

export const state: ProfileState = {
  user: { pid: 0, sName: '未登录', sGameFlag: 'sx4', iFlag: 0 },
  login: false,
};

const namespaced: boolean = true;

const profile: Module<ProfileState, RootState> = {
  namespaced,
  state,
  // getters,
  actions,
  mutations,
};

export default profile;
