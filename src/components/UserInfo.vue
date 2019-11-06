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
      <div class="user-info-right-name ellipsis">{{$store.state.profile.user.sName}}</div>
      <el-select
        class="user-info-right-game"
        size="mini"
        v-model="game"
        placeholder="请选择"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'UserInfo',
  data() {
    return {
      game: 'szl',
      options: [
        {
          value: 'szl',
          label: '神之路',
        },
        {
          value: 'sx',
          label: '思仙',
        },
      ],
    };
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
