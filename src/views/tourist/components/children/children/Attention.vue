<template>
  <div class="attention">
    <div class="tab-c-t">
      <span class="t">你可能感兴趣</span>
      <span class="fr">更多</span>
    </div>
    <ul class="attlist">
      <li
        class="liitem fl"
        v-for="(item, index) in this.$store.state.recompeo"
        :key="index"
      >
        <i class="iconfont">&#xe611;</i>
        <img class="lihead" :src="item.headpho" />
        <p>{{ item.name }}</p>
        <p>
          <span>内容{{ item.content }}</span
          ><span> 粉丝{{ item.people }}</span>
        </p>
        <div class="attbtn">关注</div>
      </li>
    </ul>
    <div class="tab-c-t">
      <span class="t">推荐关注</span>
    </div>
    <ul class="att-recom">
      <li
        class="recomlis"
        :key="index"
        v-for="(item, index) in this.$store.state.recommend"
      >
        <div class="recom-t clearfix">
          <i class="iconfont">&#xe611;</i>
          <img class="lihead fl" :src="item.headpho" />
          <div class="lihead-t fl">
            <p class="ellips">{{ item.name }}</p>
            <span>{{ item.travels["date"] }}</span>
          </div>
          <div class="attbtn fr">关注</div>
        </div>
        <div class="recom-img">
          <img :src="item.travels['imgUrl']" />
        </div>
        <p class="recom-p ellips">{{ item.travels["p"] }}</p>
        <!-- 操作图标 -->
        <div class="recom-icons clearfix">
          <span class="iconfont fl">&#xe618;</span>
          <span class="iconfont fl">&#xe619;</span>
          <span class="iconfont fr">&#xe61a;</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Attention",
};
</script>

<style scoped>
.attention {
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
.fr {
  font-size: 0.75rem;
}
/* --------------------------- */
.attlist {
  width: 600px;
  height: 180px;
}

.liitem {
  position: relative;
  width: 130px;
  height: 160px;
  background-color: #fff;
  border: 1px solid var(--color-border);
  margin: 10px 10px 10px 0;
  text-align: center;
}
.liitem i {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.13rem;
}
.liitem .lihead {
  width: 48px;
  height: 48px;
  border-radius: 24px;
  margin-top: 20px;
  margin-bottom: 10px;
}
.liitem p {
  line-height: 20px;
}
.liitem p > span {
  font-size: 12px;
  color: var(--color-text-s);
}
.liitem .attbtn {
  display: inline-block;
  text-align: center;
  width: 45px;
  height: 18px;
  font-size: 0.69rem;
  line-height: 18px;
  border-radius: 0.25rem;
  background-color: var(--color-bg-gay);
  margin-top: 6px;
  margin-bottom: 18px;
}
/* ------------------ */
.recom-t {
  padding: 5px 10px;
}
.recomlis {
  position: relative;
  width: 100%;
  background-color: #fff;
  border: 1px solid var(--color-border);
  margin: 10px 0;
}
.recomlis i {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.13rem;
}
.recomlis .lihead {
  width: 48px;
  height: 48px;
  border-radius: 24px;
  margin: 5px;
}
.recomlis .attbtn {
  display: inline-block;
  text-align: center;
  width: 45px;
  height: 18px;
  font-size: 0.69rem;
  line-height: 18px;
  border-radius: 0.25rem;
  background-color: var(--color-bg-gay);
  margin-top: 20px;
  margin-right: 5px;
}
.lihead-t {
  width: 120px;
  margin-top: 12px;
  margin-left: 5px;
}
.lihead-t p {
  width: 120px;
}
.recomlis span {
  font-size: 12px;
  color: var(--color-text-s);
}
.recom-img img {
  width: 100%;
}
.recom-p {
  font-size: 13px;
  line-height: 34px;
  padding: 0 10px;
}
.recom-icons .iconfont {
  padding: 0.38rem;
  font-size: 1.38rem;
}
.recom-icons .iconfont:nth-child(2) {
  margin-left: 200px;
}
</style>