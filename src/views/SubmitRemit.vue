<template>
  <div class="content">
    <nav-bar :nav-data="navData"></nav-bar>
    <div class="list"></div>
    <div class="upload-box">
      <p class="title">打款截图凭证（1/9）</p>
      <van-uploader v-model="fileList" max-count="9">
        <div class="box">
          <img src="../assets/img/add.png" />
        </div>
      </van-uploader>
      <!-- <van-uploader v-model="fileList" multiple :max-count="9" /> -->
    </div>
    <div class="submit-box">
      <van-button class="primary-btn" @click="onClick"> 提交打款凭证 </van-button>
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
      fileList: [],
    };
  },
  created() {},
  methods: {
    gotoNoticeDetails() {
      this.$router.push('/NoticeDetails');
    },
    onClick() {
      // this.$router.push('/Successfully');
      this.$router.push('/ApiSuccess')
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  height: 100vh;
  overflow: hidden;
  background: #fff;
  .list {
    background-color: #f4f6f8;
    height: 14px;
    margin-top: 40px;
  }
  .upload-box {
    padding: 0 20px;
    height: 80vh;
    .title {
      margin: 10px 0;
      font-size: 14px;
      font-weight: 600;
    }
  }
}
::v-deep .van-uploader__preview-image {
  border-radius: 10px;
  width: 100px;
  height: 80px;
}
::v-deep .van-uploader__preview {
  margin-bottom: 14px;
}
::v-deep .van-uploader__wrapper {
  display: flex;
  justify-content: space-between;
}
::v-deep .van-uploader__wrapper::after {
  content: '';
  width: 100px;
  border-radius: 10px;
  background-color: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .van-uploader__input-wrapper {
  width: 100px;
  border-radius: 10px;
  background-color: #f6f7fb;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.submit-box {
  width: 100%;
  margin: 0 auto;
  text-align: center;
  .primary-btn {
    width: 80%;
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
