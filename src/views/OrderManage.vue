<template>
  <div class="content">
    <nav-bar :nav-data="navData"></nav-bar>
    <div class="main-box">
      <div class="head">
        <van-sticky>
          <div class="tab_wrap" :offset-top="30">
            <div class="tab_item" :class="{ tab_active: tab == 1 }" @click="tab = 1">已挂单</div>
            <div class="tab_item" :class="{ tab_active: tab == 2 }" @click="tab = 2">待付款</div>
            <div class="tab_item" :class="{ tab_active: tab == 3 }" @click="tab = 3">待确认</div>
            <div class="tab_item" :class="{ tab_active: tab == 4 }" @click="tab = 4">已完成</div>
          </div>
        </van-sticky>
      </div>
    </div>
    <div class="list_wrap">
      <ul v-show="tab == 1" class="invite-content">
        <li v-for="(item, index) in list" :key="index" @click="gotoDetails">
          <div class="title">
            <p class="title-t"><span></span> 订单编号：{{ item.id }}</p>
            <p>付款倒计时：{{ item.time }}</p>
          </div>
          <div>
            <p>买家昵称：{{ item.nikeName }}</p>
            <p>付款方式：{{ item.type }}</p>
          </div>
          <p style="color: #666;">买入数量： {{ item.num }}</p>
          <div>
            <p>价格：￥{{ item.price }}</p>
            <p>总价：<span style="color:#4f75fe">￥{{ item.total }}</span></p>
          </div>
        </li>
      </ul>
      <ul v-show="tab == 2" class="invite-content">
        <li v-for="(item, index) in list" :key="index" @click="gotoDetails">
          <div class="title">
            <p class="title-t"><span></span> 订单编号：{{ item.id }}</p>
            <p>付款倒计时：{{ item.time }}</p>
          </div>
          <div>
            <p>买家昵称：{{ item.nikeName }}</p>
            <p>付款方式：{{ item.type }}</p>
          </div>
          <p style="color: #666;">买入数量： {{ item.num }}</p>
          <div>
            <p>价格：￥{{ item.price }}</p>
            <p>总价：<span style="color:#4f75fe">￥{{ item.total }}</span></p>
          </div>
        </li>
      </ul>
      <ul v-show="tab == 3" class="invite-content">
         <li v-for="(item, index) in list" :key="index" @click="gotoDetails">
          <div class="title">
            <p class="title-t"><span></span> 订单编号：{{ item.id }}</p>
            <p>付款倒计时：{{ item.time }}</p>
          </div>
          <div>
            <p>买家昵称：{{ item.nikeName }}</p>
            <p>付款方式：{{ item.type }}</p>
          </div>
          <p style="color: #666;">买入数量： {{ item.num }}</p>
          <div>
            <p>价格：￥{{ item.price }}</p>
            <p>总价：<span style="color:#4f75fe">￥{{ item.total }}</span></p>
          </div>
        </li>
      </ul>
      <ul v-show="tab == 4" class="invite-content">
         <li v-for="(item, index) in list" :key="index" @click="gotoDetails">
          <div class="title">
            <p class="title-t"><span></span> 订单编号：{{ item.id }}</p>
            <p>付款倒计时：{{ item.time }}</p>
          </div>
          <div>
            <p>买家昵称：{{ item.nikeName }}</p>
            <p>付款方式：{{ item.type }}</p>
          </div>
          <p style="color: #666;">买入数量： {{ item.num }}</p>
          <div>
            <p>价格：￥{{ item.price }}</p>
            <p>总价：<span style="color:#4f75fe">￥{{ item.total }}</span></p>
          </div>
        </li>
      </ul>
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
      tab: 2,
      list: [
        {
          id: '5435562839856',
          time: '02:03:06',
          nikeName: '李二狗',
          type: '银行卡',
          num: '12.00123 USDT',
          price: '6.49',
          total: '100',
        },
        {
          id: '5435562839856',
          time: '02:03:06',
          nikeName: '李二狗',
          type: '银行卡',
          num: '12.00123 USDT',
          price: '6.49',
          total: '100',
        },
      ],
    };
  },
  created() {
    if( this.$route.query.tab){
        this.tab = this.$route.query.tab
    }
   
  },
  methods: {
    gotoDetails(){
       this.$router.push('/OrderDetails');
    }
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
        height: 100%;
        width: 30%;
        text-align: center;
        color: #666666;
        margin: 0 auto;
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
      li {
        margin: 20px 0;
        background-color: #fff;
        padding: 10px;
        border-radius: 16px;
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
  }
}
.submit-box {
  margin: 20px;
  .primary-btn {
    width: 100%;
    border-radius: 50px;
    height: 40px;
    font-size: 14px;
    font-weight: 600;
  }
}
::v-deep .van-button--default {
  background: #4f75fe;
  color: #fff;
  border: none;
}
</style>
