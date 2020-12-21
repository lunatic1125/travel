<template>
  <div id="app">
    <keep-alive exclude="Tag">
      <router-view />
    </keep-alive>
    <!-- <main-tabbar /> -->
  </div>
</template>

<script>
export default {
  name: "App",
  // components: {
  //   MainTabbar,
  // },
};
</script>

<style>
@import "assets/css/base.css";
</style>
