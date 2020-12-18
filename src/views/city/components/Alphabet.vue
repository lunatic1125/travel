<template>
  <ul class="alpahbet">
    <li
      class="items"
      v-for="item in classify_list"
      :key="item"
      :ref="item"
      @click="handleInfoClick"
      @touchstart.prevent="handleInfoStart"
      @touchmove="handleInfoMove"
      @touchend="handleInfoEnd"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "Alphabet",
  props: {
    classify_list: Array,
  },
  data() {
    return {
      touchStatus: false,
      timer: null,
    };
  },
  computed: {
    startY() {
      return this.$refs["A"][0].offsetTop;
    },
  },
  methods: {
    // 点击事件将对应的字母发送给父级-传给兄弟组件
    handleInfoClick(e) {
      this.$emit("changeInfo", e.target.innerText);
    },
    handleInfoStart() {
      this.touchStatus = true;
    },
    handleInfoMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 50;
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index < this.classify_list.length) {
            this.$emit("changeInfo", this.classify_list[index]);
          }
        }, 16);
      }
    },
    handleInfoEnd() {
      this.touchStatus = false;
    },
  },
};
</script>

<style scoped>
.alpahbet {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 44px;
  right: 0;
  bottom: 0;
  width: 30px;
}
.alpahbet .items {
  font-size: 0.75rem;
  color: var(--color-tink);
  text-align: center;
  line-height: 1.25rem;
}
</style>