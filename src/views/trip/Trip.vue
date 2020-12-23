<template>
  <div class="trip">
    <trip-navbar></trip-navbar>
    <trip-banner />
    <trip-recommend />
    <trip-list :taglist="taglist" />
    <main-tabbar />
  </div>
</template>

<script>
import MainTabbar from "components/content/MainTabbar.vue";
import TripBanner from "./components/Banner";
import TripRecommend from "./components/Recommend";
import TripList from "./components/TripList";
import TripNavbar from "./components/TripNavbar";
import { request } from "network/request";

export default {
  name: "Trip",
  components: {
    TripNavbar,
    TripBanner,
    TripRecommend,
    TripList,
    MainTabbar,
  },
  data() {
    return {
      taglist: [],
    };
  },
  methods: {
    getProlist() {
      request({ url: "/api/taveltag.json" }).then((res) => {
        res = res.data;
        if (res.data && res.data) {
          const data = res.data;
          this.taglist = data.taglist;
        }
      });
    },
  },
  mounted() {
    this.getProlist();
  },
};
</script>

<style>
</style>