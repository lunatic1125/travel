<template>
  <div class="pinterest">
    <div class="pinlist">
      <img src="~assets/image/updata/1.png" />
      <div class="pinbotm">
        <div class="head-pho">
          <img src="~assets/image/updata/1.png" />
        </div>
        <h4>飞去热带の岛屿游泳</h4>
        <p>6522已收藏</p>
      </div>
    </div>
    <div class="pinlist">
      <img src="~assets/image/updata/1.png" />
      <div class="pinbotm">
        <div class="head-pho">
          <img src="~assets/image/updata/1.png" />
        </div>
        <h4>飞去热带の岛屿游泳</h4>
        <p>6522已收藏</p>
      </div>
    </div>
    <div class="pinlist">
      <img src="~assets/image/updata/1.png" />
      <div class="pinbotm">
        <div class="head-pho">
          <img src="~assets/image/updata/1.png" />
        </div>
        <h4>飞去热带の岛屿游泳</h4>
        <p>6522已收藏</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pinterest",
};
</script>

<style scoped>
/* --------------------- */
.pinterest {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 15px;
}
.pinlist {
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
.pinbotm {
  position: relative;
  width: 167px;
  padding: 5px;
  text-align: center;
  background-color: #fff;
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
.pinbotm h4 {
  padding-top: 15px;
  font-size: 12px;
  line-height: 30px;
}
.pinbotm p {
  padding-bottom: 10px;
  font-size: 10px;
  color: var(--color-text-s);
}
</style>