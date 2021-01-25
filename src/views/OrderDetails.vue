<template>
  <div class="content">
    <nav-bar :nav-data="navData"></nav-bar>
    <div class="main-box">
      <div class="head">
        <img src="../assets/icons/order-2.png" />
        <span>付款倒计时 </span>
        <span style="color: #4f75fe">13：00</span>
      </div>

      <span class="title">请核实打款信息，重新上传凭证</span>
    </div>
    <div class="content-box">
      <ul>
        <li>
          <label>总价</label>
          <span style="color: #4f75fe">￥100</span>
        </li>
        <li>
          <label>价格</label>
          <span>￥6.2</span>
        </li>
        <li>
          <label>买入数量</label>
          <span>12.000123 USDT</span>
        </li>
        <li>
          <label>订单编号</label>
          <span>23485435123564564</span>
        </li>
        <li>
          <label>卖家昵称</label>
          <span>礼物热狗</span>
        </li>
        <li>
          <label>付款方式</label>
          <span>银行卡</span>
        </li>
        <li>
          <label>创建时间</label>
          <span>2020-02-06 15:00:00</span>
        </li>
      </ul>
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
  methods: {},
};
</script>
<style lang="scss" scoped>
.content {
  height: 100vh;
  overflow: hidden;
  background-color: #f4f6f8;
  .main-box {
    background-color: #fff;
    border-radius: 0px 0px 40px 40px;
    margin-top: 40px;
    text-align: center;
    padding: 14px 0 10px 0;
    .head {
      display: flex;
      justify-content: center;
      font-size: 14px;
      font-weight: 600;
      padding: 6px 0;
    }
   .title {
      color: #999;
      font-size: 11px;
    }
  }
  .content-box {
    margin: 20px;
    background-color: #fff;
    border-radius: 16px;
    ul {
      padding: 10px 20px;
      li {
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        span {
          color: #999;
        }
      }
    }
  }
}
</style>
