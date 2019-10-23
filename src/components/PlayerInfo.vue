<template>
  <div class="head">
    <div class="jimi-head clearfix">
      <div class="customer-info-wrapper clearfix">
        <div class="avatar-wrapper">
          <div
            class="img-bg avatar"
            uselazyload="true"
            alt
            v-bind:style="{backgroundImage: 'url(' + require(`@/assets/avatar.png`) + ')'}"
          ></div>
        </div>
        <div class="jimi-info">
          <p class="name">
            {{playerName}}
            <span
              class="typing"
              style="display: none;"
            >对方正在输入......</span>
          </p>
          <p class="description"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'PlayerInfo',
  computed: {
    playerName(): string {
      if (this.$store.state.currentSessionId) {
        return this.$store.state.users[this.$store.state.currentSessionId].name;
      }
      return '先选择一位玩家';
    },
  },
});
</script>

<style lang="less" scoped>
.jimi-head {
  width: 100%;
  height: 60px;
  background-color: #fafafa;
}
.jimi-head .customer-info-wrapper {
  float: left;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-left: 10px;
  padding-top: 10px;
}
.jimi-head .customer-info-wrapper .avatar-wrapper {
  float: left;
  width: 40px;
  height: 40px;
  border-radius: 3px;
  overflow: hidden;
}
.jimi-head .customer-info-wrapper .jimi-info {
  float: left;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-left: 10px;
  padding-top: 3px;
}
.jimi-head .customer-info-wrapper .jimi-info .name {
  font-size: 14px;
  line-height: 19px;
  color: #343036;
  position: relative;
}
.jimi-head .customer-info-wrapper .jimi-info .name img {
  width: 15px;
}
.jimi-head .customer-info-wrapper .jimi-info .name .typing {
  color: red;
  margin-left: 120px;
}
.jimi-head .customer-info-wrapper .jimi-info .description {
  color: #a1a6af;
  font-size: 12px;
  line-height: 16px;
}
</style>
