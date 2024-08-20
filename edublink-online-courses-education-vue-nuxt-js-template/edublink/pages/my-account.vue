<template>
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
                            <form @submit.prevent="loginUser">
                                <div class="form-group">
                                    <label for="current-log-email">Username or email*</label>
                                    <input type="email" name="email" v-model="loginForm.email" id="current-log-email" placeholder="Email or username">
                                </div>
                                <div class="form-group">
                                    <label for="current-log-password">Password*</label>
                                    <input type="password" name="password" v-model="loginForm.password" id="current-log-password" placeholder="Password">
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
                                    <button type="submit" class="edu-btn btn-medium">Sign in <i class="icon-4"></i></button>
                                </div>
                            </form>

                            <!-- 登入結果提示 -->
                            <div v-if="loginMessage" class="alert" :class="{'alert-success': loginSuccess, 'alert-danger': !loginSuccess}" role="alert">
                                {{ loginMessage }}
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="login-form-box registration-form">
                            <h3 class="title">Registration</h3>
                            <p>Already have an account? <a href="#">Sign in</a></p>
                            <form @submit.prevent="registerUser">
                                <div class="form-group">
                                    <label for="reg-name">Name*</label>
                                    <input type="text" name="reg-name" v-model="registrationForm.name" id="reg-name" placeholder="Full name">
                                </div>
                                <div class="form-group">
                                    <label for="log-email">Username or email*</label>
                                    <input type="email" name="log-email" v-model="registrationForm.email" id="log-email" placeholder="Email or username">
                                </div>
                                <div class="form-group">
                                    <label for="log-password">Password*</label>
                                    <input type="password" name="log-password" v-model="registrationForm.password" id="log-password" placeholder="Password">
                                    <span class="password-show"><i class="icon-76"></i></span>
                                </div>
                                <div class="form-group chekbox-area">
                                    <div class="edu-form-check">
                                        <input type="checkbox" id="terms-condition" v-model="registrationForm.terms">
                                        <label for="terms-condition">I agree the User Agreement and <a href="terms-condition.html">Terms & Condition.</a> </label>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="edu-btn btn-medium">Create Account <i class="icon-4"></i></button>
                                </div>
                            </form>

                            <!-- 註冊結果提示 -->
                            <div v-if="registrationMessage" class="alert" :class="{'alert-success': registrationSuccess, 'alert-danger': !registrationSuccess}" role="alert">
                                {{ registrationMessage }}
                            </div>
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
import axios from 'axios';
import axiosapi from "@/plugins/axios.js"
import useUserStore from "@/store/user.js"

const userStore = useUserStore();

export default {
    components: {
        HeaderOne: () => import("@/components/header/HeaderOne"),
        BreadCrumbTwo: () => import("@/components/common/BreadCrumbTwo"),
        FooterOne: () => import("@/components/footer/FooterOne"),
        MouseMove: () => import('@/components/animation/MouseMove')
    },
    data() {
        return {
            registrationForm: {
                name: '',
                email: '',
                password: '',
                terms: false
            },
            loginForm: {
                email: '',
                password: ''
            },
            loginMessage: '',
            loginSuccess: false,
            registrationMessage: '',
            registrationSuccess: false
        };
    },
    methods: {
        async registerUser() {
            if (this.registrationForm.terms) {
                try {
                    const response = await axios.post('http://localhost:8080/myapp/user/register', {
                        username: this.registrationForm.name,
                        email: this.registrationForm.email,
                        password: this.registrationForm.password
                    });
                    if (response.data.success) {
                        this.registrationSuccess = true;
                        this.registrationMessage = response.data.message;
                        userStore.setEmail(response.data.email);
                        userStore.setLogedin(true);
                        axiosapi.defaults.headers.authorization = "Bearer " + response.data.token;
                    } else {
                        this.registrationSuccess = false;
                        this.registrationMessage = response.data.message;
                    }
                } catch (error) {
                    this.registrationSuccess = false;
                    this.registrationMessage = 'Registration failed. Please try again.';
                }
            } else {
                alert('You must agree to the terms and conditions.');
            }
        },
        async loginUser() {
            try {
                const response = await axios.post('http://localhost:8080/myapp/user/login', {
                    email: this.loginForm.email,
                    password: this.loginForm.password
                });
                if (response.data.success) {
                    this.loginSuccess = true;
                    this.loginMessage = response.data.message;
                    userStore.setEmail(response.data.email);
                    userStore.setLogedin(true);
                    axiosapi.defaults.headers.authorization = "Bearer " + response.data.token;
                    location.href = '/';
                } else {
                    this.loginSuccess = false;
                    this.loginMessage = response.data.message;
                }
            } catch (error) {
                this.loginSuccess = false;
                this.loginMessage = 'Login failed. Please check your credentials.';
                console.log(error);
            }
        }
    },
    head() {
        return {
            title: 'Terms & Condition'
        }
    }
}
</script>



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