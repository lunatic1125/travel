<template>
  <div class="prolist">
    <pro-navbar></pro-navbar>
    <pro-banner></pro-banner>
    <pro-img></pro-img>
    <pro-title></pro-title>
  </div>
</template>

<script>
import ProNavbar from "./components/ProNavbar";
import ProBanner from "./components/ProBanner";
import ProImg from "./components/ProImg";
import ProTitle from "./components/ProTitle";

export default {
  name: "Prolist",
  components: {
    ProNavbar,
    ProBanner,
    ProImg,
    ProTitle,
  },
};
</script>

<style scoped>
</style>