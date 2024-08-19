import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0dcc7691 = () => interopDefault(import('..\\pages\\about-us-one.vue' /* webpackChunkName: "pages/about-us-one" */))
const _4f143909 = () => interopDefault(import('..\\pages\\about-us-three.vue' /* webpackChunkName: "pages/about-us-three" */))
const _26342777 = () => interopDefault(import('..\\pages\\about-us-two.vue' /* webpackChunkName: "pages/about-us-two" */))
const _623c35c6 = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _2898157f = () => interopDefault(import('..\\pages\\contact-me.vue' /* webpackChunkName: "pages/contact-me" */))
const _37042385 = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _505c5804 = () => interopDefault(import('..\\pages\\distant-learning.vue' /* webpackChunkName: "pages/distant-learning" */))
const _667d7c28 = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _08f3197b = () => interopDefault(import('..\\pages\\gallery-grid.vue' /* webpackChunkName: "pages/gallery-grid" */))
const _3273b6a0 = () => interopDefault(import('..\\pages\\gallery-masonry.vue' /* webpackChunkName: "pages/gallery-masonry" */))
const _78a8c6e0 = () => interopDefault(import('..\\pages\\kindergarten.vue' /* webpackChunkName: "pages/kindergarten" */))
const _15da6107 = () => interopDefault(import('..\\pages\\kitchen-coach.vue' /* webpackChunkName: "pages/kitchen-coach" */))
const _7e938073 = () => interopDefault(import('..\\pages\\landing-demo.vue' /* webpackChunkName: "pages/landing-demo" */))
const _0fc1daa6 = () => interopDefault(import('..\\pages\\my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _fd32e5e8 = () => interopDefault(import('..\\pages\\online-academy.vue' /* webpackChunkName: "pages/online-academy" */))
const _4ab263dd = () => interopDefault(import('..\\pages\\pricing-table.vue' /* webpackChunkName: "pages/pricing-table" */))
const _a3ce3f9e = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _a600d06c = () => interopDefault(import('..\\pages\\purchase-guide.vue' /* webpackChunkName: "pages/purchase-guide" */))
const _852d911c = () => interopDefault(import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages/shop/index" */))
const _bc18a2aa = () => interopDefault(import('..\\pages\\terms-condition.vue' /* webpackChunkName: "pages/terms-condition" */))
const _a971b5b0 = () => interopDefault(import('..\\pages\\university.vue' /* webpackChunkName: "pages/university" */))
const _32fa0ff0 = () => interopDefault(import('..\\pages\\yoga-instructor.vue' /* webpackChunkName: "pages/yoga-instructor" */))
const _d725745a = () => interopDefault(import('..\\pages\\blog\\blog-details.vue' /* webpackChunkName: "pages/blog/blog-details" */))
const _29cc3cdd = () => interopDefault(import('..\\pages\\blog\\blog-list.vue' /* webpackChunkName: "pages/blog/blog-list" */))
const _2c6e9856 = () => interopDefault(import('..\\pages\\blog\\blog-masonry.vue' /* webpackChunkName: "pages/blog/blog-masonry" */))
const _3fe9d7fc = () => interopDefault(import('..\\pages\\blog\\blog-standard.vue' /* webpackChunkName: "pages/blog/blog-standard" */))
const _82895d76 = () => interopDefault(import('..\\pages\\course\\course-details.vue' /* webpackChunkName: "pages/course/course-details" */))
const _10cdf5ac = () => interopDefault(import('..\\pages\\course\\course-details-2.vue' /* webpackChunkName: "pages/course/course-details-2" */))
const _10b1c6aa = () => interopDefault(import('..\\pages\\course\\course-details-3.vue' /* webpackChunkName: "pages/course/course-details-3" */))
const _83dd5a82 = () => interopDefault(import('..\\pages\\course\\course-five.vue' /* webpackChunkName: "pages/course/course-five" */))
const _0b0de19a = () => interopDefault(import('..\\pages\\course\\course-four.vue' /* webpackChunkName: "pages/course/course-four" */))
const _1b46c8e9 = () => interopDefault(import('..\\pages\\course\\course-one.vue' /* webpackChunkName: "pages/course/course-one" */))
const _3179553e = () => interopDefault(import('..\\pages\\course\\course-three.vue' /* webpackChunkName: "pages/course/course-three" */))
const _33ae79cf = () => interopDefault(import('..\\pages\\course\\course-two.vue' /* webpackChunkName: "pages/course/course-two" */))
const _58742562 = () => interopDefault(import('..\\pages\\event\\event-details.vue' /* webpackChunkName: "pages/event/event-details" */))
const _0ad524ee = () => interopDefault(import('..\\pages\\event\\event-grid.vue' /* webpackChunkName: "pages/event/event-grid" */))
const _37d526e1 = () => interopDefault(import('..\\pages\\event\\event-list.vue' /* webpackChunkName: "pages/event/event-list" */))
const _79cc6926 = () => interopDefault(import('..\\pages\\instructor\\instructor-one.vue' /* webpackChunkName: "pages/instructor/instructor-one" */))
const _278204a0 = () => interopDefault(import('..\\pages\\instructor\\instructor-profile.vue' /* webpackChunkName: "pages/instructor/instructor-profile" */))
const _33407236 = () => interopDefault(import('..\\pages\\instructor\\instructor-three.vue' /* webpackChunkName: "pages/instructor/instructor-three" */))
const _48fd075a = () => interopDefault(import('..\\pages\\instructor\\instructor-two.vue' /* webpackChunkName: "pages/instructor/instructor-two" */))
const _f84870a0 = () => interopDefault(import('..\\pages\\shop\\cart.vue' /* webpackChunkName: "pages/shop/cart" */))
const _3d915ad6 = () => interopDefault(import('..\\pages\\shop\\checkout.vue' /* webpackChunkName: "pages/shop/checkout" */))
const _0605e1f8 = () => interopDefault(import('..\\pages\\shop\\product-details.vue' /* webpackChunkName: "pages/shop/product-details" */))
const _56792856 = () => interopDefault(import('..\\pages\\shop\\wishlist.vue' /* webpackChunkName: "pages/shop/wishlist" */))
const _52daca28 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _0dcc7691,
    name: "about-us-one"
  }, {
    path: "/about-us-three",
    component: _4f143909,
    name: "about-us-three"
  }, {
    path: "/about-us-two",
    component: _26342777,
    name: "about-us-two"
  }, {
    path: "/coming-soon",
    component: _623c35c6,
    name: "coming-soon"
  }, {
    path: "/contact-me",
    component: _2898157f,
    name: "contact-me"
  }, {
    path: "/contact-us",
    component: _37042385,
    name: "contact-us"
  }, {
    path: "/distant-learning",
    component: _505c5804,
    name: "distant-learning"
  }, {
    path: "/faq",
    component: _667d7c28,
    name: "faq"
  }, {
    path: "/gallery-grid",
    component: _08f3197b,
    name: "gallery-grid"
  }, {
    path: "/gallery-masonry",
    component: _3273b6a0,
    name: "gallery-masonry"
  }, {
    path: "/kindergarten",
    component: _78a8c6e0,
    name: "kindergarten"
  }, {
    path: "/kitchen-coach",
    component: _15da6107,
    name: "kitchen-coach"
  }, {
    path: "/landing-demo",
    component: _7e938073,
    name: "landing-demo"
  }, {
    path: "/my-account",
    component: _0fc1daa6,
    name: "my-account"
  }, {
    path: "/online-academy",
    component: _fd32e5e8,
    name: "online-academy"
  }, {
    path: "/pricing-table",
    component: _4ab263dd,
    name: "pricing-table"
  }, {
    path: "/privacy-policy",
    component: _a3ce3f9e,
    name: "privacy-policy"
  }, {
    path: "/purchase-guide",
    component: _a600d06c,
    name: "purchase-guide"
  }, {
    path: "/shop",
    component: _852d911c,
    name: "shop"
  }, {
    path: "/terms-condition",
    component: _bc18a2aa,
    name: "terms-condition"
  }, {
    path: "/university",
    component: _a971b5b0,
    name: "university"
  }, {
    path: "/yoga-instructor",
    component: _32fa0ff0,
    name: "yoga-instructor"
  }, {
    path: "/blog/blog-details",
    component: _d725745a,
    name: "blog-blog-details"
  }, {
    path: "/blog/blog-list",
    component: _29cc3cdd,
    name: "blog-blog-list"
  }, {
    path: "/blog/blog-masonry",
    component: _2c6e9856,
    name: "blog-blog-masonry"
  }, {
    path: "/blog/blog-standard",
    component: _3fe9d7fc,
    name: "blog-blog-standard"
  }, {
    path: "/course/course-details",
    component: _82895d76,
    name: "course-course-details"
  }, {
    path: "/course/course-details-2",
    component: _10cdf5ac,
    name: "course-course-details-2"
  }, {
    path: "/course/course-details-3",
    component: _10b1c6aa,
    name: "course-course-details-3"
  }, {
    path: "/course/course-five",
    component: _83dd5a82,
    name: "course-course-five"
  }, {
    path: "/course/course-four",
    component: _0b0de19a,
    name: "course-course-four"
  }, {
    path: "/course/course-one",
    component: _1b46c8e9,
    name: "course-course-one"
  }, {
    path: "/course/course-three",
    component: _3179553e,
    name: "course-course-three"
  }, {
    path: "/course/course-two",
    component: _33ae79cf,
    name: "course-course-two"
  }, {
    path: "/event/event-details",
    component: _58742562,
    name: "event-event-details"
  }, {
    path: "/event/event-grid",
    component: _0ad524ee,
    name: "event-event-grid"
  }, {
    path: "/event/event-list",
    component: _37d526e1,
    name: "event-event-list"
  }, {
    path: "/instructor/instructor-one",
    component: _79cc6926,
    name: "instructor-instructor-one"
  }, {
    path: "/instructor/instructor-profile",
    component: _278204a0,
    name: "instructor-instructor-profile"
  }, {
    path: "/instructor/instructor-three",
    component: _33407236,
    name: "instructor-instructor-three"
  }, {
    path: "/instructor/instructor-two",
    component: _48fd075a,
    name: "instructor-instructor-two"
  }, {
    path: "/shop/cart",
    component: _f84870a0,
    name: "shop-cart"
  }, {
    path: "/shop/checkout",
    component: _3d915ad6,
    name: "shop-checkout"
  }, {
    path: "/shop/product-details",
    component: _0605e1f8,
    name: "shop-product-details"
  }, {
    path: "/shop/wishlist",
    component: _56792856,
    name: "shop-wishlist"
  }, {
    path: "/",
    component: _52daca28,
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
