<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar title="Candy & Mark" style="color:#fff"></van-nav-bar>
    <!-- 通知栏 -->
    <van-notice-bar
      mode="closeable"
      left-icon="volume-o"
    >彼岸网为用户免费分享产生高清壁纸,若发现您的权利被侵害,我们尽快处理 客服QQ:602977795</van-notice-bar>
    <!-- 轮播图 -->
    <van-swipe :autoplay="2500">
      <van-swipe-item v-for="item in lunbolist" :key="item.img">
        <img :src="item.img" alt width="100%" height="100%">
      </van-swipe-item>
    </van-swipe>
    <!-- 导航 -->
    <gird></gird>

    <!-- 图片列表 -->
    <div>
      <div class="hot">
        <van-icon name="fire" color="red"/>
        <span>热门</span>
      </div>
      <div class="hotBox">
        <img v-for="item in imageList" v-lazy="item.img_url" :key="item.id">
      </div>
    </div>
  </div>
</template>
  
<script>
import gird from "../gird";
// import { Toast } from "mint-ui";

export default {
  data() {
    return {
      lunbolist: [],
      imageList: []
    };
  },
  created() {
    this.getLunbotu();
    this.getimages();
  },
  methods: {
    //ES7写法
    async getLunbotu() {
      // console.log(results);
      const {
        data: { status, message }
      } = await this.$http.get("api/getlunbo");
      if (status === 0) {
        this.lunbolist = message;
      } else {
        Toast("请求数据失败");
      }
    },

    getimages() {
      this.$http.get("api/getimgs").then(results => {
        // console.log(results);
        const {
          data: { status, message }
        } = results;
        if (status === 0) {
          this.imageList = message;
        } else {
          Toast("请求数据失败");
        }
      });
    }
  },
  components: {
    gird
  }
};
</script>
  
<style>
.van-swipe {
  font-size: 0;
}
.van-col {
  text-align: center;
}
.van-col p {
  margin: 5px 0 0 0;
  color: #7d7e80;
  font-size: 14px;
}
.van-row {
  padding: 20px 0;
  background-color: #fff;
}
.local-nav-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.van-notice-bar {
  height: 35px;
  background-color: #fff;
  margin-top: 0 !important;
}
.hot {
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  margin-top: 5px;
}
.hot .van-icon {
  margin-left: 13px;
}
.hot span {
  font-size: 14px;
  color: #7d7e80;
  margin-left: 5px;
  vertical-align: top;
  font-weight: 700;
}
.hotBox {
  box-sizing: border-box;
  display: flex;
  /* justify-content: space-between; */
  flex-wrap: wrap;
  font-size: 0;
  padding: 5px;
  margin-bottom: 60px;
  background-color: #fff;
}
.hotBox img {
  width: 48%;
  height: 100%;
  padding: 5px;
  flex: 1;
}
</style>