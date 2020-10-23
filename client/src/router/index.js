import Vue from 'vue'
import VueRouter from 'vue-router'
import AddSailor from '../views/AddSailor.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Add Sailor',
    component: AddSailor
  },
  {
    path: '/search',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/SearchSailor.vue')
  },
  {
    path: '/all',
    name: 'All Sailors',

    component: () =>
      import('../views/AllSailors.vue')
  },
  {
    path: '/delete',
    name: 'Delete Sailors',

    component: () =>
      import('../views/DeleteSailor.vue')
  },
  {
    path: '/update',
    name: 'Update Sailor',

    component: () =>
      import('../views/UpdateSailor.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
