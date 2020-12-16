<template>
  <div class="probanner">
    <img src="~assets/image/updata/probanner.png" alt="" />
    <div class="propag">
      <h4>塞班岛3日自由行</h4>
      <p>
        <span>行程天数：3日</span>
        <span class="fr">产品编号：A10001</span>
      </p>
      <div class="protag">
        <span class="tagTyle">摄影指导</span><span class="tagTyle">免签</span>
      </div>
      <div class="protag">
        <span class="prodate">查看团期</span>
        <span class="iconfont">&#xe613;</span>
        <div class="price">6666</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProBanner",
};
</script>

<style scoped>
.probanner {
  position: relative;
}
.probanner img {
  width: 100%;
}
.propag {
  position: absolute;
  top: 7.06rem;
  left: 0;
  right: 0;
  margin: 0 0.94rem;
  padding: 10px;
  background-color: #fff;
  border-radius: 0.25rem;
}
.propag h4 {
  font-size: 15px;
  line-height: 26px;
}
.propag p {
  line-height: 26px;
  font-size: 0.75rem;
  color: var(--color-text-p);
  border-bottom: 1px solid var(--color-border);
}
.protag {
  margin-top: 0.63rem;
  line-height: 20px;
}
.propag .prodate {
  font-size: 14px;
}
.propag .iconfont {
  font-size: 22px;
  vertical-align: top;
}
</style>