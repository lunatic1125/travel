<template>
  <div class="profile">
    <prof-navbar style="background-color: #fff"></prof-navbar>
    <proftitle />
    <pro-icons />
    <pro-server></pro-server>
    <main-tabbar />
  </div>
</template>

<script>
import MainTabbar from "components/content/MainTabbar.vue";
import ProfNavbar from "./components/Navbar";
import Proftitle from "./components/Title";
import ProIcons from "./components/ProIcons";
import ProServer from "./components/Server";

export default {
  name: "Profile",
  components: {
    ProfNavbar,
    MainTabbar,
    Proftitle,
    ProIcons,
    ProServer,
  },
};
</script>

<style scoped>
.profile {
  width: 100%;
  height: 0;
  padding-bottom: 178%;
  background-color: var(--color-bg-gay);
}
</style>