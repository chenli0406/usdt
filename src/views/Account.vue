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
      <ul v-show="tab == 1" class="invite-content" v-if="list.length > 0">
        <li v-for="(item, index) in list" :key="index" class="item-1">
          <div class="left-box">
            <div>
              <img src="../assets/icons/bank.png" />
            </div>
            <div class="check-box">
              <div>
                <p>{{ item.name }}</p>
                <p>{{ item.address }}</p>
              </div>
              <div class="check" @click="onSelectitem($event, item)" v-if="flag == true"></div>
            </div>
          </div>
          <div class="right-box"></div>
        </li>
      </ul>
      <ul v-show="tab == 2" class="invite-content" v-if="list.length > 0">
        <li v-for="(item, index) in list" :key="index" class="item-2">
          <div class="left-box">
            <div>
              <img src="../assets/icons/wx.png" />
            </div>
            <div class="check-box">
              <div>
                <p>{{ item.name }}</p>
                <p>{{ item.address }}</p>
              </div>
              <div class="check" @click="onSelectitem($event, item)" v-if="flag == true"></div>
            </div>
          </div>
          <div class="right-box"></div>
        </li>
      </ul>
      <ul v-show="tab == 3" class="invite-content" v-if="list.length > 0">
        <li v-for="(item, index) in list" :key="index" class="item-3">
          <div class="left-box">
            <div>
              <img src="../assets/icons/zfb.png" />
            </div>
            <div class="check-box">
              <div>
                <p>{{ item.name }}</p>
                <p>{{ item.address }}</p>
              </div>
              <div class="check" @click="onSelectitem($event, item)" v-if="flag == true"></div>
            </div>
          </div>
          <div class="right-box"></div>
        </li>
      </ul>

      <div class="none-box" v-else>
        <img src="../assets/img/none.png" />
        <p>暂无收币地址信息</p>
      </div>
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
    if (this.flag == false && this.list.length > 0) {
      this.navData.rightText = '编辑';
    }
  },
  methods: {
    onClick() {
      this.$router.push({ name: '/AddAccount', query: { tab: this.tab } });
    },
    clickRight() {
      if (this.flag == true) {
        this.onDel();
      } else {
        this.flag = true;
        this.navData.rightText = '删除';
      }
    },
    onSelectitem(e, val) {
      if (e.target.className.indexOf('checked') == -1) {
        e.target.className = 'check  checked';
        this.delList.push(val);
      } else {
        e.target.className = 'check';
        this.delList = this.delList.filter((item) => item !== val);
      }
    },
    onDel() {
      if (this.delList.length > 0) {
        console.log(this.delList);
      } else {
        this.$toast('至少选择一个');
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
        padding: 10px 20px;
        border-radius: 15px;
        margin: 10px 0;
        color: #fff;
        .left-box {
          display: flex;
          align-items: center;
          div {
            img {
              margin-right: 10px;
              width: 32px;
            }
          }
          p {
            margin-bottom: 0;
          }
        }
        p {
          margin: 5px 0;
        }
        .check-box {
          width: 90%;
          display: flex;
          justify-content: space-between;
          .check {
            width: 20px;
            height: 20px;
            background-color: #eee;
            border-radius: 50%;
          }
          .checked {
            background: url('../assets/icons/check-active.png') no-repeat;
            background-size: 100% 100%;
          }
        }
      }
      .item-1 {
        background-color: #febe53;
      }
      .item-2 {
        background-color: #30ae51;
      }
      .item-3 {
        background-color: #4f75fe;
      }
    }
  }
}
.submit-box {
  position: fixed;
  top: 96%;
  left: 50%;
  width: 80%;
  transform: translate(-50%, -100%);
  text-align: center;
  margin: 0 auto;
  @media screen and (min-width: 1200px) {
    width: 50%;
  }
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
