<template>
  <div class="head">
    <div class="jimi-head clearfix">
      <div class="customer-info-wrapper clearfix">
        <div class="avatar-wrapper">
          <img
            uselazyload="true"
            class="img-bg avatar"
            :class="{gray:!isOnline}"
            :src="require(`@/assets/icon/icon_${gameflag}.png`)"
          />
        </div>
        <div class="jimi-info">
          <p class="name">
            {{playerName}}
            <span>
              <el-button type="text" style="padding:0">
              <i
                v-show="user"
                ref="copy"
                class="el-icon-document-copy"
                data-clipboard-action="copy"
                :data-clipboard-text="user ? user.pid : ''"
                @click="onCopy"
              ></i>
              </el-button>
            </span>
          </p>
          <p class="description">{{description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { User } from '@/store/modules/user/types';

export default Vue.extend({
  name: 'PlayerInfo',
  computed: {
    gameflag(): string {
      return this.$store.state.profile.user.sGameFlag;
    },
    user(): User | undefined {
      const sid = this.$store.state.session.currentSessionId;
      if (sid && this.$store.state.user.users[sid]) {
        const user: User = this.$store.state.user.users[sid];
        return user;
      }
      return undefined;
    },
    isOnline(): boolean {
      if (this.user) {
        return this.user.iOnline === 1;
      }
      return true;
    },
    playerName(): string {
      if (this.user) {
        return `${this.user.sName} ID:${this.user.pid}`;
      }
      return '先选择一位玩家';
    },
    description(): string {
      let sDesc = '';
      if (this.user) {
        const u = this.user;
        sDesc = `平台:${u.sPlatform}_服务器:${u.iServer}_等级:${u.iGrade}_充值:${u.iMoneyMax}`;
      }
      return sDesc;
    },
  },
  data() {
    return {
      copyBtn: null, // 存储初始化复制按钮事件
    };
  },
  methods: {
    onCopy() {
      this.$message({ message: 'ID复制好了', duration: 700 });
    },
  },
  mounted() {
    const Clipboard = (this as any).clipboard;
    this.copyBtn = new Clipboard(this.$refs.copy);
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
