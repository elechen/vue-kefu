import { Module } from 'vuex';
// import { getters } from './getters';
import actions from './actions';
// import { mutations } from './mutations';
import { ProfileState } from './types';
import { RootState } from '@/store/types';

export const state: ProfileState = {
  user: { uid: 10001, name: 'Test10001' },
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
