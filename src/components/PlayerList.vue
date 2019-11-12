<template>
  <div class="dialog-list">
    <player-box
      v-for="player in players"
      v-bind:key="player.pid"
      v-bind:player="player"
    ></player-box>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as define from '@/define';
import { UserState, User } from '@/store/modules/user/types';
import PlayerBox from '@/components/PlayerBox.vue';

export default Vue.extend({
  name: 'PlayerList',
  components: {
    PlayerBox,
  },
  computed: {
    players() {
      const state: UserState = this.$store.state.user;
      const lst = Object.values(state.users);
      return lst.sort((a: User, b: User) => {
        if (a.iChatTime !== b.iChatTime) {
          return a.iChatTime > b.iChatTime ? -1 : 1;
        }
        if (a.iOnline !== b.iOnline) {
          return a.iOnline ? -1 : 1;
        }
        if (a.iMoneyMax !== b.iMoneyMax) {
          return a.iMoneyMax > b.iMoneyMax ? -1 : 1;
        }
        return 0;
      });
    },
  },
});
</script>

<style scoped>
.dialog-list {
  overflow-x: hidden;
  overflow-y: auto;
  height: 546px;
}
</style>
