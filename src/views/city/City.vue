<template>
  <div class="city">
    <city-navbar></city-navbar>
    <city-search :city_list="city_list"></city-search>
    <city-list
      :hot_citys="hot_citys"
      :city_list="city_list"
      :handelIndex="handelIndex"
    ></city-list>
    <alphabet
      :classify_list="classify_list"
      @changeInfo="changeInfo"
    ></alphabet>
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
      handelIndex: "",
    };
  },
  methods: {
    getCityInfo() {
      request({
        url: "/api/china-city-list.json",
      }).then((res) => {
        res = res.data;
        if (res.ret && res.data) {
          const data = res.data;
          this.hot_citys = data.hot_citys;
          this.city_list = data.city_list;
          this.classify_list = data.classify_list;
        }
      });
    },
    changeInfo(inner) {
      this.handelIndex = inner;
    },
  },
  mounted() {
    this.getCityInfo();
  },
};
</script>

<style>
</style>