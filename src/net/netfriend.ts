import Vue from 'vue';
import * as net from './net';
import { netcommand, friend } from '@/proto';

function GS2CNewMsgCnt(message: friend.IGS2CNewMsgCnt) {
  console.log(message);
}

function GS2CSendFrdMsg(message: friend.IGS2CSendFrdMsg) {
  console.log(message);
  Vue.prototype.$store.dispatch('session/receiveMessage', message);
}

function GS2CSendFrdInfo(message: friend.IGS2CSendFrdInfo) {
  console.log(message);
  Vue.prototype.$store.dispatch('user/addUser', message);
}

function GS2CSearchResult(message: friend.IGS2CSearchResult) {
  console.log(message);
  Vue.prototype.$store.dispatch('user/updateSearchResult', message.tRet);
}

const S2CCommand: { [key: number]: [string, Function] } = {
  1: ['GS2CNewMsgCnt', GS2CNewMsgCnt],
  2: ['GS2CSendFrdMsg', GS2CSendFrdMsg],
  3: ['GS2CSendFrdInfo', GS2CSendFrdInfo],
  4: ['GS2CSearchResult', GS2CSearchResult],
};

export function DecodeAndDispatch(iCmd: number, sEncodePkg: any) {
  const info = S2CCommand[iCmd];
  if (info) {
    const message = (friend as any)[info[0]].decode(sEncodePkg);
    info[1](message);
  } else {
    console.log('cmd not config', iCmd);
  }
}

const C2SCommand: { [key: number]: string } = {
  1: 'C2GSNewFrdMsg',
  2: 'C2GSReadFrdMsg',
  3: 'C2GSReplyFrdMsg',
  4: 'C2GSGetFrdInfo',
  5: 'C2GSSearchFriend',
  6: 'C2GSSearchFriend',
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
