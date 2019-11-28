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
    <el-popover class="popover" placement="top" v-model="imageVisible">
      <el-image
        class="image"
        :src="pasteImageData.small"
        :preview-src-list="[pasteImageData.big,]"
        fit="contain"
      ></el-image>
      <div class="bottom">
        <el-row type="flex" justify="center">
          <el-button size="mini" @click="onClearPasteImageData">取消</el-button>
          <el-button
            size="mini"
            type="primary"
            @click="onSubmitPasteImageData"
          >发送</el-button>
        </el-row>
      </div>
      <el-button
        slot="reference"
        plain
        class="input-field--send-btn"
        :disabled="disabled"
        size="mini"
        @click="onSubmit"
      >发送</el-button>
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
      pasteImageData: { small: '', big: '' },
      imageVisible: false,
      imageSourceBlob: new Blob(),
    };
  },
  mounted() {
    const that = this;
    document.onpaste = function onpaste(this: DocumentAndElementEventHandlers, ev: ClipboardEvent) {
      for (let i = 0; i < ev.clipboardData!.items.length; i += 1) {
        const item = ev.clipboardData!.items[i];
        if (item.type.indexOf('image') > -1) {
          ev.preventDefault();
          const sourceBlob = item.getAsFile() as Blob;
          that.showImageBeforeSend(sourceBlob);
          break;
        }
      }
    };
    document.ondrop = function ondrop(this: GlobalEventHandlers, ev: DragEvent) {
      for (let i = 0; i < ev.dataTransfer!.items.length; i += 1) {
        const item = ev.dataTransfer!.items[i];
        if (item.type.indexOf('image') > -1) {
          ev.preventDefault();
          const sourceBlob = item.getAsFile() as Blob;
          that.showImageBeforeSend(sourceBlob);
          break;
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
      this.imageVisible = false;
      utils.uploadImage(this.imageSourceBlob, (ret: any) => {
        if (ret.serialnum) {
          const msg = `{sl_27,${ret.serialnum}}`;
          const sid = this.$store.state.session.currentSessionId;
          this.$store.dispatch('session/sendMessage', { target: sid, msg });
        } else {
          this.$message(`上传图片失败[${ret.error}]`);
        }
      });
    },
    showImageBeforeSend(sourceBlob: Blob) {
      this.imageSourceBlob = sourceBlob;
      utils.createThumbnail(sourceBlob, (b: Blob | null) => {
        if (b) {
          const reader2 = new FileReader();
          reader2.onloadend = () => {
            this.pasteImageData.small = reader2.result as string;
          };
          reader2.readAsDataURL(b);
        }
        this.imageVisible = true;
      });
      const reader = new FileReader();
      reader.onloadend = () => {
        this.pasteImageData.big = reader.result as string;
      };
      reader.readAsDataURL(sourceBlob);
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
.popover {
  padding: 0px;
}
.bottom {
  margin-top: 13px;
}
.image {
  width: 100%;
  display: block;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
