<template>
  <div class="search-bar">
    <el-select
      style="width: 100%"
      size="small"
      prefix-icon="el-icon-search"
      v-model="inputSearch"
      filterable
      remote
      clearable
      placeholder="输入ID或名字搜索玩家"
      :remote-method="searchPlayer"
      :loading="loading"
      @change="handleSelect"
    >
      <el-option
        v-for="item in searchResult"
        :key="item.id"
        :label="item.sName"
        :value="item.id"
      ></el-option>
    </el-select>
    <!-- <input placeholder="搜索最近联系人" class="search-bar-input" /> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as netfriend from '@/net/netfriend';
import { UserState } from '@/store/modules/user/types';

const debounce = require('lodash.debounce');

export default Vue.extend({
  name: 'SearchBar',
  data() {
    return {
      inputSearch: '',
      loading: false,
    };
  },
  computed: {
    searchResult() {
      const userState: UserState = this.$store.state.user;
      return userState.searchResult;
    },
  },
  watch: {
    searchResult() {
      this.loading = false;
    },
  },
  methods: {
    searchPlayer(queryString: string) {
      this.loading = true;
      this.lazySearch(queryString);
    },
    lazySearch: debounce((queryString: string) => {
      const key = queryString.trim();
      if (key !== '') {
        netfriend.C2GSSearchFriend({ sKey: key });
      }
    }, 1000),
    handleSelect(pid: number) {
      if (!pid) {
        return;
      }
      console.log('handleSelect', pid);
      const userState: UserState = this.$store.state.user;
      this.$store.dispatch('session/selectSession', pid);
      if (!userState.users[pid]) {
        netfriend.C2GSGetFrdInfo({ pid });
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
