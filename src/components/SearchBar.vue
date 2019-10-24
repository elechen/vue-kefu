<template>
  <div class="search-bar">
    <el-autocomplete
      size="small"
      placeholder="搜索最近联系人"
      prefix-icon="el-icon-search"
      v-model="inputSearch"
      :fetch-suggestions="querySearchAsync"
      @select="handleSelect"
    ></el-autocomplete>
    <!-- <input placeholder="搜索最近联系人" class="search-bar-input" /> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

const debounce = require('lodash.debounce');

export default Vue.extend({
  name: 'SearchBar',
  data() {
    return {
      inputSearch: '',
    };
  },
  methods: {
    querySearchAsync: debounce((queryString: string, cb: Function) => {
      const key = queryString.trim();
      if (key !== '') {
        console.log('开始搜索', key);
        // 模拟回调
        cb([
          {
            uid: 10003,
            value: 'TEST-10003',
            name: 'TEST-10003',
            avatar: 'dist/images/1.jpg',
            recentchattime: 0,
            rmb: 0,
          },
        ]);
      }
    }, 1500),
    handleSelect(player: any) {
      if (this.$store.state.users[player.uid]) {
        this.$store.dispatch('selectSession', player.uid);
      } else {
        this.$store.dispatch('addUser', player);
        this.$store.dispatch('selectSession', player.uid);
      }
    },
  },
});
</script>

<style lang="less" scoped>
.search-bar {
  width: 228px;
  height: 24px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-top: 10px;
}
.search-bar-input {
  outline: 0 none;
  height: 24px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  line-height: 24px;
  width: 100%;
  border-radius: 4px;
  border: 0;
  font-size: 12px;
  padding: 0 5px 0 30px;
  // background: url('http://baidu.com') no-repeat #fff 10px 5px;
}
</style>
