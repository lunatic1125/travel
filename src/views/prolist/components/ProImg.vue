<template>
  <ul class="proimg clearfix">
    <li>
      <img src="~assets/image/updata/probanner.png" alt="" />
    </li>
    <li>
      <img src="~assets/image/updata/probanner.png" alt="" />
    </li>
    <li>
      <img src="~assets/image/updata/probanner.png" alt="" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "ProImg",
};
</script>

<style scoped>
.proimg {
  width: 600px;
  position: absolute;
  top: 290px;
}
.proimg li {
  float: left;
  width: 140px;
  height: 100px;
  margin-right: 10px;
  border-radius: 0.25rem;
  overflow: hidden;
}
.proimg li img {
  width: 100%;
  height: 100%;
}
</style>