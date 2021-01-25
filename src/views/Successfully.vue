<template>
  <div class="content">
    <nav-bar :nav-data="navData"></nav-bar>
    <div class="list">
      <div>
        <img src="../assets/img/success.png" />
      </div>
      <p>提交成功</p>
      <p class="title">请耐心等待卖家确认</p>
      <div class="submit-box">
        <van-button class="primary-btn" @click="gotoHome"> 回到首页 </van-button>
        <van-button class="look-btn" @click="gotoOrder"> 查看订单 </van-button>
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
        title: this.$route.meta.title,
        leftIcon: true,
      },
    };
  },
  created() {},
  methods: {
    gotoNoticeDetails() {
      this.$router.push('/NoticeDetails');
    },
    gotoHome() {
      this.$router.push('/Index');
    },
    gotoOrder() {
      this.$router.push('/OrderManage');
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  height: 100vh;
  overflow: hidden;
  background: #fff;
  .list {
    margin-top: 60px;
    padding: 0px 40px;
    text-align: center;
    .title {
      margin: 20px 0;
      color: #666666;
    }
  }
}
.submit-box {
  width: 100%;
  display: flex;
  justify-content: space-between;
  .primary-btn {
    width: 40%;
    border-radius: 50px;
    height: 40px;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    background: #4f75fe;
    box-shadow: 0px 8px 14px 0px rgba(79, 117, 254, 0.44);
  }
  .look-btn {
    width: 40%;
    border-radius: 50px;
    height: 40px;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    background: #febe53;
    box-shadow: 0px 8px 14px 0px rgba(254, 190, 83, 0.44);
  }
}
</style>
