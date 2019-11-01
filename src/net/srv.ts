// 模拟服务器发包
import * as proto from '@/proto/index';
import * as net from './net';

export function Send(sEncodepkg: any) {
  net.DecodeAndDispatch(sEncodepkg);
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
