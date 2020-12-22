<template>
  <div class="tab-one">
    <div class="tab-t">
      <router-link tag="div" to="/tourist/tab1" class="one-item active"
        >游记
      </router-link>
      <router-link tag="div" to="/tourist/tab2" class="one-item"
        >主页
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "TabTravels",
};
</script>

<style scoped>
.tab-t {
  margin-top: -40px;
  position: relative;
  display: flex;
  text-align: center;
  line-height: 40px;
  width: 240px;
  height: 40px;
  background-color: var(--color-tink);
  color: #fff;
  border-top-right-radius: 10px;
}
.one-item {
  width: 120px;
  height: 40px;
  border-top-right-radius: 10px;
}
.active {
  background-color: #fff;
  color: var(--color-text);
}
</style>