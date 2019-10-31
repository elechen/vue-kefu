import * as proto from '@/proto/index';
import { eProtofile2Module } from './netdefine';

export function Decode(mainPkg: any) {
  const mainMessage = proto.netcommand.NetCommand.decode(mainPkg);
  const module = eProtofile2Module[mainMessage.eProtofile] as { DecodeAndDispatch: Function };
  module.DecodeAndDispatch(mainMessage.iCmd, mainMessage.sEncodepkg);
}

function Send(sEncodepkg: any) {

}

export function EncodeAndSend(eProtofile: proto.netcommand.PROTOFILE,
  iCmd: number, sSubname: string, t: Object) {
  const sProtofile = proto.netcommand.PROTOFILE[eProtofile];
  // console.log(eProtofile, iCmd, sSubname, t);
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