<template>
  <div class="recommend">
    <div class="recommend-title">
      <span>推荐</span>
      <span>附近</span>
    </div>
    <recommend-list :prolist="prolist"></recommend-list>
  </div>
</template>

<script>
import RecommendList from "components/content/RecommendList.vue";

export default {
  name: "Recommend",
  components: {
    RecommendList,
  },
  data() {
    return {
      prolist: [
        {
          id: "001",
          tag: "风光摄影",
          imgUrl: require("assets/image/updata/prolist/1@2x.png"),
          title: "塞班岛3日自由行",
          desc:
            " 探索深海蓝洞 | 畅游“玻璃海”\n战争遗迹中回顾过往战争遗迹中回顾过往战争遗迹中回顾过往",
          price: 6988,
        },
        {
          id: "002",
          tag: "亲子教育",
          imgUrl: require("assets/image/updata/prolist/2@2x.png"),
          title: "越南芽庄6日自由行",
          desc: " 海上迪士尼 | 畅游四岛\n被遗落的绿宝石",
          price: 6299,
        },
        {
          id: "003",
          tag: "蜜月主题",
          imgUrl: require("assets/image/updata/prolist/3@2x.png"),
          title: "马尔代夫6日游",
          desc: " 洁白如雪的拖尾沙滩，浅海处美丽的珊瑚礁若隐若现",
          price: 6988,
        },
        {
          id: "004",
          tag: "风光摄影",
          imgUrl: require("assets/image/updata/prolist/1@2x.png"),
          title: "塞班岛3日自由行",
          desc:
            " 探索深海蓝洞 | 畅游“玻璃海”\n战争遗迹中回顾过往战争遗迹中回顾过往战争遗迹中回顾过往",
          price: 6988,
        },
        {
          id: "005",
          tag: "亲子教育",
          imgUrl: require("assets/image/updata/prolist/2@2x.png"),
          title: "越南芽庄6日自由行",
          desc: " 海上迪士尼 | 畅游四岛\n被遗落的绿宝石",
          price: 6299,
        },
        {
          id: "006",
          tag: "蜜月主题",
          imgUrl: require("assets/image/updata/prolist/3@2x.png"),
          title: "马尔代夫6日游",
          desc: " 洁白如雪的拖尾沙滩，浅海处美丽的珊瑚礁若隐若现",
          price: 6988,
        },
      ],
    };
  },
};
</script>

<style scoped>
.recommend {
  width: 100%;
  padding: 0 0.94rem;
}
.recommend-title {
  height: 2.38rem;
  line-height: 2.38rem;
}
.recommend-title:before {
  content: "";
  display: inline-block;
  width: 0.19rem;
  height: 0.63rem;
  background-color: var(--color-tink);
}
.recommend span {
  font-size: 1.06rem;
  padding: 0.5rem;
  margin-right: 1.13rem;
}
</style>