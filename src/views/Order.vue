<template>
  <div class="content">
    <nav-bar :nav-data="navData"></nav-bar>
    <div class="main-box" style="margin-top: 70px">
      <div class="bg-box">
        <div class="bg-item">
          <p class="title">
            <img src="../assets/icons/order-2.png" alt="" />
            <span>向买家付款</span>
          </p>
          <p class="num">￥1，288.00</p>
          <p>剩余付款时间 15:00</p>
        </div>
      </div>
    </div>
    <div class="menu">
      <div style="margin-top: 10px; height: 20px"></div>
      <div class="menu-box">
        <div class="menu-item">
          <van-image width="80px" :src="imgPath">
            <template v-slot:loading>
              <van-loading type="spinner" size="20" />
            </template>
          </van-image>
          <div class="menu-title">
            山海未眠
            <img src="../assets/icons/order-3.png" />
          </div>
        </div>
        <ul>
          <li v-for="(item, index) in list" :key="index">
            <img src="../assets/icons/order-1.png" />
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>
      <div class="menu-box1">
        <ul>
          <li v-for="(item, index) in options" :key="index">
            <p>{{ item.title }}</p>
            <p>
              <span style="margin-right: 10px">{{ item.name }}</span> <img src="../assets/icons/copy.png" @click="onCopyCode(item.name)" />
            </p>
          </li>
          <li>
            <p>收款二维码</p>
            <p style="color: #4f75fe" @click="dialog">点击查看</p>
          </li>
        </ul>
      </div>
      <div class="submit-box">
        <van-button class="primary-btn" @click="onClick"> 确认已打款 </van-button>
      </div>
    </div>
    <van-dialog v-model="show" title="卖家收款二维码" :close-on-click-overlay="true" showConfirmButton @confirm="onSave" confirm-button-color="'#4F75FE'" confirm-button-text="保存二维码">
      <img id="imageWrapper" src="../assets/img/code.png" />
    </van-dialog>
  </div>
</template>

<script>
import NavBar from '../components/navBar/index';
import clipboard from '../utils/clipboard';
import html2canvas from 'html2canvas';
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
      show: false,
      imgPath: require('@/assets/img/3.png'),
      list: [
        {
          name: '认证卖家',
        },
        {
          name: '已缴纳保证金',
        },
        {
          name: '担保交易',
        },
      ],
      options: [
        {
          title: '卖家姓名',
          name: '李二狗',
        },
        {
          title: '银行卡号',
          name: '632012589630215642',
        },
        {
          title: '开户行',
          name: '招商银行',
        },
      ],
    };
  },
  created() {},
  methods: {
    onClick() {
      this.$router.push('/SubmitRemit');
    },
    dialog() {
      this.show = true;
    },
    onCopyCode(val) {
      clipboard.handleClipboard(
        val,
        event,
        () => {
          this.$toast('复制成功');
        },
        () => {
          this.$toast('复制失败');
        }
      );
    },
    onSave() {
      html2canvas(document.getElementById('imageWrapper')).then((canvas) => {
        let saveUrl = canvas.toDataURL('image/png');
        let aLink = document.createElement('a');
        let blob = this.base64ToBlob(saveUrl);
        let evt = document.createEvent('HTMLEvents');
        evt.initEvent('click', true, true);
        aLink.download = '二维码.jpg';
        aLink.href = URL.createObjectURL(blob);
        aLink.click();
      });
    },
    //这里把图片转base64
    base64ToBlob(code) {
      let parts = code.split(';base64,');
      let contentType = parts[0].split(':')[1];
      let raw = window.atob(parts[1]);
      let rawLength = raw.length;
      let uInt8Array = new Uint8Array(rawLength);
      for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
      }
      return new Blob([uInt8Array], { type: contentType });
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  height: 100vh;
  overflow: hidden;
  .menu {
    margin-top: -40px;
    background: #f4f6f8;
    height: 100vh;
    border-radius: 50px 50px 0px 0px;
    .menu-box {
      padding: 14px 20px;
      border-radius: 20px;
      margin: 0 20px;
      margin-top: 60px;
      background-color: #fff;
      .menu-item {
        .van-image {
          border: 2px solid #4f75fe;
          border-radius: 50%;
        }
        display: flex;
        align-items: center;
        .menu-title {
          font-weight: 600;
          margin-left: 10px;
        }
      }
      ul {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        li {
          display: flex;
          align-items: center;
          span {
            margin-left: 10px;
          }
        }
      }
    }
    .menu-box1 {
      padding: 10px 20px;
      border-radius: 20px;
      margin: 20px;
      background-color: #fff;
      ul {
        margin-top: 10px;
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
    }
  }
}
.bg-box {
  background: url('../assets/img/order-bg.png') no-repeat;
  background-size: 100% 100%;
  position: relative;
  top: 20px;
  .bg-item {
    padding: 10px 20px;
    color: #fff;
    text-align: center;
    .num {
      font-size: 20px;
      font-weight: 600;
    }
    .title {
      display: flex;
      justify-content: center;
    }
    p {
      margin: 6px 0;
    }
    .item {
      font-size: 16px;
      padding: 20px 0 10px 0;
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
  border-radius: 50px;
  height: 40px;
}
</style>
