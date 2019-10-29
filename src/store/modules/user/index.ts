import { Module } from 'vuex';
// import { getters } from './getters';
import actions from './actions';
import mutations from './mutations';
import { UserState } from './types';
import { RootState } from '@/store/types';

export const state: UserState = {
  users: {},
};

const namespaced: boolean = true;

const user: Module<UserState, RootState> = {
  namespaced,
  state,
  // getters,
  actions,
  mutations,
};

export default user;
