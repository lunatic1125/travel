<template>
  <div class="tab-one">
    <div class="tab-t">
      <div class="one-item active">游记</div>
      <div class="one-item">主页</div>
    </div>
    <div class="tab-c">
      <div class="tab-c-t">
        <span class="activeS">热门</span>
        <span>最热</span>
      </div>
      <div class="tab-c-list">
        <div class="list-img">
          <img src="~assets/image/updata/1.png" />
          <div class="head">
            <div class="head-pho">
              <img src="~assets/image/updata/1.png" />
            </div>
            <h4>飞去热带の岛屿游泳</h4>
            <p>6522已收藏</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TourTabOne",
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
  border-top-right-radius: 20px;
}
.one-item {
  width: 120px;
  height: 40px;
  border-top-right-radius: 20px;
}
.active {
  background-color: #fff;
  color: var(--color-text);
}
/* --------------- */
.tab-c {
  width: 100%;
  padding: 0 0.94rem;
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
.tab-c-t span {
  font-size: 0.94rem;
  padding: 0.5rem;
  margin-right: 1.13rem;
}
.activeS {
  color: var(--color-tink);
}
/* --------------------- */
.list-img {
  width: 163px;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  overflow: hidden;
}
.list-img img {
  width: 100%;
}
.head {
  position: relative;
  text-align: center;
}
.head-pho {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid #fff;
}
.head-pho img {
  width: 100%;
  height: 100%;
}
.head h4 {
  padding-top: 15px;
  font-size: 12px;
  line-height: 30px;
}
.head p {
  padding-bottom: 10px;
  font-size: 10px;
  color: var(--color-text-s);
}
</style>