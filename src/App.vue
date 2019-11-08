<template>
  <div
    id="app"
    v-loading="!isConnected"
    element-loading-text="正在连接服务器"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
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
import * as netlogin from '@/net/netlogin';

Vue.use(VueChatScroll);

export default Vue.extend({
  name: 'App',
  store,
  components: {
    Index,
  },
  mounted: () => {
    Vue.prototype.$store = store;
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
      // console.log('watch message->', this.message);
    },
    isConnected(): void {
      if (this.isConnected) {
        const { token, gameflag } = this.$route.query;
        if (!token) {
          this.$alert('缺少token参数', '提示', {
            confirmButtonText: '确定',
            callback: (action) => {
              this.$message({
                type: 'info',
                message: `action: ${action}`,
              });
            },
          });
          return;
        }
        const sToken = token as string;
        const sGameFlag = gameflag as string;
        netlogin.C2GSVertify({ sToken, sGameFlag });
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
