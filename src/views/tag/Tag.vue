<template>
  <div class="tag">
    <tag-navbar></tag-navbar>
    <tag-search :tagInfo="tagInfo">
      <tag-recommend :taglist="taglist" :tagInfo="tagInfo"></tag-recommend>
    </tag-search>
    <tag-list :taglist="taglist" @tagChange="tagChange"></tag-list>
  </div>
</template>

<script>
import TagNavbar from "./components/TagNavbar.vue";
import TagSearch from "./components/TagSearch.vue";
import TagList from "./components/TagList.vue";
import { request } from "network/request";
import TagRecommend from "./components/TagRecommend.vue";
import axios from "axios";

export default {
  name: "Tag",
  components: {
    TagNavbar,
    TagSearch,
    TagRecommend,
    TagList,
  },
  data() {
    return {
      taglist: [],
      tagInfo: "",
    };
  },
  methods: {
    getTag() {
      request({ url: "/api/tag.json" }).then((res) => {
        res = res.data;
        if (res.ret && res.data) {
          const data = res.data;
          this.taglist = data.taglist;
        }
        console.log(this.taglist);
      });
    },
    tagChange(info) {
      this.tagInfo = info;
    },
  },
  mounted() {
    this.getTag();
  },
};
</script>

<style>
</style>