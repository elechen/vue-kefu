import Vue from 'vue';
import Vuex from 'vuex';

import profile from './modules/profile';
import user from './modules/user';
import session from './modules/session';
import mutations from './mutations';
import { RootState } from './types';

Vue.use(Vuex);

const state: RootState = {
  socket: { isConnected: false, message: '' },
};

export default new Vuex.Store({
  state,
  mutations,
  modules: {
    profile,
    user,
    session,
  },
});
