import Vue from 'vue';
import { MutationTree } from 'vuex';
import { UserState, User } from './types';
import { friend } from '@/proto';

const mutations: MutationTree<UserState> = {
  // 增加用户
  ADD_USER(state, payload) {
    const user: User = payload;
    user.iUnreadCnt = state.unreadCnt[user.pid];
    user.lGM = state.curChatGM[user.pid] ? state.curChatGM[user.pid] : [];
    if (!state.users[user.pid]) {
      Vue.set(state.users, user.pid, user);
    } else {
      state.users[user.pid] = user;
    }
  },
  // 增加用户
  DEL_USER(state, payload) {
    const pid: number = payload;
    if (state.users[pid]) {
      Vue.delete(state.users, pid);
    }
  },
  // 搜索结果
  UPDATE_SEARCH_RESULT(state, payload) {
    state.searchResult = payload;
  },
  UPDATE_NEWMSGCNT(state, payload) {
    const newMsgCnt: friend.IGS2CNewMsgCnt = payload;
    const { iSender } = newMsgCnt;
    state.unreadCnt[iSender] = newMsgCnt.iCnt;
    if (state.users[iSender]) {
      state.users[iSender].iUnreadCnt = newMsgCnt.iCnt;
    }
  },
  UPDATE_MARK(state, payload) {
    const ret: { pid: number, iMarked: number } = payload;
    const { pid, iMarked } = ret;
    if (state.users[pid]) {
      state.users[pid].iMarked = iMarked;
    }
  },
  UPDATE_CHATGM(state, payload) {
    const ret: friend.IGS2ChatPlayer = payload;
    const { pid } = ret;
    if (!state.curChatGM[pid]) {
      Vue.set(state.curChatGM, pid, ret.sPlayer as string[]);
    } else {
      state.curChatGM[pid] = ret.sPlayer as string[];
    }
    if (state.users[pid]) {
      state.users[pid].lGM = ret.sPlayer as string[];
    }
  },
  UPDATE_CHATTIME(state, payload) {
    const { iSender, iTime } = payload as { iSender: number, iTime: number };
    if (state.users[iSender]) {
      state.users[iSender].iChatTime = iTime;
    }
  },
  RESET(state) {
    state.users = {};
    state.searchResult = [];
    state.unreadCnt = {};
    state.curChatGM = {};
  },
};

export default mutations;
