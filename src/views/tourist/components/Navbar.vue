<template>
  <navbar>
    <navbar-item>
      <template v-slot:left><span>&#xe622;</span></template>
      <template v-slot:center>旅行家</template>
      <template v-slot:right><span>&#xe60f;</span></template>
    </navbar-item>
  </navbar>
</template>
<script>
import Navbar from "components/common/navbar/Navbar.vue";
import NavbarItem from "components/common/navbar/NavbarItem.vue";
export default {
  name: "TouristNavbar",
  components: {
    Navbar,
    NavbarItem,
  },
};
</script>

<style>
</style>