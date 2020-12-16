<template>
  <div class="protitle">
    <ul class="pro-h">
      <router-link to="/prolist/features">
        <li class="active">行程亮点</li>
      </router-link>
      <router-link to="/prolist/plan">
        <li>行程安排</li>
      </router-link>
      <router-link to="/prolist/serve">
        <li>服务说明</li>
      </router-link>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "ProTitle",
};
</script>

<style scoped>
.protitle {
  position: absolute;
  top: 390px;
  left: 0;
  right: 0;
  padding: 0 0.94rem;
}
.pro-h {
  margin: 15px 0;
  display: flex;
  justify-content: center;
}
.pro-h li {
  font-size: 14px;
  line-height: 14px;
  padding: 0 15px;
  text-align: center;
}
.protitle li:nth-child(even) {
  border-left: 1px solid #999;
  border-right: 1px solid #999;
}
.active {
  color: var(--color-tink);
}
</style>