<template>
  <div class="messagelist">
    <MessageBox
      v-for="message in messages"
      v-bind:key="message.id"
      v-bind:message="message"
    ></MessageBox>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MessageBox from '@/components/MessageBox.vue';

export default Vue.extend({
  name: 'MessageList',
  components: {
    MessageBox,
  },
  props: {
    messages: Array,
  },
});
</script>

<style scoped>
</style>
