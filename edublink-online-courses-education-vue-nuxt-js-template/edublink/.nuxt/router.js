import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _968f1896 = () => interopDefault(import('..\\pages\\about-us-one.vue' /* webpackChunkName: "pages/about-us-one" */))
const _2a1505a6 = () => interopDefault(import('..\\pages\\about-us-three.vue' /* webpackChunkName: "pages/about-us-three" */))
const _65bfb6ca = () => interopDefault(import('..\\pages\\about-us-two.vue' /* webpackChunkName: "pages/about-us-two" */))
const _fca0990e = () => interopDefault(import('..\\pages\\coming-soon.vue' /* webpackChunkName: "pages/coming-soon" */))
const _5fe90ba3 = () => interopDefault(import('..\\pages\\contact-me.vue' /* webpackChunkName: "pages/contact-me" */))
const _6e5519a9 = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _78fd2328 = () => interopDefault(import('..\\pages\\distant-learning.vue' /* webpackChunkName: "pages/distant-learning" */))
const _4efda770 = () => interopDefault(import('..\\pages\\faq.vue' /* webpackChunkName: "pages/faq" */))
const _a041d2c2 = () => interopDefault(import('..\\pages\\gallery-grid.vue' /* webpackChunkName: "pages/gallery-grid" */))
const _12baf6fc = () => interopDefault(import('..\\pages\\gallery-masonry.vue' /* webpackChunkName: "pages/gallery-masonry" */))
const _1f94c404 = () => interopDefault(import('..\\pages\\kindergarten.vue' /* webpackChunkName: "pages/kindergarten" */))
const _4c6e0863 = () => interopDefault(import('..\\pages\\kitchen-coach.vue' /* webpackChunkName: "pages/kitchen-coach" */))
const _257f7d97 = () => interopDefault(import('..\\pages\\landing-demo.vue' /* webpackChunkName: "pages/landing-demo" */))
const _4712d0ca = () => interopDefault(import('..\\pages\\my-account.vue' /* webpackChunkName: "pages/my-account" */))
const _1d47d130 = () => interopDefault(import('..\\pages\\online-academy.vue' /* webpackChunkName: "pages/online-academy" */))
const _fd73e98e = () => interopDefault(import('..\\pages\\pricing-table.vue' /* webpackChunkName: "pages/pricing-table" */))
const _49fa2455 = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _48e0dbee = () => interopDefault(import('..\\pages\\purchase-guide.vue' /* webpackChunkName: "pages/purchase-guide" */))
const _703705ce = () => interopDefault(import('..\\pages\\shop\\index.vue' /* webpackChunkName: "pages/shop/index" */))
const _fb8a21f2 = () => interopDefault(import('..\\pages\\terms-condition.vue' /* webpackChunkName: "pages/terms-condition" */))
const _3acfc968 = () => interopDefault(import('..\\pages\\university.vue' /* webpackChunkName: "pages/university" */))
const _1341504c = () => interopDefault(import('..\\pages\\yoga-instructor.vue' /* webpackChunkName: "pages/yoga-instructor" */))
const _1807d7f7 = () => interopDefault(import('..\\pages\\blog\\blog-details.vue' /* webpackChunkName: "pages/blog/blog-details" */))
const _0a137d39 = () => interopDefault(import('..\\pages\\blog\\blog-list.vue' /* webpackChunkName: "pages/blog/blog-list" */))
const _9fedab0c = () => interopDefault(import('..\\pages\\blog\\blog-masonry.vue' /* webpackChunkName: "pages/blog/blog-masonry" */))
const _2fa18a58 = () => interopDefault(import('..\\pages\\blog\\blog-standard.vue' /* webpackChunkName: "pages/blog/blog-standard" */))
const _1e8f9d2e = () => interopDefault(import('..\\pages\\course\\course-details.vue' /* webpackChunkName: "pages/course/course-details" */))
const _c4432764 = () => interopDefault(import('..\\pages\\course\\course-details-2.vue' /* webpackChunkName: "pages/course/course-details-2" */))
const _c426f862 = () => interopDefault(import('..\\pages\\course\\course-details-3.vue' /* webpackChunkName: "pages/course/course-details-3" */))
const _a46df5ca = () => interopDefault(import('..\\pages\\course\\course-five.vue' /* webpackChunkName: "pages/course/course-five" */))
const _2b9e7ce2 = () => interopDefault(import('..\\pages\\course\\course-four.vue' /* webpackChunkName: "pages/course/course-four" */))
const _c23d49e6 = () => interopDefault(import('..\\pages\\course\\course-one.vue' /* webpackChunkName: "pages/course/course-one" */))
const _22fc22f6 = () => interopDefault(import('..\\pages\\course\\course-three.vue' /* webpackChunkName: "pages/course/course-three" */))
const _916de81a = () => interopDefault(import('..\\pages\\course\\course-two.vue' /* webpackChunkName: "pages/course/course-two" */))
const _49f6f31a = () => interopDefault(import('..\\pages\\event\\event-details.vue' /* webpackChunkName: "pages/event/event-details" */))
const _33e3f236 = () => interopDefault(import('..\\pages\\event\\event-grid.vue' /* webpackChunkName: "pages/event/event-grid" */))
const _234dc03d = () => interopDefault(import('..\\pages\\event\\event-list.vue' /* webpackChunkName: "pages/event/event-list" */))
const _24bc0cde = () => interopDefault(import('..\\pages\\instructor\\instructor-one.vue' /* webpackChunkName: "pages/instructor/instructor-one" */))
const _1cfb79d4 = () => interopDefault(import('..\\pages\\instructor\\instructor-profile.vue' /* webpackChunkName: "pages/instructor/instructor-profile" */))
const _e0d607ee = () => interopDefault(import('..\\pages\\instructor\\instructor-three.vue' /* webpackChunkName: "pages/instructor/instructor-three" */))
const _0609aa77 = () => interopDefault(import('..\\pages\\instructor\\instructor-two.vue' /* webpackChunkName: "pages/instructor/instructor-two" */))
const _89a68458 = () => interopDefault(import('..\\pages\\shop\\cart.vue' /* webpackChunkName: "pages/shop/cart" */))
const _4d1ac20c = () => interopDefault(import('..\\pages\\shop\\checkout.vue' /* webpackChunkName: "pages/shop/checkout" */))
const _44dccb40 = () => interopDefault(import('..\\pages\\shop\\product-details.vue' /* webpackChunkName: "pages/shop/product-details" */))
const _70a4aff9 = () => interopDefault(import('..\\pages\\shop\\wishlist.vue' /* webpackChunkName: "pages/shop/wishlist" */))
const _6e498d84 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _968f1896,
    name: "about-us-one"
  }, {
    path: "/about-us-three",
    component: _2a1505a6,
    name: "about-us-three"
  }, {
    path: "/about-us-two",
    component: _65bfb6ca,
    name: "about-us-two"
  }, {
    path: "/coming-soon",
    component: _fca0990e,
    name: "coming-soon"
  }, {
    path: "/contact-me",
    component: _5fe90ba3,
    name: "contact-me"
  }, {
    path: "/contact-us",
    component: _6e5519a9,
    name: "contact-us"
  }, {
    path: "/distant-learning",
    component: _78fd2328,
    name: "distant-learning"
  }, {
    path: "/faq",
    component: _4efda770,
    name: "faq"
  }, {
    path: "/gallery-grid",
    component: _a041d2c2,
    name: "gallery-grid"
  }, {
    path: "/gallery-masonry",
    component: _12baf6fc,
    name: "gallery-masonry"
  }, {
    path: "/kindergarten",
    component: _1f94c404,
    name: "kindergarten"
  }, {
    path: "/kitchen-coach",
    component: _4c6e0863,
    name: "kitchen-coach"
  }, {
    path: "/landing-demo",
    component: _257f7d97,
    name: "landing-demo"
  }, {
    path: "/my-account",
    component: _4712d0ca,
    name: "my-account"
  }, {
    path: "/online-academy",
    component: _1d47d130,
    name: "online-academy"
  }, {
    path: "/pricing-table",
    component: _fd73e98e,
    name: "pricing-table"
  }, {
    path: "/privacy-policy",
    component: _49fa2455,
    name: "privacy-policy"
  }, {
    path: "/purchase-guide",
    component: _48e0dbee,
    name: "purchase-guide"
  }, {
    path: "/shop",
    component: _703705ce,
    name: "shop"
  }, {
    path: "/terms-condition",
    component: _fb8a21f2,
    name: "terms-condition"
  }, {
    path: "/university",
    component: _3acfc968,
    name: "university"
  }, {
    path: "/yoga-instructor",
    component: _1341504c,
    name: "yoga-instructor"
  }, {
    path: "/blog/blog-details",
    component: _1807d7f7,
    name: "blog-blog-details"
  }, {
    path: "/blog/blog-list",
    component: _0a137d39,
    name: "blog-blog-list"
  }, {
    path: "/blog/blog-masonry",
    component: _9fedab0c,
    name: "blog-blog-masonry"
  }, {
    path: "/blog/blog-standard",
    component: _2fa18a58,
    name: "blog-blog-standard"
  }, {
    path: "/course/course-details",
    component: _1e8f9d2e,
    name: "course-course-details"
  }, {
    path: "/course/course-details-2",
    component: _c4432764,
    name: "course-course-details-2"
  }, {
    path: "/course/course-details-3",
    component: _c426f862,
    name: "course-course-details-3"
  }, {
    path: "/course/course-five",
    component: _a46df5ca,
    name: "course-course-five"
  }, {
    path: "/course/course-four",
    component: _2b9e7ce2,
    name: "course-course-four"
  }, {
    path: "/course/course-one",
    component: _c23d49e6,
    name: "course-course-one"
  }, {
    path: "/course/course-three",
    component: _22fc22f6,
    name: "course-course-three"
  }, {
    path: "/course/course-two",
    component: _916de81a,
    name: "course-course-two"
  }, {
    path: "/event/event-details",
    component: _49f6f31a,
    name: "event-event-details"
  }, {
    path: "/event/event-grid",
    component: _33e3f236,
    name: "event-event-grid"
  }, {
    path: "/event/event-list",
    component: _234dc03d,
    name: "event-event-list"
  }, {
    path: "/instructor/instructor-one",
    component: _24bc0cde,
    name: "instructor-instructor-one"
  }, {
    path: "/instructor/instructor-profile",
    component: _1cfb79d4,
    name: "instructor-instructor-profile"
  }, {
    path: "/instructor/instructor-three",
    component: _e0d607ee,
    name: "instructor-instructor-three"
  }, {
    path: "/instructor/instructor-two",
    component: _0609aa77,
    name: "instructor-instructor-two"
  }, {
    path: "/shop/cart",
    component: _89a68458,
    name: "shop-cart"
  }, {
    path: "/shop/checkout",
    component: _4d1ac20c,
    name: "shop-checkout"
  }, {
    path: "/shop/product-details",
    component: _44dccb40,
    name: "shop-product-details"
  }, {
    path: "/shop/wishlist",
    component: _70a4aff9,
    name: "shop-wishlist"
  }, {
    path: "/",
    component: _6e498d84,
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
