// profile/mutations.ts
import Vue from 'vue';
import { MutationTree } from 'vuex';
import { UserState } from './types';

const mutations: MutationTree<UserState> = {
  // 增加用户
  ADD_USER({ users }, user) {
    if (!(users as any)[user.uid]) {
      Vue.set(users, user.uid, user);
    } else {
      const tmp = users;
      (tmp as any)[user.uid] = user;
    }
  },
};

export default mutations;
