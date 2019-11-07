import Vue from 'vue';
import 'normalize.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// @ts-ignore
import VueNativeSock from 'vue-native-websocket';
import router from './router';
import store from './store';
import App from './App.vue';
import * as net from '@/net/net';
import * as define from './define';

Vue.config.productionTip = false;

Vue.use(ElementUI);

Vue.use(VueNativeSock, `ws://${define.HOST}`, {
  store,
  passToStoreHandler: (eventName: string, event: any, next: Function) => {
    console.log('beaforeStoreHandler', eventName, event);
    if (event.data) {
      if (event.data.arrayBuffer) {
        event.data.arrayBuffer().then((data: any) => {
          const pkg = new Uint8Array(data);
          console.log(pkg);
          net.DecodeAndDispatch(pkg);
        });
      }
    }
    next(eventName, event);
  },
  reconnection: true, // (Boolean) whether to reconnect automatically (false)
  reconnectionAttempts: 5, // (Number) number of reconnection attempts before giving up (Infinity),
  reconnectionDelay: 3000, // (Number) how long to initially wait before attempting a new (1000)
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
