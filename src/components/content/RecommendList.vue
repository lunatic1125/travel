<template>
  <div>
    <list v-for="item in prolist" :key="item.id">
      <!-- 列标图片 -->
      <template v-slot:list-img>
        <list-img>
          <template v-slot:label>{{ item.tag }}</template>
          <template>
            <img :src="item.imgUrl" alt="" />
          </template>
        </list-img>
      </template>
      <!-- 列表文字 -->
      <template v-slot:list-item>
        <list-item>
          <template v-slot:item-title> {{ item.title }} </template>
          <template v-slot:item-desc>{{ item.desc }} </template>
          <template v-slot:item-price> {{ item.price }} </template>
        </list-item>
      </template>
    </list>
  </div>
</template>

<script>
import List from "components/common/list/List.vue";
import ListImg from "components/common/list/ListImg.vue";
import ListItem from "components/common/list/ListItem.vue";
export default {
  name: "RecommendList",
  props: {
    prolist: Array,
  },
  components: {
    List,
    ListItem,
    ListImg,
  },
};
</script>

<style>
</style>