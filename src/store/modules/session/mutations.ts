import Vue from 'vue';
import { MutationTree } from 'vuex';
import { SessionState } from './types';
import { RootState } from '../../types';
import { friend } from '@/proto';

const mutations: MutationTree<SessionState> = {
  SEND_MESSAGE({
    sessions,
  }, { rootState, dMsg }) {
    const ss = sessions;
    const rState: RootState = rootState;
    const target = rState.user!.users[dMsg.iTarget];
    const sender = rState.profile!.user;
    if (!sessions[dMsg.iTarget]) {
      Vue.set(ss, dMsg.iTarget, []);
    }
    const list = sessions[dMsg.iTarget];
    list.push(
      {
        id: Date.now(),
        iSender: sender!.pid,
        sName: sender!.sName,
        sMsg: dMsg.sMsg,
        iTime: Date.now(),
      },
    );
    target.iChatTime = Date.now();
  },
  RECEIVE_MESSAGE({
    sessions,
  }, { rootState, payload }) {
    const ss = sessions;
    const frdMsg: friend.GS2CSendFrdMsg = payload;
    const rState: RootState = rootState;
    const target = rState.user!.users[frdMsg.pid];
    if (!sessions[target.pid]) {
      Vue.set(ss, target.pid, []);
    }
    const list = sessions[target.pid];
    list.push(...frdMsg.tFrdMsg);
  },
  SELECT_SESSION(state, id) {
    state.currentSessionId = id;
  },
};

export default mutations;
