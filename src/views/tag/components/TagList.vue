<template>
  <div class="tag-list">
    <div class="content">
      <!-- 当前城市 -->
      <div class="area">
        <div class="area-title">搜索发现</div>
        <div class="history">
          <span
            class="active"
            v-for="item in labelList"
            :key="item"
            @click="tagListChange"
          >
            {{ item }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TagList",
  props: {
    taglist: Array,
  },
  computed: {
    labelList() {
      let arr = [];
      this.taglist.forEach((item) => {
        item.label.forEach((i) => {
          if (arr.indexOf(i) == -1) {
            arr.push(i);
          }
        });
      });
      return arr;
    },
  },
  methods: {
    tagListChange(e) {
      this.$store.commit("tagListChange", e.target.innerText);
    },
  },
};
</script>

<style scoped>
.tag-list {
  overflow: hidden;
  padding: 0 0.94rem;
  position: absolute;
  top: 5.25rem;
  left: 0;
  right: 0;
  bottom: 0;
}
.content {
  padding-bottom: 5rem;
}
.area-title {
  font-size: 0.94rem;
  font-weight: 500;
  height: 2.38rem;
  line-height: 2.38rem;
}
.history {
  padding: 0.13rem 0;
}
.history span {
  display: inline-block;
  width: 45%;
  margin: 0.25rem;
  font-size: 0.88rem;
  line-height: 1.88rem;
  /* background-color: #f5f6fa; */
}
.history span:nth-child(even) {
  float: right;
}
</style>