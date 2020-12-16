<template>
  <div class="search-list" ref="wrapper">
    <div class="content" ref="content">
      <!-- 当前城市 -->
      <div class="area">
        <div class="area-title">当前城市</div>
        <div class="history">
          <span class="active">{{ this.$store.state.city }}</span>
        </div>
      </div>
      <!-- 热门城市 -->
      <div class="area">
        <div class="area-title">热门搜索</div>
        <div class="history">
          <span
            v-for="item in hot_citys"
            :key="item.cityCode"
            @click="changeCity(item.n)"
            >{{ item.n }}
          </span>
        </div>
      </div>
      <!-- 字母列表 -->
      <div
        class="area"
        v-for="item in city_list"
        :key="item.cityCode"
        :ref="item.k"
      >
        <div class="area-title">{{ item.k }}</div>
        <ul class="letter-list" v-for="list in item.n" :key="list.cityCode">
          <li @click="changeCity(list.n)">{{ list.n }}</li>
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
    handelIndex: String,
  },
  watch: {
    handelIndex() {
      // 监听点击字母的变化
      if (this.handelIndex) {
        const element = this.$refs[this.handelIndex][0];
        //滚动到的目标元素
        this.scroll.scrollToElement(element);
      }
    },
  },
  methods: {
    InitTabScroll() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
      });
    },
    changeCity(city) {
      this.$store.commit("changeCity", city);
      this.$router.push("/home");
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.InitTabScroll();
    });
  },
};
</script>

<style scoped>
.search-list {
  overflow: hidden;
  padding: 0 0.94rem;
  position: absolute;
  top: 5.25rem;
  left: 0;
  right: 0;
  bottom: 0;
}
.content {
  padding-right: 1rem;
  padding-bottom: 5rem;
}
.area-title {
  font-size: 0.94rem;
  font-weight: 500;
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
  border-radius: 0.25rem;
  background-color: var(--color-bg-gay);
}
.history .active {
  background-color: var(--color-tink);
  color: #fff;
}
.letter-list li {
  font-size: 0.88rem;
  line-height: 1.88rem;
  border-bottom: 0.06rem solid var(--color-border);
}
</style>