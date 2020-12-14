<template>
  <div class="list-item">
    <h4>
      <slot name="item-title"></slot>
    </h4>
    <p>
      <slot name="item-desc"></slot>
    </p>
    <span>查看详情</span>
    <div class="price">
      <slot name="item-price"></slot>
    </div>
    <!-- <h4>塞班岛3日自由行</h4>
    <p>
      探索深海蓝洞 | 畅游“玻璃海”
      战争遗迹中回顾过往战争遗迹中回顾过往战争遗迹中回顾过往
    </p>
    <span>摄影指导</span><span>免签</span>
    <div class="price">6988</div> -->
  </div>
</template>

<script>
export default {
  name: "ListItem",
};
</script>

<style>
.list-item {
  float: left;
  width: 13.44rem;
  padding: 0.63rem;
}
.list-item h4 {
  width: 10rem;
  padding-bottom: 0.44rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.list-item p {
  width: 11.88rem;
  margin-bottom: 0.5rem;
  font-size: 12px;
  line-height: 1.19rem;
  color: #666;
  /* 多行文字溢出省略显示 */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.list-item span {
  font-size: 0.69rem;
  padding: 2px 6px;
  color: #fff;
  background-color: var(--color-tink);
  border-radius: 0.25rem;
  margin-right: 0.31rem;
}
.price {
  /* display: inline-block; */
  float: right;
  color: var(--color-hign-text);
  font-size: 1.25rem;
  font-weight: 600;
}
.price::before {
  content: "￥";
  font-size: 0.75rem;
}
</style>