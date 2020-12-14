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

<style >
.tabbar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  height: 3.06rem;
  background-color: #fff;
  box-shadow: 0 -0.06rem 0.25rem rgba(0, 0, 0, 0.08);
}
</style>