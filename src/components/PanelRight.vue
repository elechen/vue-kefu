<template>
  <div class="panel-right">
    <PlayerInfo />
    <PanelMessage />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PlayerInfo from '@/components/PlayerInfo.vue';
import PanelMessage from '@/components/PanelMessage.vue';

export default Vue.extend({
  name: 'PanelRight',
  components: {
    PlayerInfo,
    PanelMessage,
  },
});
</script>

<style lang="less" scoped>
</style>
