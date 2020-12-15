<template>
  <navbar>
    <navbar-item>
      <template v-slot:left>
        <h1>Travel</h1>
      </template>
      <template v-slot:right> <span>&#xe60d;</span></template>
    </navbar-item>
  </navbar>
</template>

<script>
import Navbar from "components/common/navbar/Navbar.vue";
import NavbarItem from "components/common/navbar/NavbarItem.vue";
export default {
  name: "HomeNavbar",
  components: {
    Navbar,
    NavbarItem,
  },
};
</script>

<style>
</style>