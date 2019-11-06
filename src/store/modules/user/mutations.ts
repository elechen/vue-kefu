import Vue from 'vue';
import { MutationTree } from 'vuex';
import { UserState, User } from './types';

const mutations: MutationTree<UserState> = {
  // 增加用户
  ADD_USER(state, payload) {
    const user: User = payload;
    if (!state.users[user.pid]) {
      Vue.set(state.users, user.pid, user);
    } else {
      state.users[user.pid] = user;
    }
  },
  // 搜索结果
  UPDATE_SEARCH_RESULT(state, payload) {
    state.searchResult = payload;
  },
};

export default mutations;
