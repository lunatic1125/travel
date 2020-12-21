<template>
  <div class="loginbtn" @click="btn">
    <div>{{ btntext }}</div>
  </div>
</template>

<script>
export default {
  name: "LoginBtn",
  props: {
    btntext: "",
  },
  methods: {
    btn(event) {
      const btn = event.target.innerText;
      switch (btn) {
        case "登陆":
          this.$emit("logClick");
          break;
        case "获取验证码":
          this.$emit("regClick");
          break;
      }
    },
  },
};
</script>

<style scoped>
.loginbtn {
  padding: 5px 0 20px;
}
.loginbtn div {
  height: 48px;
  background-color: #fff;
  color: var(--color-text-s);
  border-radius: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>