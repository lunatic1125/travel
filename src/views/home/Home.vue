<template>
  <div class="home">
    <home-navbar></home-navbar>
    <router-link to="/tag">
      <search-btn></search-btn>
    </router-link>
    <banner :banners="banners"></banner>
    <icons :iconList="iconList"></icons>
    <sell-list :hotList="hotList"></sell-list>
    <recommend :recomlist="recomlist" :hotList="recomlist"> </recommend>
    <end></end>
    <main-tabbar />
  </div>
</template>

<script>
import MainTabbar from "components/content/MainTabbar.vue";

import HomeNavbar from "./components/HomeNavbar";
import SearchBtn from "./components/SearchBtn";
import Banner from "./components/Banner";
import Icons from "./components/Icons";
import SellList from "./components/SellList";
import Recommend from "./components/Recommend.vue";
import End from "../../components/content/End.vue";
import { request } from "../../network/request";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    MainTabbar,
    HomeNavbar,
    SearchBtn,
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
      hotList: [],
      recomlist: [],
      lastCity: "",
    };
  },
  methods: {
    getHomeInfo() {
      request({ url: "/api/index.json?city=" + this.city }).then((res) => {
        res = res.data;
        // console.log(res);
        if (res.ret && res.data) {
          const data = res.data;
          this.banners = data.banners;
          this.iconList = data.iconList;
          this.hotList = data.hotList;
          this.recomlist = data.recomlist;
        }
      });
    },
  },
  computed: {
    ...mapState(["city"]),
  },
  mounted() {
    this.getHomeInfo();
    this.lastCity = this.city;
  },
  activated() {
    if (this.lastCity !== this.city) {
      this.getHomeInfo();
      this.lastCity = this.city;
    }
  },
};
</script>

<style>
.home {
  padding-bottom: 2.75rem;
}
</style>