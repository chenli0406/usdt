<template>
  <div>
     <van-nav-bar
      :title="navData.title"
       left-text=""
      :right-text="navData.rightText"
      :fixed="true"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
     <template #left>
        <van-icon v-if="navData.leftIcon" name="arrow-left"  />
        <img v-else  :src="navData.leftImg" />
     </template>
      <template #right  v-if="navData.rightIcon">
        <svg-icon v-if="navData.rightSvg" :icon-class="navData.rightSvg" class="svgIcon" />
        <img v-else class="btn" :src="navData.rightImg" />
     </template>
     
   </van-nav-bar>
  </div>
</template>

<script>
export default {
  props: ['navData'],
  data() {
    return {
    };
  },
  created() {
  },
  methods: {
    onClickLeft(){
      if(this.navData.leftIcon != false){
           this.$router.go(-1);
      }
     
    },
    onClickRight(){
      this.$emit('clickRight');
    }
  }
};
</script>
<style lang="scss" scoped>
 .btn {
    width: 35px;
    display: flex;
    float: right;
    img {
      width: 100%;
    }
 }
 .svgIcon {
  font-size: 35px;
}
</style>
