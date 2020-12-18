<template>
  <div class="pronavbar">
    <navbar class="pro-t" v-show="upShow">
      <navbar-item>
        <template v-slot:left>
          <router-link to="/" tag="span" class="circle">&#xe622;</router-link>
        </template>
        <template v-slot:center></template>
        <template v-slot:right>
          <router-link to="/" tag="span" class="circle">&#xe618;</router-link>
        </template>
      </navbar-item>
    </navbar>
    <navbar
      class="pro-t scrollShow shadow"
      v-show="!upShow"
      :style="handelShowStyle"
    >
      <navbar-item>
        <template v-slot:left>
          <router-link to="/" tag="span">&#xe622;</router-link>
        </template>
        <template v-slot:center>塞班岛3日自由行</template>
        <template v-slot:right>
          <router-link to="/" tag="span">&#xe60d;</router-link>
        </template>
      </navbar-item>
    </navbar>
    <img :src="proname.imgUrl" />
  </div>
</template>
<script>
import Navbar from "components/common/navbar/Navbar.vue";
import NavbarItem from "components/common/navbar/NavbarItem.vue";
export default {
  name: "ProNavbar",
  components: {
    Navbar,
    NavbarItem,
  },
  props: { proname: Object },
  data() {
    return {
      upShow: true,
      handelShowStyle: {
        opacity: 0,
      },
    };
  },
  methods: {
    prohandelscroll() {
      const top = document.documentElement.scrollTop;
      if (top > 70) {
        let opacity = top / 120;
        opacity = opacity > 1 ? 1 : opacity;
        this.handelShowStyle = {
          opacity: opacity,
        };

        this.upShow = false;
      } else {
        this.upShow = true;
      }
    },
  },
  activated() {
    // 全局事件解绑，不要影响其他页面
    window.addEventListener("scroll", this.prohandelscroll);
  },
  deactivated() {
    window.removeEventListener("scroll", this.prohandelscroll);
  },
};
</script>

<style scoped>
.pronavbar img {
  width: 100%;
}
.pro-t {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  color: #fff;
  z-index: 88;
}
.scrollShow {
  background-color: #fff;
  color: var(--color-text);
}
</style>