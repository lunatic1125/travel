<template>
  <navbar>
    <navbar-item>
      <template v-slot:left>
        <router-link tag="span" to="/home" :style="styleW"
          >&#xe622;
        </router-link>
      </template>
      <template v-slot:right><span :style="styleW">&#xe60e;</span></template>
    </navbar-item>
  </navbar>
</template>
<script>
import Navbar from "components/common/navbar/Navbar.vue";
import NavbarItem from "components/common/navbar/NavbarItem.vue";
export default {
  name: "ProfNavbar",
  components: {
    Navbar,
    NavbarItem,
  },
  props: {
    styleW: "",
  },
};
</script>

<style scoped>
/* .styleW {
  color: #fff;
} */
</style>