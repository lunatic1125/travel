<template>
  <div class="proicons">
    <div class="icon-item">
      <span class="iconfont">&#xe61b;</span>
      <p>订单</p>
    </div>
    <div class="icon-item">
      <span class="iconfont">&#xe61a;</span>
      <p>收藏</p>
    </div>
    <div class="icon-item">
      <span class="iconfont">&#xe61c;</span>
      <p>历史</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProIcons",
};
</script>

<style scoped>
.proicons {
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  margin-bottom: 15px;
}
.icon-item {
  margin: 15px;
  font-size: 15px;
  text-align: center;
}
.iconfont {
  font-size: 34px;
}
</style>