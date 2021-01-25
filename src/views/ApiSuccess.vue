<template>
  <div class="content">
    <nav-bar :nav-data="navData"></nav-bar>
    <div class="list">
      <div>
        <img src="../assets/img/success.png" />
      </div>
      <p>充值完成</p>
      <p class="title">充值到账可能会有一定的延迟请您耐心等待</p>
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
    };
  },
  created() {},
  methods: {
   
  },
};
</script>
<style lang="scss" scoped>
.content {
  height: 100vh;
  overflow: hidden;
  background: #fff;
  .list {
    margin-top: 70px;
    padding: 0px 40px;
    text-align: center;
    .title {
      margin: 20px 0;
      color: #666666;
    }
  }
}
</style>
