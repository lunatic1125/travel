<template>
  <div class="banner">
    <swiper></swiper>
  </div>
</template>

<script>
import Swiper from "components/common/swiper/Swiper";
export default {
  name: "Banner",
  components: {
    Swiper,
  },
};
</script>

<style scoped>
.banner {
  margin: 0 0.94rem;
  width: 21.56rem;
  height: 10rem;
  /* 边角4px */
  border-radius: 0.25rem;
  overflow: hidden;
  background-color: #e8e8e8;
}
</style>