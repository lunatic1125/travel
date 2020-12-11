<template>
  <div class="home">
    <home-navbar></home-navbar>
    <search></search>
    <banner></banner>
    <icons></icons>
    <sell-list></sell-list>
    <recommend></recommend>
  </div>
</template>

<script>
import HomeNavbar from "./homecompents/HomeNavbar";
import Search from "./homecompents/Search";
import Banner from "./homecompents/Banner";
import Icons from "./homecompents/Icons";
import SellList from "./homecompents/SellList";
import Recommend from "./homecompents/Recommend.vue";

export default {
  name: "Home",
  components: {
    HomeNavbar,
    Search,
    Banner,
    Icons,
    SellList,
    Recommend,
  },
};
</script>

<style>
</style>