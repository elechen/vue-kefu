import Vue from 'vue';
import { MutationTree } from 'vuex';
import { SessionState } from './types';
import { RootState } from '../../types';
import { friend } from '@/proto';
import * as netfriend from '@/net/netfriend';

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
    if (!target) {
      console.log('流程异常，列表不存在该玩家', frdMsg.pid);
      return;
    }
    if (!sessions[target.pid]) {
      Vue.set(ss, target.pid, []);
    }
    const list = sessions[target.pid];
    if (frdMsg.iFlag === 1) {
      list.unshift(...frdMsg.tFrdMsg);
    } else {
      list.push(...frdMsg.tFrdMsg);
    }
  },
  SELECT_SESSION(state, { rootState, pid }) {
    if (!pid) {
      return;
    }
    const rState: RootState = rootState;
    const gm = rState.profile!.user!.sName;
    const oldPid = state.currentSessionId;
    if (oldPid && oldPid !== pid) {
      netfriend.C2GSEnterChat({ pid: oldPid, act: 0 });
      const lGM = rState.user!.curChatGM[oldPid];
      if (lGM) {
        const idx = lGM.indexOf(gm);
        if (idx !== -1) {
          lGM!.splice(idx, 1);
          const store = Vue.prototype.$store;
          store.dispatch('user/updateChatGM', { pid: oldPid, sPlayer: lGM });
        }
      }
    }
    netfriend.C2GSEnterChat({ pid, act: 1 });
    let lGM = rState.user!.curChatGM[pid];
    if (lGM) {
      const idx = lGM.indexOf(gm);
      if (idx === -1) {
        lGM.push(gm);
        const store = Vue.prototype.$store;
        store.dispatch('user/updateChatGM', { pid, sPlayer: lGM });
      }
    } else {
      lGM = [gm];
      const store = Vue.prototype.$store;
      store.dispatch('user/updateChatGM', { pid, sPlayer: lGM });
    }
    state.currentSessionId = pid;
  },
  RESET(state) {
    state.sessions = {};
    state.currentSessionId = 0;
  },
};

export default mutations;
