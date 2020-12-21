<template>
  <div class="triplist">
    <list :prolist="taglist" />
  </div>
</template>

<script>
import List from "components/common/list/List.vue";
export default {
  name: "TripList",
  components: {
    List,
  },
  props: {
    taglist: Array,
  },
};
</script>

<style scoped>
.triplist {
  padding: 0 0.94rem;
}
</style>