<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar title="竖图" style="color:#fff"></van-nav-bar>

    <!-- tab标签栏 -->
    <van-tabs @click="getid" :line-width="55">
      <van-tab v-for="item in pictureList" :key="item.class_id" :title="item.title"  ></van-tab>
    </van-tabs>

    <!-- 图片懒加载 -->
    <div class="imgbox">
      <router-link class="img" v-for="img in imageList" :key="img.id" :to="'/home/photoinfo/'+img.id">
        <img v-lazy="img.img_url" class="images">
      </router-link>
    </div>
  </div>
</template>
  
  <script>
export default {
  data: () => ({
    active: 0,
    pictureList: [],
    imageList: []
  }),
  // 页面加载好，可以使用data和methods，页面还没有渲染好
  // mounted（）{}页面加载渲染完毕之后，会触发的函数
  created() {
    this.getimgcategory();
    this.getid(0);
  },
  methods: {
    async getimgcategory() {
      const {
        data: { message, status }
      } = await this.$http.get("api/getimgcategory/");
      // console.log(results);
      if (status === 0) {
        message.unshift({ title: "全部", id: 0 });
        this.pictureList = message;
      }
    },
    async getid(id) {
      // console.log(id);
      const {
        data: { message, status }
      } = await this.$http.get("api/getimages/" + id);
      // console.log(message);
      if (status === 0) {
        this.imageList = message;
      }
    }
  }
};
</script>
  
  <style>
body {
  /* background-color: #fff; */
}
.van-tabs__wrap {
  height: 30px !important;
  line-height: 35px !important;
  /* margin: 0 30px; */
}
.van-tab {
  line-height: 35px !important;
}
.van-tabs {
  padding-top: 30px;
}
.van-tab span {
  font-size: 14px !important;
}
.van-tabs__line {
  background-color: #ff9999;
}
.imgbox{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 5px 10px;
  margin: 5px 0 45px 0;
}
.img{
  width: 49%;
  margin-bottom: 10px;

}
.images {
  height: 100%;
  width: 100%;
  
}
.van-tabs__line {
    bottom: 15px;
    height: 2px;
}
</style>