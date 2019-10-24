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
      const lst: define.Player[] = Object.values(this.$store.state.users);
      return lst.sort((a: define.Player, b: define.Player) => {
        if (a.recentchattime !== b.recentchattime) {
          return a.recentchattime > b.recentchattime ? -1 : 1;
        }
        if (a.online !== b.online) {
          return a.online ? -1 : 1;
        }
        if (a.rmb !== b.rmb) {
          return a.rmb > b.rmb ? -1 : 1;
        }
        return 0;
      });
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
