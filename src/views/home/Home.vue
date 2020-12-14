<template>
  <div class="home">
    <home-navbar></home-navbar>
    <search></search>
    <banner :banners="banners"></banner>
    <icons :iconList="iconList"></icons>
    <sell-list :proList="proList"></sell-list>
    <recommend :recomlist="recomlist"></recommend>
    <end></end>
  </div>
</template>

<script>
import HomeNavbar from "./homecompents/HomeNavbar";
import Search from "./homecompents/Search";
import Banner from "./homecompents/Banner";
import Icons from "./homecompents/Icons";
import SellList from "./homecompents/SellList";
import Recommend from "./homecompents/Recommend.vue";
import End from "../../components/content/End.vue";
import { request } from "../../network/request";
// import axios from "axios";

export default {
  name: "Home",
  components: {
    HomeNavbar,
    Search,
    Banner,
    Icons,
    SellList,
    Recommend,
    End,
  },
  data() {
    return {
      banners: [],
      iconList: [],
      proList: [],
      recomlist: [],
    };
  },
  methods: {
    // getHomeInfo() {
    //   axios.get("/api/index.json").then((res) => {
    //     console.log(res);
    //   });
    // },
  },
  mounted() {
    // this.getHomeInfo();
    request({ url: "/api/index.json" }).then((res) => {
      res = res.data;
      console.log(res);
      if (res.ret && res.data) {
        const data = res.data;
        this.banners = data.banners;
        this.iconList = data.iconList;
        this.proList = data.proList;
        this.recomlist = data.recomlist;
      }
    });
  },
};
</script>

<style>
.home {
  padding-bottom: 2.75rem;
}
</style>