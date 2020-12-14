<template>
  <div class="city">
    <city-navbar></city-navbar>
    <city-search></city-search>
    <city-list :hot_citys="hot_citys" :city_list="city_list"></city-list>
    <alphabet :classify_list="classify_list"></alphabet>
  </div>
</template>

<script>
import CityNavbar from "./components/CityNavbar.vue";
import CitySearch from "./components/CitySearch.vue";
import CityList from "./components/CityList.vue";
import Alphabet from "./components/Alphabet.vue";
import { request } from "../../network/request.js";

export default {
  name: "City",
  components: {
    CityNavbar,
    CitySearch,
    CityList,
    Alphabet,
  },
  data() {
    return {
      hot_citys: [],
      city_list: [],
      classify_list: [],
    };
  },
  methods: {
    getCityInfo() {
      request({ url: "/api/word-city-list.json" }).then((res) => {
        res = res.data;
        if (res.ret && res.data) {
          const data = res.data;
          this.hot_citys = data.hot_citys;
          this.city_list = data.city_list;
          this.classify_list = data.classify_list;
        }
      });
    },
  },
  mounted() {
    this.getCityInfo();
  },
};
</script>

<style>
</style>