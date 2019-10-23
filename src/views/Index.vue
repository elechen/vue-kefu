<template>
  <div class="index" v-bind:style="{height: clientHeight + 'px'}">
    <Panel />
    <p class="copyright">
      Copyright © 2015-2020 169youxi.com 版权所有
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Panel from '@/components/Panel.vue';

export default Vue.extend({
  name: 'Index',
  data() {
    return {
      clientHeight: 1000,
    };
  },
  components: {
    Panel,
  },
  mounted() {
    this.clientHeight = window.innerHeight;
    window.onresize = () => {
      this.clientHeight = window.innerHeight;
    };
  },
});
</script>

<style lang="less" scoped>
.index {
  background-color: #2e2f3d;
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 3%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.copyright {
  color: #fff;
  width: 100%;
  text-align: center;
  position: absolute;
  left: 0;
  bottom: 10px;
  font-size: 12px;
}

</style>
