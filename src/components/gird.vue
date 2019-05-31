<template>
  <div class="gird">
    <van-row type="flex" justify="space-between">
      <van-col span="6" v-for="item in newslist" :key="item.id">
        <router-link :to="item.to">
          <img :src="item.src"  alt class="local-nav-icon">
          <p>{{item.title}}</p>
        </router-link>
      </van-col>
    </van-row>
  </div>
</template>
  
  <script>
export default {
     data: () => ({
    newslist: [
      {
        id: 1,
        to: "/home/girlList",
        title: "美女",
        src: "static/gird/qc.jpg"
      },
      {
        id: 2,
        to: "/home/animeList",
        title: "动漫",
        src: "static/gird/dm.jpg"
      },
      {
        id: 3,
        to: "/home/animalList",
        title: "萌宠",
        src: "static/gird/mc.jpg"
      },
      {
        id: 4,
        to: "/home/scenerylList",
        title: "风景",
        src: "static/gird/fj.jpg"
      },
      {
        id: 5,
        to: "/home/insetList",
        title: "插画",
        src: "static/gird/ch.jpg"
      },
    ]
  })
    
}
</script>
  
  <style>
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
  background-color: #fff;
  margin-top: 5px;
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
</style>
