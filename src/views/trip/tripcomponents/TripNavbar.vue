<template>
  <navbar>
    <navbar-item>
      <template v-slot:left>
        <a href="javascript:;">&#xe610;</a>
      </template>
    </navbar-item>
    <navbar-item>
      <template v-slot:center>
        <h2>行程</h2>
      </template>
    </navbar-item>
    <navbar-item>
      <template v-slot:right>
        <a href="javascript:;">&#xe60f;</a>
      </template>
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