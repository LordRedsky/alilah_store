import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import ProductDetail from './views/ProductDetail.vue'
import VideoTestimonials from './views/VideoTestimonials.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/product/:slug',
    name: 'product-detail',
    component: ProductDetail,
    props: true
  },
  {
    path: '/testimoni',
    name: 'video-testimonials',
    component: VideoTestimonials
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
