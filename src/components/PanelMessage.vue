<template>
  <div class="body clearfix">
    <div class="jimi-chat">
      <MessageContainer />
      <MessageInput />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as define from '@/define';
import MessageContainer from '@/components/MessageContainer.vue';
import MessageInput from '@/components/MessageInput.vue';

export default Vue.extend({
  name: 'PanelMessage',
  components: {
    MessageContainer,
    MessageInput,
  },
});
</script>

<style lang="less" scoped>
.jimi-chat {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  float: left;
  background-color: #fafafa;
  width: 550px;
  height: 600px;
  -webkit-overflow-scrolling: touch;
  border-right: 1px solid #e7e7e7;
}
</style>
