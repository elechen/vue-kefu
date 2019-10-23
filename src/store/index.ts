import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 当前用户
    admin: {
      uid: 10001,
      name: 'ADMIN-10001',
      avatar: 'dist/images/1.jpg',
    },
    users: {
      10001: {
        uid: 10001,
        name: 'TEST-10001',
        avatar: 'dist/images/1.jpg',
      },
      10002: {
        uid: 10002,
        name: 'TEST-10002',
        avatar: 'dist/images/2.jpg',
      },
    },
    // 会话列表
    sessions: {
      10001: {
        target: {
          uid: 10001,
          name: 'TEST-10001',
          avatar: 'dist/images/1.jpg',
        },
        messages: [
          {
            sender: {
              uid: 10001,
              name: 'TEST-10001',
              avatar: 'dist/images/1.jpg',
            },
            timestamp: Date.now() - 1000,
            content: '111111111222222111111111222222111111111222222111111111222222111111111222222111111111222222111111111222222',
          },
          {
            sender: {
              uid: 10002,
              name: 'TEST-10002',
              avatar: 'dist/images/2.jpg',
            },
            timestamp: Date.now() - 1000,
            content: '你好你好你好222222',
          },
        ],
      },
    },
    currentSessionId: 0,
  },
  mutations: {
    // 选择会话
    SELECT_SESSION(state, id) {
      state.currentSessionId = id;
    },
    // 发送消息
    SEND_MESSAGE({ sessions, currentSessionId, admin }, content) {
      const ss = sessions;
      if (!(sessions as any)[currentSessionId]) {
        Vue.set(ss, currentSessionId, { messages: [] });
      }
      const data = (sessions as any)[currentSessionId];
      data.messages.push(
        {
          sender: admin,
          timestamp: Date.now(),
          content,
        },
      );
    },
  },
  actions: {
    sendMessage: ({ commit }, content) => commit('SEND_MESSAGE', content),
    selectSession: ({ commit }, id) => commit('SELECT_SESSION', id),
  },
  modules: {
  },
});
