// session/mutations.ts
import Vue from 'vue';
import { MutationTree, Store } from 'vuex';
import { RootState } from './types';

const mutations: MutationTree<RootState> = {
  SOCKET_ONOPEN(state, event) {
    Vue.prototype.$socket = event.currentTarget;
    state.socket.isConnected = true;
  },
  SOCKET_ONCLOSE(state, event) {
    state.socket.isConnected = false;
    // console.error(state, event);
  },
  SOCKET_ONERROR(state, event) {
    // console.error(state, event);
  },
  // default handler called for all methods
  SOCKET_ONMESSAGE(state, message) {
    state.socket.message = message.data;
  },
  // mutations for reconnect methods
  SOCKET_RECONNECT(state, count) {
    // console.info(state, count);
  },
  SOCKET_RECONNECT_ERROR(state) {
    state.socket.isConnected = false;
  },
};

export default mutations;
