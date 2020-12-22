<template>
  <div class="message">
    <div
      class="message clearfix"
      :class="[isSelf ? 'waiter-message' : 'customer-message']"
    >
      <div class="message--date">
        <span>{{ message.iTime | time }}</span>
      </div>
      <p class="message--pin">{{message.sName}}</p>
      <div
        class="message--container clearfix"
        :class="[isSelf ? 'waiter-message' : 'customer-message']"
      >
        <div class="message--head">
          <img v-if="isGM" class="img-bg avatar" src="@/assets/avatar.png" />
          <img
            v-else
            class="img-bg avatar"
            :class="{gray:!isOnline}"
            :src="require(`@/assets/icon/icon_${gameflag}.png`)"
            :onerror="defaultImg"
          />
        </div>
        <div class="message--content clearfix">
          <div class="message--wrapper">
            <div
              class="text-message clearfix"
              :class="[isSelf ? 'waiter-message' : 'customer-message']"
              index="6"
              :msgid="message.id"
            >
              <div class="text-message--container">
                <el-image
                  v-if="image"
                  style="display: block;"
                  :src="image.small"
                  :preview-src-list="image.big"
                ></el-image>
                <p v-else>{{message.sMsg}}</p>
              </div>
            </div>
          </div>
          <div class="message--icon" style="display: none;">
            <div class="message--retry"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import moment from 'moment';
import * as utils from '@/utils';

export default Vue.extend({
  name: 'MessageBox',
  filters: {
    // 将日期过滤为 hour:minutes
    time: (date: number) => moment(date * 1000).format('YYYY-MM-DD HH:mm:ss'),
  },
  computed: {
    isSelf(): boolean {
      return this.message.iSender !== this.$store.state.profile.user.pid;
    },
    isGM(): boolean {
      return this.message.iSender < 10000;
    },
    isOnline(): boolean {
      const sender = this.$store.state.user.users[this.message.iSender];
      if (sender) {
        return sender.iOnline === 1;
      }
      return true;
    },
    gameflag(): string {
      return this.$store.state.profile.user.sGameFlag;
    },
    image(): { small: string; big: string[] } | undefined {
      const reg = /\{sl_\d+,(?<sn>\w+)\}/;
      const msg: string = this.message.sMsg;
      if (reg && msg.match(reg)) {
        const { sn } = msg.match(reg)!.groups!;
        return {
          small: utils.GetImgUrl(sn, utils.IMG_TYPE.small),
          big: [utils.GetImgUrl(sn, utils.IMG_TYPE.big)],
        };
      }
      return undefined;
    },
    defaultImg(): string {
      const img = utils.DefaultImage();
      return `this.src='${img}'`;
    },
  },
  props: {
    message: Object,
  },
});
</script>

<style lang="less" scoped>
.message {
  margin-bottom: 20px;
}
.message--date {
  font-size: 13px;
  color: #a1a6af;
  text-align: center;
  margin-bottom: 13px;
}
.message--pin {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-size: 12px;
  color: #a1a6af;
  padding: 0 48px;
  margin-bottom: 3px;
  width: 100%;
  text-align: right;
}
.message--container {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.message--container .message--head {
  width: 32px;
  height: 32px;
  border-radius: 3px;
  overflow: hidden;
}
.message--container .message--content {
  position: relative;
}
.message--container .message--content.filling {
  width: 100%;
}
.message--container .message--wrapper {
  max-width: 391px;
}
.message--container .message--wrapper.filling {
  max-width: 100%;
  width: 100%;
}
.message--container .message--revoke-message {
  float: none;
  text-align: center;
  max-width: none;
}
.message--container .message--icon {
  width: 20px;
  height: 20px;
  margin-top: 11px;
}
.message--container .message--icon img {
  width: 100%;
  height: 100%;
}
.message.customer-message .message--pin {
  text-align: right;
}
.message.customer-message .message--head {
  float: right;
  margin-left: 10px;
}
.message.customer-message .message--icon {
  margin-right: 10px;
}
.message.customer-message .message-content,
.message.customer-message .message--icon,
.message.customer-message .message--wrapper {
  float: right;
}
.message.customer-message .message--revoke-message {
  float: none;
}
.message.waiter-message .message--pin {
  text-align: left;
}
.message.waiter-message .message--head {
  float: left;
  margin-right: 10px;
}
.message.waiter-message .message--icon {
  margin-left: 10px;
}
.message.waiter-message .message-content,
.message.waiter-message .message--icon,
.message.waiter-message .message--wrapper {
  float: left;
}
.message.waiter-message .message--revoke-message {
  float: none;
}

.text-message {
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  min-height: 42px;
  line-height: 1.4;
  font-size: 13px;
  color: #252525;
  letter-spacing: 0;
}
.text-message--container {
  position: relative;
  display: inline-block;
  min-height: 18px;
  line-height: 1.4;
  background-color: #f3f3f3;
  border-radius: 4px;
  padding: 9px 9px;
  word-break: break-all;
}
.text-message--container:after {
  position: absolute;
  content: '';
  width: 23px;
  height: 42px;
  top: 0;
}
.text-message.waiter-message .text-message--container {
  float: left;
  margin-left: 5px;
  // padding-left: 17px;
  text-align: justify;
  word-break: break-all;
}
.text-message.waiter-message .text-message--container:after {
  left: -12px;
  top: 10px;
  width: 0px;
  height: 0px;
  border: 6px solid transparent;
  border-right: 6px solid #f3f3f3;
}
.text-message.customer-message .text-message--container {
  float: right;
  margin-right: 5px;
  // padding-right: 17px;
  background-color: #d0e9ff;
}
.text-message.customer-message .text-message--container:after {
  right: -12px;
  top: 10px;
  width: 0px;
  height: 0px;
  border: 6px solid transparent;
  border-left: 6px solid #d0e9ff;
}
</style>
