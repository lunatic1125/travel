<template>
  <div class="tagnavbar">
    <navbar>
      <navbar-item>
        <template v-slot:left>
          <router-link to="/home" tag="span">&#xe622;</router-link>
        </template>
        <template v-slot:center>搜索</template>
      </navbar-item>
    </navbar>
  </div>
</template>
<script>
import Navbar from "components/common/navbar/Navbar.vue";
import NavbarItem from "components/common/navbar/NavbarItem.vue";
export default {
  name: "TagNavbar",
  components: {
    Navbar,
    NavbarItem,
  },
};
</script>

<style scoped>
.tagnavbar {
  z-index: 10;
}
</style>