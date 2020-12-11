<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icons-item" :key="item.id" v-for="item in page">
          <img :src="item.iconSrc" alt="" />
          <div>{{ item.iconText }}</div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "Icons",
  data() {
    return {
      iconList: [
        {
          id: "01",
          iconSrc: require("assets/image/icons/photo@2x.png"),
          iconText: "风光摄影",
        },
        {
          id: "02",
          iconSrc: require("assets/image/icons/drive@2x.png"),
          iconText: "户外自驾",
        },
        {
          id: "03",
          iconSrc: require("assets/image/icons/family@2x.png"),
          iconText: "亲子教育",
        },
        {
          id: "04",
          iconSrc: require("assets/image/icons/business@2x.png"),
          iconText: "商务团建",
        },
        // {
        //   id: "05",
        //   iconSrc: require("assets/image/icons/business@2x.png"),
        //   iconText: "商务团建",
        // },
      ],
    };
  },
  components: {
    swiper,
    swiperSlide,
  },
  computed: {
    // 分页切换
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 4);
        // 当index=4的时候 page = 1 pages[1]不存在
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    },
  },
};
</script>

<style scoped>
.icons {
  margin: 0 0.94rem;
  height: 5.5rem;
  overflow: hidden;
}
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  display: flex;
  justify-content: space-between;
}
.icons-item {
  font-size: 0.75rem;
  text-align: center;
}
.icons-item img {
  width: 3.38rem;
  margin: 0.38rem;
}
</style>