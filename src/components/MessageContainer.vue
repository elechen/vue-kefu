<template>
  <div
    id="container"
    class="jimi-chat--container"
    style="height: 497px; padding-bottom: 0px;"
  >
    <div
      class="jimi-chat--wrapper"
      @scroll="handleScroll"
      ref="scrollview"
      v-chat-scroll="{always: false, smooth: true}"
    >
      <div
        :style="{opacity:AlphaLoadMoreBtn}"
        @click="loadMoreMessage"
        class="jimi-chat--log-btn"
      >点击加载更多</div>
      <!-- <div class="jimi-chat--separation">
        <span>上次聊到这里</span>
      </div>-->
      <div>
        <MessageList :messages="messages"></MessageList>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import * as define from '@/define';
import MessageList from '@/components/MessageList.vue';
import { SessionState } from '@/store/modules/session/types';
import * as netfriend from '@/net/netfriend';
import { friend } from '@/proto';

const debounce = require('lodash.debounce');

export default Vue.extend({
  name: 'MessageContainer',
  components: {
    MessageList,
  },
  data() {
    return {
      AlphaLoadMoreBtn: 0,
    };
  },
  methods: {
    handleScroll() {
      const scrollview = this.$refs.scrollview as Element;
      const btnHeight = 20;
      if (scrollview.scrollTop > btnHeight) {
        this.AlphaLoadMoreBtn = 0;
      } else {
        this.AlphaLoadMoreBtn = (btnHeight - scrollview.scrollTop) / btnHeight;
      }
    },
    loadMoreMessage() {
      const pid = this.currentSessionId;
      let curidx = 0;
      if (this.messages.length > 0) {
        curidx = this.messages[0].id;
      }
      netfriend.C2GSGetHistoryMsg({ pid, curidx });
    },
  },
  computed: {
    ...mapState('session', {
      sessions: (state: SessionState) => state.sessions,
    }),
    currentSessionId(): number {
      if (this.$store.state.session.currentSessionId) {
        return this.$store.state.session.currentSessionId;
      }
      return 0;
    },
    messages(): friend.GS2CSendFrdMsg.IFrdMsg[] {
      let lst: friend.GS2CSendFrdMsg.IFrdMsg[] = [];
      if (this.currentSessionId) {
        lst = (this as any).sessions[this.currentSessionId];
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
