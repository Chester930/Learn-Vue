<template>
  <div id="main-wrapper" class="main-wrapper">
    <HeaderOne />

    <BreadCrumbTwo pageTitle="登入" title="登入" />

    <section class="account-page-area section-gap-equal">
      <div class="container position-relative">
        <div class="row g-5 justify-content-center">
          <div class="col-lg-5">
            <div class="login-form-box">
              <h3 class="title">登入</h3>
              <p>沒有帳號？ <router-link to="/register">註冊</router-link></p>
              <form @submit.prevent="loginUser">
                <div class="form-group">
                  <label for="current-log-email">電子郵件</label>
                  <input
                    type="email"
                    v-model="loginForm.email"
                    id="current-log-email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="current-log-password">密碼</label>
                  <input
                    type="password"
                    v-model="loginForm.password"
                    id="current-log-password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div class="form-group">
                  <button type="submit" class="edu-btn btn-medium">
                    登入 <i class="icon-4"></i>
                  </button>
                </div>
              </form>

              <!-- 登入結果提示 -->
              <div
                v-if="loginMessage"
                :class="{'alert-success': loginSuccess, 'alert-danger': !loginSuccess}"
                class="alert"
                role="alert"
              >
                {{ loginMessage }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FooterOne />
  </div>
</template>

<script>
import HeaderOne from "@/components/header/HeaderOne";
import BreadCrumbTwo from "@/components/common/BreadCrumbTwo";
import FooterOne from "@/components/footer/FooterOne";
import useUserStore from "@/store/user.js";

export default {
  components: {
    HeaderOne,
    BreadCrumbTwo,
    FooterOne,
  },
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
      loginMessage: "",
      loginSuccess: false,
    };
  },
  methods: {
    async loginUser() {
      try {
        const response = await fetch("http://localhost:8080/myapp/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: this.loginForm.email,
            pwd: this.loginForm.password,
          }),
        });

        const data = await response.json();

        if (data.success) {
          this.loginSuccess = true;
          this.loginMessage = data.message;
          useUserStore().setEmail(data.email);
          useUserStore().setLogedin(true);

          if (process.client) {
            localStorage.setItem("token", data.token);
          }

          this.$router.push("/");
        } else {
          this.loginSuccess = false;
          this.loginMessage = data.message;
        }
      } catch (error) {
        this.loginSuccess = false;
        this.loginMessage = "登入失敗，請檢查您的憑證。";
        console.error(error);
      }
    },
  },
  head() {
    return {
      title: "登入",
    };
  },
};
</script>

<style scoped>
/* 在此添加您的樣式 */
</style>
