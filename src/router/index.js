import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import { getStore } from '@/utils/storage';
Vue.use(VueRouter);

const routes = [
  {
    path: "/Login",
    meta: {
      title: "登录"
    },
    component: function (resolve) {
      require(["@/views/Login"], resolve);
    }
  },
  // 首页
  {
    path: "/",
    meta: {
      title: "首页"
    },
    component: function (resolve) {
      require(["@/views/Index"], resolve);
    }
  },
  // 我的
  {
    path: "/My",
    meta: {
      title: "个人中心"
    },
    component: function (resolve) {
      require(["@/views/My"], resolve);
    }
  },
];
const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }
  if (to.path === '/Login') {
    store.commit("setTabbarIndex", 2);
    next();
  } else {
    let token = getStore('token');
    console.log(token);
    if (token === null || token === '') {
         store.commit("setTabbarIndex", 2);
          router.push("/Login");
    } else {
      if (to.path === "/") {
        store.commit("setTabbarIndex", 0);
      } else if (to.path === "/My") {
        store.commit("setTabbarIndex", 1);
      } else {
        store.commit("setTabbarIndex", 2);
      }
      next();
    }
  }
});


// router.beforeEach((to, form, next) => {
//   if (to.meta && to.meta.title) {
//     document.title = to.meta.title;
//   }
//   if (to.path === "/") {
//     store.commit("setTabbarIndex", 0);
//   } else if (to.path === "/My") {
//     store.commit("setTabbarIndex", 1);
//   } else {
//     store.commit("setTabbarIndex", 2);
//   }
//   next();
// });

//重写router 防止路由跳转报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

export default router;