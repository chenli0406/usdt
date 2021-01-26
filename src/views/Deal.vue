<template>
  <div class="content">
    <nav-bar :nav-data="navData"></nav-bar>
    <div class="main-box">
      <div class="head" v-if="flag">
        <img class="img" src="../assets/img/market-1.png" />
        <div class="right-box" @click="change">
          <img src="../assets/img/market-2.png" />
          <span v-if="active == true" style="margin-left: 10px">按数量购买</span>
          <span v-if="active == false" style="margin-left: 10px">按金额购买</span>
        </div>
      </div>
      <div class="head" v-else>
        <img class="img" src="../assets/img/deal.png" />
        <div class="right-box1" @click="change">
          <div>
            <span style="margin-right: 10px" @click="$router.push('QuickTopUp')">去充币</span>
            <img src="../assets/icons/deal-right.png" />
          </div>
          <p>可用余额：123123.000000</p>
        </div>
      </div>
    </div>
    <div class="content-box" v-if="flag">
      <div class="box">
        <p v-if="active == true">购买金额 CNY</p>
        <p v-if="active == false">购买数量 CNY</p>
        <div class="input">
          <van-field v-model="money" type="number" />
          <span v-if="active == true">￥100 起</span>
          <span v-if="active == false">请输入购买数量</span>
        </div>
        <span>价格约6.41CNY/USDT</span>
      </div>
    </div>
    <div class="content-box1" v-else>
      <div class="box">
        <p>卖出数量</p>
        <div class="input">
          <van-field v-model="money" type="number" placeholder="请输入卖出数量 USDT" />
        </div>
        <div class="input">
          <van-field v-model="money" type="number" placeholder="请输入卖出单价" />
        </div>
        <div class="btn-box">
          <span>价格约6.41CNY/UDST</span>
          <van-button class="btn"> 总价￥650 </van-button>
        </div>
      </div>
    </div>
    <div class="deal-box">
      <p>交易方式</p>
      <ul>
        <li v-for="(item, index) in aplyList" :key="index" @click="onSelectitem(index)" :class="{ checked: index == activeIndex }">
          <img :src="item.icon" />
          <span>{{ item.name }}</span>
          <img class="img" src="../assets/img/deal-1.png" />
        </li>
      </ul>
    </div>
    <div class="submit-box" >
      <van-button class="primary-btn" @click="onClick"> 立即购买 </van-button>
      <p style="margin: 40px auto; width: 80%; text-align: center">点击购买即表示您已同意<span style="color: #4f75fe"> 《XXXX买卖交易协议》 </span></p>
    </div>
    <div class="submit-box" >
      <van-button class="primary-btn" @click="dialog = true"> 立即出售 </van-button>
      <p style="margin: 40px auto; width: 80%; text-align: center">点击购买即表示您已同意<span style="color: #4f75fe"> 《XXXX买卖交易协议》 </span></p>
    </div>
    <van-action-sheet v-model="show" :closeable="false" title="确认购买">
      <div class="sheet-box">
        <div class="clear" @click="onColse">X</div>
        <div class="sheet-content">
          <ul>
            <li v-for="(item, index) in aplyList" :key="index" @click="onSelectitem(index)" :class="{ checked: index == activeIndex }">
              <img :src="item.icon" />
              <span>{{ item.name }}</span>
            </li>
          </ul>
          <div class="sheet-item">
            <span>价格</span>
            <span style="color: #999">6.44CNY/USDT</span>
          </div>
          <div class="sheet-item">
            <span>数量</span>
            <span style="color: #999">200.000000 USDT</span>
          </div>
          <p class="num">￥1，288.00</p>
        </div>
        <van-button class="primary-btn" @click="onSubmit"> 确认购买 </van-button>
      </div>
    </van-action-sheet>
    <van-dialog v-model="dialog" title="挂单成功" :close-on-click-overlay="true" showConfirmButton confirm-button-color="'#fff'" confirm-button-text="确定">
      <p style="color: #999; font-size: 24px; text-align: center">挂单成功，注意及时确认订单信息</p>
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
        leftIcon: false,
        leftImg: require('@/assets/img/deal-logo.png'),
      },
      money: '',
      active: true,
      show: false,
      activeIndex: 0,
      flag: false,
      dialog: false,
      aplyList: [
        {
          name: '银行卡',
          icon: require('@/assets/img/bank.png'),
        },
        {
          name: '微信',
          icon: require('@/assets/img/weixin.png'),
        },
        {
          name: '支付宝',
          icon: require('@/assets/img/zhifubao.png'),
        },
      ],
    };
  },
  created() {},
  methods: {
    change() {
      if (this.active == true) {
        this.active = false;
      } else {
        this.active = true;
      }
    },
    onClick() {
      this.show = true;
    },
    onSubmit() {
      this.$router.push('/Order');
    },
    onColse() {
      this.show = false;
    },
    onSelectitem(index) {
      this.activeIndex = index;
    },
  },
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
    .head {
      padding: 14px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #4f75fe;
      .img {
        width: 100px;
      }
      .right-box {
        display: flex;
        align-items: center;
      }
      .right-box1 {
        text-align: right;
        p {
          color: #333;
          margin: 4px;
        }
      }
    }
  }
  .content-box {
    background: url('../assets/img/market-3.png') no-repeat;
    background-size: 100% 100%;
    margin: 20px;
    color: #fff;
    .box {
      padding: 20px;
      p {
        font-weight: 600;
        margin: 0px;
      }
      .input {
        background-color: #fff;
        display: flex;
        align-items: center;
        border-radius: 44px;
        margin: 10px 0;
        span {
          color: #999999;
          display: inline-block;
          padding: 0px 10px;
          width: 30%;
        }
      }
      span {
        font-size: 10px;
        text-align: right;
      }
    }
  }
}
.content-box1 {
  background: url('../assets/img/deal-bg.png') no-repeat;
  background-size: 100% 100%;
  margin: 20px;
  color: #fff;
  .box {
    padding: 20px;
    p {
      font-weight: 600;
      margin: 0px;
    }
    .input {
      background-color: #fff;
      display: flex;
      align-items: center;
      border-radius: 44px;
      margin: 10px 0;
      span {
        color: #999999;
        display: inline-block;
        padding: 0px 10px;
        width: 30%;
      }
    }
    span {
      font-size: 10px;
      text-align: right;
    }
  }
}
.deal-box {
  margin: 20px;
  p {
    font-weight: 600;
  }
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    li {
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 28%;
      text-align: center;
      height: 60px;
      line-height: 50px;
      background: #fff;
      border-radius: 8px;
      position: relative;
      span {
        margin: 10px 0;
      }
      .img {
        position: absolute;
        top: 0;
        right: 0;
        @media screen and (min-width: 992px) {
          height: 20px;
        }
        @media screen and (min-width: 1200px) {
          height: 20px;
        }
      }
    }
  }
}
.submit-box {
  margin: 20px;
  .primary-btn {
    width: 100%;
    box-shadow: 0px 6px 8px 0px rgba(79, 117, 254, 0.44);
    border-radius: 50px;
  }
  ::v-deep .van-button--default {
    background: #4f75fe;
    color: #fff;
    border: none;
  }
}
.btn-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  .btn {
    height: 28px;
    border: 1px solid #ffffff;
    border-radius: 30px;
    color: #fff;
    background-color: transparent;
  }
}

.van-cell {
  width: 100%;
  border-radius: 44px;
  line-height: 20px;
}
::v-deep .van-field__control {
  text-align: right;
}

.sheet-box {
  padding: 20px;
  .primary-btn {
    width: 100%;
    background: #4f75fe;
    border-radius: 50px;
    color: #fff;
    border: none;
    font-weight: bold;
  }
  .sheet-content {
    p {
      margin: 0px 0px 40px 0;
      color: #000;
    }
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      li {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 28%;
        margin-bottom: 30px;
        text-align: center;
        height: 50px;
        line-height: 50px;
        background: #f2f5ff;
        border-radius: 8px;
      }
    }
    .sheet-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;
      border-bottom: 1px solid #eee;
    }
    .num {
      font-size: 16px;
      font-weight: 500;
      color: #4f75fe;
      text-align: center;
      margin: 20px 0;
    }
  }
  .clear {
    position: absolute;
    top: 16px;
    right: 20px;
  }
}
.checked {
  border: 1px solid #4f75fe;
}
.van-dialog {
  text-align: center;
  width: 70%;
}
::v-deep .van-dialog__footer {
  width: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  margin-bottom: 20px;
  border-radius: 50px;
  height: 40px;
  box-shadow: 0px 6px 9px 0px rgba(79, 117, 254, 0.44);
}
::v-deep .van-dialog__content {
  margin: 20px 40px;
}
::v-deep .van-dialog__confirm {
  background: #4f75fe;
  color: #fff;
}
</style>
