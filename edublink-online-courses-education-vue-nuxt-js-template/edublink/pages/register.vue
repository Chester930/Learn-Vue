<template>
  <div id="main-wrapper" class="main-wrapper">
    <HeaderOne />

    <BreadCrumbTwo pageTitle="註冊" title="註冊" />

    <section class="account-page-area section-gap-equal">
      <div class="container position-relative">
        <div class="row g-5 justify-content-center">
          <div class="col-lg-5">
            <div class="login-form-box registration-form">
              <h3 class="title">註冊</h3>
              <p>已經有帳號？ <router-link to="/login">登入</router-link></p>
              <form @submit.prevent="registerUser">
                <div class="form-group">
                  <label for="reg-name">姓名</label>
                  <input
                    type="text"
                    v-model="registrationForm.name"
                    id="reg-name"
                    placeholder="Full name"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="reg-email">電子郵件</label>
                  <input
                    type="email"
                    v-model="registrationForm.email"
                    id="reg-email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="reg-password">密碼</label>
                  <input
                    type="password"
                    v-model="registrationForm.password"
                    id="reg-password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div class="form-group chekbox-area">
                  <div class="edu-form-check">
                    <input
                      type="checkbox"
                      id="terms-condition"
                      v-model="registrationForm.terms"
                      required
                    />
                    <label for="terms-condition">
                      我同意使用者協議和
                      <a href="terms-condition.html">條款與條件</a>。
                    </label>
                  </div>
                </div>
                <div class="form-group">
                  <button type="submit" class="edu-btn btn-medium">
                    建立帳號 <i class="icon-4"></i>
                  </button>
                </div>
              </form>

              <!-- 註冊結果提示 -->
              <div
                v-if="registrationMessage"
                :class="{'alert-success': registrationSuccess, 'alert-danger': !registrationSuccess}"
                class="alert"
                role="alert"
              >
                {{ registrationMessage }}
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
      registrationForm: {
        name: "",
        email: "",
        password: "",
        terms: false,
      },
      registrationMessage: "",
      registrationSuccess: false,
    };
  },
  methods: {
    async registerUser() {
      if (this.registrationForm.terms) {
        try {
          const response = await fetch(
            "http://localhost:8080/myapp/user/register",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                username: this.registrationForm.name,
                email: this.registrationForm.email,
                pwd: this.registrationForm.password,
              }),
            }
          );

          const data = await response.json();

          if (data.success) {
            this.registrationSuccess = true;
            this.registrationMessage = data.message;
            useUserStore().setEmail(data.email);
            useUserStore().setLogedin(true);

            if (process.client) {
              localStorage.setItem("token", data.token);
            }

            this.$router.push("/");
          } else {
            this.registrationSuccess = false;
            this.registrationMessage = data.message;
          }
        } catch (error) {
          this.registrationSuccess = false;
          this.registrationMessage = "註冊失敗，請重試。";
          console.error(error);
        }
      } else {
        alert("您必須同意條款和條件。");
      }
    },
  },
  head() {
    return {
      title: "註冊",
    };
  },
};
</script>

<style scoped>
/* 在此添加您的樣式 */
</style>
