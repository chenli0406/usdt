<template>
  <div class="content">
    <nav-bar :nav-data="navData" @clickRight="clickRight"></nav-bar>
    <div class="main-box">
      <div class="head">
        <van-sticky>
          <div class="tab_wrap" :offset-top="30">
            <div class="tab_item" :class="{ tab_active: tab == 1 }" @click="tab = 1">银行卡</div>
            <div class="tab_item" :class="{ tab_active: tab == 2 }" @click="tab = 2">微信</div>
            <div class="tab_item" :class="{ tab_active: tab == 3 }" @click="tab = 3">支付宝</div>
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
    </div>
     <div class="submit-box">
        <van-button class="primary-btn" @click="onClick"> 添加提现账号 </van-button>
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
        rightText: '',
        rightIcon: false,
      },
      tab: 1,
       list: [
        {
          id: '1',
          name: '招商银行 2154520900361258',
          address: '李二狗',
        },
        {
           id: '1',
          name: '招商银行 2154520900361258',
          address: '李二狗',
        },
        {
          id: '1',
          name: '招商银行 2154520900361258',
          address: '李二狗',
        },
      ],
      flag: false,
      delList: [],
    };
  },
  created() {
    if( this.$route.query.tab){
        this.tab = this.$route.query.tab
    }
    if (this.flag == false && this.list.length > 0) {
      this.navData.rightText = '编辑';
    }
   
  },
  methods: {
    gotoDetails(){
       this.$router.push('/OrderDetails');
    },
    onClick(){},
     clickRight() {
      if (this.flag == true) {
        this.onDel();
      } else {
        this.flag = true;
        this.navData.rightText = '删除';
      }
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
}
</style>
