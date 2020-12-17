<template>
  <div class="protitle">
    <div class="protitle-list">
      {{ tripfeature.tl }}
    </div>
    <ul class="features">
      <li v-for="(item, index) in tripfeature.list" :key="index">
        {{ item }}
      </li>
    </ul>

    <!-- ------------------ -->
    <div class="protitle-list">{{ tripplan.tl }}</div>
    <div class="plan">
      <div class="plan-day" v-for="item in tripplan.list" :key="item.day">
        <span class="ellips">DAY{{ item.day }}·{{ item.address }}</span>
        <h4>{{ item.proh }}</h4>
        <p class="ellips">{{ item.prop }}</p>
      </div>
    </div>

    <!-- ------------------ -->
    <div class="protitle-list">{{ tripserve.tl }}</div>
    <ul class="features">
      <li v-for="(item, index) in tripserve.list" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProTitle",
  props: {
    tripplan: Object,
    tripfeature: Object,
    tripserve: Object,
  },
};
</script>

<style scoped>
.protitle {
  position: absolute;
  top: 23rem;
  left: 0;
  right: 0;
  padding: 0 0.94rem;
}
.protitle-list {
  height: 2.38rem;
  font-size: 0.94rem;
  line-height: 2.38rem;
}
.protitle-list:before {
  content: "";
  display: inline-block;
  width: 0.19rem;
  height: 0.63rem;
  margin-right: 0.5rem;
  background-color: var(--color-tink);
}
.features {
  padding: 0 0.94rem;
  font-size: 12px;
  line-height: 25px;
}
.plan {
  padding: 0 0.94rem;
}
.plan-day {
  position: relative;
  line-height: 1.25rem;
  padding: 0.63rem 0.88rem;
  margin-bottom: -1px;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  background-color: #fff;
}
.plan-day span,
.plan-day p {
  width: 17.94rem;
  font-size: 0.75rem;
  color: var(--color-text-p);
}
.plan-day::before {
  content: "";
  position: absolute;
  top: 1.06rem;
  left: 0;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 0.25rem;
  border: 2px solid var(--color-text-s);
}
.plan-day h4 {
  font-size: 0.94rem;
}
</style>