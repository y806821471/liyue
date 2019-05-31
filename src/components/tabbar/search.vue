<template>
  <div>
    <van-search  placeholder="请输入搜索关键词" show-action shape="round">
      <div slot="action">搜索</div>
    </van-search>
  </div>
</template>
  
  <script>
export default {};
</script>
  
  <style>
  .van-search{
      background-color: #ff9999 !important;
  }
  .van-search__action{
      border-radius: 10px;
  }
  /* .van-search__action:hover{
      background-color: #fff;
  } */
</style>