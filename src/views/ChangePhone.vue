<template>
  <div class="content">
    <nav-bar :nav-data="navData"></nav-bar>
     <p class="title">当前手机号为18323658410，请输入新手机号</p>
    <div class="list">
      <div class="input">
        <label>手机号</label>
          <van-field v-model="phone" type="number" maxlength="11" placeholder="请输入手机号" />
      </div>
      <div class="input">
        <label>验证码</label>
         <van-field v-model="code" type="digit"  maxlength="6" placeholder="请输入验证码">
          <template #button>
            <van-button class="send-btn" :class="isSendCode ? 'disable' : ''" @click="onSendCode">
              {{ isSendCode ? '已发送' + codeTime : '获取验证码' }}
            </van-button>
          </template>
        </van-field>
      </div>
    </div>
    <div class="submit-box">
        <van-button class="primary-btn" @click="onClick"> 完成</van-button>
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
      isSendCode: false,
      codeTime: 0,
      aVisiable: false,
      fileList: ['../assets/img/3.png'],
      code: '',
      phone: '',
    };
  },
  created() {},
  methods: {
    onClick() {
    },
    confirm(){

    },
    cancel(){},
    onSendCode() {},
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
    padding: 10px 20px;
  }
  .title{
       margin: 60px 20px 10px 20px;
       color: #999;
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
  width: 100%;
}

</style>
