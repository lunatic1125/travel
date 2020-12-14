<template>
  <div class="banner">
    <!-- <swiper></swiper> -->
    <!-- 只有当访问到数据后在生成swiper 即banners数据不为空 -->
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide :key="item.id" v-for="item in banners">
        <img :src="item.imgUrl" alt="" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Banner",
  props: {
    banners: Array,
  },
  data() {
    return {
      // banners: [
      //   { id: "01", imgUrl: require("assets/image/banner/banner1@2x.png") },
      //   { id: "02", imgUrl: require("assets/image/banner/banner2@2x.png") },
      // ],
      swiperOption: {
        pagination: ".swiper-pagination", // 默认点不显示
        loop: true, //可以前后切换下一张
      },
    };
  },
  computed: {
    showSwiper() {
      return this.banners.length;
    },
  },
  components: {
    swiper,
    swiperSlide,
  },
};
</script>

<style scoped>
.banner {
  padding: 0 0.94rem;
  margin-bottom: 0.44rem;
  /* 边角4px */
  border-radius: 0.25rem;
  overflow: hidden;
}
/* 穿透 在其他页面也起效 不受scoped限制 >>> */
.swiper-container >>> .swiper-pagination-bullet {
  width: 0.63rem;
  height: 0.31rem;
  border-radius: 0.13rem;
}
.swiper-container >>> .swiper-pagination-bullet-active {
  background-color: #fff !important;
}
.swiper-container img {
  width: 100%;
}
</style>