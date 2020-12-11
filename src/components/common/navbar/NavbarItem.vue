<template>
  <div class="navbar-item iconfont">
    <slot name="left"></slot>
    <slot name="center"></slot>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  name: "NavbarItem",
};
</script>

<style scoped>
.navbar-item {
  /* icon大小44px */
  font-size: 1.38rem;
  text-align: center;
}
/* 首页Travel  边距共15px - 5px */
.navbar-item h1 {
  margin: 0 0.63rem;
  font-size: 1.38rem;
  font-weight: 600;
  line-height: 2.75rem;
}
/* 导航栏文字36-38px */
.navbar-item h2 {
  margin: 0;
  font-size: 1.13rem;
  line-height: 2.75rem;
}
/* 导航栏icon */
.navbar-item a {
  display: block;
  padding: 0.63rem;
}
</style>