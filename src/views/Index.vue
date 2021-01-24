<template>
  <div class="content">
    <nav-bar :nav-data="navData"></nav-bar>
    <div class="main-box">
      <div class="head-portrait">
        <van-swipe :autoplay="13000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img class="swipe-img" v-lazy="image" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="msg-box">
        <ul class="msg" ref="con1" :class="{ anim: animate == true }">
          <li v-for="(item, index) in msgList" :key="index">
            <div>
              <img style="width: 36px" src="../assets/icons/msg.png" />
              <span @click="gotoNoticeDetails">{{ item.name }}</span>
            </div>
            <div style="margin: 20px 0px 20px 20px" @click="gotoNoticeList">
              <img  style="width: 26px" src="../assets/icons/msg-list.png" />
            </div>
          </li>
        </ul>
      </div>
      <div class="img-btn">
        <van-row gutter="20">
          <van-col span="12">
            <img src="../assets/img/1.png" />
          </van-col>
          <van-col span="12">
            <img src="../assets/img/2.png" />
          </van-col>
        </van-row>
      </div>
    </div>
    <div class="content-box">
      <p class="title"><span></span> 买币流程说明：</p>
      <div>
        <p class="title-t">1.注册</p>
        <p>输入邮箱,设置好密码,推荐人ID,USDT会发一个验证码到你注册的邮箱,复制粘贴到界面完成注册。</p>
        <p class="title-t">2.手机验证</p>
        <p>方法:用电脑登录币安官网,或者手机登录官网选择电脑版,登录完成后进入“个人中心”,提示手机验证和谷歌验证。 建议:对于新手,谷歌验证直接忽略,有手机...</p>
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
      images: ['https://img.yzcdn.cn/vant/cat.jpeg', require('@/assets/img/swipe-img.png')],
      navData: {
        title: '',
        leftIcon: false,
        leftImg: require('@/assets/img/usdt-logo.png'),
      },
      animate: false,
      msgList: [{ name: '1关于本平台的一些服务说明' }, { name: '2关于本平台的一些服务说明' }, { name: '3关于本平台的一些服务说明' }],
    };
  },
  created() {
    setInterval(this.scroll, 2000);
  },
  methods: {
    gotoMenu(val) {
      this.$router.push(val);
    },
    gotoPersonal() {
      this.$router.push('/PersonalData');
    },
    clickRight() {
      this.$router.push('/Set');
    },
    scroll() {
      this.animate = true;
      setTimeout(() => {
        this.msgList.push(this.msgList[0]);
        this.msgList.shift();
        this.animate = false;
      }, 500);
    },
    gotoNoticeDetails(){
       this.$router.push('/NoticeDetails');
    },
    gotoNoticeList(){
       this.$router.push('/NoticeList');
    }
  },
};
</script>
<style lang="scss" scoped>
.content {
  height: 100%;
  .head-portrait {
    .van-swipe {
      height: 26vh;
    }
    .swipe-img {
      width: 100%;
      height: 100%;
      border-radius: 16px;
    }
    .van-swipe__indicator--active {
      background: #4f75fe;
    }
  }
}

::v-deep .van-swipe__indicator {
  width: 10px;
  height: 2px;
  border-radius: 2px;
}

::v-deep .van-swipe__indicators {
  bottom: 10px;
}

.msg-box {
  height: 40px;
  margin: 16px 0;
  overflow: hidden;
  padding: 0 20px;
  background: #f4f6f8;
  border-radius: 40px;
}
.anim {
  transition: all 0.5s;
  margin-top: -40px;
}
.msg li {
  list-style: none;
  line-height: 40px;
  height: 40px;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    padding: 0 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  div {
    display: flex;
    align-items: center;
  }
}
.img-btn {
  height: 14vh;
  overflow: hidden;
}
.van-col {
  height: 14vh;
  img {
    width: 100%;
    height: 100%;
    border-radius: 14px;
  }
}
.content-box {
  margin: 20px 0;
  padding: 10px 20px 100px 20px;
  background: #f4f6f8;
  border-radius: 30px 30px 0px 0px;
  overflow: hidden;
  .title {
    font-size: 14px;
    font-weight: bold;
    display: flex;
    align-items: center;
    span {
      display: inline-block;
      width: 4px;
      height: 12px;
      background: #febe53;
      border-radius: 6px;
      margin-right: 10px;
    }
  }
  .title-t{
    color: #457BFE;
  }
   p{
      line-height: 20px;
      color: #333;
      margin: 6px 0;
    }
}
</style>
