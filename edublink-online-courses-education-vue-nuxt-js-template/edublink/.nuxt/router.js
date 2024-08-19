import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d5584f24 = () => interopDefault(import('../pages/about-us-one.vue' /* webpackChunkName: "pages/about-us-one" */))
const _124a97a6 = () => interopDefault(import('../pages/about-us-three.vue' /* webpackChunkName: "pages/about-us-three" */))
const _a488ed58 = () => interopDefault(import('../pages/about-us-two.vue' /* webpackChunkName: "pages/about-us-two" */))
const _702853a0 = () => interopDefault(import('../pages/coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _5f584a9c = () => interopDefault(import('../pages/contact-me.vue' /* webpackChunkName: "pages/contact-me" */))
const _6dc458a2 = () => interopDefault(import('../pages/contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _1f758361 = () => interopDefault(import('../pages/distant-learning.vue' /* webpackChunkName: "pages/distant-learning" */))
const _1733e36f = () => interopDefault(import('../pages/faq.vue' /* webpackChunkName: "pages/faq" */))
const _df0b0950 = () => interopDefault(import('../pages/gallery-grid.vue' /* webpackChunkName: "pages/gallery-grid" */))
const _53eda8ba = () => interopDefault(import('../pages/gallery-masonry.vue' /* webpackChunkName: "pages/gallery-masonry" */))
const _003028bd = () => interopDefault(import('../pages/kindergarten.vue' /* webpackChunkName: "pages/kindergarten" */))
const _7f3f3aca = () => interopDefault(import('../pages/kitchen-coach.vue' /* webpackChunkName: "pages/kitchen-coach" */))
const _061ae250 = () => interopDefault(import('../pages/landing-demo.vue' /* webpackChunkName: "pages/landing-demo" */))
const _46820fc3 = () => interopDefault(import('../pages/my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _449ceba9 = () => interopDefault(import('../pages/online-academy.vue' /* webpackChunkName: "pages/online-academy" */))
const _97d184c0 = () => interopDefault(import('../pages/pricing-table.vue' /* webpackChunkName: "pages/pricing-table" */))
const _714f3ece = () => interopDefault(import('../pages/privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _7035f667 = () => interopDefault(import('../pages/purchase-guide.vue' /* webpackChunkName: "pages/purchase-guide" */))
const _5095bab0 = () => interopDefault(import('../pages/shop/index.vue' /* webpackChunkName: "pages/shop/index" */))
const _458923ae = () => interopDefault(import('../pages/terms-condition.vue' /* webpackChunkName: "pages/terms-condition" */))
const _3bf14b76 = () => interopDefault(import('../pages/university.vue' /* webpackChunkName: "pages/university" */))
const _52e0f61a = () => interopDefault(import('../pages/yoga-instructor.vue' /* webpackChunkName: "pages/yoga-instructor" */))
const _de0d5006 = () => interopDefault(import('../pages/blog/blog-details.vue' /* webpackChunkName: "pages/blog/blog-details" */))
const _10d36af3 = () => interopDefault(import('../pages/blog/blog-list.vue' /* webpackChunkName: "pages/blog/blog-list" */))
const _28faaa80 = () => interopDefault(import('../pages/blog/blog-masonry.vue' /* webpackChunkName: "pages/blog/blog-masonry" */))
const _563fe9dc = () => interopDefault(import('../pages/blog/blog-standard.vue' /* webpackChunkName: "pages/blog/blog-standard" */))
const _8a7e53c6 = () => interopDefault(import('../pages/course/course-details.vue' /* webpackChunkName: "pages/course/course-details" */))
const _0850b402 = () => interopDefault(import('../pages/course/course-details-2.vue' /* webpackChunkName: "pages/course/course-details-2" */))
const _085ecb83 = () => interopDefault(import('../pages/course/course-details-3.vue' /* webpackChunkName: "pages/course/course-details-3" */))
const _28cdbce7 = () => interopDefault(import('../pages/course/course-five.vue' /* webpackChunkName: "pages/course/course-five" */))
const _6535795b = () => interopDefault(import('../pages/course/course-four.vue' /* webpackChunkName: "pages/course/course-four" */))
const _3fc079c1 = () => interopDefault(import('../pages/course/course-one.vue' /* webpackChunkName: "pages/course/course-one" */))
const _57d79f8e = () => interopDefault(import('../pages/course/course-three.vue' /* webpackChunkName: "pages/course/course-three" */))
const _58282aa7 = () => interopDefault(import('../pages/course/course-two.vue' /* webpackChunkName: "pages/course/course-two" */))
const _0e08e3b3 = () => interopDefault(import('../pages/event/event-details.vue' /* webpackChunkName: "pages/event/event-details" */))
const _6a68b1a5 = () => interopDefault(import('../pages/event/event-grid.vue' /* webpackChunkName: "pages/event/event-grid" */))
const _b0af2a06 = () => interopDefault(import('../pages/event/event-list.vue' /* webpackChunkName: "pages/event/event-list" */))
const _20e9c981 = () => interopDefault(import('../pages/instructor/instructor-one.vue' /* webpackChunkName: "pages/instructor/instructor-one" */))
const _720c5c78 = () => interopDefault(import('../pages/instructor/instructor-profile.vue' /* webpackChunkName: "pages/instructor/instructor-profile" */))
const _10288ff9 = () => interopDefault(import('../pages/instructor/instructor-three.vue' /* webpackChunkName: "pages/instructor/instructor-three" */))
const _39517a67 = () => interopDefault(import('../pages/instructor/instructor-two.vue' /* webpackChunkName: "pages/instructor/instructor-two" */))
const _6792e4b2 = () => interopDefault(import('../pages/shop/cart.vue' /* webpackChunkName: "pages/shop/cart" */))
const _068e26d8 = () => interopDefault(import('../pages/shop/checkout.vue' /* webpackChunkName: "pages/shop/checkout" */))
const _bff5c67c = () => interopDefault(import('../pages/shop/product-details.vue' /* webpackChunkName: "pages/shop/product-details" */))
const _c47f9052 = () => interopDefault(import('../pages/shop/wishlist.vue' /* webpackChunkName: "pages/shop/wishlist" */))
const _69a9d22a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-us-one",
    component: _d5584f24,
    name: "about-us-one"
  }, {
    path: "/about-us-three",
    component: _124a97a6,
    name: "about-us-three"
  }, {
    path: "/about-us-two",
    component: _a488ed58,
    name: "about-us-two"
  }, {
    path: "/coming-soon",
    component: _702853a0,
    name: "coming-soon"
  }, {
    path: "/contact-me",
    component: _5f584a9c,
    name: "contact-me"
  }, {
    path: "/contact-us",
    component: _6dc458a2,
    name: "contact-us"
  }, {
    path: "/distant-learning",
    component: _1f758361,
    name: "distant-learning"
  }, {
    path: "/faq",
    component: _1733e36f,
    name: "faq"
  }, {
    path: "/gallery-grid",
    component: _df0b0950,
    name: "gallery-grid"
  }, {
    path: "/gallery-masonry",
    component: _53eda8ba,
    name: "gallery-masonry"
  }, {
    path: "/kindergarten",
    component: _003028bd,
    name: "kindergarten"
  }, {
    path: "/kitchen-coach",
    component: _7f3f3aca,
    name: "kitchen-coach"
  }, {
    path: "/landing-demo",
    component: _061ae250,
    name: "landing-demo"
  }, {
    path: "/my-account",
    component: _46820fc3,
    name: "my-account"
  }, {
    path: "/online-academy",
    component: _449ceba9,
    name: "online-academy"
  }, {
    path: "/pricing-table",
    component: _97d184c0,
    name: "pricing-table"
  }, {
    path: "/privacy-policy",
    component: _714f3ece,
    name: "privacy-policy"
  }, {
    path: "/purchase-guide",
    component: _7035f667,
    name: "purchase-guide"
  }, {
    path: "/shop",
    component: _5095bab0,
    name: "shop"
  }, {
    path: "/terms-condition",
    component: _458923ae,
    name: "terms-condition"
  }, {
    path: "/university",
    component: _3bf14b76,
    name: "university"
  }, {
    path: "/yoga-instructor",
    component: _52e0f61a,
    name: "yoga-instructor"
  }, {
    path: "/blog/blog-details",
    component: _de0d5006,
    name: "blog-blog-details"
  }, {
    path: "/blog/blog-list",
    component: _10d36af3,
    name: "blog-blog-list"
  }, {
    path: "/blog/blog-masonry",
    component: _28faaa80,
    name: "blog-blog-masonry"
  }, {
    path: "/blog/blog-standard",
    component: _563fe9dc,
    name: "blog-blog-standard"
  }, {
    path: "/course/course-details",
    component: _8a7e53c6,
    name: "course-course-details"
  }, {
    path: "/course/course-details-2",
    component: _0850b402,
    name: "course-course-details-2"
  }, {
    path: "/course/course-details-3",
    component: _085ecb83,
    name: "course-course-details-3"
  }, {
    path: "/course/course-five",
    component: _28cdbce7,
    name: "course-course-five"
  }, {
    path: "/course/course-four",
    component: _6535795b,
    name: "course-course-four"
  }, {
    path: "/course/course-one",
    component: _3fc079c1,
    name: "course-course-one"
  }, {
    path: "/course/course-three",
    component: _57d79f8e,
    name: "course-course-three"
  }, {
    path: "/course/course-two",
    component: _58282aa7,
    name: "course-course-two"
  }, {
    path: "/event/event-details",
    component: _0e08e3b3,
    name: "event-event-details"
  }, {
    path: "/event/event-grid",
    component: _6a68b1a5,
    name: "event-event-grid"
  }, {
    path: "/event/event-list",
    component: _b0af2a06,
    name: "event-event-list"
  }, {
    path: "/instructor/instructor-one",
    component: _20e9c981,
    name: "instructor-instructor-one"
  }, {
    path: "/instructor/instructor-profile",
    component: _720c5c78,
    name: "instructor-instructor-profile"
  }, {
    path: "/instructor/instructor-three",
    component: _10288ff9,
    name: "instructor-instructor-three"
  }, {
    path: "/instructor/instructor-two",
    component: _39517a67,
    name: "instructor-instructor-two"
  }, {
    path: "/shop/cart",
    component: _6792e4b2,
    name: "shop-cart"
  }, {
    path: "/shop/checkout",
    component: _068e26d8,
    name: "shop-checkout"
  }, {
    path: "/shop/product-details",
    component: _bff5c67c,
    name: "shop-product-details"
  }, {
    path: "/shop/wishlist",
    component: _c47f9052,
    name: "shop-wishlist"
  }, {
    path: "/",
    component: _69a9d22a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
