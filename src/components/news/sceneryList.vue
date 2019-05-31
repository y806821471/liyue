<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar class="el-icon-zzscenery" left-text left-arrow @click-left="onClickLeft"/>
    <div class="girl">
      <!-- <span class="el-icon-zzmeinv"></span> -->
      <span>风景</span>
    </div>
    <div class="girlBox">
      <img v-for="item in scenerylList" v-lazy="item.img_url" :key="item.img">
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      scenerylList: []
    };
  },
  created() {
    this.scenerylimages();
  },
  methods: {
    onClickLeft() {
      this.$router.replace("/");
    },
    scenerylimages() {
      this.$http.get("api/scenerylimages").then(results => {
        const {
          data: { status, message }
        } = results;
        if (status === 0) {
          this.scenerylList = message;
        }
      });
    }
  }
};
</script>
  
  <style>
.van-nav-bar {
  font-size: 25px !important;
  color: #fff;
}
.van-icon-arrow-left {
  color: #fff !important;
}
.girl {
  height: 30px;
  line-height: 30px;
  background-color: #fff;
  padding-left: 15px;
  margin-bottom: 5px;
}
.girl span {
  font-size: 12px;
  color: #7d7e80;
  font-weight: 700;
}

.girlBox {
  box-sizing: border-box;
  display: flex;
  /* justify-content: center; */
  flex-wrap: wrap;
  font-size: 0;
  padding: 5px;
  margin-bottom: 60px;
  background-color: #fff;
}
.girlBox img {
  width: 48%;
  height: 100%;
  padding: 5px;
  flex: 1;
}
</style>