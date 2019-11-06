// user/actions.ts
import { ActionTree } from 'vuex';
import { UserState } from './types';
import { RootState } from '@/store/types';

const actions: ActionTree<UserState, RootState> = {
  addUser: ({ commit }, user) => commit('ADD_USER', user),
  updateSearchResult: ({ commit }, ret) => commit('UPDATE_SEARCH_RESULT', ret),
};

export default actions;
