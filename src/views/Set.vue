<template>
  <div class="content">
    <nav-bar :nav-data="navData"></nav-bar>
    <div class="list">
      <div class="input">
        <label>绑定手机号</label>
        <p @click="updatePhone">
          <span style="margin-right: 10px">{{ nickname }}</span>
          <img src="../assets/icons/right.png" />
        </p>
      </div>
      <div class="input">
        <label>联系我们</label>
        <p>
          <img src="../assets/icons/right.png" />
        </p>
      </div>
    </div>
    <div class="submit-box">
     <div>
        <van-button class="primary-btn" @click="onClick"> 退出登录</van-button>
      <p>设置 关于使用本平台的 和 <span style="color: #4f75fe">《XX隐私政策》</span> <span style="color: #4f75fe">《XX服务协议》</span></p>
     </div>
    </div>
     <van-dialog v-model="show" title="确认退出" :close-on-click-overlay="true" 
     show-cancel-button
     showConfirmButton 
     showCancelButton
     cancel-button-text="在等等"
     :confirm-button-color="'#fff'" 
     :cancel-button-color="'#999'"
     confirm-button-text="确定">
      <p>确认需退出当前账号？</p>
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
      fileList: ['../assets/img/3.png'],
      nickname: '13420221998',
      show: false,
    };
  },
  created() {},
  methods: {
    onClick() {
      this.show = true;
    },
    updatePhone() {
      this.$router.push('/ChangePhone');
    },
    confirm(){

    },
    cancel(){}
  },
};
</script>
<style lang="scss" scoped>
.content {
  height: 100vh;
  overflow: hidden;
  background: #f4f6f8;
  .list {
    background-color: #fff;
    margin-top: 60px;
    padding: 10px 20px;
  }
}

label {
  font-size: 12px;
  font-weight: 500;
  color: #000000;
}
.submit-box {
  position: fixed;
  top:100%;
  width: 100%;
  left: 50%;
  transform: translate(-50%,-100%);
  text-align: center;
  margin:  0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  .primary-btn {
    width: 100%;
    border-radius: 50px;
    height: 40px;
    font-size: 14px;
    font-weight: 600;
  }
  ::v-deep .van-button--default {
  background: #4f75fe;
  color: #fff;
  border: none;
}
}

.input {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.van-dialog {
  text-align: center;
  width: 70%;
  font-size: 14px;
}
::v-deep .van-dialog__footer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  padding:0 40px;
  .van-button{
    height: 34px;
    margin: 0 10px;
  }
}
::v-deep .van-dialog__content{
   margin: 20px 40px;
}
::v-deep .van-dialog__cancel{
  border-radius: 60px;
  background: #eee;
}
::v-deep  .van-dialog__confirm{
  border-radius: 60px;
  background: #4f75fe;
}
</style>
