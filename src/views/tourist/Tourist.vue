<template>
  <div class="tourist">
    <tourist-navbar />
    <tourist-banner />
    <tab-travels />
    <main-tabbar />
  </div>
</template>

<script>
import MainTabbar from "components/content/MainTabbar.vue";
import TouristNavbar from "./components/Navbar";
import TouristBanner from "./components/Banner";
import TabTravels from "./components/TabTravels.vue";

export default {
  components: { TouristNavbar, MainTabbar, TouristBanner, TabTravels },
  name: "Tourist",
};
</script>

<style>
</style>