import Vue from 'vue';
import 'normalize.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// @ts-ignore
import VueNativeSock from 'vue-native-websocket';
// @ts-ignore
import clipboard from 'clipboard';
import router from './router';
import store from './store';
import App from './App.vue';
import * as net from '@/net/net';
import * as define from './define';

// 注册到vue原型上
Vue.prototype.clipboard = clipboard;

Vue.config.productionTip = false;

Vue.use(ElementUI);

Vue.use(VueNativeSock, `ws://${define.HOST}`, {
  store,
  passToStoreHandler: (eventName: string, event: any, next: Function) => {
    if (event.data) {
      if (event.data.arrayBuffer) {
        event.data.arrayBuffer().then((data: any) => {
          const pkg = new Uint8Array(data);
          net.DecodeAndDispatch(pkg);
        });
      } else {
        console.error('需要更新到最新版本Chrome浏览器');
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
