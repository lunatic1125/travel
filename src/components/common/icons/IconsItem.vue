<template>
  <a href="javascript:;" class="icons-item">
    <slot name="item-image"></slot>
    <slot name="item-text"></slot>
  </a>
</template>

<script>
export default {
  name: "IconsItem",
};
</script>

<style>
.icons-item {
  display: block;
  font-size: 0.75rem;
  text-align: center;
}
.icons-item img {
  width: 3.38rem;
  margin: 0.38rem;
}
</style>