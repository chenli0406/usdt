<template>
  <div class="content">
    <nav-bar :nav-data="navData" @clickRight="clickRight"></nav-bar>
    <div class="main-box">
      <ul v-if="list.length > 0">
        <li v-for="(item, index) in list" :key="index">
          <div class="left-box">
            <div>
              <img v-if="(index + 1) % 2 == 0" src="../assets/icons/address-1.png" />
              <img v-if="(index + 1) % 2 != 0" src="../assets/icons/address-2.png" />
            </div>
            <div class="check-box">
              <div>
                <span>{{ item.name }}</span>
                <p>{{ item.address }}</p>
              </div>
              <div class="check" @click="onSelectitem($event, item)" v-if="flag == true">
              </div>

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
      <van-button class="primary-btn" @click="onClick"> 添加USDT地址</van-button>
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
      list: [
        {
          id: '1',
          name: '自定义名称 123123',
          address: 'USDT收货地址 QEWE31sdasd123132SDSA…',
        },
        {
          id: '2',
          name: '自定义名称 123123',
          address: 'USDT收货地址 QEWE31sdasd123132SDSA…',
        },
        {
          id: '3',
          name: '自定义名称 123123',
          address: 'USDT收货地址 QEWE31sdasd123132SDSA…',
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
      this.$router.push('/Addaddress');
    },
    clickRight() {
      if (this.flag == true) {
        this.onDel();
      } else {
        this.flag = true;
        this.navData.rightText = '删除';
      }
    },
    onDel() {
      if (this.delList.length > 0) {
        console.log(this.delList);
      } else {
        this.$toast('至少选择一个');
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
  },
};
</script>
<style lang="scss" scoped>
.content {
  height: 100vh;
  overflow: hidden;
  background-color: #fff;
  .main-box {
    margin-top: 60px;
    padding: 0px 20px;
    .none-box {
      transform: translate(0%, 100%);
    }
    ul {
      li {
        padding: 10px 20px;
        border-radius: 15px;
        margin: 10px 0;
        color: #fff;
        .left-box {
          display: flex;
          div {
            img {
              margin-right: 10px;
            }
          }
          p {
            margin-bottom: 0;
          }
        }
        .check-box {
          width: 90%;
          display: flex;
          align-items: center;
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
      li:nth-of-type(odd) {
        background-color: #febe53;
      }
      li:nth-of-type(even) {
        background-color: #4f75fe;
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
}
</style>
