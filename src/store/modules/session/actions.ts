// profile/actions.ts
import Vue from 'vue';
import { ActionTree } from 'vuex';
// import axios from 'axios';
import { SessionState } from './types';
import { RootState } from '@/store/types';

const actions: ActionTree<SessionState, RootState> = {
  sendMessage: ({ commit, rootState }, content) => {
    Vue.prototype.$socket.send(content);
    return commit('SEND_MESSAGE', { rootState, content });
  },
  receiveMessage: ({ commit, rootState }, { uid, content }) => commit('RECEIVE_MESSAGE', { rootState, uid, content }),
  selectSession: ({ commit }, uid) => commit('SELECT_SESSION', uid),
};

export default actions;
