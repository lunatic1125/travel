<template>
  <div class="tag-search">
    <div class="tag-city">
      <input
        ref="tag"
        type="text"
        placeholder="搜索目的地/攻略"
        v-model="tagSinfo"
      />
    </div>
    <div class="tag-content" v-show="isShow">
      <tag-recommend :taglist="taglist" :tagSinfo="tagSinfo"></tag-recommend>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import TagRecommend from "./TagRecommend.vue";

export default {
  name: "TagSearch",
  components: { TagRecommend },
  props: {
    taglist: Array,
  },
  data() {
    return {
      tagSinfo: "",
    };
  },
  watch: {
    // tagSinfo() {
    //   if (this.$store.state.taginfo) {
    //     this.tagSinfo = "this.$store.state.taginfo";
    //     this.$store.commit("tagListChange", "");
    //   }
    // },
  },
  updated() {
    if (this.$store.state.taginfo) {
      this.tagSinfo = this.$store.state.taginfo;
      this.$store.commit("tagListChange", "");
    }
  },
  methods: {},
  computed: {
    storeinfo() {
      if (this.$store.state.taginfo) {
        return this.$store.state.taginfo;
      }
    },
    isShow() {
      if (this.tagSinfo || this.$store.state.taginfo) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.iconfont {
  position: absolute;
  top: 0;
  left: 0;
  /* icon大小44px */
  font-size: 1.38rem;
  padding: 0 0.63rem;
}
.tag-search {
  height: 40px;
  padding: 0 0.94rem 0.44rem;
  background-color: #fff;
}
.tag-city {
  position: relative;
  overflow: hidden;
  /* 搜索框60px */
  height: 1.88rem;
  border-radius: 0.94rem;
  background-color: #f5f6fa;
  z-index: 6;
}
.tag-city input {
  position: absolute;
  top: 2px;
  left: 8px;
  width: 100%;
  padding: 0 0.63rem;
  color: #666;
  height: 1.63rem;
  text-align: center;
  background-color: transparent;
}
.tag-content {
  overflow: hidden;
  position: absolute;
  top: 5.06rem;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-bg-gay);
  z-index: 1;
}
</style>

 