<template>
  <div class="content">
    <nav-bar :nav-data="navData"></nav-bar>
    <div class="main-box">
      <div class="head">
        <van-sticky>
          <div class="tab_wrap" :offset-top="30">
            <div class="tab_item" :class="{ tab_active: tab == 1 }" @click="tab = 1">购买明细</div>
            <div class="tab_item" :class="{ tab_active: tab == 2 }" @click="tab = 2">提币记录</div>
          </div>
        </van-sticky>
      </div>
    </div>
    <div class="list_wrap">
      <div v-show="tab == 1" class="invite-content">
        <ul>
          <li>购买时间</li>
          <li>订单金额</li>
          <li>购买数量</li>
        </ul>
        <ul v-for="(item, index) in list" :key="index" class="box">
          <li>{{ item.time }}</li>
          <li>{{ item.num }}</li>
          <li>{{ item.price }}</li>
        </ul>
      </div>
      <div v-show="tab == 2" class="bg-box">
        <div>
          <p>审核中</p>
          <span>100.000000 USDT</span>
        </div>
         <div>
          <p>已提币数量</p>
          <span>100.012310 USDT</span>
        </div>
      </div>
      <div v-show="tab == 2" class="invite-content">
        <ul>
          <li>提现时间</li>
          <li>审核状态</li>
          <li>提币数量</li>
        </ul>
        <ul v-for="(item, index) in list" :key="index" class="box">
          <li>{{ item.time }}</li>
          <li>{{ item.num }}</li>
          <li>{{ item.price }}</li>
        </ul>
      </div>
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
      tab: 1,
      list: [
        {
          id: '5435562839856',
          time: '2020/08/02 15:00:00111111',
          num: '12.00123 USDT',
          price: '200.00 CNY',
        },
        {
          id: '5435562839856',
          time: '2020/08/02 15:00:00',
          num: '200.00 CNY',
          price: '12.000000USDT',
        },
      ],
    };
  },
  created() {
    if (this.$route.query.tab) {
      this.tab = this.$route.query.tab;
    }
  },
  methods: {
    gotoDetails() {
      this.$router.push('/OrderDetails');
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
      padding: 18px 0;
      .tab_wrap {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
      }
      .tab_wrap .tab_item {
        text-align: center;
        color: #666666;
        margin: 0 auto;
        height: 34px;
        width: 30%;
        line-height: 34px;
        background: #f4f6f8;
        border-radius: 40px;
      }
      .tab_wrap .tab_active {
        height: 34px;
        width: 30%;
        line-height: 34px;
        background: #4f75fe;
        border-radius: 40px;
        color: #fff;
        font-weight: 500;
        text-align: center;
      }
    }
  }
  .list_wrap {
    margin: 20px;
    .invite-content {
      margin: 10px 0;
      background-color: #fff;
      padding: 10px;
      border-radius: 16px;
      ul {
        display: flex;
        justify-content: space-between;

        li {
          width: 33%;
          padding: 5px;
          line-height: 20px;
          border-bottom: 1px solid #eee;
        }
      }
      .box {
        color: #999;
      }
      div {
        display: flex;
        text-align: left;
        color: #666;
        P:first-child {
          width: 60%;
        }
        P:last-child {
          width: 40%;
        }
      }
      p {
        margin: 5px 0;
      }
      .title {
        font-weight: 600;
        color: #333;
        font-size: 12px;
        .title-t {
          display: flex;
          align-items: center;
          span {
            display: inline-block;
            width: 4px;
            height: 12px;
            background: #febe53;
            border-radius: 4px;
            margin-right: 4px;
          }
        }
      }
    }
  }
  .bg-box {
    background: url('../assets/img/market-3.png') no-repeat;
    background-size: 100% 100%;
    height: 12vh;
    background: #febe53;
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    text-align: center;
    font-weight: 600;
    div{
      margin: 0px 20px;
    }
    p{
      margin-top: 0;
    }
  }
}
</style>
