<template>
  <div class="content">
    <div class="login"></div>
    <div class="from">
      <div class="input">
        <van-field
         v-model="form.mobile"
          type="number" 
         :left-icon="phoneIcon"   
         :right-icon="rightIcon"
         maxlength="11" 
         placeholder="请输入账号" 
         @click-right-icon="clear" 
         @focus="focus"
         @blur="blur"
         />
        <van-field v-model="form.code" type="digit" :left-icon="passwoedIcon" maxlength="6" placeholder="请输入验证码">
          <template #button>
            <van-button class="send-btn" :class="isSendCode ? 'disable' : ''" @click="onSendCode">
              {{ isSendCode ? '已发送' + codeTime : '获取验证码' }}
            </van-button>
          </template>
        </van-field>
        <van-button class="primary-btn" @click="onClick"> 确认登录 </van-button>
      </div>
      <!-- <van-button class="register-btn" @click="gotoRegister"> 没有账号，去注册 </van-button> -->
    </div>

    <div class="bottom">
      <span>登录注册即代表你已同意</span>
      <span style="color: #4f75fe"> 《隐私政策》 </span>
      <span>和</span>
      <span style="color: #4f75fe"> 《服务协议》 </span>
    </div>
  </div>
</template>

<script>
import { isEmpty, isMobilePhone } from 'class-validator';
export default {
  data() {
    return {
      form: {
        mobile: '',
        code: '',
      },
      rightIcon: "",
      isSendCode: false,
      codeTime: 0,
      aVisiable: false,
      phoneIcon: require('@/assets/icons/phone.png'),
      passwoedIcon: require('@/assets/icons/password.png'),
    };
  },
  created() {
    console.log(this.$store.state.userAgent);
  },
  methods: {
    onClick() {
      if (!isMobilePhone(this.form.mobile, 'zh-CN')) {
        this.$toast('请输入有效手机号');
        return;
      }
      if (isEmpty(this.form.code)) {
        this.$toast('请输入短信验证码');
        return;
      }
      this.setStore('token', '123');
      this.$router.push('/Index');
      return false;
    },
    onSendCode() {},
    gotoRegister() {
      this.$router.push('/Register');
    },
    clear(){
       this.form.mobile = "";
        this.rightIcon = ""
    },
    focus(){
       this.rightIcon = "cross"
    },
    blur(){
    }
  },
};
</script>
<style lang="scss" scoped>
.from {
  background-color: #fff;
  box-shadow: 0px 0px 40px 0px rgba(184, 168, 205, 0.42);
  position: absolute;
  left: 0;
  right: 0;
  top: 20px;
  bottom: 0;
  margin: auto;
  border-radius: 20px;
  height: 32vh;
   @media screen and (min-width:337px){
    width: 80%;
  }
  @media screen and (min-width:576px){
    width: 80%;
  }
  @media screen and (min-width:768px){
    width: 80%;
  }
  @media screen and (min-width: 992px) {
    width: 40%;
  }
  @media screen and (min-width: 1200px) {
    width: 30%;
    height: 36vh;
  }
  .input{
    margin-top: 20px;
  }
}
.login {
  background: url('../assets/img/login-bg.png') no-repeat;
  height: 54vh;
  position: relative;
  background-size: 100% 100%;
}
.send-btn {
  border: none;
  color: #4f75fe;
}
.van-cell {
  background-color: transparent !important;
  width: 80%;
  color: #999999;
  margin: 0 auto;
  padding: 20px 0px 4px 0px;
  border-bottom: 0.02667rem solid #ebedf0;
  display: flex;
  align-items: center;
}
.van-cell::after {
  border: none;
}
.primary-btn {
  background: #4f75fe!important;
  border-radius: 50px;
  color: #fff;
  border: none;
  font-weight: bold;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  text-align: center;
  font-family: PingFang SC;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  width: 60%;
  bottom: -20px;
}
.bottom {
  position: fixed;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  padding: 0 10px;
  bottom: 40px;
}
.register-btn {
  position: absolute;
  bottom: -30px;
  color: #999999;
  margin: auto;
  border: none;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 14px;
  bottom: -60px;
}
.van-button--default{
  background-color: transparent;
  border: none;
}
.van-button{
  line-height: 0px;
}
::v-deep  .van-field__right-icon{
  font-size: 40px;
}
::v-deep  .van-icon__image{
  width: 1.2em;
  height: 1.2em;
}
</style>
