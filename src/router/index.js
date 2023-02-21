import { createRouter, createWebHistory } from 'vue-router'
import Transactions from '../views/Transactions.vue'
import Processing from "../pages/Processing.vue"
import Location from "../pages/Location.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'transactions',
      component: Transactions
    },
    {
      path: '/processing',
      name: 'processing',
      component: Processing
    },
    {
      path: '/location',
      name: 'location',
      component: Location
    },
  ]
})

export default router
