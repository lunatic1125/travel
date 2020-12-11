<template>
  <div class="banner">
    <!-- <swiper></swiper> -->
    <swiper :options="swiperOption">
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
  name: "Swiper",
  data() {
    return {
      banners: [
        { id: "01", imgUrl: require("assets/image/banner/banner1@2x.png") },
        { id: "02", imgUrl: require("assets/image/banner/banner2@2x.png") },
      ],
      swiperOption: {
        pagination: ".swiper-pagination", // 默认点不显示
        loop: true, //可以前后切换下一张
      },
    };
  },
  components: {
    swiper,
    swiperSlide,
  },
};
</script>

<style scoped>
.banner {
  margin: 0 0.94rem 0.44rem;
  width: 21.56rem;
  height: 10rem;
  /* 边角4px */
  border-radius: 0.25rem;
  overflow: hidden;
  background-color: #e8e8e8;
}
/* 穿透 在其他页面也起效 不受scoped限制 >>> */
.swiper-container >>> .swiper-pagination-bullet {
  width: 10px;
  height: 5px;
  border-radius: 2px;
}
.swiper-container >>> .swiper-pagination-bullet-active {
  background-color: #fff !important;
}

.swiper-container img {
  width: 100%;
}
</style>