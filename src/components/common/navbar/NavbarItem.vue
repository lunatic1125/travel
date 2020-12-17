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
  width: 2.75rem;
  /* icon大小44px */
  font-size: 1.38rem;
  line-height: 2.75rem;
}
.item-right {
  text-align: right;
}
.item-right span,
.item-left span {
  padding: 0.38rem;
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