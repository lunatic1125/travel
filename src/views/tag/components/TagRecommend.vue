<template>
  <div ref="wrapper" class="wrapper">
    <div class="tagRecommend">
      <list v-for="obj in results" :key="obj.id + 'tagInfo'">
        <!-- 列标图片 -->
        <template v-slot:list-img>
          <list-img>
            <template v-slot:label>{{ tagInfo }}</template>
            <template>
              <img :src="obj.imgUrl" alt="" />
            </template>
          </list-img>
        </template>
        <!-- 列表文字 -->
        <template v-slot:list-item>
          <list-item>
            <template v-slot:item-title> {{ obj.title }} </template>
            <template v-slot:item-desc>{{ obj.desc }} </template>
            <template v-slot:item-price> {{ obj.price }} </template>
          </list-item>
        </template>
      </list>
    </div>
  </div>
</template>

<script>
import List from "components/common/list/List.vue";
import ListImg from "components/common/list/ListImg.vue";
import ListItem from "components/common/list/ListItem.vue";
import BScroll from "better-scroll";
export default {
  name: "RecommendList",
  components: {
    List,
    ListItem,
    ListImg,
  },
  props: {
    taglist: Array,
    tagInfo: "",
  },
  data() {
    return {};
  },
  computed: {
    results() {
      let result = [];
      this.taglist.forEach((item) => {
        let data = item.tag;
        if (data.indexOf(this.tagInfo) != -1) {
          result = item.list;
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
  padding: 0 0.94rem 0.63rem;
  background-color: #fff;
}
</style>