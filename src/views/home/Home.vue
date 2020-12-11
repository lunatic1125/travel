<template>
  <div class="home">
    <home-navbar></home-navbar>
    <search></search>
    <banner></banner>
    <king-icons />
  </div>
</template>

<script>
import HomeNavbar from "./homecompents/HomeNavbar";
import Search from "./homecompents/Search";
import Banner from "./homecompents/Banner";
import KingIcons from "./homecompents/KingIcons";

export default {
  name: "Home",
  components: {
    HomeNavbar,
    Search,
    Banner,
    KingIcons,
  },
};
</script>

<style>
</style>