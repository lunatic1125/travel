<template>
  <div class="home">
    <home-navbar></home-navbar>
    <search></search>
    <banner />
  </div>
</template>

<script>
import HomeNavbar from "./homecompents/HomeNavbar";
import Search from "./homecompents/Search";
import Banner from "./homecompents/Banner";

export default {
  name: "Home",
  components: {
    HomeNavbar,
    Search,
    Banner,
  },
};
Banner;
</script>

<style>
</style>