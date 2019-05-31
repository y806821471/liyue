<template>
  <!-- 用户评论 -->
  <div class="comment">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容（最多吐槽120字）" maxlength="120" v-model="msg"></textarea>
    <van-button type="danger" size="large" @click="postcomment">发表评论</van-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,index) in comments" :key="item.index">
        <div
          class="cmt-title"
        >第{{index+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | datefmt}}</div>
        <div class="cmt-body">{{item.content=="undefined"?'赶紧抢沙发~~~':item.content}}</div>
      </div>
    </div>
    <van-button type="danger" :disabled="flag" size="large" plain @click="getMore">{{moretitle}}</van-button>
  </div>
</template>
<script>
import { Toast } from "vant";
export default {
  data: () => ({
    pageindex: 1,
    comments: [],
    max: 3,
    msg: "",
    flag: false,
    count: "",
    moretitle: ""
  }),
  props: ["id"],
  created() {
    this.getcomments();
  },
  methods: {
    async getcomments() {
      const {
        data: { message, status, count }
      } = await this.$http.get(
        "api/getcomments/" + this.id + "?pageindex=" + this.pageindex
      );
      if (status == 0) {
        // this.comments.concat(message) 把这一页的数据和下一页的的数据拼接新的数组
        this.comments = this.comments.concat(message);
        this.count = count;
        // this.comments.length 评论长度
        if (this.comments.length >= this.count) {
          this.moretitle = "已经加载完毕了";
          this.flag = true;
        } else {
          this.moretitle = "加载更多";
          this.flag = false;
        }
      } else {
        Toast("获取评论失败");
      }
    },
    getMore() {
      this.pageindex++;
      this.getcomments();
    },
    /* 
     添加评论
     */
    async postcomment() {
      if (this.msg.length == 0) {
        Toast("评论不能为空");
        return;
      }
      const {
        data: { status, message }
      } = await this.$http.post(`api/postcomment/${this.id}`, {
        content: this.msg
      });
      if (status == 0) {
        var cmt = {
          user_name: "匿名用户",
          content: this.msg.trim()
        };
        //添加到数组的开头  重新修改commoents  model 改变  v-for 自动就刷新数据
        this.comments.unshift(cmt);
        this.msg = "";
        Toast(message);
      } else {
        Toast("评论失败");
      }
    }
  }
};
</script>
<style lang="less">
.comment {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    width: 100%;
    height: 85px;
    margin: 0;
  }
  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>
