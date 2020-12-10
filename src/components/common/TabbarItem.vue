<template>
  <div class="tabbar-item" @click="btnClick" :path="path">
    <div v-if="!isActive">
      <slot name="item-icon" />
    </div>
    <div v-else>
      <slot name="item-icon-active" />
    </div>
    <div>
      <slot name="item-center" />
    </div>
    <div :class="{ active: isActive }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabbarItem",
  props: ["path"],
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    btnClick() {
      this.$router.push(this.path);
      console.log(this.path);
    },
  },
};
</script>

<style>
.tabbar-item {
  position: relative;
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.tabbar-item div > img {
  margin: 4px 0 3px;
  width: 24px;
  height: 24px;

  vertical-align: top;
}
.tabbar-item div a {
  display: inline-block;
  margin-top: -6px;
  padding: 6px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.08);
  z-index: 1;
}
.tabbar-item div a img {
  width: 100%;
  height: 100%;
}
.active {
  color: var(--color-tink);
}
</style>