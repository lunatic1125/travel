<template>
  <div class="home">
    <home-navbar></home-navbar>
    <search></search>
    <banner></banner>
    <icons></icons>
    <list></list>
  </div>
</template>

<script>
import HomeNavbar from "./homecompents/HomeNavbar";
import Search from "./homecompents/Search";
import Banner from "./homecompents/Banner";
import Icons from "./homecompents/Icons";
import List from "./homecompents/List";

export default {
  name: "Home",
  components: {
    HomeNavbar,
    Search,
    Banner,
    Icons,
    List,
  },
};
</script>

<style>
</style>