import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('views/Login.vue'),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('views/Home.vue'),
  },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
