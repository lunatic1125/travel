<template>
  <div class="search-list" ref="wrapper">
    <div class="content" ref="content">
      <!-- 最近搜索 -->
      <div class="area">
        <div class="title">最近搜索</div>
        <div class="history">
          <span v-for="item in hot_citys" :key="item.cityCode">{{
            item.n
          }}</span>
        </div>
      </div>
      <!-- 字母列表 -->
      <div class="area" v-for="item in city_list" :key="item.cityCode">
        <div class="title">{{ item.k }}</div>
        <ul class="letter-list" v-for="list in item.n" :key="list.cityCode">
          <li>{{ list.n }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "CityList",
  props: {
    hot_citys: Array,
    city_list: Array,
  },
  mounted() {
    //第一个参数是滚动元素的外盒子 第二个参数是配置项
    this.scroll = new BScroll(this.$refs.wrapper, {
      // click: true,
    });
    console.log(this.scroll);
    console.log(this.scroll.scrollerHeight);
  },
};
</script>

<style scoped>
.search-list {
  overflow: hidden;
  padding: 0 0.94rem;
  position: absolute;
  top: 5rem;
  left: 0;
  right: 0;
  bottom: 0;
}
.content {
  padding-right: 1.25rem;
  padding-bottom: 80px;
}
.title {
  font-size: 1rem;
  font-weight: 600;
  height: 2.38rem;
  line-height: 2.38rem;
}

.history {
  padding: 0.13rem 0;
}
.history span {
  display: inline-block;
  margin: 0.25rem 0.63rem 0.25rem 0;
  padding: 0.25rem 1.25rem;
  font-size: 0.88rem;
  border-radius: 0.69rem;
  background-color: #f5f6fa;
}
.letter-list li {
  font-size: 0.88rem;
  line-height: 1.88rem;
  border-bottom: 0.06rem solid #e6e6e6;
}
</style>