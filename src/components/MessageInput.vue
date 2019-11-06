<template>
  <div class="input-field">
    <el-input
      type="textarea"
      rows="3"
      resize="none"
      placeholder="Ctrl+Enter发送消息"
      v-model="textarea"
      @keyup.enter.ctrl.native="onSubmit"
    ></el-input>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import moment from 'moment';

export default Vue.extend({
  name: 'MessageInput',
  data() {
    return {
      textarea: '',
    };
  },
  methods: {
    onSubmit() {
      if (this.textarea !== '') {
        const sid = this.$store.state.session.currentSessionId;
        this.$store.dispatch('session/sendMessage', { target: sid, msg: this.textarea });
        this.textarea = '';
      }
    },
  },
});
</script>

<style lang="less" scoped>
.input-field {
  // -webkit-box-sizing: border-box;
  // box-sizing: border-box;
  // position: relative;
  // width: 100%;
  // height: 130px;
  // padding-bottom: 10px;
  background-color: #fff;
  border-top: 1px solid #e7e7e7;
}
</style>
