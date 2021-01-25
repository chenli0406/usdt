<template>
  <div class="content">
    <div class="left-box" @click="$router.go(-1)"> 
      <img src="../assets/icons/left.png">
    </div>
    <div class="title">
      <p>充值金额：¥100.00</p>
      <p style="color: #ccc">剩余时间：15:00</p>
      <p>请转入 15.2009 USDT</p>
    </div>
    <div class="code">
      <img id="imageWrapper" src="../assets/img/erweima.png" />
    </div>
    <div class="save">
      <van-button class="primary-save" @click="onSave"> 保存二维码至相册 </van-button>
    </div>
    <div class="code-box">
      <div>
        <p class="number">充币地址</p>
        <div class="border"></div>
        <div class="copy">
          <p>https://lielong.com/shujuchaxun.html</p>
          <van-button class="save-btn" @click="onCopyCode">
            <img src="../assets/icons/copy.png" alt="" />
          </van-button>
        </div>
      </div>
    </div>
    <div class="submit-box">
      <van-button class="primary-save" @click="onClick"> 确认已充值 </van-button>
    </div>
    <div class="info">
      <p><span></span>充币说明:</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan
        eget.
      </p>
    </div>
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
      code: '111111',
    };
  },
  created() {},
  methods: {
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
    onCopyCode() {
      clipboard.handleClipboard(
        this.code,
        event,
        () => {
          this.$toast('复制成功');
        },
        () => {
          this.$toast('复制失败');
        }
      );
    },
    onCopyLink() {},
    onClick(){
         this.$router.push('/ApiSuccess');
    }
  },
};
</script>
<style lang="scss" scoped>
.content {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: url('../assets/img/api-bg.png');
  background-size: 100% 100%;
  .code {
    width: 120px;
    height: 120px;
    margin: 10px auto;
    border: 1px dashed #eee;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.save {
  width: 100%;
  text-align: center;
  margin: 20px 0;
  .primary-save {
    height: 30px;
    background: #ffffff;
    border-radius: 30px;
    color: #4f75fe;
    font-weight: 500;
    border: none;
    font-size: 12px;
  }
}

.code-box {
  width: 70%;
  background: #ffffff;
  border-radius: 16px;
  margin: 10px auto;
  text-align: center;
  padding: 10px 20px;
  img {
    width: 16px;
    height: 16px;
  }
  .copy {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
.save-btn {
  border: none;
  font-size: 20px;
  font-weight: 500;
  color: #4f75fe;
}
.line {
  height: 0.02rem;
  margin-top: 20px;
  width: 100%;
  background: #e3e3e3;
}
.number {
  font-size: 14px;
  font-weight: 500;
  position: relative;
  z-index: 100;
  margin: 0;
}
.border {
  position: absolute;
  width: 60px;
  height: 6px;
  background: #fdda60;
  margin-top: -6px;
  left: 42%;
  z-index: 10;
}
.title {
  color: #fff;
  text-align: center;
  margin: 20px 0;
  p{
    margin: 5px 0;
  }
  p:first-child {
    font-weight: 600;
    font-size: 16px;
  }
}

.submit-box {
  width: 80%;
  margin: 20px auto;
  text-align: center;
  ::v-deep .van-button--default {
    background: #febe53;
    color: #fff;
    border: none;
    width: 100%;
    border-radius: 50px;
    height: 40px;
    font-size: 14px;
    font-weight: 600;
  }
}
.info {
  width: 80%;
  margin: 10px auto;
  color: #fff;
  p:first-child {
    font-weight: 600;
    font-size: 14px;
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
  p:last-child {
    line-height: 16px;
    text-align: justify;
  }
}
.left-box{
  margin:10px 20px;
  img{
    width: 10px;
  }
}
</style>
