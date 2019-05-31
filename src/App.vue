<template>
  <div class="app">
    <router-view></router-view>
    <!-- 底部导航 -->
    <van-tabbar v-model="active" active-color="#FF6666">
      <van-tabbar-item icon="wap-home" to="/home">主页</van-tabbar-item>
      <van-tabbar-item icon="photo-o" to="/picture">竖图</van-tabbar-item>
      <van-tabbar-item icon="diamond-o" to="/member">会员</van-tabbar-item>
      <van-tabbar-item icon="search" to="/search">发现</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/my">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>
  
<style>
body {
  background-color: #eceef9;
}
.van-nav-bar {
  color: #fff;
  background-color: #ff9999;
}
.van-ellipsis {
  font-weight: 700;
}


</style>