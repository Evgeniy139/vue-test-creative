import Vue from 'vue'
import VueRouter from 'vue-router'
import Game from '../views/Game'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Game',
    component: Game
  },
  {
    path: '/apartments',
    name: 'Apartments',
    component: () => import(/* webpackChunkName: "apartments" */ '../views/Apartments.vue')
  },
  {
    path: '/apartments/like',
    name: 'ApartmentsLike',
    component: () => import(/* webpackChunkName: "apartmentsLike" */ '../views/ApartmentsLike.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
