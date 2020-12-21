<template>
  <div class="sell">
    <div class="sell-title">
      <span>本周热销</span>
    </div>
    <div class="lists">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in hotList" :key="item.id">
          <div class="lists-item">
            <img :src="item.imgUrl" alt="" />
            <div class="item-center">
              <h3>{{ item.city }}</h3>
              <i></i>
              <p>{{ item.message }}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "SellList",
  props: {
    hotList: Array,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 2.5,
        spaceBetween: 30,
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
.sell {
  width: 100%;
  padding: 0 0.94rem;
}
.sell-title {
  height: 2.38rem;
  line-height: 2.38rem;
  /* background-color: #666; */
}
.sell-title::before {
  content: "";
  display: inline-block;
  width: 0.19rem;
  height: 0.63rem;
  background-color: var(--color-tink);
}
.sell-title span {
  font-size: 0.94rem;
  margin-left: 0.5rem;
}
.lists {
  width: 100%;
}
.lists-item {
  position: relative;
  width: 8.75rem;
  height: 6.25rem;
  border-radius: 0.25rem;
  overflow: hidden;
}
.lists-item img {
  width: 100%;
}
.item-center {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  line-height: 1.75rem;
  padding: 1.5rem 1.13rem;

  font-size: 0.75rem;
  text-align: center;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.4);
}
.item-center h3 {
  font-size: 1.06rem;
}
.item-center i {
  display: block;
  width: 2.5rem;
  height: 0.06rem;
  margin: 0 auto;
  background-color: #fff;
}
.item-center p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>