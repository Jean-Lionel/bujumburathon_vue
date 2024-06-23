import { createMemoryHistory, createRouter } from 'vue-router'

import HomePage from "../views/HomePage.vue"
import chart from '@/views/chart.vue'

const routes = [
  { 
    path: '/', component: HomePage 
  },
  {
    path: '/chart',
    component: chart
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router