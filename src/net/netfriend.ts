import Vue from 'vue';
import * as net from './net';
import { netcommand, friend } from '@/proto';

const C2SCommand: { [key: number]: string } = {
  1: 'C2GSNewFrdMsg',
  2: 'C2GSReadFrdMsg',
  3: 'C2GSReplyFrdMsg',
};

function Send(iCmd: number, t: Object) {
  const subName = C2SCommand[iCmd];
  net.EncodeAndSend(netcommand.PROTOFILE.friend, iCmd, subName, t);
}

function GS2CNewMsgCnt(message: friend.IGS2CNewMsgCnt) {

}

function GS2CSendFrdMsg(message: friend.IGS2CSendFrdMsg) {

}

const S2CCommand: { [key: number]: [string, Function] } = {
  1: ['GS2CNewMsgCnt', GS2CNewMsgCnt],
  2: ['GS2CSendFrdMsg', GS2CSendFrdMsg],
};

export function DecodeAndDispatch(iCmd: number, sEncodePkg: any) {
  const info = S2CCommand[iCmd];
  const message = (friend as any)[info[0]].decode(sEncodePkg);
  info[1](message);
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
