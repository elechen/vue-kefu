<template>
  <div class="dialog-list">
    <player-box
      v-for="player in players"
      v-bind:key="player.uid"
      v-bind:player="player"
    ></player-box>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as define from '@/define';
import PlayerBox from '@/components/PlayerBox.vue';

export default Vue.extend({
  name: 'PlayerList',
  components: {
    PlayerBox,
  },
  computed: {
    players(): define.Player[] {
      return this.$store.state.users;
    },
  },
});
</script>

<style scoped>
.dialog-list {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
