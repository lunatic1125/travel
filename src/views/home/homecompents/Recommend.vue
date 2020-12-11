<template>
  <div class="recommend">
    <div class="recommend-title">
      <span>推荐</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommend",
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
  background-color: #666;
}
.recommend-title:before {
  content: "";
  display: inline-block;
  width: 0.19rem;
  height: 0.63rem;
  background-color: var(--color-tink);
}
.recommend span {
  font-size: 1.06rem;
  margin-left: 0.5rem;
}
</style>