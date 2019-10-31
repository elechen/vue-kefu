import * as proto from '@/proto/index';
import * as netfriend from '@/net/netfriend';
import * as netlogin from '@/net/netlogin';

export const eProtofile2Module = {
  [proto.netcommand.PROTOFILE.login]: netlogin,
  [proto.netcommand.PROTOFILE.friend]: netfriend,
};
