import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/diving-center',
    name: 'diving-center',
    component: () => import('../views/DivingCenter.vue'),
  },
  {
    path: '/profissional-diving',
    name: 'profissional-diving',
    component: () => import('../views/ProfissionalDiving.vue'),
  },
  {
    path: '/champions/:id?',
    name: 'champions',
    component: () => import('../views/Champions.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
