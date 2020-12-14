<template>
  <ul class="alpahbet">
    <li class="items" v-for="item in classify_list" :key="item">
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
  line-height: 1.13rem;
}
</style>