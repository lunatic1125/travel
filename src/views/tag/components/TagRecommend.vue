<template>
  <div ref="wrapper" class="wrapper">
    <div class="tagRecommend">
      <list :prolist="results"></list>
      <p v-show="isNotImg">没有找到匹配的数据</p>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import List from "components/common/list/List.vue";
export default {
  name: "RecommendList",
  components: {
    List,
  },
  props: {
    taglist: Array,
    tagSinfo: String,
  },
  computed: {
    isNotImg() {
      if (this.$store.state.taginfo || this.results.length) {
        return false;
      } else {
        return true;
      }
    },
    results() {
      // 判断入口是点击还是输入
      if (this.$store.state.taginfo) {
        this.datas = this.$store.state.taginfo;
      } else {
        this.datas = this.tagSinfo;
      }
      //重新生成一个数组
      let result = [];
      this.taglist.forEach((obj) => {
        if (
          obj.title.indexOf(this.datas) != -1 ||
          obj.tag.indexOf(this.datas) != -1 ||
          obj.label.join("").indexOf(this.datas) != -1
        ) {
          result.push(obj);
        }
      });
      return result;
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper);
  },
};
</script>

<style scoped>
.wrapper {
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.tagRecommend {
  z-index: 10;
  padding: 0.25rem 0.94rem;
  background-color: #fff;
}
.tagRecommend p {
  font-size: 0.88rem;
  line-height: 1.88rem;
}
</style>