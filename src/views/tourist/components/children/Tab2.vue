<template>
  <div>
    <div class="prf-item">
      <router-link to="/tourist/tab2/write" tag="div" class="activeColS">
        <h4>{{ this.$store.state.mytravel.length }}</h4>
        <span>创作</span>
      </router-link>
      <router-link to="/tourist/tab2/attention" tag="div">
        <h4>0</h4>
        <span>关注</span>
      </router-link>
      <router-link to="/tourist/tab2/fans" tag="div">
        <h4>{{ this.$store.state.myfans.length }}</h4>
        <span>粉丝</span>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Tab2",
};
</script>

<style scoped>
.prf-item {
  display: flex;
  padding: 15px 0;
  text-align: center;
}
.prf-item div {
  flex: 1;
}
.prf-item h4 {
  font-size: 24px;
  line-height: 25px;
}
.prf-item span {
  font-size: 12px;
}
</style>