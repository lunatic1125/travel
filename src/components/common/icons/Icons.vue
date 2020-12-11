<template>
  <div class="icons">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Icons",
};
</script>

<style scoped>
.icons {
  display: flex;
  justify-content: space-between;
}
</style>