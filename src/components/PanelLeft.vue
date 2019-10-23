<template>
  <div class="panel-left">
    <div class="left">
      <div class="left-header">
        <UserInfo />
        <SearchBar />
      </div>
      <div class="left-content">
        <PlayerList />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import UserInfo from '@/components/UserInfo.vue';
import SearchBar from '@/components/SearchBar.vue';
import PlayerList from '@/components/PlayerList.vue';

export default Vue.extend({
  name: 'PanelLeft',
  components: {
    UserInfo,
    SearchBar,
    PlayerList,
  },
});
</script>

<style lang="less" scoped>
.left {
  width: 250px;
}
.left-header {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;
  background: #ff534c;
  background-image: -webkit-linear-gradient(229deg, #ff534c 0%, #ff3737 100%);
  background-image: -o-linear-gradient(229deg, #ff534c 0%, #ff3737 100%);
  background-image: linear-gradient(-139deg, #ff534c 0%, #ff3737 100%);
  height: 113px;
}
.left-content {
  border-right: 1px solid #e7e7e7;
}
</style>
