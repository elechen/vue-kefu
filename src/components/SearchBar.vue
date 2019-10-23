<template>
  <div class="search-bar">
    <el-input
      size="small"
      placeholder="搜索最近联系人"
      prefix-icon="el-icon-search"
      v-model="inputSearch"
    ></el-input>
    <!-- <input placeholder="搜索最近联系人" class="search-bar-input" /> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SearchBar',
  data() {
    return {
      inputSearch: '',
    };
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
