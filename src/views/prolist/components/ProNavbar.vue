<template>
  <div class="navbar">
    <div class="navbar-item">
      <div class="item-left iconfont"><span>&#xe622;</span></div>
      <div class="item-center">风光摄影</div>
      <div class="item-right iconfont"><span>&#xe618;</span></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProNavbar",
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  height: 2.75rem;
  /* 内边距5px */
  padding: 0 0.31rem;
}
.navbar-item {
  width: 100%;
  display: flex;
}
.item-left,
.item-right {
  width: 7.5rem;
  /* icon大小44px */
  font-size: 1.38rem;
  line-height: 2.75rem;
}
.item-right {
  text-align: right;
}
.item-right span,
.item-left span {
  padding: 0.63rem;
}
.item-center {
  flex: 1;
  /* 导航栏文字36-38px */
  margin: 0;
  font-size: 1.06rem;
  text-align: center;
  line-height: 2.75rem;
}
</style>