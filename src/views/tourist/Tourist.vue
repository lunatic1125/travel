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
import { request } from "../../network/request";

export default {
  components: { TouristNavbar, MainTabbar, TouristBanner, TabTravels },
  name: "Tourist",
  data() {
    return {
      travels: [],
      recommend: [],
      mytravel: {},
    };
  },
  methods: {
    getData() {
      request({ url: "/api/pinterest.json" }).then((res) => {
        res = res.data;
        if (res.ret && res.data) {
          const data = res.data;
          this.travels = data.travels;
          this.recommend = data.recommend;
          this.mytravel = data.mytravel;
          this.$store.commit("getTravels", this.travels);
          this.$store.commit("getRecommend", this.recommend);
          this.$store.commit("getMytravel", this.mytravel);
        }
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style>
</style>