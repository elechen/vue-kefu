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
    <el-button
      plain
      class="input-field--send-btn"
      :disabled="disabled"
      size="mini"
      @click="onSubmit"
    >发送</el-button>
    <el-popover placement="top" width="160" v-model="imageVisible">
      <el-image
        style="width: 100px; height: 100px"
        :src="pasteImageData"
        :preview-src-list="[pasteImageData,]"
        fit="contain"
      ></el-image>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click="onClearPasteImageData">取消</el-button>
        <el-button size="mini" type="primary" @click="onSubmitPasteImageData">发送</el-button>
      </div>
    </el-popover>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import moment from 'moment';

import * as utils from '@/utils';

export default Vue.extend({
  name: 'MessageInput',
  data() {
    return {
      textarea: '',
      pasteImageData: '',
      imageVisible: false,
    };
  },
  mounted() {
    const that = this;
    document.onpaste = function onpaste(this: DocumentAndElementEventHandlers, ev: ClipboardEvent) {
      for (let i = 0; i < ev.clipboardData!.items.length; i += 1) {
        const item = ev.clipboardData!.items[i];
        if (item.type.indexOf('image') > -1) {
          ev.preventDefault();
          const reader = new FileReader();
          reader.onload = function onload(event) {
            // console.log(reader.result);
            // const utf8decoder = new TextDecoder();
            // const arrayBuffer = reader.result as ArrayBuffer;
            // that.pasteImageData = utf8decoder.decode(arrayBuffer);
            // console.log(that.pasteImageData);
            // that.pasteImageData = reader.result as string;
            const img = new Image();
            img.src = reader.result as string;
            that.pasteImageData = utils.createThumbnail(img);
            console.log(that.pasteImageData);
            that.imageVisible = true;
          };
          const file = item.getAsFile() as File;
          // reader.readAsText(item.getAsFile() as File);
          reader.readAsDataURL(item.getAsFile() as File);
          // reader.readAsBinaryString
          console.log(file);
        }
      }
    };
  },
  computed: {
    disabled(): boolean {
      return this.textarea === '';
    },
  },
  methods: {
    onSubmit() {
      if (this.textarea !== '') {
        const sid = this.$store.state.session.currentSessionId;
        this.$store.dispatch('session/sendMessage', { target: sid, msg: this.textarea });
        this.textarea = '';
      }
    },
    onClearPasteImageData() {
      this.imageVisible = false;
    },
    onSubmitPasteImageData() {
      console.log(this.pasteImageData);
      this.imageVisible = false;
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
.input-field--send-btn {
  position: relative;
  width: 60px;
  float: right;
  bottom: 32px;
  right: 4px;
}
</style>
