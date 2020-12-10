<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Tabbar",
};
</script>

<style>
.tabbar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  height: 49px;

  box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.08);
}
</style>