<template>
  <div class="trip-recommend">
    <div class="trip-t">
      <span class="activeColS">按热度</span>
      <span>按主题</span>
      <span>按价格</span>
      <span>按时间</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TripRecommend",
};
</script>

<style scoped>
.trip-recommend {
  width: 100%;
  padding: 0 0.94rem;
}
.trip-t {
  height: 2.38rem;
  line-height: 2.38rem;
}
.trip-t:before {
  content: "";
  display: inline-block;
  width: 0.19rem;
  height: 0.63rem;
  background-color: var(--color-tink);
}
.trip-t span {
  font-size: 0.94rem;
  padding: 0.5rem;
  margin-right: 1.13rem;
}
</style>