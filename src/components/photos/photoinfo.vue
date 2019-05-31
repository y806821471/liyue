<template>
  <div>
    <!-- 头部 -->
    <van-nav-bar class title="Candy & Mark" left-text left-arrow @click-left="onClickLeft"/>

    <!-- 图片描述区域 -->
    <div class="photoinfo">
      <h3>{{photoinfo.title}}</h3>
      <p class="subtitle">
        <span>发表时间：{{photoinfo.add_time|datefmt}}</span>
        <span>点击：{{photoinfo.click}}次</span>
      </p>
    </div>

    <!-- 缩略图预览区域 -->
    <div class="thumbs">
      <img
        v-for="(item,index) in list"
        :key="item.id"
        :src="item.src"
        alt
        @click="handleImage(index)"
      >
    </div>

    <!-- 图片内容区域 -->
    <div class="content" v-html="photoinfo.content"></div>
    <comment :id="id"></comment>
  </div>
</template>
  
  <script>
import comment from "../subcomponents/comment";
import { Toast } from "vant";
import { ImagePreview } from "vant";
export default {
  data() {
    return {
      id: this.$route.params.id,
      photoinfo: {},
      list: []
    };
  },
  components: {
    comment
  },
  created() {
    this.getimageInfo();
    this.getthumimages();
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    // 图片详情
    async getimageInfo() {
      const {
        data: { status, message }
      } = await this.$http.get("api/getimageInfo/" + this.id);
      this.photoinfo = message;
    },
    //  获取缩略图
    async getthumimages() {
      const {
        data: { status, message }
      } = await this.$http.get("api/getthumimages/" + this.id);
      if (status == 0) {
        this.list = message;
      } else {
        Toast("获取失败");
      }
    },

    /*
    图片预览  
    */
    handleImage(index) {
      const images = [];
      //打list里的数据遍历到iamges
      this.list.forEach(element => {
        if (element.src) {
          images.push(element.src);
        }
      });
      ImagePreview({
        // 预览的图片 它是一个数组
        // images:images
        images,
        // 当前预览的图片的索引
        startPosition: index
      });
    }
  }
};
</script>

<style lang="less">
body {
  background-color: #fff;
}
.van-nav-bar {
  font-size: 25px !important;
  color: #fff;
}
.van-icon-arrow-left {
  color: #fff !important;
}
.photoinfo {
  margin-bottom: 10px;
  padding: 10px;
  background-color: #fff;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 10px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    margin: 0 !important;
    padding: 10px;
    color: #444;
    border-bottom: 1px dashed #ccc;
  }

  // .content {
  //   font-size: 13px;
  //   line-height: 30px;
  //    !important;
  // }
}
.thumbs {
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  margin: 10px 10px 20px 10px;
  img {
    width: 150px;
    height: 90px;
  }
}
.content {
  font-size: 14px;
  margin: 0 15px;
  background-color: #fff;
  color: #444;
}
.comment {
  border-bottom: 1px dashed #ccc;
  margin-bottom: 60px;
  padding: 5px 10px;
  h3 {
    font-size: 12px !important;
    color: #444;
  }
  textarea {
    border: 1px solid #ccc;
  }
  .cmt-title {
    background-color: #eee !important;
    color: #444;
  }
  .cmt-body{
      color: #555;
  }
  .van-button {
    color: #fff;
    background-color: #ff9999;
    border: #ff9999;
  }
}
</style>