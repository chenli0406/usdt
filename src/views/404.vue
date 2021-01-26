<template>
  <div class="content">
    <img src="../assets/img/404.png">
    <div class="submit-box">
      <van-button class="primary-btn" @click="onClick"> 点击刷新 </van-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    NavBar,
  },
  data() {
    return {
    };
  },
  methods: {
    onClick() {
      this.$router.push('/Index');
    },
  },
};
</script>
<style lang="scss" scoped>
.content {
  height: 100vh;
  overflow: hidden;
  background-color: #fff;
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
