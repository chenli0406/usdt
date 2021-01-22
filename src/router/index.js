import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import {
  getStore
} from '@/utils/storage';
Vue.use(VueRouter);

const routes = [{
    path: "/",
    meta: {
      title: "登录"
    },
    component: function (resolve) {
      require(["@/views/Login"], resolve);
    }
  },
  // 首页
  {
    path: "/Index",
    meta: {
      title: "首页"
    },
    component: function (resolve) {
      require(["@/views/Index"], resolve);
    }
  },
  // 行情大盘
  {
    path: "/Market",
    meta: {
      title: "行情大盘"
    },
    component: function (resolve) {
      require(["@/views/Market"], resolve);
    }
  },
  // 交易大厅
  {
    path: "/Deal",
    meta: {
      title: "交易大厅"
    },
    component: function (resolve) {
      require(["@/views/Deal"], resolve);
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
  // 公告
  {
    path: "/NoticeList",
    meta: {
      title: "公告"
    },
    component: function (resolve) {
      require(["@/views/NoticeList"], resolve);
    }
  },
  // 公告消息
  {
    path: "/NoticeDetails",
    meta: {
      title: "公告消息"
    },
    component: function (resolve) {
      require(["@/views/NoticeDetails"], resolve);
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
  if (to.path === '/') {
    store.commit("setTabbarIndex", 5);
    next();
  } else {
    let token = getStore('token');
    if (token === null || token === '') {
      store.commit("setTabbarIndex", 5);
      router.push("/");
    } else {
      if (to.path === "/Index") {
        store.commit("setTabbarIndex", 1);
      } else if (to.path === "/Market") {
        store.commit("setTabbarIndex", 2);
      } else if (to.path === "/Deal") {
        store.commit("setTabbarIndex", 3);
      } else if (to.path === "/My") {
        store.commit("setTabbarIndex", 4);
      } else {
        store.commit("setTabbarIndex", 0);
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
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

export default router;