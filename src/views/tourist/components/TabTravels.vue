<template>
  <div class="tab-one">
    <div class="tab-t">
      <router-link
        tag="div"
        to="/tourist/tab1"
        class="one-item"
        :class="{ active: isActive }"
        >游记
      </router-link>
      <router-link
        tag="div"
        to="/tourist/tab2"
        class="one-item"
        :class="{ active: !isActive }"
        >主页
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "TabTravels",
  data() {
    return {
      rute: "/tourist/tab1",
    };
  },
  computed: {
    isActive() {
      if (this.$route.path != this.rute) {
        return false;
      }
      return true;
    },
  },
};
</script>

<style scoped>
.tab-t {
  margin-top: -40px;
  position: relative;
  display: flex;
  text-align: center;
  line-height: 40px;
  width: 240px;
  height: 40px;
  background-color: var(--color-tink);
  color: #fff;
  border-top-right-radius: 10px;
}
.one-item {
  width: 120px;
  height: 40px;
  border-top-right-radius: 10px;
}
.active {
  background-color: #fff;
  color: var(--color-text);
}
</style>