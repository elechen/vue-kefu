import Vue from 'vue';
import * as net from './net';
import { netcommand, login } from '@/proto';

const C2SCommand: { [key: number]: string } = {
  1: 'C2GSVertify',
};

function Send(iCmd: number, t: Object) {
  const subName = C2SCommand[iCmd];
  net.EncodeAndSend(netcommand.PROTOFILE.login, iCmd, subName, t);
}

function GS2CLoginSucc(message: login.IGS2CLoginSucc) {
  console.log(message);
  Vue.prototype.$store.dispatch('profile/loginSucc', message);
}

function GS2CLoginCode(message: login.IGS2CLoginCode) {
  console.log(message);
  const CODE = login.GS2CLoginCode.Code;
  switch (message.eLogincode) {
    case CODE.SUCCEED: {
      Vue.prototype.$message({
        message: '登录成功',
        type: 'success',
      });
      break;
    }
    case CODE.NETERR: {
      Vue.prototype.$confirm('网络异常，请稍后重试', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      }).then(() => {
        // console.log('去重新登录');
      }).catch(() => {
        // console.log('算了');
      });
      break;
    }
    case CODE.NOACCOUNT: {
      Vue.prototype.$confirm('账号不存在', '提示', {
        confirmButtonText: '确定',
        type: 'warning',
      });
      break;
    }
    case CODE.TOKENERR: {
      Vue.prototype.$confirm('TOKEN验证失败', '提示', {
        confirmButtonText: '确定',
        type: 'warning',
      });
      break;
    }
    default: {
      // donothing
    }
  }
}

const S2CCommand: { [key: number]: [string, Function] } = {
  1: ['GS2CLoginCode', GS2CLoginCode],
  2: ['GS2CLoginSucc', GS2CLoginSucc],
};

export function DecodeAndDispatch(iCmd: number, sEncodePkg: any) {
  const info = S2CCommand[iCmd];
  if (info) {
    const message = (login as any)[info[0]].decode(sEncodePkg);
    info[1](message);
  } else {
    console.log('cmd not found', iCmd);
  }
}

export function C2GSVertify(pbmsg: login.IC2GSVertify) {
  Send(1, pbmsg);
}
