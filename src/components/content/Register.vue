<template>
  <div class="register" :class="{ regStyle: isReg }">
    <prof-navbar style="color: #fff"></prof-navbar>
    <div class="regcont">
      <!-- 主title -->
      <div class="register-title">
        <h2>登陆后更精彩</h2>
        <p>全世界的旅行故事都在期待与你的相遇</p>
      </div>
      <!-- 注册页面 -->
      <div class="reg" v-show="isReg">
        <!-- 验证密码 -->
        <p class="formtitle fontOpacity">未注册手机验证后完成注册</p>
        <form>
          <!-- 表单 -->
          <login-text
            placeholder="请输入手机号"
            rule="^1[34578]\d{9}$"
            @succesRule="(content) => (telphone = content)"
          ></login-text>
        </form>
        <!-- 按钮 -->
        <login-btn :btntext="btntext" @regClick="regClick"></login-btn>
        <!-- 验证密码 -->
        <p class="regcode">
          <span class="fl" @click="switchBtn">账号密码登录</span>
        </p>
      </div>
      <!-- 登录页面 -->
      <div class="login" v-show="!isReg">
        <form>
          <!-- 表单 -->
          <login-text
            placeholder="请输入手机号/邮箱"
            rule="^1[34578]\d{9}$"
            @succesRule="(content) => (username = content)"
          ></login-text>
          <login-text
            placeholder="请输入密码"
            type="password"
            rule="^.{6,16}$"
            @succesRule="(content) => (password = content)"
          ></login-text>
        </form>
        <!-- 按钮 -->
        <login-btn btntext="登陆" @logClick="logClick"></login-btn>
        <!-- 验证密码 -->
        <p class="regcode">
          <span class="fl" @click="switchBtn">验证码登陆</span
          ><span class="fr">忘记密码？</span>
        </p>
      </div>
      <!-- 其他登陆方式 -->
      <div class="otherReg">
        <p class="fontOpacity">其他登陆方式</p>
        <div class="otherRegicon">
          <span class="iconfont">&#xe660;</span>
          <span class="iconfont">&#xe625;</span>
          <span class="iconfont">&#xe600;</span>
        </div>
        <!-- 协议 -->
        <p v-show="isReg">登陆注册代表同意《隐私政策》</p>
      </div>
    </div>
  </div>
</template>

<script>
import ProfNavbar from "views/profile/components/Navbar.vue";
import LoginText from "components/common/login/LoginText.vue";
import LoginBtn from "components/common/login/LoginBtn.vue";
import { Notify } from "vant";

export default {
  name: "Register",
  data() {
    return {
      telphone: "",
      username: "",
      password: "",
      isReg: false,
      btntext: "获取验证码",
    };
  },
  components: {
    LoginText,
    LoginBtn,
    ProfNavbar,
  },
  methods: {
    switchBtn() {
      this.isReg = !this.isReg;
    },
    logClick() {
      if (this.username && this.password) {
        Notify({ type: "success", message: "欢迎回来" });
        this.$router.push("/profile");
        this.username = "";
        this.password = "";
      } else {
        Notify({ type: "warning", message: "账户密码不能为空" });
      }
    },
    regClick(e) {
      if (this.telphone) {
        this.btntext = "已发送验证码";
        Notify({ type: "success", message: "验证码已经发送至您的手机" });
        this.telphone = "";
      } else {
        // 警告通知
        Notify({ type: "warning", message: "请输入正确格式手机号" });
      }
    },
  },
};
</script>

<style scoped>
.register {
  width: 100%;
  height: 0;
  padding-bottom: 178%;
  /* background-color: rgba(0, 0, 0, 1); */
  background: url(~assets/image/photo/sea.jpg) no-repeat;
  background-size: 100%;
}
.regStyle {
  background: url(~assets/image/photo/reg.jpg) no-repeat;
  background-size: 100%;
}
.regcont {
  padding: 0 1.88rem;
  color: #fff;
}
.register-title {
  padding-bottom: 4.13rem;
}
.register-title h2 {
  font-size: 1.69rem;
  font-weight: 600;
  line-height: 4.19rem;
}
.register-title p {
  font-size: 0.88rem;
}
.formtitle {
  font-size: 13px;
  padding-bottom: 20px;
}
.regcode > span {
  /* padding: 0 10px; */
  font-size: 13px;
}
.otherReg {
  position: absolute;
  top: 520px;
  font-size: 13px;
}
.otherRegicon span {
  display: inline-block;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 1.25rem;
  margin: 13px 25px 15px 0;
  background-color: rgba(0, 0, 0, 0.5);
  text-align: center;
  line-height: 2.5rem;
}
.fontOpacity {
  color: rgba(255, 255, 255, 0.6);
}
</style>