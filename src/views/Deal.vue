<template>
  <div class="content">
    <nav-bar :nav-data="navData"></nav-bar>
  </div>
</template>

<script>
import NavBar  from "../components/navBar/index"
export default {
   components: {
      NavBar 
  },
  data() {
    return {
       navData: {
        leftIcon: false,
        leftImg: require('@/assets/img/deal-logo.png'),
      }
     
    };
  },
  created() {},
  methods: {
  }
};
</script>
<style lang="scss" scoped>
.content {
  height: 100vh;
  overflow: hidden;
}
</style>
