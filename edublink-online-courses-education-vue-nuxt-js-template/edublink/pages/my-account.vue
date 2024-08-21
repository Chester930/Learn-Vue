<template>
    <div id="main-wrapper" class="main-wrapper">
      <HeaderOne />
  
      <BreadCrumbTwo pageTitle="My Account" title="Account" />
  
      <section class="account-page-area section-gap-equal">
        <div class="container position-relative">
          <div class="row g-5 justify-content-center">
            <!-- 登入表單 -->
            <div class="col-lg-5">
              <div class="login-form-box">
                <h3 class="title">登入</h3>
                <p>沒有帳號？ <a href="#">註冊</a></p>
                <form @submit.prevent="loginUser">
                  <div class="form-group">
                    <label for="current-log-email">電子郵件*</label>
                    <input
                      type="email"
                      v-model="loginForm.email"
                      id="current-log-email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="current-log-password">密碼*</label>
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
  
            <!-- 註冊表單 -->
            <div class="col-lg-5">
              <div class="login-form-box registration-form">
                <h3 class="title">註冊</h3>
                <p>已經有帳號？ <a href="#">登入</a></p>
                <form @submit.prevent="registerUser">
                  <div class="form-group">
                    <label for="reg-name">姓名*</label>
                    <input
                      type="text"
                      v-model="registrationForm.name"
                      id="reg-name"
                      placeholder="Full name"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="reg-email">電子郵件*</label>
                    <input
                      type="email"
                      v-model="registrationForm.email"
                      id="reg-email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="reg-password">密碼*</label>
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
          <ul class="shape-group">
            <MouseMove
              addClassName="shape-1"
              dataDepth="2"
              imgSrc="/images/about/shape-07.png"
            />
            <MouseMove
              addClassName="shape-2"
              dataDepth="-2"
              imgSrc="/images/about/shape-13.png"
            />
            <MouseMove
              addClassName="shape-3"
              dataDepth="2"
              imgSrc="/images/counterup/shape-02.png"
            />
          </ul>
        </div>
      </section>
  
      <FooterOne />
    </div>
  </template>
  
  <script>
  import HeaderOne from "@/components/header/HeaderOne";
  import BreadCrumbTwo from "@/components/common/BreadCrumbTwo";
  import FooterOne from "@/components/footer/FooterOne";
  import MouseMove from "@/components/animation/MouseMove";
  import useUserStore from "@/store/user.js";
  

  
  export default {
    components: {
      HeaderOne,
      BreadCrumbTwo,
      FooterOne,
      MouseMove,
    },
    data() {
      return {
        registrationForm: {
          name: "",
          email: "",
          password: "",
          terms: false,
        },
        loginForm: {
          email: "",
          password: "",
        },
        loginMessage: "",
        loginSuccess: false,
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
                  password: this.registrationForm.password,
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
      async loginUser() {
        try {
          const response = await fetch("http://localhost:8080/myapp/user/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: this.loginForm.email,
              password: this.loginForm.password,
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
        title: "我的帳號",
      };
    },
  };
  </script>
  
  <style scoped>
  /* 在此添加您的樣式 */
  </style>
  






<!-- <template>
    <div id="main-wrapper" class="main-wrapper">

        <HeaderOne />

        <BreadCrumbTwo pageTitle='My Account' title='Account' />

        <section class="account-page-area section-gap-equal">
            <div class="container position-relative">
                <div class="row g-5 justify-content-center">
                    <div class="col-lg-5">
                        <div class="login-form-box">
                            <h3 class="title">Sign in</h3>
                            <p>Don’t have an account? <a href="#">Sign up</a></p>
                            <form>
                                <div class="form-group">
                                    <label for="current-log-email">Username or email*</label>
                                    <input type="email" name="current-log-email" id="current-log-email" placeholder="Email or username">
                                </div>
                                <div class="form-group">
                                    <label for="current-log-password">Password*</label>
                                    <input type="password" name="current-log-password" id="current-log-password" placeholder="Password">
                                    <span class="password-show"><i class="icon-76"></i></span>
                                </div>
                                <div class="form-group chekbox-area">
                                    <div class="edu-form-check">
                                        <input type="checkbox" id="remember-me">
                                        <label for="remember-me">Remember Me</label>
                                    </div>
                                    <a href="#" class="password-reset">Lost your password?</a>
                                </div>
                                <div class="form-group">
                                    <button type="button" class="edu-btn btn-medium">Sign in <i class="icon-4"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="login-form-box registration-form">
                            <h3 class="title">Registration</h3>
                            <p>Already have an account? <a href="#">Sign in</a></p>
                            <form>
                                <div class="form-group">
                                    <label for="reg-name">Name*</label>
                                    <input type="text" name="reg-name" id="reg-name" placeholder="Full name">
                                </div>
                                <div class="form-group">
                                    <label for="log-email">Username or email*</label>
                                    <input type="email" name="log-email" id="log-email" placeholder="Email or username">
                                </div>
                                <div class="form-group">
                                    <label for="log-password">Password*</label>
                                    <input type="password" name="log-password" id="log-password" placeholder="Password">
                                    <span class="password-show"><i class="icon-76"></i></span>
                                </div>
                                <div class="form-group chekbox-area">
                                    <div class="edu-form-check">
                                        <input type="checkbox" id="terms-condition">
                                        <label for="terms-condition">I agree the User Agreement and <a href="terms-condition.html">Terms & Condition.</a> </label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <button type="button" class="edu-btn btn-medium">Create Account <i class="icon-4"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <ul class="shape-group">
                    <MouseMove addClassName="shape-1" dataDepth="2" imgSrc="/images/about/shape-07.png" />
                    <MouseMove addClassName="shape-2" dataDepth="-2" imgSrc="/images/about/shape-13.png" />
                    <MouseMove addClassName="shape-3" dataDepth="2" imgSrc="/images/counterup/shape-02.png" />
                </ul>
            </div>
        </section>

        <FooterOne />
    </div>
</template>

<script>
    export default {
        components: {
            HeaderOne: () => import("@/components/header/HeaderOne"),
            BreadCrumbTwo: () => import("@/components/common/BreadCrumbTwo"),
            FooterOne: () => import("@/components/footer/FooterOne"),
            MouseMove: () => import('@/components/animation/MouseMove')
        },
        head() {
            return {
                title: 'Terms & Condition'
            }
        }
    }
</script> -->