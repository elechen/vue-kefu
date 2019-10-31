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

Vue.use(VueChatScroll);

export default Vue.extend({
  name: 'App',
  store,
  components: {
    Index,
  },
  mounted: () => {
    net.EncodeAndSend(1, 1, 'C2GSVertify', { Name: 'chenxiaofeng', sToken: 'test_token' });
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
    message(): string {
      return this.$store.state.socket.message;
    },
  },
  watch: {
    message(): void {
      const uid = this.$store.state.session.currentSessionId;
      const content = `${this.message}!`;
      this.$store.dispatch('session/receiveMessage', { uid, content });
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
