<template>
  <div class="recommend">
    <div class="recommend-title">
      <span>推荐</span>
      <span>附近</span>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Recommend",
  props: {
    recomlist: Array,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.recommend {
  width: 100%;
  padding: 0 0.94rem;
}
.recommend-title {
  height: 2.38rem;
  line-height: 2.38rem;
}
.recommend-title:before {
  content: "";
  display: inline-block;
  width: 0.19rem;
  height: 0.63rem;
  background-color: var(--color-tink);
}
.recommend span {
  font-size: 0.94rem;
  padding: 0.5rem;
  margin-right: 1.13rem;
}
</style>