<template>
  <div class="list">
    <i class="iconfont like">&#xe61a;</i>
    <slot name="list-img"></slot>
    <slot name="list-item"></slot>
  </div>
</template>

<script>
export default {
  name: "List",
};
</script>

<style>
.list {
  position: relative;
  height: 100px;
  margin: 0.63rem 0;
  border-radius: 0.25rem;
  overflow: hidden;
  box-shadow: 0 0.06rem 0.25rem rgba(0, 0, 0, 0.08);
  background-color: #fff;
}

.list .like {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1.13rem;
  padding: 0.25rem;
}
</style>