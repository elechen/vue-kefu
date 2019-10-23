<template>
  <div
    id="container"
    class="jimi-chat--container"
    style="height: 523px; padding-bottom: 0px;"
  >
    <div class="jimi-chat--wrapper">
      <!-- <div class="jimi-chat--log-btn">点击加载更多</div>
      <div class="jimi-chat--separation">
        <span>上次聊到这里</span>
      </div>-->
      <div>
        <MessageList v-bind:messages="messages"></MessageList>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as define from '@/define';
import MessageList from '@/components/MessageList.vue';

export default Vue.extend({
  name: 'MessageContainer',
  components: {
    MessageList,
  },
  computed: {
    currentSessionId(): number {
      if (this.$store.state.currentSessionId) {
        return this.$store.state.currentSessionId;
      }
      return 0;
    },
    messages(): define.Message[] {
      let lst: define.Message[] = [];
      if (this.currentSessionId) {
        const session: define.Session = this.$store.state.sessions[this.currentSessionId];
        if (session) {
          lst = session.messages;
        }
      }
      return lst;
    },
  },
});
</script>
<style lang="less">
.jimi-chat--container {
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  background-color: #fff;
  border-top: 1px solid #e7e7e7;
}
.jimi-chat--container .alert-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;
}
.jimi-chat--wrapper {
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 20px;
  background-color: #fff;
}
.jimi-chat--log-btn {
  font-size: 12px;
  color: #5a606b;
  text-align: center;
  margin-bottom: 12px;
  cursor: pointer;
}
.jimi-chat--separation {
  text-align: center;
  font-size: 12px;
  color: #a1a6af;
  margin-bottom: 15px;
}
.jimi-chat--separation span {
  position: relative;
}
.jimi-chat--separation span::after,
.jimi-chat--separation span::before {
  content: '';
  position: absolute;
  width: 70px;
  height: 1px;
  background-color: #a1a6af;
  top: 50%;
  margin-top: -0.5px;
}
.jimi-chat--separation span::after {
  left: -80px;
}
.jimi-chat--separation span::before {
  right: -80px;
}
</style>
