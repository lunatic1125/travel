<template>
  <div class="navbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
};
</script>
<style>
.navbar {
  display: flex;
  justify-content: space-between;
  height: 2.75rem;
  /* 内边距5px */
  padding: 0 0.31rem;
}
</style>