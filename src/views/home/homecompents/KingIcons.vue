<template>
  <div class="kingicons">
    <icons>
      <icons-item :key="item.id" v-for="item in iconList">
        <template v-slot:item-image>
          <img :src="item.iconSrc" alt="" />
        </template>
        <template v-slot:item-text>
          <div>{{ item.iconText }}</div>
        </template>
      </icons-item>
    </icons>
  </div>
</template>

<script>
import Icons from "components/common/icons/Icons";
import IconsItem from "components/common/icons/IconsItem.vue";
export default {
  name: "KingIcons",
  components: {
    Icons,
    IconsItem,
  },
  data() {
    return {
      iconList: [
        {
          id: "01",
          iconSrc: require("assets/image/icons/photo@2x.png"),
          iconText: "风光摄影",
        },
        {
          id: "02",
          iconSrc: require("assets/image/icons/drive@2x.png"),
          iconText: "户外自驾",
        },
        {
          id: "03",
          iconSrc: require("assets/image/icons/family@2x.png"),
          iconText: "亲子教育",
        },
        {
          id: "04",
          iconSrc: require("assets/image/icons/business@2x.png"),
          iconText: "商务团建",
        },
      ],
    };
  },
};
</script>

<style scoped>
.kingicons {
  margin: 0 0.94rem;
  height: 5.5rem;
  /* background-color: red; */
}
</style>