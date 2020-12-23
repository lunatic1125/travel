<template>
  <div class="write">
    <div class="tab-c-t">
      <span class="t">我的游记</span>
      <span class="fr">新增</span>
    </div>
    <div class="mytravel">
      <div
        class="pinlist"
        v-for="(item, index) in this.$store.state.mytravel"
        :key="index"
      >
        <p class="list-t ellips">{{ item.travels.title }}</p>
        <img :src="item.travels.imgUrl" />
        <div class="pinbotm clearfix">
          <img class="head-pho" :src="item.headpho" />
          <h4>{{ item.name }} <span class="iconfont fr">&#xe616;</span></h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Write",
};
</script>

<style scoped>
.write {
  padding: 0 15px;
}
.tab-c-t {
  height: 2.38rem;
  line-height: 2.38rem;
}
.tab-c-t:before {
  content: "";
  display: inline-block;
  width: 0.19rem;
  height: 0.63rem;
  background-color: var(--color-tink);
}
.t {
  font-size: 0.94rem;
  padding: 0.5rem;
  margin-right: 1.13rem;
}
.tab-c-t .fr {
  font-size: 0.75rem;
}
/* -------------------- */

.pinlist {
  position: relative;
  float: left;
  width: 167px;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 10px;
}
.pinlist:nth-child(odd) {
  margin-right: 10px;
}
.pinlist > img {
  width: 100%;
}
.list-t {
  position: absolute;
  bottom: 54px;
  left: 0;
  width: 100%;
  height: 24px;
  padding-left: 5px;
  font-size: 13px;
  line-height: 24px;
  color: #fff;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
}
.pinbotm {
  width: 167px;
  padding: 15px 10px;
  background-color: #fff;
}
.head-pho {
  width: 24px;
  height: 24px;
  border-radius: 12px;
  float: left;
}
.pinbotm h4 {
  font-size: 12px;
  line-height: 24px;
  margin-left: 30px;
  margin-right: 5px;
}
</style>