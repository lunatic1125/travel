<template>
  <div class="fans">
    <ul>
      <li
        class="fans-lis clearfix"
        v-for="(item, index) in this.$store.state.myfans"
        :key="index"
      >
        <img class="fans-head fl" :src="item.headpho" />
        <div class="fans-t fl">
          <p class="ellips">{{ item.name }}</p>
          <span>内容{{ item.content }} 粉丝{{ item.people }}</span>
        </div>
        <div class="attbtn">关注</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Fans",
};
</script>

<style scoped>
.fans {
  padding: 0 15px;
}
.fans-lis {
  position: relative;
  padding: 15px 0;
  border-bottom: 1px solid var(--color-border);
}

.fans-head {
  width: 48px;
  height: 48px;
  border-radius: 24px;
  margin: 5px;
}
.fans-t {
  width: 120px;
  margin-top: 12px;
  margin-left: 5px;
}
.fans-t p {
  width: 120px;
}
.fans-t span {
  font-size: 12px;
  color: var(--color-text-s);
}
.attbtn {
  position: absolute;
  top: 35px;
  right: 0;
  text-align: center;
  width: 45px;
  height: 18px;
  font-size: 0.69rem;
  line-height: 18px;
  border-radius: 0.25rem;
  background-color: var(--color-bg-gay);
}
</style>