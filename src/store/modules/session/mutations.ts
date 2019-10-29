// session/mutations.ts
import Vue from 'vue';
import { MutationTree } from 'vuex';
import { SessionState } from './types';

const mutations: MutationTree<SessionState> = {
  SEND_MESSAGE({
    sessions,
  }, { rootState, content }) {
    const ss = sessions;
    const target = rootState.user.users[rootState.session.currentSessionId];
    const sender = rootState.profile.user;
    if (!(sessions as any)[target.uid]) {
      Vue.set(ss, target.uid, []);
    }
    const list = (sessions as any)[target.uid];
    list.push(
      {
        sender,
        timestamp: Date.now(),
        content,
      },
    );
    target.recentchattime = Date.now();
  },
  RECEIVE_MESSAGE({
    sessions,
  }, { rootState, uid, content }) {
    const ss = sessions;
    const target = rootState.user.users[uid];
    if (!(sessions as any)[target.uid]) {
      Vue.set(ss, target.uid, []);
    }
    const list = (sessions as any)[target.uid];
    list.push(
      {
        sender: target,
        timestamp: Date.now(),
        content,
      },
    );
    target.recentchattime = Date.now();
  },
  // 选择会话
  SELECT_SESSION(state, id) {
    state.currentSessionId = id;
  },
};

export default mutations;
