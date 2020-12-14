<template>
  <div class="navbar-item">
    <div class="item-left iconfont">
      <slot name="left"></slot>
    </div>
    <div class="item-center">
      <slot name="center"></slot>
    </div>
    <div class="item-right iconfont">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarItem",
};
</script>

<style scoped>
.navbar-item {
  width: 100%;
  display: flex;
}
.item-left,
.item-right {
  width: 5rem;
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

/* 首页Travel  边距共15px - 5px */
.item-left h1 {
  margin: 0 0.63rem;
  font-size: 1.38rem;
  font-weight: 600;
}
</style>