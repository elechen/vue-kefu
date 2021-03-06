import Vue from 'vue';
import * as net from './net';
import { netcommand, friend } from '@/proto';
import { UserState } from '@/store/modules/user/types';
import { SessionState } from '@/store/modules/session/types';

function GS2CNewMsgCnt(message: friend.IGS2CNewMsgCnt) {
  console.log(message);
  const { iSender } = message;
  const store = Vue.prototype.$store;
  store.dispatch('user/updateNewMsgCnt', message);
  const userState: UserState = store.state.user;
  if (!userState.users[iSender]) {
    C2GSGetFrdInfo({ pid: iSender });
  }
  const sessionState: SessionState = store.state.session;
  if (sessionState.currentSessionId === iSender) {
    C2GSReadFrdMsg({ iSender });
  }
}

function GS2CSendFrdMsg(message: friend.IGS2CSendFrdMsg) {
  console.log(message);
  Vue.prototype.$store.dispatch('session/receiveMessage', message);
  Vue.prototype.$store.dispatch('user/updateNewMsgCnt', { iSender: message.pid, iCnt: 0 });
  if (message.iFlag === 0 && message.tFrdMsg && message.tFrdMsg.length > 0) {
    const msg = message.tFrdMsg![message.tFrdMsg!.length - 1];
    Vue.prototype.$store.dispatch('user/updateChatTime', { iSender: message.pid, iTime: msg.iTime });
  }
  message.tFrdMsg!.forEach((frdMsg) => {
    C2GSReplyFrdMsg({ iSender: message.pid, id: frdMsg.id });
  });
}

function GS2CSendFrdInfo(message: friend.IGS2CSendFrdInfo) {
  console.log(message);
  Vue.prototype.$store.dispatch('user/addUser', message);
}

function GS2CSearchResult(message: friend.IGS2CSearchResult) {
  console.log(message);
  Vue.prototype.$store.dispatch('user/updateSearchResult', message.tRet);
}

function GS2CNotify(message: friend.IGS2CNotify) {
  console.log(message);
  Vue.prototype.$message({
    message: message.sText,
  });
}

function GS2ChatPlayer(message: friend.IGS2ChatPlayer) {
  console.log(message);
  const store = Vue.prototype.$store;
  store.dispatch('user/updateChatGM', message);
}

const S2CCommand: { [key: number]: [string, Function] } = {
  1: ['GS2CNewMsgCnt', GS2CNewMsgCnt],
  2: ['GS2CSendFrdMsg', GS2CSendFrdMsg],
  3: ['GS2CSendFrdInfo', GS2CSendFrdInfo],
  4: ['GS2CSearchResult', GS2CSearchResult],
  5: ['GS2CNotify', GS2CNotify],
  6: ['GS2ChatPlayer', GS2ChatPlayer],
};

export function DecodeAndDispatch(iCmd: number, sEncodePkg: any) {
  const info = S2CCommand[iCmd];
  if (info) {
    const message = (friend as any)[info[0]].decode(sEncodePkg);
    info[1](message);
  } else {
    console.log('cmd not found', iCmd);
  }
}

const C2SCommand: { [key: number]: string } = {
  1: 'C2GSNewFrdMsg',
  2: 'C2GSReadFrdMsg',
  3: 'C2GSReplyFrdMsg',
  4: 'C2GSGetFrdInfo',
  5: 'C2GSSearchFriend',
  6: 'C2GSGetHistoryMsg',
  7: 'C2GSEnterChat',
  8: 'C2GSMarkChat',
  9: 'C2GSDelChat',
};

function Send(iCmd: number, t: Object) {
  const subName = C2SCommand[iCmd];
  net.EncodeAndSend(netcommand.PROTOFILE.friend, iCmd, subName, t);
}

export function C2GSNewFrdMsg(pbmsg: friend.IC2GSNewFrdMsg) {
  Send(1, pbmsg);
}

export function C2GSReadFrdMsg(pbmsg: friend.IC2GSReadFrdMsg) {
  Send(2, pbmsg);
}

export function C2GSReplyFrdMsg(pbmsg: friend.IC2GSReplyFrdMsg) {
  Send(3, pbmsg);
}

export function C2GSGetFrdInfo(pbmsg: friend.IC2GSGetFrdInfo) {
  Send(4, pbmsg);
}

export function C2GSSearchFriend(pbmsg: friend.IC2GSSearchFriend) {
  Send(5, pbmsg);
}

export function C2GSGetHistoryMsg(pbmsg: friend.IC2GSGetHistoryMsg) {
  Send(6, pbmsg);
}

export function C2GSEnterChat(pbmsg: friend.IC2GSEnterChat) {
  Send(7, pbmsg);
}

export function C2GSMarkChat(pbmsg: friend.IC2GSMarkChat) {
  Send(8, pbmsg);
}

export function C2GSDelChat(pbmsg: friend.IC2GSDelChat) {
  Send(9, pbmsg);
}
