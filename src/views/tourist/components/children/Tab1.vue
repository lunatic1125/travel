<template>
  <div>
    <div class="tab-c">
      <div class="tab-c-t">
        <span class="activeColS">热门</span>
        <span>最热</span>
      </div>
    </div>
    <pinterest />
  </div>
</template>

<script>
import Pinterest from "components/common/pinterest/Pinterest.vue";
export default {
  name: "Tab1",
  components: {
    Pinterest,
  },
};
</script>

<style scoped>
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
</style>