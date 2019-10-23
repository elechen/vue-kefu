<template>
  <div class="panel">
    <panel-left />
    <panel-right />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PanelLeft from '@/components/PanelLeft.vue';
import PanelRight from '@/components/PanelRight.vue';

export default Vue.extend({
  name: 'Panel',
  components: {
    PanelLeft,
    PanelRight,
  },
});
</script>

<style lang="less">
.panel {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 800px;
  height: 660px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 5px;
}

.panel-left,
.panel-right {
  float: left;
}

</style>
