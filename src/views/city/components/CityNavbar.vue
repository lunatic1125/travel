<template>
  <div class="citynavbar">
    <navbar>
      <navbar-item>
        <template v-slot:left>
          <router-link to="/home" tag="span">&#xe622;</router-link>
        </template>
        <template v-slot:center>城市选择</template>
      </navbar-item>
    </navbar>
  </div>
</template>
<script>
import Navbar from "components/common/navbar/Navbar.vue";
import NavbarItem from "components/common/navbar/NavbarItem.vue";
export default {
  name: "CityNavbar",
  components: {
    Navbar,
    NavbarItem,
  },
};
</script>

<style scoped>
.citynavbar {
  z-index: 10;
}
</style>