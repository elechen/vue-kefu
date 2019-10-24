<template>
  <div
    class="dialog"
    :class="{ active: player.uid === currentSessionId }"
    v-on:click="onSelectSession(player.uid)"
  >
    <el-badge :value="0" :max="9" :hidden="true">
      <div class="dialog-avator">
        <div
          class="img-bg avatar"
          uselazyload="true"
          alt
          v-bind:style="{backgroundImage: 'url(' + require(`@/assets/avatar.png`) + ')'}"
        ></div>
      </div>
    </el-badge>
    <span class="dialog-name ellipsis">{{player.name}}</span>
    <div class="label dialog-label">VIP_1</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Playerbox',
  props: {
    player: Object,
  },
  methods: {
    onSelectSession(uid: number) {
      this.$store.dispatch('selectSession', uid);
    },
  },
  computed: {
    currentSessionId(): number {
      return this.$store.state.currentSessionId;
    },
  },
});
</script>

<style scoped>
.dialog {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 40px;
  padding: 10px;
  font-size: 13px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background: #f2f5f9;
  cursor: pointer;
}
.dialog-avator {
  width: 20px;
  height: 20px;
  float: left;
}
.dialog-name {
  display: inline-block;
  margin-left: 10px;
  line-height: 20px;
  width: 120px;
  color: #1c2229;
}
.dialog-label {
  float: right;
  margin-top: 2px;
}
.dialog:hover {
  background: #edf3fa;
}
.dialog.unread {
  background: #fff9cd;
  -webkit-box-shadow: 0 1px 0 0 #f7f1c2;
  box-shadow: 0 1px 0 0 #f7f1c2;
  cursor: pointer;
}
.dialog.active {
  font-size: 14px;
  height: 50px;
  background: #d2e6f9;
}
.dialog.active .dialog-avator {
  width: 30px;
  height: 30px;
}
</style>
