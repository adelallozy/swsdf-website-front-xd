import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DivingCenter from '../views/DivingCenter.vue'
import Champions from '../views/Champions.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/diving-center',
    name: 'diving-center',
    component: DivingCenter,
  },
  {
    path: '/champions/:id?',
    name: 'champions',
    component: Champions,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
