<template>
  <div class="input-field">
    <div class="input-field--toolbar">
      <el-row type="flex">
        <el-col :span="3">
          <a href="javascript:;" class="file">
            <i class="el-icon-picture"></i>
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              id="inputSelectImage"
              v-on:change="(e)=>{onSelectImage(e)}"
            />
          </a>
        </el-col>
        <el-col>
          <p class="input-field--gm">{{curChatGM}}</p>
        </el-col>
      </el-row>
    </div>
    <el-input
      type="textarea"
      rows="3"
      resize="none"
      placeholder="Ctrl+Enter发送消息"
      v-model="textarea"
      @keyup.enter.ctrl.native="onSubmit"
    ></el-input>
    <el-button
      slot="reference"
      plain
      class="input-field--send-btn"
      :disabled="disabled"
      size="mini"
      @click="onSubmit"
    >发送</el-button>

    <el-dialog
      title="是否发送图片"
      :visible.sync="imageVisible"
      width="20%"
      center
      @close="clearInputFile"
      :close-on-press-escape="false"
    >
      <el-image
        class="image"
        :src="pasteImageData.small"
        :preview-src-list="[pasteImageData.big,]"
        fit="contain"
      ></el-image>
      <div class="bottom">
        <el-row type="flex" justify="center">
          <el-button size="mini" @click="onClearPasteImageData">取消</el-button>
          <el-button size="mini" type="primary" @click="onSubmitImageData">发送</el-button>
        </el-row>
      </div>
    </el-dialog>
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
          console.log('粘贴板图片', sourceBlob.size);
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
          console.log('拖拽图片', sourceBlob.size);
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
    curChatGM(): string {
      const { state } = this.$store;
      const sid = state.session.currentSessionId;
      const lGM = state.user.curChatGM[sid] as string[];
      if (lGM) {
        return `${lGM.join('、')}正在查看`;
      }
      return '';
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
    clearInputFile() {
      const f = document.getElementById('inputSelectImage') as any;
      f.value = '';
    },
    onClearPasteImageData() {
      this.imageVisible = false;
    },
    onSelectImage(e: Event) {
      const imgFile = (e.target as any).files[0] as Blob;
      if (imgFile) {
        console.log('选择图片', imgFile.size);
        this.showImageBeforeSend(imgFile);
      }
      // reads.readAsDataURL(f);
      // reads.οnlοad = function(e) {
      //   document.getElementById('show').src = this.result;
      // };
    },
    onSubmitImageData() {
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
            this.imageVisible = true;
          };
          reader2.readAsDataURL(b);
        }
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
  margin-top: 33px;
}
.image {
  width: 100%;
  display: block;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.input-field--toolbar {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  // text-align: left;
  width: 100%;
}

.input-field--gm {
  color: #a1a6af;
  font-size: 14px;
  padding-top: 5px;
  // line-height: 16px;
}

.file {
  position: relative;
  display: inline-block;
  // background: #d0eeff;
  // border: 1px solid #99d3f5;
  // border-radius: 4px;
  padding: 4px 15px;
  // overflow: hidden;
  color: #888888;
  text-decoration: none;
  text-indent: 0;
  // font-size: 14px;
}
.file input {
  position: absolute;
  font-size: 100px;
  right: 0;
  top: 0;
  opacity: 0;
  width: 46px;
  height: 26px;
}
.file:hover {
  background: #aadffd;
  border-color: #78c3f3;
  color: #004974;
  text-decoration: none;
}
</style>
