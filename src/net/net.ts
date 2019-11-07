import Vue from 'vue';
import * as proto from '@/proto/index';
import { eProtofile2Module } from './netdefine';

export function DecodeAndDispatch(mainPkg: any) {
  const mainMessage = proto.netcommand.NetCommand.decode(mainPkg);
  if (!mainMessage) {
    return;
  }
  const module = eProtofile2Module[mainMessage.eProtofile] as { DecodeAndDispatch: Function };
  // console.log('DecodeAndDispatch->', mainMessage);
  module.DecodeAndDispatch(mainMessage.iCmd, mainMessage.sEncodepkg);
  // console.log('DecodeAndDispatch->done');
}

function Send(sEncodepkg: any) {
  // console.log('Send->', sEncodepkg);
  Vue.prototype.$socket.send(sEncodepkg);
}

export function EncodeAndSend(eProtofile: proto.netcommand.PROTOFILE,
  iCmd: number, sSubname: string, t: Object) {
  const sProtofile = proto.netcommand.PROTOFILE[eProtofile];
  console.log(eProtofile, iCmd, sSubname, t);
  const subCommand = (proto as any)[sProtofile][sSubname];
  const subMessage = subCommand.create(t);
  const subPkg = subCommand.encode(subMessage).finish();
  const mainMessage = proto.netcommand.NetCommand.create({
    eProtofile,
    iCmd,
    sEncodepkg: subPkg,
  });
  const mainPkg = proto.netcommand.NetCommand.encode(mainMessage).finish();
  Send(mainPkg);
}
