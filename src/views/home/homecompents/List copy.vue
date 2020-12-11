<template>
  <div class="list">
    <div class="list-title">
      <span>本周热销</span>
    </div>
    <div class="lists">
      <div class="lists-item" v-for="item in proList" :key="item.id">
        <img :src="item.proSrc" alt="" />
        <div class="item-center">
          <h3>{{ item.title }}</h3>
          <i></i>
          <p>{{ item.message }}</p>
        </div>
      </div>
    </div>
    <!-- <swiper>
      <swiper-slide>
        <div class="list-item">
          <img src="" alt="" />
          <div></div>
        </div>
      </swiper-slide>
    </swiper> -->
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "List",
  data() {
    return {
      proList: [
        {
          id: "01",
          title: "马尔代夫",
          message: "亲子优选/水上娱乐",
          proSrc: require("assets/image/updata/1.png"),
        },
        {
          id: "02",
          title: "曼谷普吉",
          message: "7天6晚自由行",
          proSrc: require("assets/image/updata/2.png"),
        },
        {
          id: "03",
          title: "巴厘岛",
          message: "婚礼蜜月旅行",
          proSrc: require("assets/image/updata/3.png"),
        },
        {
          id: "04",
          title: "毛里求斯",
          message: "亲子优选/水上娱乐",
          proSrc: require("assets/image/updata/4.png"),
        },
      ],
    };
  },
  components: {
    swiper,
    swiperSlide,
  },
};
</script>

<style>
.list {
  width: 100%;
  overflow: hidden;
  padding: 0 0.94rem;
}
.list-title {
  height: 2.38rem;
  line-height: 2.38rem;
  /* background-color: #666; */
}
.list-title::before {
  content: "";
  display: inline-block;
  width: 0.19rem;
  height: 0.63rem;
  background-color: var(--color-tink);
}
.list-title span {
  font-size: 1.06rem;
  margin-left: 0.5rem;
}
.lists {
  width: 200%;
  margin-right: 0.63rem;
}
.lists-item {
  float: left;
  margin-right: 0.63rem;
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
</style>