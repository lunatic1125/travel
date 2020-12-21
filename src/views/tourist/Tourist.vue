<template>
  <div class="tourist">
    <tourist-navbar />
    <tourist-banner />
    <tour-tab-one />
    <main-tabbar />
  </div>
</template>

<script>
import MainTabbar from "components/content/MainTabbar.vue";
import TouristNavbar from "./components/Navbar";
import TouristBanner from "./components/Banner";
import TourTabOne from "./components/TourTabOne.vue";

export default {
  components: { TouristNavbar, MainTabbar, TouristBanner, TourTabOne },
  name: "Tourist",
};
</script>

<style>
</style>