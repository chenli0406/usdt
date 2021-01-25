<template>
  <div class="content">
    <nav-bar :nav-data="navData"></nav-bar>
    <div class="list">
      <div class="form">
        <div class="uploader-box">
          <label>修改头像</label>
          <van-uploader v-model="fileList" max-count="1" />
        </div>
        <div class="input">
          <label>昵称</label>
          <p @click="updateNickName">
            <span style="margin-right: 10px">{{ nickname }}</span>
            <img src="../assets/icons/right.png" />
          </p>
        </div>
      </div>
    </div>
    <van-dialog v-model="show" title="修改昵称" :close-on-click-overlay="true" showConfirmButton confirm-button-color="'#4F75FE'" confirm-button-text="确定">
      <van-field v-model="nickname" maxlength="11" placeholder="请输入昵称" />
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
        title: this.$route.meta.title,
        leftIcon: true,
      },
      fileList: ['../assets/img/3.png'],
      nickname: '李二狗',
      show: false,
    };
  },
  created() {},
  methods: {
    onClick() {},
    updateNickName() {
      this.show = true;
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  height: 100vh;
  overflow: hidden;
  background: #f4f6f8;
  .list {
    background-color: #fff;
    margin-top: 60px;
  }
}
::v-deep .van-uploader__upload {
  border-radius: 50% !important;
  width: 50px;
  height: 50px;
}
::v-deep .van-uploader__preview-image {
  width: 50px;
  height: 50px;
  border-radius: 50% !important;
}
::v-deep .van-uploader__preview-delete {
  background-color: transparent;
}
::v-deep .van-icon-cross::before {
  color: #000;
}
::v-deep .van-uploader__preview {
  margin: 0;
}
::v-deep .van-uploader {
  margin-bottom: 10px;
}
::v-deep .van-uploader__file {
  width: 50px;
  height: 50px;
  border-radius: 50% !important;
}
.form {
  padding: 10px 20px;
}
label {
  font-size: 14px;
  font-weight: 500;
  color: #000000;
}
.uploader-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.02rem solid #eeeeee;
  margin-bottom: 10px;
}
.van-cell {
  color: #999999;
  padding: 10px 20px;
  background: #f4f6f8;
  border-radius: 44px;
}
.input {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.submit-box {
  margin: 20px;
  margin-top: 200px;
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
::v-deep .van-dialog__content{
   margin: 20px 40px;
}
</style>
