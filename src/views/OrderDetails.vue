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
    <div class="img-box">
      <p>打款截图凭证</p>
      <ul>
        <li v-for="(item, index) in list" :key="index">
          <img :src="item" />
        </li>
      </ul>
    </div>
    <div class="submit-box">
      <div class="box">
        <van-button class="btn-1" @click="notShow = true"> 未收到款 </van-button>
        <van-button class="btn-2" @click="submitShow = true"> 确认已收款 </van-button>
      </div>
    </div>
    <van-dialog v-model="notShow" title="确认未收款"
     :close-on-click-overlay="true" 
    show-cancel-button
     showConfirmButton 
     showCancelButton
     cancel-button-text="确定"
     :confirm-button-color="'#999'" 
     :cancel-button-color="'#fff'"
     confirm-button-text="再等等"
     @confirm="notConfirm"
     @cancel="notCancel"
      >
      <p style="color: #999; font-size: 24px; padding: 0px 20px; text-align: center">部分交易方式到账可能延迟请多耐心等待一下。</p>
    </van-dialog>
    <van-dialog v-model="submitShow" title="确认收款" 
    :close-on-click-overlay="true" 
   show-cancel-button
     showConfirmButton 
     showCancelButton
     @confirm="confirm"
     @cancel="cancel"
     cancel-button-text="确定"
     :confirm-button-color="'#999'" 
     :cancel-button-color="'#fff'"
     confirm-button-text="再等等">
      <p>确认收款后交易将完成。</p>
    </van-dialog>
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
      notShow: false,
      submitShow: false,
      list: [require('../assets/img/4.png'), require('../assets/img/4.png'), require('../assets/img/4.png'), require('../assets/img/4.png')],
    };
  },
  created() {},
  methods: {
    onNot() {},
    onSubmit() {},
     notConfirm(){

    },
    notCancel(){
      console.log("1");
    },
    confirm(){},
    cancel(){}
  },
};
</script>
<style lang="scss" scoped>
.content {
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
      li:last-child {
        border: none;
      }
    }
  }
}
.img-box {
  margin: 20px;
  p {
    font-weight: 600;
  }
  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-bottom: 40px;
    li {
      width: 30%;
      border-radius: 10px;
      margin-bottom: 10px;
      @media screen and (min-width: 992px) {
        width: 13%;
      }
      @media screen and (min-width: 1200px) {
        width: 13%;
      }
      img {
        width: 100%;
      }
    }
  }
  ul::after {
    width: 30%;
    content: '';
    background-color: transparent;
  }
}

.submit-box {
  background: #fff;
  position: fixed;
  bottom: 0px;
  width: 100%;
  @media screen and (min-width: 992px) {
    width: 60%;
  }
  @media screen and (min-width: 1200px) {
    width: 60%;
  }
  padding-top: 10px;
  .box {
    display: flex;
    justify-content: space-between;
    margin: 0 20px;
    text-align: center;
    .btn-1 {
      width: 40%;
      border-radius: 50px;
      height: 40px;
      font-size: 12px;
      font-weight: 600;
      background: #febe53;
      color: #fff;
      box-shadow: 0px 6px 12px 0px rgba(254, 190, 83, 0.44);
      @media screen and (min-width: 992px) {
        width: 20%;
      }
      @media screen and (min-width: 1200px) {
        width: 20%;
      }
    }
    .btn-2 {
      width: 50%;
      border-radius: 50px;
      height: 40px;
      font-size: 12px;
      font-weight: 600;
      background: #4f75fe;
      color: #fff;
      box-shadow: 0px 6px 12px 0px rgba(79, 117, 254, 0.44);
      @media screen and (min-width: 992px) {
        width: 30%;
      }
      @media screen and (min-width: 1200px) {
        width: 40%;
      }
    }
  }
}
::v-deep .van-button--default {
  background: #4f75fe;
  color: #fff;
  border: none;
}
.van-dialog {
  text-align: center;
  width: 70%;
  font-size: 14px;
}
::v-deep .van-dialog__footer {
  display: block;
  margin: 10px auto;
  padding:0 40px;
  .van-button{
    height: 34px;
  }
}
::v-deep .van-dialog__content{
   margin: 20px 40px;
}
::v-deep .van-dialog__cancel{
  border-radius: 60px;
  background: #4f75fe;
  margin-bottom: 10px;
}
::v-deep  .van-dialog__confirm{
font-size: 14px;
  background: transparent;
}
::v-deep .van-hairline--top::after{
  border: none!important;
}
</style>
