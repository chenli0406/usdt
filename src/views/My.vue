<template>
  <div class="content">
    <nav-bar :nav-data="navData"></nav-bar>
    <div class="main-box">
      <div class="head_box">
        <div class="top-info">
          <van-image round width="120px" :src="imgPath">
            <template v-slot:loading>
              <van-loading type="spinner" size="20" />
            </template>
          </van-image>
          <div style="margin-left: 20px">
            <p>泰勒斯威夫特</p>
            <span style="color: #999">13896641039</span>
          </div>
        </div>
        <div class="right-img" @click="gotoSet">
          <img src="../assets/icons/set.png" />
          <span style="margin-left: 10px">设置</span>
        </div>
      </div>
      <div class="bg-box"></div>
    </div>

    <div class="menu">
      <div class="menu-box">
        <div class="menu-item" v-for="(item, index) in list" :key="index">
          <van-image width="50px" :src="item.imgPath" @click="gotoMenu(item.url)">
            <template v-slot:loading>
              <van-loading type="spinner" size="20" />
            </template>
          </van-image>
          <div class="menu-title">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/navBar/index';
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      navData: {
        leftIcon: false,
        leftImg: require('@/assets/img/my-logo.png'),
      },
      imgPath: require('@/assets/img/3.png'),
      list: [
        {
          url: '/MyWallet',
          imgPath: require('@/assets/img/menu-1.png'),
          title: '待付款',
        },
        {
          url: '/InviteUser',
          imgPath: require('@/assets/img/menu-2.png'),
          title: '待确认',
        },
        {
          url: '/MerchantFrom',
          imgPath: require('@/assets/img/menu-3.png'),
          title: '已完成',
        },
        {
          url: '/Audit',
          imgPath: require('@/assets/img/menu-4.png'),
          title: 'USDT收货地址',
        },
      ],
    };
  },
  created() {},
  methods: {
    gotoMenu(val) {
      this.$router.push(val);
    },
    gotoSet() {
      this.$router.push('/PersonalData');
    },
    clickRight() {
      this.$router.push('/Set');
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  height: 100vh;
  overflow: hidden;
  .head_box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .top-info {
      display: flex;
      align-items: center;
    }
    P {
      margin: 6px 0;
      font-size: 14px;
      font-weight: 600;
    }
    .van-image {
      border: 2px solid #4f75fe;
      border-radius: 50%;
    }
    .right-img {
      display: flex;
      align-items: center;
    }
  }

  .menu {
    margin-top: -40px;
    height: 100vh;
    background: #f4f6f8;
    border-radius: 50px 50px 0px 0px;
    .menu-box {
      padding: 30px;
      display: flex;
      justify-content: space-between;
      border-radius: 30px;
      margin-top: 50px;
      .menu-item {
        .menu-title {
          text-align: center;
          margin: 10px 0;
          font-weight: 500;
          color: #3b424c;
        }
      }
    }
  }
}
.bg-box {
  background: url('../assets/img/my-bg.png') no-repeat;
  height: 16vh;
  position: relative;
  top: 20px;
}
</style>
