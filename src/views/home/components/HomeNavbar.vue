<template>
  <div class="navbar">
    <div class="navbar-item">
      <div class="item-left">
        <h1>Travel</h1>
      </div>
      <router-link to="/city">
        <div class="item-right iconfont">
          &#xe60c;<span>{{ this.$store.state.city }}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeNavbar",
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
  line-height: 2.75rem;
}
.item-right {
  float: right;
  /* icon大小44px */
  text-align: right;
  margin: 0 0.63rem;

  width: 5.63rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item-right span {
  margin-left: 0.25rem;
  font-size: 0.88rem;
}
/* 首页Travel  边距共15px - 5px */
.item-left h1 {
  float: left;
  margin: 0 0.63rem;
  font-size: 1.38rem;
  font-weight: 600;
}
</style>