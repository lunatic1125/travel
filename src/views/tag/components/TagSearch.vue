<template>
  <div class="tag-search">
    <div class="tag-city">
      <input type="text" placeholder="搜索目的地/攻略" v-model="newTagInfo" />
    </div>
    <div class="tag-content" v-show="showTagInfo">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "TagSearch",
  props: {
    tagInfo: "",
  },
  data() {
    return {
      newTagInfo: "",
    };
  },
  watch: {
    tagInfo() {
      this.newTagInfo = this.tagInfo;
    },
  },
  computed: {
    showTagInfo() {
      return this.newTagInfo.length;
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
  background-color: #f5f6fa;
  z-index: 1;
}
</style>

 