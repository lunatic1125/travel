<template>
  <tabbar>
    <!-- 首页 isActiveColor -->
    <tabbar-item path="/home">
      <template v-slot:item-icon>
        <img src="~assets/image/tabbar/home@2x.png" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/image/tabbar/home-active@2x.png" alt="" />
      </template>
      <div>首页</div>
    </tabbar-item>
    <!-- 行程 -->
    <tabbar-item path="/trip">
      <template v-slot:item-icon>
        <img src="~assets/image/tabbar/trip@2x.png" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/image/tabbar/trip-active@2x.png" alt="" />
      </template>
      <div>行程</div>
    </tabbar-item>
    <!-- 按钮 -->
    <tabbar-item path="/travel">
      <template v-slot:item-center>
        <a href="javascript:;">
          <img src="~assets/image/tabbar/travel@2x.png" alt="" />
        </a>
      </template>
    </tabbar-item>
    <!-- 旅行家 -->
    <tabbar-item path="/tourist">
      <template v-slot:item-icon>
        <img src="~assets/image/tabbar/tourist@2x.png" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/image/tabbar/tourist-active@2x.png" alt="" />
      </template>
      <div>旅行家</div>
    </tabbar-item>
    <!-- 我的 -->
    <tabbar-item path="/register">
      <template v-slot:item-icon>
        <img src="~assets/image/tabbar/profile@2x.png" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img src="~assets/image/tabbar/profile-active@2x.png" alt="" />
      </template>
      <div>我的</div>
    </tabbar-item>
  </tabbar>
</template>

<script>
import Tabbar from "components/common/tabbar/Tabbar.vue";
import TabbarItem from "components/common/tabbar/TabbarItem.vue";
export default {
  name: "MainTabbar",
  components: {
    Tabbar,
    TabbarItem,
  },
};
</script>

<style>
</style>