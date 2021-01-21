<template>
  <div class="content">
    <div class="login"></div>
    <div class="from">
      <div class="input">
        <van-field v-model="form.mobile" type="number" :left-icon="phoneIcon" maxlength="11" placeholder="请输入手机号" />
        <van-field v-model="form.code" type="digit" :left-icon="passwoedIcon" maxlength="6" placeholder="请输入验证码">
          <template #button>
            <van-button class="send-btn" :class="isSendCode ? 'disable' : ''" @click="onSendCode">
              {{ isSendCode ? '已发送' + codeTime : '获取验证码' }}
            </van-button>
          </template>
        </van-field>
        <button class="primary-btn" @click="onClick"> 确认登录 </button>
      </div>
      <button class="register-btn" @click="gotoRegister"> 没有账号，去注册 </button>
    </div>

    <div class="bottom">
      <span>登录即代表你已同意</span>
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
      isSendCode: false,
      codeTime: 0,
      aVisiable: false,
      phoneIcon: require('@/assets/icons/phone.png'),
      passwoedIcon: require('@/assets/icons/password.png'),
    };
  },
  created() {},
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
      this.$router.push('/');
      return false;
    },
    onSendCode() {},
    gotoRegister() {
      this.$router.push('/Register');
    },
  },
};
</script>
<style lang="scss" scoped>
.from {
  // background: url('../assets/img/login-from.png') no-repeat;
  // background-size: 100% 100%;
  background-color: #fff;
  box-shadow: 0px 0px 40px 0px rgba(184, 168, 205, 0.42);
  position: absolute;
  left: 0;
  right: 0;
  top: 20px;
  bottom: 0;
  margin: auto;
  @media screen and (min-width:280px) and(max-width:1200px){
    width: 80%;
    height: 32vh;
    border-radius: 35px;
  }
  @media screen and (min-width: 992px) {
    width: 70%;
    height: 32vh;
    border-radius: 25px;
  }
  @media screen and (min-width: 1200px) {
    width: 60%;
    height: 40vh;
    border-radius: 10px;
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
  font-size: 6px;
  color: #999999;
  margin: 0 auto;
  border-bottom: 0.02667rem solid #ebedf0;
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
  @media screen and (min-width: 280px) {
    font-size: 10px;
    height: 50px;
    line-height: 50px;
    width: 60%;
    bottom: -40px;
  }
  @media screen and (min-width: 337px) {
    font-size: 10px;
    height: 50px;
    line-height: 50px;
    width: 60%;
    bottom: -30px;
  }
  @media screen and (min-width: 576px) {
    font-size: 16px;
    height: 50px;
    line-height: 50px;
    width: 60%;
    bottom: -20px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 6px;
    height: 20px;
    line-height: 20px;
    width: 30%;
    bottom: -10px;
  }
}
.bottom {
  position: fixed;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  color: #999999;
  padding: 0 10px;
  @media screen and (min-width: 280px) {
    bottom: 40px;
  }
  @media screen and (min-width: 337px) {
    bottom: 40px;
  }
  @media screen and (min-width: 576px) {
    bottom: 40px;
  }
   @media screen and (min-width: 768px) {
     bottom: 10px;
  }
  @media screen and (min-width: 1200px) {
    bottom: 4px;
  }
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
  @media screen and (min-width: 337px) {
    font-size: 14px;
    bottom: -50px;
  }
  @media screen and (min-width: 576px) {
    font-size: 14px;
    bottom: -60px;
  }
  @media screen and (min-width: 768px) {
     font-size: 12px;
     bottom: -50px;
  }
  @media screen and (min-width: 1200px) {
    font-size: 6px;
    bottom: -25px;
  }
}
.van-button--default{
  background-color: transparent;
}
</style>
