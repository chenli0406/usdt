import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import '@/icons' // icon
import { Image as VanImage, List, ActionSheet, Lazyload, PullRefresh, Toast, Rate, Skeleton, Image, Icon, Checkbox, Dialog, Field, Button, Tabs, Tab, Empty, Tabbar, TabbarItem, Sticky, Form } from "vant";
import "vant/lib/index.css";
import Vant from "vant";
import 'lib-flexible';
import { setStore, getStore, removeStore } from '@/utils/storage';

require('vue-swipe/dist/vue-swipe.css');
import { Swipe, SwipeItem } from 'vue-swipe';
Vue.component('swipe', Swipe);
Vue.component('swipe-item', SwipeItem);

Vue.use(Vant);
Vue.use(Toast);
Vue.use(List);
Vue.use(Rate);
Vue.use(Skeleton);
Vue.use(Image);
Vue.use(Icon);
Vue.use(Checkbox);
Vue.use(Field);
Vue.use(Button);
Vue.use(Tabs);
Vue.use(Tab);
Vue.use(Empty);
Vue.use(Dialog);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(PullRefresh);
Vue.use(VanImage);
Vue.use(Lazyload);
Vue.use(ActionSheet);
Vue.use(Sticky);
Vue.use(Form);
Vue.config.productionTip = false;

Vue.prototype.setStore = setStore;
Vue.prototype.getStore = getStore;
Vue.prototype.removeStore = removeStore;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
