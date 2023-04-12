import Vue from 'vue'
import VueRouter from 'vue-router'
import ProfileView from '../views/ProfileView.vue'
import AboutView from '../views/AboutView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ProfileView
  },
  {
    path: '/',
    name: 'about',
    component: AboutView
  }
]

const router = new VueRouter({
  routes
})

export default router
