<template>
  <el-container style="height: 800px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-input
        v-model.lazy="inputSearch"
        @keyup.enter.native="search"
        placeholder="关键词搜索"
      ></el-input>
      <el-table
        ref="singleTable"
        :data="filterPlayerData"
        :show-header="false"
        highlight-current-row
        @current-change="handleCurrentChange"
        style="width: 100%"
      >
        <el-table-column property="name" label="玩家"></el-table-column>
      </el-table>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-header>

      <el-main>
        <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140"></el-table-column>
          <el-table-column prop="name" label="姓名" width="120"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
      </el-main>

      <el-footer style="text-align: left; font-size: 12px">
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入回复内容"
          v-model="textarea"
          @keyup.enter.ctrl.native="submit"
        ></el-input>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Container',
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路1518弄',
    };
    return {
      tableData: Array(20).fill(item),
      tablePlayerData: [
        { name: '16102', pid: 16102, rmb: 100 },
        { name: '16103', pid: 16103, rmb: 1000 },
      ],
      textarea: '',
      inputSearch: '',
      currentRow: null,
    };
  },
  methods: {
    submit() {
      console.log('提交回复', this.textarea);
      this.textarea = '';
    },
    search() {
      console.log('关键词搜索', this.inputSearch);
    },
    handleCurrentChange(val: any) {
      this.currentRow = val;
      console.log(val.pid);
    },
  },
  computed: {
    filterPlayerData() {
      return this.tablePlayerData.filter((player: any) => {
        if (this.inputSearch !== '') {
          return player.pid.toString() === this.inputSearch;
        }
        return true;
      });
    },
  },
});
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
