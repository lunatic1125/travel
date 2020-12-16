<template>
  <div class="city-search">
    <div class="city-item">
      <input type="text" v-model="keyword" placeholder="搜索目的地/攻略" />
    </div>
    <div class="search-content" ref="wrapper" v-show="keyword">
      <ul class="search-keyword">
        <li
          v-for="item in list"
          :key="item.cityCode"
          @click="changeCity(item.n)"
        >
          {{ item.n }}
        </li>
        <li v-show="lisnodata">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "CitySearch",
  props: {
    city_list: Array,
  },
  data() {
    return {
      keyword: "",
      timer: null,
      list: [],
    };
  },
  methods: {
    changeCity(city) {
      this.$store.commit("changeCity", city);
      this.$router.push("/home");
    },
  },
  computed: {
    lisnodata() {
      return !this.list.length;
    },
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        this.city_list.forEach((item) => {
          // console.log(item["n"]);
          item["n"].forEach((value) => {
            // console.log(i);
            if (
              value.c.indexOf(this.keyword) != -1 ||
              value.n.indexOf(this.keyword) != -1
            ) {
              result.push(value);
            }
          });
        });
        this.list = result;
      }, 100);
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper);
  },
};
</script>

<style>
.city-search {
  height: 40px;
  padding: 0 0.94rem 0.44rem;
  background-color: #fff;
}
.city-item {
  position: relative;
  overflow: hidden;
  /* 搜索框60px */
  height: 1.88rem;
  border-radius: 0.94rem;
  background-color: var(--color-bg-gay);
  z-index: 6;
}
.city-item input {
  position: absolute;
  top: 2px;
  left: 8px;
  width: 100%;
  padding: 0 0.63rem;
  height: 1.63rem;
  text-align: center;
  background-color: transparent;
}
.search-content {
  overflow: hidden;
  position: absolute;
  top: 5.06rem;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f5f6fa;
  z-index: 1;
}
.search-keyword li {
  padding: 0 0.94rem;
  font-size: 0.88rem;
  line-height: 1.88rem;
  border-bottom: 0.06rem solid #e6e6e6;
  background-color: #fff;
}
</style>