<template>
  <div class="content">
    <nav-bar :nav-data="navData"></nav-bar>
    <div class="main-box">
      <div class="head_box">
        <div class="top-info">
          <van-image round width="120px" :src="imgPath" @click="updateHead">
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
      <div class="bg-box">
        <div class="bg-item">
          <div>
            <span>钱包余额</span>
            <span @click="gotoWallet">钱包明细 > </span>
          </div>
         <div class="item">
            <span>2345.8 USDT</span>
            <!-- <van-button class="primary-btn" @click="onClick"> 立即提现 </van-button> -->
            <van-button class="primary-btn" @click="onClick"> 快速充币 </van-button>
         </div>
        </div>
      </div>
    </div>
    <div class="menu">
      <div style="margin-top: 10px; height: 20px"></div>
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
import NavBar from "../components/navBar/index";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      navData: {
        leftIcon: false,
        leftImg: require("@/assets/img/my-logo.png"),
      },
      imgPath: require("@/assets/img/3.png"),
      list: [
        {
          url: "/OrderManage?tab=1",
          imgPath: require("@/assets/img/menu-5.png"),
          title: "已挂单",
        },
        {
          url: "/OrderManage?tab=2",
          imgPath: require("@/assets/img/menu-1.png"),
          title: "待付款",
        },
        {
          url: "/OrderManage?tab=3",
          imgPath: require("@/assets/img/menu-2.png"),
          title: "待确认",
        },
        {
          url: "/OrderManage?tab=4",
          imgPath: require("@/assets/img/menu-3.png"),
          title: "已完成",
        },
        // {
        //   url: "/Address",
        //   imgPath: require("@/assets/img/menu-4.png"),
        //   title: "USDT收货地址",
        // },
         {
          url: "/Account",
          imgPath: require("@/assets/img/menu-6.png"),
          title: "收款账号",
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
        this.$router.push("/Set");
    },
    onClick() {
      this.$router.push('/FastMoney');
      //this.$router.push('/QuickTopUp');
      
    },
    updateHead(){
      this.$router.push("/UpdateHead");
    },
    gotoWallet(){
      this.$router.push("/Wallet");
    }
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
      padding: 20px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      border-radius: 20px;
      margin: 0 20px;
      margin-top: 60px;
      background-color: #fff;
      .menu-item {
        width: 25%;
        text-align: center;
        .menu-title {
          margin: 10px 0;
          font-weight: 500;
          color: #3b424c;
        }
      }
    }
  }
}
.bg-box {
  background: url("../assets/img/my-bg.png") no-repeat;
  background-size: 100% 100%;

  position: relative;
  top: 20px;
  .bg-item {
    padding: 20px;
    color: #fff;
    div{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .item{
      font-size: 16px;
      padding: 20px 0 10px 0;
    }
  }
}
.primary-btn {
  background: #ffffff;
  border-radius: 20px;
  color: #4f75fe;
  height: 30px;
  font-size: 12px;
  font-weight: 600;
}
</style>
