<template>
  <div class="search-city">
    <div>
      <input type="text" placeholder="搜索目的地/攻略" />
      <button class="iconfont">&#xe60f;</button>
      <!-- <span>搜索目的地/攻略</span> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "CitySearch",
};
</script>

<style>
.search-city {
  position: relative;
  overflow: hidden;
  /* 搜索框60px */
  height: 1.88rem;
  margin: 0 0.94rem 0.44rem;

  font-size: 0.88rem;
  text-align: center;
  line-height: 1.88rem;
  color: #b3b3b3;

  border-radius: 0.94rem;
  background-color: #f5f6fa;
  z-index: 8;
}
.search-city input {
  position: absolute;
  top: 2px;
  left: 8px;
  width: 280px;
  padding: 0 0.63rem;
  height: 1.63rem;
  background-color: transparent;
}
.search-city button {
  position: absolute;
  top: 0;
  right: 0;
  padding: 6px 16px;
  background-color: var(--color-tink);
  color: #fff;
}
</style>