<template>
  <div class="prftitle">
    <ul class="prf-ul">
      <li class="prf-img">
        <img src="~assets/image/icons/photo@2x.png" />
      </li>
      <li class="prf-h">我是一只小蛋橘</li>
      <li class="prf-p">个性签名...</li>
    </ul>
    <div class="prf-item shadow">
      <div>
        <h4>Lv5</h4>
        <span>会员等级</span>
      </div>
      <div>
        <h4>888</h4>
        <span>会员等级</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Proftitle",
};
</script>

<style scoped>
.prftitle {
  text-align: center;
  background-color: #fff;
  margin-bottom: 15px;
}
.prf-ul {
  padding-top: 5px;
}
.prf-img {
  margin-bottom: 5px;
}
.prf-img img {
  width: 70px;
  height: 70px;
}
.prf-h {
  font-size: 16px;
  line-height: 40px;
}
.prf-p {
  font-size: 12px;
  color: var(--color-text-s);
}
.prf-item {
  display: flex;
  padding: 15px 0;
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