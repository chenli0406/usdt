<template>
  <div class="content">
    <nav-bar :nav-data="navData"></nav-bar>
    <div class="list">
      <div class="form">
        <div class="uploader-box">
          <label>修改头像</label>
          <!-- <van-uploader v-model="fileList" max-count="1" /> -->
          <div class="img-box" @click="sheetShow = true">
            <van-image round width="120px" :src="imgPath">
              <template v-slot:loading>
                <van-loading type="spinner" size="20" />
              </template>
            </van-image>
            <img style="margin-left: 20px" src="../assets/icons/right.png" />
          </div>
        </div>
        <div class="input">
          <label>昵称</label>
          <p @click="updateNickName">
            <span style="margin-right: 20px">{{ nickname }}</span>
            <img src="../assets/icons/right.png" />
          </p>
        </div>
      </div>
    </div>
    <van-dialog v-model="show" title="修改昵称" :close-on-click-overlay="true" showConfirmButton confirm-button-color="'#4F75FE'" confirm-button-text="确定">
      <van-field v-model="nickname" maxlength="11" placeholder="请输入昵称" />
    </van-dialog>

    <van-action-sheet v-model="sheetShow" close-on-click-action>
      <ul>
        <li>
          <input type="file" id="cameraInput" accept="image/*" capture="camera" @change="takePhoto()" />
          <label for="cameraInput" class="takePhone">拍照上传</label>
        </li>
        <li>
          <input type="file" id="selectImage" @change="selectImage()" />
          <label for="selectImage" class="takePhone">相册上传</label>
      </li>

        <li @click="sheetShow = false">取消</li>
      </ul>
    </van-action-sheet>
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
      sheetShow: false,
      imgPath: require('@/assets/img/3.png'),
    };
  },
  created() {},
  methods: {
    onClick() {},
    gotoShow() {},
    updateNickName() {
      this.show = true;
    },
    takePhoto() {
      let file = $('#cameraInput')[0].files[0]; //获取文件对象
      var fd = new FormData(); //构造formdata对象
      fd.append('upfile', file);

      // this.axios.post('http://127.0.0.1:7000/me/upAvatar', fd).then((res) => {
      //   if (res.data.code === 1) {
      //     //如果上传成功，则获取图片的地址
      //     this.getAvatar();
      //   }
      // });
    },
    selectImage() {
      let file = $('#selectImage')[0].files[0]; //获取文件对象
      console.log(file);
      var fd = new FormData(); //构造formdata对象
      fd.append('upfile', file);
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
  padding-bottom: 10px;
  .img-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
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
::v-deep .van-dialog__content {
  margin: 20px 40px;
}
ul {
  padding: 20px 0px;
  li {
    line-height: 40px;
    font-size: 14px;
    text-align: center;
    &:hover {
      background: #f4f6f8;
    }
  }
}
#cameraInput {
  display: none;
}
.takePhone {
  display: block;
  font-weight: normal;
}
#selectImage {
  display: none;
}
</style>
