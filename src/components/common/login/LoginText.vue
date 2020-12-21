<template>
  <div>
    <!-- 输入任意文本 -->
    <van-field
      :placeholder="placeholder"
      :type="type"
      :rule="rule"
      v-model="content"
      autocomplete
    />
  </div>
</template>

<script>
export default {
  name: "LoginText",
  props: {
    placeholder: "",
    type: "",
    rule: "",
  },
  data() {
    return {
      content: "",
    };
  },
  methods: {
    handelrule() {
      const rue = new RegExp(this.rule);
      if (rue.test(this.content)) {
        this.$emit("succesRule", this.content);
      }
    },
  },
  watch: {
    content() {
      this.handelrule();
    },
  },
};
</script>

<style scoped>
.van-cell {
  padding: 12px 20px;
  font-size: 18px;
  border-radius: 28px;
  margin-bottom: 10px;
  background-color: rgba(255, 255, 255, 0.3);
}
.van-cell::after {
  border-bottom: 0;
}
.field-placeholder-text-color {
  color: "#fff";
}
</style>