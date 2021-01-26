<template>
  <div class="content">
    <nav-bar :nav-data="navData"></nav-bar>
    <div class="list">
      <div class="input" v-if="tab == 1">
        <label>开户人姓名</label>
         <van-field v-model="phone" placeholder="请输入开户人姓名" />
      </div>
      <div class="input" v-if="tab == 1">
        <label>开户行</label>
         <van-field v-model="phone" placeholder="请输入开户行" />
      </div>
      <div class="input" v-if="tab == 1">
        <label>卡号</label>
         <van-field v-model="phone" type="number" maxlength="18" placeholder="请输入卡号" />
      </div>
       <div class="input" v-if="tab == 2">
        <label>微信账号</label>
         <van-field v-model="phone"   placeholder="请输入微信账号" />
      </div>
       <div class="input" v-if="tab == 2">
        <label>实名姓名</label>
         <van-field v-model="phone"   placeholder="请输入实名姓名" />
      </div>
       <div class="input" v-if="tab == 3">
        <label>支付宝账号</label>
          <van-field v-model="phone"  placeholder="请输入支付宝账号" />
      </div>
      <div class="input" v-if="tab == 3">
        <label>实名姓名</label>
         <van-field v-model="phone"   placeholder="请输入实名姓名" />
      </div>
         <div class="uploader-box">
          <p>收款二维码</p>
         <van-uploader v-model="fileList" max-count="1">
        <div class="box">
          <img src="../assets/img/add.png" />
        </div>
      </van-uploader>
      </div>
    </div>
    <div class="submit-box">
        <van-button class="primary-btn" @click="onClick"> 保存</van-button>
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
      fileList: [],
      code: '',
      phone: '',
      tab: "",
    };
  },
  created() {
      if( this.$route.query.tab){
        this.tab = this.$route.query.tab;
       }
  },
  methods: {
    onClick() {
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  height: 100vh;
  overflow: hidden;
  background: #f4f6f8;
  .list {
    margin-top: 60px;
    background-color: #fff;
    padding: 10px 20px;
  }
}
label {
  font-size: 12px;
  font-weight: 500;
  color: #000000;
  width: 20%;
}
.submit-box {
  position: fixed;
  top:96%;
  left: 50%;
  width: 80%;
  transform: translate(-50%,-100%);
  text-align: center;
  margin:  0 auto;
   @media screen and (min-width: 1200px) {
      width: 50%;
    }
  .primary-btn {
    width: 100%;
    border-radius: 50px;
    height: 40px;
    font-size: 14px;
    font-weight: 600;
     box-shadow: 0px 6px 9px 0px rgba(79, 117, 254, 0.44);
  }
  ::v-deep .van-button--default {
  background: #4f75fe;
  color: #fff;
  border: none;
}
}


.input {
  display: flex;
  align-items: center;
  .van-button--default{
   border: none;
   color:  #4f75fe;
}
}
.van-cell{
  width: 90%;
}
::v-deep .van-uploader__preview-image {
  border-radius: 10px;
  width: 80px;
  height: 60px;
}
::v-deep .van-uploader__preview {
  margin-bottom: 14px;
}
::v-deep .van-uploader__wrapper {
  display: flex;
  justify-content: space-between;
}
::v-deep .van-uploader__wrapper::after {
  content: '';
  width: 80px;
  border-radius: 10px;
  background-color: transparent;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .van-uploader__input-wrapper {
  width: 80px;
  border-radius: 10px;
  background-color: #f6f7fb;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
