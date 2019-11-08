<template>
  <div class="user-info clearfix">
    <div class="user-info-avatar">
      <div class="img-bg avatar" uselazyload="true">
        <el-avatar
          shape="square"
          :size="50"
          :src="require(`@/assets/avatar.png`)"
        ></el-avatar>
      </div>
    </div>
    <div class="user-info-right">
      <div
        class="user-info-right-name ellipsis"
      >{{$store.state.profile.user.sName}}</div>
      <el-select
        class="user-info-right-game"
        size="mini"
        v-model="gameflag"
        @change="onSelectGame"
        placeholder="请选择"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
        ></el-option>
      </el-select>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { User, ProfileState } from '@/store/modules/profile/types';

export default Vue.extend({
  name: 'UserInfo',
  computed: {
    gameflag: {
      get() {
        const state: ProfileState = this.$store.state.profile;
        if (state.user) {
          return state.user!.sGameFlag;
        }
        return '';
      },
      set() {},
    },
    options() {
      const lst: { value: string; label: string; disabled: boolean }[] = [];
      const state: ProfileState = this.$store.state.profile;
      if (state && state.user!.gamelist) {
        const gamelist = state.user!.gamelist as string[];
        gamelist.forEach((gameflag) => {
          lst.push({ value: gameflag, label: gameflag, disabled: this.gameflag === gameflag });
        });
      }
      return lst;
    },
  },
  methods: {
    onSelectGame(gameflag: string) {
      if (gameflag && gameflag !== this.gameflag) {
        this.$confirm(`将跳转${gameflag}客服中心, 是否继续?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        })
          .then(() => {
            this.$store.dispatch('session/reset');
            this.$store.dispatch('user/reset');
            this.$store.dispatch('profile/reset');
            const { token } = this.$route.query;
            window.location.href = `?token=${token}&gameflag=${gameflag}`;
          })
          .catch(() => {
            // do nothing
          });
      }
    },
  },
});
</script>

<style lang="less" scoped>
.user-info-avatar {
  width: 50px;
  height: 50px;
  float: left;
  border-radius: 4px;
  overflow: hidden;
}
.user-info-right {
  float: left;
  margin-left: 10px;
}
.user-info-right-name {
  font-size: 18px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 20px;
  width: 160px;
}
.user-info-right-game {
  margin-top: 2px;
  width: 168px;
  height: 20px;
}
</style>
