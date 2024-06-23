import { createMemoryHistory, createRouter } from 'vue-router'

import HomePage from "../views/HomePage.vue"
import chart from "../views/ch-art.vue"

const routes = [
  {
    path: '/home',
    component: HomePage,
  },
  {
    path: '/chart',
    component: chart,
  },
  { 
    path: '/', 
    redirect: '/chart',
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router