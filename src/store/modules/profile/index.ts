import { Module } from 'vuex';
import actions from './actions';
import { ProfileState } from './types';
import { RootState } from '@/store/types';

export const state: ProfileState = {
  user: { uid: 1001, sName: 'GM1001', sGameFlag: 'fzxx' },
  login: false,
};

const namespaced: boolean = true;

const profile: Module<ProfileState, RootState> = {
  namespaced,
  state,
  // getters,
  actions,
  // mutations
};

export default profile;
