<template>
  <div class="tag">
    <tag-navbar></tag-navbar>
    <tag-search :taglist="taglist"></tag-search>
    <tag-list :taglist="taglist"></tag-list>
  </div>
</template>

<script>
import TagNavbar from "./components/TagNavbar.vue";
import TagSearch from "./components/TagSearch.vue";
import TagList from "./components/TagList.vue";
import { request } from "network/request";
export default {
  name: "Tag",
  components: {
    TagNavbar,
    TagSearch,
    TagList,
  },
  data() {
    return {
      taglist: [],
    };
  },
  methods: {
    getTag() {
      request({ url: "/api/taveltag.json" }).then((res) => {
        res = res.data;
        if (res.ret && res.data) {
          const data = res.data;
          this.taglist = data.taglist;
        }
      });
    },
  },
  mounted() {
    this.getTag();
  },
};
</script>

<style>
</style>