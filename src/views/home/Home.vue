<template>
  <div class="home">
    <home-navbar></home-navbar>
    <router-link to="/tag">
      <search-btn></search-btn>
    </router-link>
    <banner :banners="banners"></banner>
    <icons :iconList="iconList"></icons>
    <sell-list :hotList="hotList"></sell-list>
    <recommend :recomlist="recomlist">
      <recommend-list :hotList="recomlist"></recommend-list>
    </recommend>
    <end></end>
  </div>
</template>

<script>
import HomeNavbar from "./components/HomeNavbar";
import SearchBtn from "./components/SearchBtn";
import Banner from "./components/Banner";
import Icons from "./components/Icons";
import SellList from "./components/SellList";
import Recommend from "./components/Recommend.vue";
import RecommendList from "components/content/RecommendList.vue";
import End from "../../components/content/End.vue";
import { request } from "../../network/request";
// import axios from "axios";

export default {
  name: "Home",
  components: {
    HomeNavbar,
    SearchBtn,
    Banner,
    Icons,
    SellList,
    Recommend,
    RecommendList,
    End,
  },
  data() {
    return {
      banners: [],
      iconList: [],
      hotList: [],
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
};
</script>

<style>
.home {
  padding-bottom: 2.75rem;
}
</style>