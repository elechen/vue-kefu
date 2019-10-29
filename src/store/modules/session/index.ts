import { Module } from 'vuex';
// import { getters } from './getters';
import actions from './actions';
import mutations from './mutations';
import { SessionState } from './types';
import { RootState } from '@/store/types';

export const state: SessionState = {
  sessions: {},
  currentSessionId: 0,
};

const namespaced: boolean = true;

const session: Module<SessionState, RootState> = {
  namespaced,
  state,
  // getters,
  actions,
  mutations,
};

export default session;
