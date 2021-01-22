<template>
  <div class="content">
    <nav-bar :nav-data="navData"></nav-bar>
    <ul class="list">
      <li v-for="(item, index) in list" :key="index" @click="gotoNoticeDetails">
        {{ item.title }}
      </li>
    </ul>
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
      list: [
        {
          title: '关于平台的一些服务说明，此情况随时关于平台的一些服务说明，此情况随时关于平台的一些服务说明，此情况随时会...说明，此情况...',
        },
        {
          title: '关于平台的一些服务说明',
        },
        {
          title: '此情况随时会...',
        },
        {
          title: '关于平台的一些服务说明，此情况随时会...',
        },
      ],
    };
  },
  created() {},
  methods: {
    gotoNoticeDetails(){
       this.$router.push('/NoticeDetails');
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
    li {
      color: #333333;
      line-height: 45px;
      font-weight: 500;
      padding: 0 20px;
      border-bottom: 1px solid#E5E5E5;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    li:last-child{
       border-bottom: none;
    }
  }
}
</style>
