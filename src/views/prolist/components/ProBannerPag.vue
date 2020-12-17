<template>
  <div class="probannerpag">
    <h4>{{ proname.title }}</h4>
    <p>
      <span>行程天数：{{ proname.day }}日</span>
      <span class="fr">产品编号：{{ proname.serialnumber }}</span>
    </p>
    <div class="protag-tag">
      <span
        class="tagTyle"
        v-for="(item, index) in proname.triplabel"
        :key="index"
        >{{ item }}</span
      >
    </div>
    <div class="protag-date">
      <span class="prodate">查看团期</span>
      <span class="iconfont">&#xe613;</span>
      <div class="price">{{ proname.price }}</div>
    </div>
    <!-- 图片 -->
    <ul class="proimg clearfix" @click="handelGallary">
      <li v-for="(item, index) in proimglist" :key="index">
        <img :src="item" />
      </li>
    </ul>
    <gallary
      v-show="showGallary"
      @close="closeGallary"
      :proimglist="proimglist"
    ></gallary>
  </div>
</template>

<script>
import Gallary from "components/common/gallary/Gallary.vue";
export default {
  name: "ProBannerPag",
  components: { Gallary },
  props: { proname: Object, proimglist: Array },
  data() {
    return {
      showGallary: false,
    };
  },
  methods: {
    handelGallary() {
      this.showGallary = true;
    },
    closeGallary() {
      this.showGallary = false;
    },
  },
};
</script>

<style scoped>
.probannerpag {
  position: absolute;
  top: 7rem;
  left: 0;
  right: 0;
  margin: 0 0.94rem;
  padding: 10px;
  background-color: #fff;
  border-radius: 0.25rem;
  line-height: 26px;
}
.probannerpag h4 {
  font-size: 15px;
}
.probannerpag p {
  font-size: 0.75rem;
  color: var(--color-text-p);
  border-bottom: 1px solid var(--color-border);
}
.protag-tag {
  margin-top: 0.63rem;
}
.protag-date {
  margin: 0.63rem 0;
}
.prodate {
  font-size: 14px;
}
.iconfont {
  font-size: 22px;
  vertical-align: top;
}
/* --------------- */
.proimg {
  width: 600px;
}
.proimg li {
  float: left;
  width: 140px;
  height: 100px;
  margin-right: 10px;
  border-radius: 0.25rem;
  overflow: hidden;
}
.proimg li img {
  width: 100%;
  height: 100%;
}
</style>