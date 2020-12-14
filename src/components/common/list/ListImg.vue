<template>
  <div class="list-img">
    <i class="label">
      <slot name="label"></slot>
    </i>
    <slot></slot>
    <!-- <i class="label">风格摄影</i>
    <img src="" alt="" /> -->
  </div>
</template>

<script>
export default {
  name: "ListImg",
};
</script>

<style>
.list-img {
  float: left;
  width: 8.13rem;
  height: 6.81rem;
}
.list-img img {
  width: 100%;
}
.label {
  position: absolute;
  top: 0;
  left: 0;
  width: 54px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  font-size: 0.69rem;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>