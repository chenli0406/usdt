<template>
  <div class="content">
    <nav-bar :nav-data="navData"></nav-bar>
    <div class="main-box">
      <div class="head_box"></div>
      <div class="bg-box">
        <div class="bg-item">
          <p>可提现数量</p>
          <span> {{ num }}USDT</span>
        </div>
      </div>
    </div>
    <div class="menu">
      <div style="margin-top: 10px; height: 20px"></div>
      <div class="menu-box">
        <div class="input">
          <van-field v-model="form.money" type="number" placeholder="请输入提币数量" />
          <span style="color: #4f75fe; width: 130px" @click="onAll">全部提出</span>
        </div>
        <div class="input">
          <label style="w">USDT收货地址</label>
          <span v-if="form.address == ''" style="color: #999" @click="changeAddress"> 请选择地址 <img src="../assets/icons/right.png" /> </span>
          <span class="address" v-else @click="changeAddress"> {{ form.address }}</span>
        </div>
      </div>
    </div>
    <div class="submit-box">
        <van-button class="primary-btn" @click="onClick"> 确认提币</van-button>
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
      num: '500',
      form: {
        money: '',
        address: '',
      },
    };
  },
  mounted() {
    console.log(this.$route.params.accountData);
    if (this.$route.params.accountData != undefined) {
      this.form.address = this.$route.params.accountData.address;
    }
  },
  created() {},
  methods: {
    onClick() {
      this.$router.push('/Api');
    },
    onAll() {
      this.form.money = this.num;
    },
    changeAddress() {
      this.$router.push('/ChangeAddress');
    },
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
    margin-top: -50px;
    height: 100vh;
    background: #f4f6f8;
    border-radius: 50px 50px 0px 0px;
    .menu-box {
      padding: 10px 20px;
      border-radius: 20px;
      margin: 0 20px;
      margin-top: 60px;
      background-color: #fff;
      .input {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
        .address {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 60%;
          color: #999;
        }
      }
      .input:first-child {
        border-bottom: 1px solid #eee;
      }
    }
    .van-cell {
      padding: 0;
      color: #999;
    }
    .van-cell::after {
      border: none;
    }
  }
}
.bg-box {
  background: url('../assets/img/fastMoney.png') no-repeat;
  background-size: 100% 100%;
  position: relative;
  top: 0px;
  .bg-item {
    padding: 20px;
    color: #fff;
    text-align: center;
    span {
      font-size: 16px;
      font-weight: 600;
    }
    p {
      margin-top: 0;
    }
  }
}
.submit-box {
  position: fixed;
  top:96%;
  left: 50%;
  width: 80%;
  transform: translate(-50%,-100%);
  text-align: center;
  margin:  0 auto;
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
}
}
</style>
