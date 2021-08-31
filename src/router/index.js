import { createRouter, createWebHistory } from 'vue-router'
import StarterCard from '../views/Cards/StarterCard.vue'
import FeelingBtn from '../views/Cards/FeelingBtn.vue'
import Feel from '../views/Feels/Feel.vue'
const routes = [
  {
    path: '/',
    name: 'starter-card',
    component: StarterCard
  },
  {
    path: '/feelings',
    name: 'feelings',
    component: FeelingBtn
  },
  {
    path: '/feelings/feel',
    name: 'feel',
    component: Feel,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
