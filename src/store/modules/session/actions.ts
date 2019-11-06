import { ActionTree } from 'vuex';
import { SessionState } from './types';
import { RootState } from '@/store/types';
import * as netfriend from '@/net/netfriend';

const actions: ActionTree<SessionState, RootState> = {
  sendMessage: ({ commit, rootState }, { target, msg }) => {
    const dMsg = { iTarget: target, sMsg: msg };
    netfriend.C2GSNewFrdMsg(dMsg);
    return commit('SEND_MESSAGE', { rootState, dMsg });
  },
  receiveMessage: ({ commit, rootState }, payload) => commit('RECEIVE_MESSAGE', { rootState, payload }),
  selectSession: ({ commit }, uid) => commit('SELECT_SESSION', uid),
};

export default actions;
