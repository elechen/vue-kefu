<template>
  <div id="app">
    <Index />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// @ts-ignore
import VueChatScroll from 'vue-chat-scroll';

import store from '@/store';
import Index from '@/views/Index.vue';
import { netcommand } from './proto';
import * as net from '@/net/net';
import * as srv from '@/net/srv';

Vue.use(VueChatScroll);

export default Vue.extend({
  name: 'App',
  store,
  components: {
    Index,
  },
  mounted: () => {
    Vue.prototype.$store = store;
    // console.log(store);
    // console.log('初始化成功');
    // net.EncodeAndSend(1, 1, 'C2GSVertify', { Name: 'chenxiaofeng', sToken: 'test_token' });
    // const pb = login.C2GSVertify;
    // const message = pb.create({ Name: 'chenxiaofeng', sToken: 'test_token' });
    // const buff = pb.encode(message).finish();
    // const anotherMessage = netcommand.NetCommand.create({
    //   eProtofile: 1,
    //   iCmd: 1,
    //   sEncodepkg: buff,
    // });
    // const anotherBuff = netcommand.NetCommand.encode(anotherMessage).finish();
    // const anotherDecodeMessage = netcommand.NetCommand.decode(anotherBuff);
    // console.log(anotherDecodeMessage, '-------test1');
    // console.log(pb.decode(anotherDecodeMessage.sEncodepkg), '-------test2');
  },
  computed: {
    message(): any {
      return this.$store.state.socket.message;
    },
    isConnected(): boolean {
      return this.$store.state.socket.isConnected;
    },
  },
  watch: {
    message(): void {
      const uid = this.$store.state.session.currentSessionId;
      // console.log('watch message->', this.message);
      // if (this.message === '测试登录') {
      //   net.EncodeAndSend(1, 1, 'C2GSVertify', { Name: 'chenxiaofeng', sToken: 'test_token' });
      // } else if (this.message === '登录成功') {
      //   srv.EncodeAndSend(1, 1, 'GS2CLoginCode', { eLogincode: 0 });
      // } else if (this.message === '登录失败') {
      //   srv.EncodeAndSend(1, 1, 'GS2CLoginCode', { eLogincode: 3 });
      // } else {
      //   const content = `${this.message}!`;
      //   this.$store.dispatch('session/receiveMessage', { uid, content });
      // }
    },
    isConnected(): void {
      if (this.isConnected) {
        const { token } = this.$route.query;
        if (!token) {
          this.$confirm('缺少token参数', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning',
          })
            .then(() => {
              window.opener = null;
              window.open('about:blank', '_top')!.close();
            })
            .catch(() => {
              // console.log('算了');
            });
          return;
        }
        net.EncodeAndSend(1, 1, 'C2GSVertify', { Name: 'kefu', sToken: token });
      }
    },
  },
});
</script>

<style>
body,
p {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: ' ';
}

.clearfix:after {
  clear: both;
}

.clearfix {
  *zoom: 1;
}

.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.avatar {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: #fff;
  background-size: 100%;
  background-position: 0% 50%;
  background-repeat: no-repeat;
}

.img-bg {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
</style>
