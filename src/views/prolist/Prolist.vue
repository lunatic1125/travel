<template>
  <div class="prolist">
    <pro-navbar :proname="proname"></pro-navbar>
    <pro-banner-pag
      :proname="proname"
      :proimglist="proimglist"
    ></pro-banner-pag>
    <pro-title
      :tripplan="tripplan"
      :tripfeature="tripfeature"
      :tripserve="tripserve"
    ></pro-title>
  </div>
</template>

<script>
import ProNavbar from "./components/ProNavbar";
import ProBannerPag from "./components/ProBannerPag";
import ProTitle from "./components/ProTitle";
import axios from "axios";

export default {
  name: "Prolist",
  components: {
    ProNavbar,
    ProBannerPag,
    ProTitle,
  },
  data() {
    return {
      proname: {},
      proimglist: [],
      tripplan: {},
      tripfeature: {},
      tripserve: {},
      currentId: "",
    };
  },
  methods: {
    getDetailJson() {
      axios
        .get("/api/detail.json", {
          params: { id: this.$route.params.id },
        })
        .then(this.handelDetail);
    },
    handelDetail(res) {
      res = res.data;
      if (res.ret && res.data) {
        let data = res.data;
        this.proname = data.proname;
        this.proimglist = data.proimglist;
        this.tripplan = data.tripplan;
        this.tripfeature = data.tripfeature;
        this.tripserve = data.tripserve;
      }
    },
  },
  mounted() {
    this.getDetailJson();
  },
  activated() {
    console.log(this.$route.params.id);
    console.log();
    // if (this.$route.params.id != this.$route.params.id) {
    //   this.getDetailJson();
    //   this.$route.params.id = this.$route.params.id;
    // }
  },
};
</script>

<style scoped>
</style>