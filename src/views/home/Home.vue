<template>
  <div class="home">
    <home-navbar></home-navbar>
    <search></search>
    <banner></banner>
    <icons></icons>
    <h2>我也是不</h2>
  </div>
</template>

<script>
import HomeNavbar from "./homecompents/HomeNavbar";
import Search from "./homecompents/Search";
import Banner from "./homecompents/Banner";
import Icons from "./homecompents/Icons";

export default {
  name: "Home",
  components: {
    HomeNavbar,
    Search,
    Banner,
    Icons,
  },
};
</script>

<style>
</style>