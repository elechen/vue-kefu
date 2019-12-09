<template>
  <div
    class="dialog"
    :class="{ active: player.pid === currentSessionId }"
    v-on:click="onSelectSession(player.pid)"
  >
    <el-badge
      :value="unreadCnt"
      :max="9"
      :hidden="unreadCnt === 0"
      :style="{marginBottom:marginBottom+'px'}"
    >
      <div class="dialog-avator">
        <img
          uselazyload="true"
          class="img-bg avatar"
          :src="require(`@/assets/icon/icon_${gameflag}.png`)"
          :class="{gray:player.iOnline === 0}"
        />
      </div>
    </el-badge>
    <span class="dialog-name ellipsis">{{player.sName}}</span>
    <el-dropdown trigger="hover" class="dialog-more" v-on:command="onCommand">
      <span class="el-dropdown-link">
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-if="player.iMarked === 0"
          :command="{action:'mark', pid:player.pid}"
          icon="el-icon-star-on"
        >关注</el-dropdown-item>
        <el-dropdown-item
          v-else
          :command="{action:'unmark', pid:player.pid}"
          icon="el-icon-star-off"
        >取关</el-dropdown-item>
        <el-dropdown-item
          v-if="isSuperGM"
          :command="{action:'delete', pid:player.pid}"
          icon="el-icon-delete"
        >移除</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <i v-if="player.iMarked === 1" class="el-icon-star-on dialog-star"></i>
    <div class="label dialog-label">{{player.iMoneyMax | VIP}}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import * as utils from '@/utils';
import * as netfriend from '@/net/netfriend';
import { friend } from '@/proto';
import * as define from '@/define';

export default Vue.extend({
  name: 'Playerbox',
  props: {
    player: Object,
  },
  methods: {
    onSelectSession(pid: number) {
      this.$store.dispatch('session/selectSession', pid);
      if (this.unreadCnt > 0) {
        netfriend.C2GSReadFrdMsg({ iSender: pid });
        this.$store.dispatch('user/updateNewMsgCnt', { iSender: pid, iCnt: 0 });
      } else if (!this.lastMsg) {
        netfriend.C2GSGetHistoryMsg({ pid, curidx: 0 });
      }
    },
    onCommand(cmd: { action: string; pid: number }) {
      console.log(cmd);
      const { pid, action } = cmd;
      switch (action) {
        case 'mark': {
          netfriend.C2GSMarkChat({ pid, act: 1 });
          this.$store.dispatch('user/updateMark', { pid, iMarked: 1 });
          break;
        }
        case 'unmark': {
          netfriend.C2GSMarkChat({ pid, act: 0 });
          this.$store.dispatch('user/updateMark', { pid, iMarked: 0 });
          break;
        }
        case 'delete': {
          netfriend.C2GSDelChat({ pid });
          this.$store.dispatch('user/deleteUser', pid);
          break;
        }
        default: {
          console.log('unknown action', cmd);
          break;
        }
      }
      // const nextAct = act === 1 ? 0 : 1;
      // netfriend.C2GSMarkChat({ pid, act: nextAct });
      // this.$store.dispatch('user/updateNewMsgCnt', { iSender: pid, iCnt: 0 });
    },
  },
  computed: {
    gameflag(): string {
      return this.$store.state.profile.user.sGameFlag;
    },
    isSuperGM(): boolean {
      return (this.$store.state.profile.user.iFlag & define.BIT_SUPER_GM) === define.BIT_SUPER_GM;
    },
    currentSessionId(): number {
      return this.$store.state.session.currentSessionId;
    },
    description(): string {
      if (this.lastMsg) {
        return this.lastMsg.sMsg;
      }
      return '';
    },
    unreadCnt(): number {
      if (this.player && this.player.iUnreadCnt) {
        return this.player.iUnreadCnt;
      }
      return 0;
    },
    lastMsg(): friend.GS2CSendFrdMsg.IFrdMsg | undefined {
      let lst: friend.GS2CSendFrdMsg.IFrdMsg[] = [];
      if (this.currentSessionId) {
        lst = this.$store.state.session.sessions[this.currentSessionId];
        if (lst) {
          return lst[lst.length - 1];
        }
      }
      return undefined;
    },
    marginBottom(): number {
      return this.player.pid === this.currentSessionId ? 0 : 12;
    },
  },
  filters: {
    VIP(iMoneyMax: number) {
      return `VIP${utils.GetVIP(iMoneyMax)}`;
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
  max-width: 100px;
  color: #1c2229;
}
.dialog-label {
  float: right;
  margin-top: 2px;
}
.dialog-star {
  float: right;
  margin-top: 2px;
}
.dialog-more {
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
