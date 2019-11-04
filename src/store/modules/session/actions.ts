// profile/actions.ts
import Vue from 'vue';
import { ActionTree } from 'vuex';
// import axios from 'axios';
import { SessionState } from './types';
import { RootState } from '@/store/types';
import * as net from '@/net/net';

const actions: ActionTree<SessionState, RootState> = {
  sendMessage: ({ commit, rootState }, content) => {
    if (content === '测试登录') {
      return net.EncodeAndSend(1, 1, 'C2GSVertify', { Name: 'chenxiaofeng', sToken: 'test_token' });
    }
    Vue.prototype.$socket.send(content);
    return commit('SEND_MESSAGE', { rootState, content });
  },
  receiveMessage: ({ commit, rootState }, { uid, content }) => commit('RECEIVE_MESSAGE', { rootState, uid, content }),
  selectSession: ({ commit }, uid) => commit('SELECT_SESSION', uid),
};

export default actions;
