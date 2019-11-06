import { MutationTree } from 'vuex';
import { ProfileState } from './types';

const mutations: MutationTree<ProfileState> = {
  LOGIN_SUCC(state, payload) {
    state.user = payload;
  },
};

export default mutations;
