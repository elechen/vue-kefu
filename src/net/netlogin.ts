import * as net from './net';
import { netcommand, login } from '@/proto';

const C2SCommand: { [key: number]: string } = {
  1: 'C2GSVertify',
};

function Send(iCmd: number, t: Object) {
  const subName = C2SCommand[iCmd];
  net.EncodeAndSend(netcommand.PROTOFILE.login, iCmd, subName, t);
}

function GS2CLoginCode(message: login.IGS2CLoginCode) {
  console.log(message);
}

const S2CCommand: { [key: number]: [string, Function] } = {
  1: ['GS2CLoginCode', GS2CLoginCode],
};

export function DecodeAndDispatch(iCmd: number, sEncodePkg: any) {
  const info = S2CCommand[iCmd];
  const message = (login as any)[info[0]].decode(sEncodePkg);
  info[1](message);
}

export function C2GSVertify(pbmsg: login.IC2GSVertify) {
  Send(1, pbmsg);
}
