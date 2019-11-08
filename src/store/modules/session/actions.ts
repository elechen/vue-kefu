import { ActionTree } from 'vuex';
import { SessionState } from './types';
import { RootState } from '@/store/types';
import * as netfriend from '@/net/netfriend';

const actions: ActionTree<SessionState, RootState> = {
  sendMessage: ({ commit, rootState }, { target, msg }) => {
    const dMsg = { iTarget: target, sMsg: msg };
    netfriend.C2GSNewFrdMsg(dMsg);
    // 等服务器广播，避免时间ID等数据不匹配问题
    // return commit('SEND_MESSAGE', { rootState, dMsg });
  },
  receiveMessage: ({ commit, rootState }, payload) => commit('RECEIVE_MESSAGE', { rootState, payload }),
  selectSession: ({ commit }, uid) => commit('SELECT_SESSION', uid),
  reset: ({ commit }, payload) => commit('RESET', payload),
};

export default actions;
