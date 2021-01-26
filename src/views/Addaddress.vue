<template>
  <div class="content">
    <nav-bar :nav-data="navData"></nav-bar>
    <div class="list">
      <div class="input">
        <label>自定义名称</label>
          <van-field v-model="phone"  placeholder="请输入名称" />
      </div>
      <div class="input">
        <label>USDT地址</label>
         <van-field v-model="phone" placeholder="请输入地址" />
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
      phone: '',
    };
  },
  created() {},
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
    background-color: #fff;
    padding: 10px 20px;
    margin-top: 60px;
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
  width: 80%;
}
</style>
