<template>
  <div id="app">
    <router-view />
    <van-tabbar route v-model="active" active-color="#000" inactive-color="#999999" v-show="tabbarIndex > 0 && tabbarIndex != 5">
      <van-tabbar-item name="index" replace to="/Index">
        <span>首页</span>
        <template #icon="props">
          <img :src="props.active ? index.active : index.default" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item name="market" replace to="/Market">
        <span>行情大盘</span>
        <template #icon="props">
          <img :src="props.active ? market.active : market.default" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item name="deal" replace to="/Deal">
        <span>交易大厅</span>
        <template #icon="props">
          <img :src="props.active ? deal.active : deal.default" />
        </template>
      </van-tabbar-item>
      <van-tabbar-item name="my" replace to="/My">
        <span>我的</span>
        <template #icon="props">
          <img :src="props.active ? home.active : home.default" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import store from "@/store";
export default {
  computed: {
    ...mapState(['tabbarIndex']),
  },
  data() {
    return {
      active: 'index',
      index: {
        default: require('@/assets/icons/home.png'),
        active: require('@/assets/icons/home-active.png'),
      },
      home: {
        default: require('@/assets/icons/mine.png'),
        active: require('@/assets/icons/mine-active.png'),
      },
      market: {
        default: require('@/assets/icons/market.png'),
        active: require('@/assets/icons/market-active.png'),
      },
      deal: {
        default: require('@/assets/icons/deal.png'),
        active: require('@/assets/icons/deal-active.png'),
      },
    };
  },
  created() {
  },
  mounted(){
    this.browserRedirect();
  }, 
  methods:{
    browserRedirect() {
        var sUserAgent = navigator.userAgent.toLowerCase();
        if (/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(sUserAgent)) {
           store.commit("userAgent", "mobile");
        } else {
          store.commit("userAgent", "pc");
      }
    }
  }
};
</script>

<style lang="scss">
body {
  padding: 0;
  margin: 0;
  font-size: 14px;
  color: #333;
  font-family: PingFang SC;
}
.layout-wrap,
body,
html,
#app {
  background-color: #fff;
  &.bg {
    background-color: #fff;
  }
  @media screen and (min-width: 280px) {
    font-size: 10px;
  }
  @media screen and (min-width: 337px) {
    font-size: 12px;
  }
  @media screen and (min-width: 576px) {
    font-size: 12px;
  }
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
  @media screen and (min-width: 992px) {
    font-size: 12px;
    margin: 0 60px;
    .van-dialog {
      text-align: center;
      width: 50%;
      font-size: 14px;
    }
  }
  @media screen and (min-width: 1200px) {
    font-size: 12px;
    margin: 0 140px;
    .van-dialog {
      text-align: center;
      width: 40%;
      font-size: 14px;
    }
  }
}
.van-tabbar {
  z-index: 9999;
  border-radius: 26px 26px 0px 0px;
  height: 100px;
}
.van-tabbar-item__icon img {
  padding: 2px 0;
}
.van-tabbar-item--active {
  font-size: 20px;
}
.van-tabbar-item {
  font-size: 20px;
  color: #999999;
  margin: 10px 0;
}
.van-hairline--top-bottom::after,
.van-hairline-unset--top-bottom::after {
  border-width: 0px !important;
}
.van-nav-bar {
  .van-icon {
    color: #000 !important;
  }
  .van-nav-bar__text {
    color: #000;
  }
  .van-ellipsis {
    overflow: auto;
    white-space: normal;
  }
  .van-nav-bar__title {
    color: #000 !important;
  }
}
.main-box {
  margin-top: 60px;
  padding: 0 20px;
}

ul {
  list-style: none;
}
.van-hairline--bottom::after {
  border-bottom: none !important;
}
</style>
