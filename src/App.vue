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

Vue.use(VueChatScroll);

export default Vue.extend({
  name: 'App',
  store,
  components: {
    Index,
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
