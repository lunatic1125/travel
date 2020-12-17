<template>
  <div class="container" @click="handelClose">
    <div class="wrapper">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="(item, index) in proimglist" :key="index">
          <img :src="item"
        /></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallary",
  props: { proimglist: Array },
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        paginationType: "fraction",
        observer: true,
        observeParents: true,
      },
    };
  },
  methods: {
    handelClose() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.container >>> .swiper-container {
  overflow: inherit;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #000;
  z-index: 99;
}
.wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 100%;
}
.wrapper img {
  width: 100%;
}

.swiper-pagination {
  color: #fff;
  bottom: -3rem;
}
</style>